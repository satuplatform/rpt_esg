import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
} from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';

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
  field: string,
  nama_field: string,
  label: string,
  type: string
}

export const TabData = ({dataForm}:{dataForm:Array<ITabData>}) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.nama_field)
  );
  const [dataSource, setDataSource] = useState<readonly ITabData[]>(
    () => defaultData
  );
  console.log('dataForm 2 ', dataForm)

  useEffect(() => {
    if(dataForm){
      setDataSource(dataForm)
    }
  }, [dataForm])

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
          console.log(row)
          console.log(config)
          return [defaultDoms.delete];
        },
        onValuesChange: (record, recordList) => {
          console.log(record)
          setDataSource(recordList);
        },
        onChange: setEditableRowKeys,
      }}
    />
  );
};
