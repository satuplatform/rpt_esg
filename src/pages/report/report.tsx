import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';

export const ReportPage = () => {
  return (
    <PageContainer
      token={{
        paddingInlinePageContainerContent: 30,
      }}
      extra={[
        <Button
          onClick={() => {
            //navigate('/forms/items/insert/new');
          }}
          key="insert"
        >
          New Form
        </Button>,
      ]}
      subTitle="subtitle"
    >
      <ProCard
        style={{
          height: 'calc(100vh - 206px)',
          overflow: 'auto',
        }}
      ></ProCard>
    </PageContainer>
  );
};
