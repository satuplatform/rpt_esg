import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

interface IModalTopicInsert {
  show: boolean;
  setShow: (show: boolean) => void;
  onOk: (values: any) => void;
}
export const ModalInsert = ({ show, setShow, onOk }: IModalTopicInsert) => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="Topic Insert"
      open={show}
      form={form}
      autoFocusFirstInput
      onFinish={async (values) => {
        //await waitTime(2000);
        //console.log(values.name);
        message.success('Insert Sukses');
        onOk(values);
        return true;
      }}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onOpenChange={setShow}
    >
      <ProFormText
        width="lg"
        name="name"
        label="Topic"
        tooltip="Insert New Topic"
        placeholder="Topic"
        rules={[{ required: true, message: 'topic Name harus diisi' }]}
      />

      <ProFormTextArea
        name="description"
        label="Description"
        placeholder="Please enter a description"
        fieldProps={{ rows: 8 }}
        rules={[{ required: true, message: 'topic description harus diisi' }]}
      />
    </ModalForm>
  );
};
