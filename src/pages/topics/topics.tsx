import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { DragSortTable } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { ModalInsert } from './component/modal-insert';
import { useQuery } from '@tanstack/react-query';

// const data = [
//   {
//     _id: '1',
//     name: 'Membangun Perekonomian Bangsa',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     _id: '2',
//     name: 'Menyediakan Produk dan Layanan Berkelanjutan',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     _id: '3',
//     name: 'Menjaga Kelestarian Lingkungan',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

export const TopicsPage = () => {
  const navigate = useNavigate();
  let { reportId } = useParams();
  const [dataSource, setDataSource] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const actionRef = useRef<ActionType>();
  
  const columns: ProColumns[] = [
    {
      title: '',
      dataIndex: 'sort',
      width: 60,
      className: 'drag-visible',
    },
    {
      title: 'Topik',
      dataIndex: 'name',
      className: 'drag-visible',
    },
    {
      title: 'Jumlah Pengungkapan',
      dataIndex: 'jumlah',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (/*dom*/_, entity) => [
        <a
          onClick={() => {
            navigate(`/report/disclosures/${entity.reportId}/${entity._id}`);
          }}
          key="link"
        >
          Details
        </a>,
        <a key="edit">Edit</a>,
        <a key="delete">Delete</a>,
      ],
    },
  ];

  const handleDragSortEnd = (
    beforeIndex: number,
    afterIndex: number,
    newDataSource: any
  ) => {
    console.log('beforeIndex ', beforeIndex);
    console.log('afterIndex ', afterIndex);
    console.log('newDataSource ', newDataSource);
    setDataSource(newDataSource);
    message.success('sukses');
  };

  const { data: dataSourceAsli, refetch } = useQuery({
    queryKey: ['new-report-topic'],
    queryFn: () =>
      fetch(`/api/report/new-report/topic?reportId=${reportId}`).then((res) => res.json()),
  });

  useEffect(() => {
    if(reportId){
      refetch()
    }
  }, [reportId])

  useEffect(() => {
    if (dataSourceAsli) {
      setDataSource(dataSourceAsli.data);
    }
  }, [dataSourceAsli]);

  const newReportOnOK = async (values: any) => {
    console.log(values);
    values['reportId'] = reportId;

    let url = `/api/report/new-report/topic/insert`;
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
      refetch();
    }
  };

  return (
    <>
      <DragSortTable
        headerTitle="Topics"
        actionRef={actionRef}
        columns={columns}
        rowKey="_id"
        search={false}
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
        options={false}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              //actionRef.current?.reload();
              setShowModal(true);
            }}
            type="primary"
          >
            New Topic
          </Button>,
        ]}
      />
      <ModalInsert
        onOk={newReportOnOK}
        show={showModal}
        setShow={setShowModal}
      />
    </>
  );
};
