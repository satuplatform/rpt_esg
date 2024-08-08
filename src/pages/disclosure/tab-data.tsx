import type { ProColumns } from '@ant-design/pro-components';
import { EditableProTable } from '@ant-design/pro-components';
import { DatePicker, Form, Input, InputNumber } from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';

// type DataSourceType = {
//   id: React.Key;
//   name?: string;
//   value?: string;
//   children?: DataSourceType[];
// };

//   const defaultData: DataSourceType[] = new Array(20).fill(1).map((_, index) => {
//     return {
//       id: (Date.now() + index).toString(),
//       name: `Nama index ${index}`,
//       value: 'isi value nya',
//     };
//   });

const defaultData: ITabData[] = [];

export interface ITabData {
  field: string;
  nama_field: string;
  label: string;
  type: string;
  tipe_data: string;
  id: string;
  value: string;
}
interface TabDataProps {
  dataForm: Array<ITabData>;
  setAnswer: Dispatch<SetStateAction<any[]>>;
}

export const TabData = ({ dataForm, setAnswer }: TabDataProps) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.nama_field)
  );
  const [dataSource, setDataSource] = useState<readonly ITabData[]>(
    () => defaultData
  );
  console.log('dataForm 2 ', dataForm);

  useEffect(() => {
    if (dataForm) {
      setDataSource(dataForm);
    }
  }, [dataForm]);

  const columns: ProColumns<ITabData>[] = [
    {
      title: 'Name',
      key: 'label',
      dataIndex: 'label',
      width: '40%',
      editable: false,
    },
    {
      title: 'Value',
      key: 'answer',
      dataIndex: 'answer',
      render: (text, record) => {
        console.log('texttttttttt', text, record['value']);

        if (record.tipe_data === 'text') {
          // return <Input defaultValue={text as string=='-' ? undefined :text as string}  />;
          return (
            <Form.Item
              // name={record.nama_field}
              name={['data', record.nama_field, 'value']}
              rules={[
                { required: true, message: `${record.label} is required` },
              ]}
              initialValue={record.value}
            >
              <Input />
            </Form.Item>
          );
        } else if (record.tipe_data === 'year') {
          return (
            <Form.Item
              name={['data', record.nama_field, 'value']}
              rules={[
                { required: true, message: `${record.label} is required` },
              ]}
              initialValue={record.value ? dayjs(record.value) : null}
            >
              <DatePicker picker="year" />
            </Form.Item>
          );
          // return <DatePicker picker="year" defaultValue={text !='-' ? dayjs(text as string, 'YYYY') : undefined} />;
        } else if (record.tipe_data === 'date') {
          return (
            <Form.Item
              name={['data', record.nama_field, 'value']}
              rules={[
                { required: true, message: `${record.label} is required` },
              ]}
              initialValue={record.value ? dayjs(record.value) : null}
            >
              <DatePicker />
            </Form.Item>
          );
        } else if (record.tipe_data == 'number') {
          
         return( <Form.Item
            name={['data', record.nama_field, 'value']}
            rules={[{ required: true, message: `${record.label} is required` }]}
            initialValue={record.value}
          >
            <InputNumber />
          </Form.Item>
         );
        }
        return text;
      },
    },
  ];

  console.log('answerrrrrrrrrrrr', dataSource);

  return (
    <Form>
      <EditableProTable<ITabData>
        headerTitle="Data Index"
        columns={columns}
        rowKey="nama_field"
        scroll={{
          x: 460,
          y: 430,
        }}
        value={dataSource}
        onChange={setDataSource}
        toolBarRender={() => {
          return [
            //   <Button
            //     type="primary"
            //     key="save"
            //     onClick={() => {
            //       console.log(dataSource);
            //     }}
            //   >
            //     Add
            //   </Button>,
          ];
        }}
        recordCreatorProps={false}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            console.log(row);
            console.log(config);
            return [defaultDoms.delete];
          },
          onValuesChange: (record: any, recordList) => {
            console.log('record', record);
            console.log('recordList', recordList);

            const newData = recordList.map((item: any) => {
              const val = record[item.nama_field]?.['value'];
              console.log(
                'recorddddddddddddddddd',
                record[item.nama_field]?.['value']
              );
              return {
                ...item,
                value: val,
              };
            });

            console.log('newData', newData);

            setDataSource(newData);
            setAnswer(newData);
          },

          onChange: setEditableRowKeys,
        }}
      />
    </Form>
  );
};
