import { List, message, Tabs, Button, Spin } from 'antd';
import { useEffect, useState } from 'react';
import type { TabsProps } from 'antd';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './droppable';
import { Draggable } from './draggable';
import { createStyles } from 'antd-style';
import { Tiptap } from './tiptap';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { IDisclosure } from './main-disclosure';
import { marked } from 'marked';
import { TabData, ITabData } from './tab-data';
import { TabRequirement } from './tab-requirement';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { CarryOutOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import { useEditorContext } from '@/context/tiptap_context';

const useStyles = createStyles(({ /*token,*/ css }) => ({
  flexRow: css`
    display: flex;
    flexdirection: row;
  `,
  box: css`
    padding: 0px;
  `,
  gutter: css`
    background: #dfd3c3;
  `,
}));

interface IDataDisclosure {
  disclosureId: string;
  name: string;
  code: string;
}

export const DisclosurePage = () => {
  const { styles, cx } = useStyles();
  let { reportId, topicId } = useParams();
  const [spinning, setSpinning] = useState(false);
  const [topic, setTopic] = useState('');
  const [token, setToken] = useState(0);
  const [dataDisclosures, setDataDisclosures] = useState<IDataDisclosure[]>([]);
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
  const [listRequirements, setListRequirements] = useState([]);
  const [dataForm, setDataForm] = useState<Array<ITabData>>([]);

  const [prompt, setPrompt] = useState('');
  const [instruction, setInstruction] = useState('');
  const editor = useEditorContext();
  const [answer, setAnswer] = useState<any[]>([]);

  const { data: dataSourceTree } = useQuery({
    queryKey: ['new-report-disclosures-tree'],
    queryFn: () => fetch('/api/disclosures/tree').then((res) => res.json()),
  });

  const { data: dataSourceTopic } = useQuery({
    queryKey: ['new-report-topic-id'],
    queryFn: () =>
      fetch(`/api/report/new-report/topic?id=${topicId}`).then((res) =>
        res.json()
      ),
  });
  console.log('topicId ', topicId);
  console.log('dataSourceTopic ', dataSourceTopic);

  useEffect(() => {
    if (dataSourceTopic) {
      console.log('useeffect 2');
      setTopic(dataSourceTopic.data[0].name);
      setContent(dataSourceTopic.data[0].content);
      // setDataForm(dataSourceTopic.data[0].form);
      parseFormAnswer(
        dataSourceTopic.data[0].form,
        dataSourceTopic?.data[0]?.answer
      );
    }
  }, [dataSourceTopic]);

  const parseFormAnswer = (formData: any, answer: any) => {
    const form = formData;

    // let answer = dataSourceTopic?.data[0]?.answer??{};
    let resMerge = formData;

    // if(answer?.length>0){
    // resMerge = form?.map((item: any) => {
    //   // console.log('answerrrrparse',answer, answer[item.id],item.id);
    //   return {
    //     ...item,
    //     value:
    //       answer?.[item.id]['value'] !== undefined
    //         ? answer[item.id]['value']
    //         : '',
    //   };
    // });
      resMerge = form?.map((item: any) => {
        //console.log('answerrrrparse',answer, answer[item.id],item.id);
        if(item.id){
          return {
            ...item,
            value: answer?.[item.id]['value'] !== undefined ? answer[item.id]['value'] : '',
          };
        }

        return {
          ...item,
          value: '',
        };
        
      });
    // }

    console.log('ressMerge', resMerge);
    setDataForm(resMerge);
  };

  const getBahan = async (values: any) => {
    let url = `/api/report/new-report/instructions`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      console.log('jsonData ', jsonData);
      setPrompt(jsonData.data.prompt);
      setInstruction(jsonData.data.instruction);
      setListRequirements(jsonData.data.requirements);
    }
  };

  const getDataByIndexForm = async (values: any) => {
    let url = `/api/report/new-report/data/by_index_form`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      console.log('jsonDataForm ', jsonData);

      // setDataForm(jsonData.data);
      const answer = dataSourceTopic?.data[0]?.answer;
      parseFormAnswer(jsonData.data, answer);

      return jsonData?.data;
    } else {
      return null;
    }
  };

  const getDisclosureReport = async () => {
    const url = `/api/report/new-report/disclosures?topicId=${topicId}&reportId=${reportId}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    if (jsonData.success) {
      //window.location.reload();
      console.log('jsonData.data disclosure ', jsonData.data);
      setDataDisclosures(jsonData.data);

      let req = [];
      for (let i = 0; i < jsonData.data.length; i++) {
        req.push({
          type: jsonData.data[i].type.toLowerCase(),
          lang: 'id', //jsonData.data.[i].lang,
          code:
            jsonData.data[i].type.toLowerCase() + '-' + jsonData.data[i].code,
        });
      }
      getBahan(req);
      // temporary krn lang id ga ada nanti hapus pakai yg dr variable req aja
      let dt = [];
      for (let i = 0; i < jsonData.data.length; i++) {
        dt.push({
          type: jsonData.data[i].type.toLowerCase(),
          lang: 'en',
          code: jsonData.data[i].code,
        });
      }
      // getDataByIndexForm(dt);
      return dt;
    }
  };

  const inserttDisclosureReport = async (
    id: string,
    name: string,
    code: string,
    type: string,
    rname: string,
    lang: string
  ) => {
    let values = {
      name: name,
      disclosureId: id,
      reportId: reportId,
      topicId: topicId,
      code: code,
      type: type,
      lang: lang,
      rname: rname,
    };
    console.log('values ', values);
    const url = `/api/report/new-report/disclosures/insert`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      message.success('Insert Sukses');
      const res = await getDisclosureReport();
      const dtForm = await getDataByIndexForm(res);
      console.log('formmmdttttt', dtForm);
      // return;
      onSave(dtForm, null, null);
    } else {
      message.error('Insert Failed');
    }
  };

  useEffect(() => {
    if (dataSourceTree) {
      console.log('useeffect 3');
      let type = new Set();
      for (let i = 0; i < dataSourceTree.data.length; i++) {
        type.add(dataSourceTree.data[i].type);
      }
      let arrType: Array<string> = Array.from(type) as Array<string>;
      let ltreeData: TreeDataNode[] = [];
      for (let i = 0; i < arrType.length; i++) {
        let children = [];
        for (let x = 0; x < dataSourceTree.data.length; x++) {
          let chd = dataSourceTree.data[x].children;
          let chdc = [];
          for (let xx = 0; xx < chd.length; xx++) {
            if (chd[xx].code != 'cover1') {
              chdc.push({
                title: (
                  <Draggable id={chd[xx]._id}>
                    <>
                      <div>{chd[xx].code}</div>
                      <div>{chd[xx].name}</div>
                    </>
                  </Draggable>
                ),
                key: chd[xx]._id,
              });
            }
          }
          if (dataSourceTree.data[x].type == arrType[i]) {
            children.push({
              title: dataSourceTree.data[x].code,
              key: dataSourceTree.data[x]._id,
              children: chdc,
            });
          }
        }
        ltreeData.push({
          title: arrType[i],
          key: arrType[i],
          icon: <CarryOutOutlined />,
          children: children,
        });
      }
      setTreeData(ltreeData);
      console.log('type ', Array.from(type));
      console.log('dataSourceTree ', dataSourceTree);
    }
  }, [dataSourceTree]);

  useEffect(() => {
    if (reportId && topicId) {
      console.log('useeffect 1');
      getDisclosureReport();
    }
  }, [reportId, topicId]);

  const [content, setContent] = useState('<div>empty report</div>');

  const onChange = (key: string) => {
    console.log(key);
  };

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const onFinish = async (values: IDisclosure) => {
    setSpinning(true);
    setContent('<div>loading</div>');
    let url = `/api/chatllm/report`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      let ct = jsonData.data.candidates[0].content.parts[0].text;
      let cform = jsonData.formInput;
      setDataForm(cform);
      console.log('dataForm 1 ', cform);
      const html = await marked.parse(ct);

      console.log(html);
      console.log('token ', jsonData.data.usageMetadata.totalTokenCount);
      setToken(jsonData.data.usageMetadata.totalTokenCount);
      setContent(html);
    }
    setSpinning(false);
  };

  const onConfirmDiscDelete = async (dt: any) => {
    console.log('deletedisclosure', dt);
    onDeleteFormAnswer(dt);
    return;
    const url = `/api/report/new-report/disclosures/delete?id=${dt._id}`;
    const rawResponse = await fetch(url);
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      message.success('Delete Sukses');
      getDisclosureReport();
    }
  };

  const onDeleteFormAnswer = async (dt: any) => {
    // per 1 disclosure delete nya
    const dtSend = [
      {
        type: dt.type.toLowerCase(),
        lang: 'en',
        code: dt.code,
        delete:true,
        topicId:topicId
      },
    ];
    const res = await getDataByIndexForm(dtSend);
    
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Disclosure',
      children: (
        <DndContext onDragEnd={handleDragEnd}>
          <div>
            <div
              style={{ borderBottom: '1px solid gray', paddingBottom: '4px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontWeight: 500 }}>
                  Pilih Disclosure disclosure untuk di muat di dalam report
                  topik
                </div>
                <div>Token : {token}</div>
              </div>
              <div
                style={{
                  marginBottom: '10px',
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Button>{'Auto FIll / Prediksi =>'}</Button>
                <div>
                  <Button
                    onClick={() => {
                      onFinish({
                        instruction: instruction,
                        prompt: prompt,
                        reportId,
                        topicId,
                      });
                    }}
                  >
                    Generate
                  </Button>
                  <Button
                    onClick={() => {
                      let md = editor?.storage.markdown.getMarkdown();
                      console.log('md ', md);
                    }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>

            <div style={{ height: '62vh' }}>
              <Splitter
                gutterClassName={cx(styles.gutter)}
                direction={SplitDirection.Horizontal}
              >
                <div
                  style={{
                    minWidth: '200px',
                    //borderRight: '1px solid gray',
                    height: '62vh',
                    //overflowY: 'scroll',
                    //overflowX: 'clip'
                  }}
                  className={cx(styles.box)}
                >
                  <Tree
                    style={{
                      overflowX: 'clip',
                      height: '62vh',
                      overflowY: 'scroll',
                    }}
                    showLine={{ showLeafIcon: true }}
                    showIcon={false}
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={onSelect}
                    treeData={treeData}
                  />
                </div>

                <div style={{ width: '100%' }} className={cx(styles.box)}>
                  <div
                    className={styles.flexRow}
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <div></div>
                  </div>

                  <Droppable key={'DROPID'} id={'DROPID'}>
                    <List
                      key="_id"
                      size="small"
                      style={{ padding: 0, overflowY: 'auto', height: '60vh' }}
                      header={<div>List Disclosure</div>}
                      bordered
                      dataSource={dataDisclosures}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <a
                              onClick={() => onConfirmDiscDelete(item)}
                              key="list-loadmore-edit"
                            >
                              <Icon
                                style={{ color: 'red' }}
                                path={mdiDelete}
                                size={0.8}
                              />
                            </a>,
                          ]}
                        >
                          {item.code + ' ' + item.name}
                        </List.Item>
                      )}
                    />
                  </Droppable>
                </div>
              </Splitter>
            </div>
          </div>
        </DndContext>
      ),
    },
    {
      key: '2',
      label: 'Requirement',
      children: <TabRequirement listRequirements={listRequirements} />,
    },
    {
      key: '3',
      label: 'Data',
      children: <TabData dataForm={dataForm} setAnswer={setAnswer} />,
    },
  ];

  const onSave = async (dataform: any, answer: any, content: any) => {
    let objc: any = {};
    if (dataform) {
      objc['form'] = dataform;
    }
    if (answer) {
      objc['answer'] = answer;
    }
    if (content) {
      objc['content'] = content;
    }
    const res = await fetch(`/api/report/new-report/topic/${topicId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objc),
    });
    const result = await res.json();
    if (result['success']) {
      message.success('Save Success');
    } else {
      message.error('Save Failed');
    }
  };

  const operations = (
    <Button
      type="primary"
      onClick={async () => {
        const content = editor?.getHTML();
        onSave(dataForm, answer, content);
      }}
    >
      Save
    </Button>
  );

  return (
    <div>
      <Spin spinning={spinning} fullscreen />
      <div style={{ marginBottom: '4px' }}>topik : {topic}</div>
      <Splitter
        gutterClassName={cx(styles.gutter)}
        direction={SplitDirection.Horizontal}
      >
        <div
          style={{
            //width: '35%',
            padding: '10px',
            border: '1px solid gray',
            height: '83vh',
          }}
        >
          <Tabs
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>

        <div
          style={{
            //width: '65%',
            padding: '10px',
            border: '1px solid gray',
            height: '83vh',
          }}
        >
          <Tiptap content={content} />
        </div>
      </Splitter>
    </div>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (over == null) {
      return;
    }

    let idx = dataDisclosures.findIndex((d) => d.disclosureId == active.id);
    if (idx > -1) {
      return;
    }

    //return;
    let id;
    let name;
    let code;
    let type;
    let lang = 'id';
    let rname = '';
    for (let i = 0; i < dataSourceTree.data.length; i++) {
      for (let x = 0; x < dataSourceTree.data[i].children.length; x++) {
        if (dataSourceTree.data[i].children[x]._id == active.id) {
          id = active.id;
          name = dataSourceTree.data[i].children[x].name;
          code = dataSourceTree.data[i].children[x].code;
          type = dataSourceTree.data[i].children[x].type;
          lang = 'id'; //dataSourceTree.data[i].children[x].lang;
          rname =
            dataSourceTree.data[i].children[x].type +
            ' ' +
            dataSourceTree.data[i].children[x].code;
          // console.log('handleDragEnd id ', active.id);
          // console.log(
          //   'handleDragEnd name ',
          //   dataSourceTree.data[i].children[x]
          // );
        }
      }
    }

    inserttDisclosureReport(id, name, code, type, rname, lang);
  }
};
