import type { ProColumns } from '@ant-design/pro-components';
import { DragSortTable } from '@ant-design/pro-components';
import { List, message, Tabs, Button } from 'antd';
import { useEffect, useState } from 'react';
import type { TabsProps } from 'antd';
import { DndContext } from '@dnd-kit/core';
import { useImmer } from 'use-immer';
import { Droppable } from './droppable';
import { Draggable } from './draggable';
import { createStyles } from 'antd-style';
import { Tiptap } from './tiptap';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { mainDisclosure, IDisclosure } from './main-disclosure';
import { marked } from 'marked';
import { TabData } from './tab-data';
import { TabRequirement } from './tab-requirement';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import { mdiCodeArray } from '@mdi/js';

const useStyles = createStyles(({ token, css }) => ({
  flexRow: css`
    display: flex;
    flexdirection: row;
  `,
  box: css`
    padding: 10px;
  `,
  gutter: css`
    background: #dfd3c3;
  `,
}));

export const DisclosurePage = () => {
  const { styles, cx, theme } = useStyles();
  let { reportId, topicId } = useParams();
  const [spinning, setSpinning] = useState(false);
  const [topic, setTopic] = useState('');
  const [token, setToken] = useState(0);
  const [dataDisclosures, setDataDisclosures] = useState([]);
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);

  // const handleDragSortEnd = (
  //   beforeIndex: number,
  //   afterIndex: number,
  //   newDataSource: any
  // ) => {
  //   console.log('排序后的数据', newDataSource);
  //   setDataSource(newDataSource);
  //   message.success('修改列表排序成功');
  // };

  const { data: dataSourceTree, refetch } = useQuery({
    queryKey: ['new-report-disclosures-tree'],
    queryFn: () => fetch('/api/disclosures/tree').then((res) => res.json()),
  });

  const { data: dataSourceTopic, refetch: refretchTopic } = useQuery({
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
      setTopic(dataSourceTopic.data[0].name);
    }
  }, [dataSourceTopic]);

  const getDisclosureReport = async () => {
    const url = `/api/report/new-report/disclosures?reportId=${reportId}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    if (jsonData.success) {
      //window.location.reload();
      console.log('jsonData.data ', jsonData.data);
      setDataDisclosures(jsonData.data);
    }
  };

  const inserttDisclosureReport = async (
    id: string,
    name: string,
    code: string
  ) => {
    let values = {
      name: name,
      disclosureId: id,
      reportId: reportId,
      topicId: topicId,
      code: code,
    };
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
      getDisclosureReport();
    }
  };

  useEffect(() => {
    if (dataSourceTree) {
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
      const html = await marked.parse(ct);

      console.log(html);
      console.log('token ', jsonData.data.usageMetadata.totalTokenCount);
      setToken(jsonData.data.usageMetadata.totalTokenCount);
      setContent(html);
    }
    setSpinning(false);
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
                      let id = 'gri_2_3';
                      let semuaisi = '';
                      for (
                        let i = 0;
                        i < mainDisclosure[id as string].requirements.length;
                        i++
                      ) {
                        let isi = localStorage.getItem(
                          mainDisclosure[id as string].requirements[i].code
                        );
                        semuaisi += isi + '\n';
                      }
                      mainDisclosure[id as string].prompt += '\n' + semuaisi;

                      let isiTambahan = localStorage.getItem(
                        mainDisclosure[id as string].code + '-instrusi-tambahan'
                      );
                      if (isiTambahan) {
                        mainDisclosure[id as string].prompt +=
                          '\n' + isiTambahan;
                      }

                      onFinish(mainDisclosure[id as string]);
                    }}
                  >
                    Generate
                  </Button>
                  <Button>Update</Button>
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
                      header={<div>List Disclosure</div>}
                      bordered
                      dataSource={dataDisclosures}
                      renderItem={(item) => (
                        <List.Item
                          actions={[<a key="list-loadmore-edit">delete</a>]}
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
      children: <TabRequirement />,
    },
    {
      key: '3',
      label: 'Data',
      children: <TabData />,
    },
  ];

  const operations = <Button type="primary">Save</Button>;

  return (
    <div>
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

  function handleDragEnd(event) {
    const { active } = event;

    let id;
    let name;
    let code;
    for (let i = 0; i < dataSourceTree.data.length; i++) {
      for (let x = 0; x < dataSourceTree.data[i].children.length; x++) {
        if (dataSourceTree.data[i].children[x]._id == active.id) {
          id = active.id;
          name = dataSourceTree.data[i].children[x].name;
          code = dataSourceTree.data[i].children[x].code;
          console.log('handleDragEnd id ', active.id);
          console.log(
            'handleDragEnd name ',
            dataSourceTree.data[i].children[x].name
          );
        }
      }
    }

    inserttDisclosureReport(id, name, code);
  }
};
