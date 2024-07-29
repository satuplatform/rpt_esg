import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Form, message } from 'antd';
import type { DatePickerProps } from 'antd';

export interface INewReportModalForm {
  showModal: boolean;
  setShowModal: (open: boolean) => void;
  onOk: (values: any) => void;
}

export const NewReportModalForm = ({
  showModal,
  setShowModal,
  onOk,
}: INewReportModalForm) => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  const disabled1YearDate: DatePickerProps['disabledDate'] = (
    current,
    { from }
  ) => {
    if (from) {
      const curMonth = current.year() * 12 + current.month();
      const fromMonth = from.year() * 12 + from.month();
      return Math.abs(fromMonth - curMonth) >= 12;
    }

    return false;
  };

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="New Sustainability Report"
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        //await waitTime(2000);
        //console.log(values.name);
        message.success('Insert Sukses');
        onOk(values);
        return true;
      }}
      open={showModal}
      onOpenChange={setShowModal}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="Name"
          tooltip="Report Name"
          placeholder="Report Name"
          rules={[{ required: true, message: 'Report Name harus diisi' }]}
        />

        <ProFormSelect
          mode="multiple"
          request={async () => [
            {
              value: 'gri',
              label: 'GRI',
            },
            {
              value: 'ojk',
              label: 'POJK',
            },
            {
              value: 'issb',
              label: 'ISSB',
            },
          ]}
          width="md"
          name="frameworks"
          label="Frameworks"
          rules={[{ required: true, message: 'Framework harus dipilih' }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'id',
              label: 'Indonesia',
            },
            {
              value: 'en',
              label: 'English',
            },
          ]}
          width="md"
          name="language"
          label="Language"
          rules={[{ required: true, message: 'Language harus dipilih' }]}
        />
        <ProFormDateRangePicker
          fieldProps={{ picker: 'month', disabledDate: disabled1YearDate }}
          rules={[{ required: true, message: 'periode harus dipilih' }]}
          name="periode"
          label="periode"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'Asia/Jakarta',
              label: 'Asia/Jakarta',
            },
          ]}
          width="md"
          name="timezone"
          label="timezone"
          rules={[{ required: true, message: 'timezone harus dipilih' }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};
