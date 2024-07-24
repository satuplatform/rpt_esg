import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  name?: string;
  value?: string;
  children?: DataSourceType[];
};

//   const defaultData: DataSourceType[] = new Array(20).fill(1).map((_, index) => {
//     return {
//       id: (Date.now() + index).toString(),
//       name: `Nama index ${index}`,
//       value: 'isi value nya',
//     };
//   });

const defaultData: DataSourceType[] = [
  {
    id: 1,
    name: 'Nama perusahaan',
    value: '',
  },
  {
    id: 2,
    name: 'Nama Dagang',
    value: '',
  },
  {
    id: 3,
    name: 'Alamat Perusahaan',
    value: '',
  },
  {
    id: 4,
    name: 'Registration Number',
    value: '',
  },
  {
    id: 5,
    name: 'Notaris',
    value: '',
  },
  {
    id: 6,
    name: 'Alamat',
    value: '',
  },
];

export const TabData = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      width: '40%',
      editable: false,
    },
    {
      title: 'Value',
      key: 'value',
      dataIndex: 'value',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
  ];

  return (
    <EditableProTable<DataSourceType>
      headerTitle="Data Index"
      columns={columns}
      rowKey="id"
      scroll={{
        x: 460,
        y: 430,
      }}
      value={dataSource}
      onChange={setDataSource}
      toolBarRender={() => {
        return [
          // <Button
          //   type="primary"
          //   key="save"
          //   onClick={() => {
          //     console.log(dataSource);
          //   }}
          // >
          //   Add
          // </Button>,
        ];
      }}
      recordCreatorProps={false}
      editable={{
        type: 'multiple',
        editableKeys,
        actionRender: (row, config, defaultDoms) => {
          return [defaultDoms.delete];
        },
        onValuesChange: (record, recordList) => {
          setDataSource(recordList);
        },
        onChange: setEditableRowKeys,
      }}
    />
  );
};
