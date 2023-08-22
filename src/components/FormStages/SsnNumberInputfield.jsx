import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAppContext } from '../../context/AppProvider';

const SsnNumberInputfield = () => {
  const { formData, setFormData, nextStep } = useAppContext();
  const [form] = Form.useForm();

  const generateRandomSsn = () => {
    const randomSsn = Math.floor(1000000000 + Math.random() * 9000000000);
    return randomSsn.toString();
  };

  const onFinish = (values) => {
    setFormData({ ...formData, ssnNumber: values.ssnNumber });
    nextStep();
  };

  const handleGenerateRandomSsn = () => {
    const randomSsn = generateRandomSsn();
    form.setFieldsValue({ ssnNumber: randomSsn });
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="SSN Number"
        name="ssnNumber"
        rules={[
          { required: true, message: 'Please enter your SSN number' },
          { pattern: /^[0-9]+$/, message: 'Please enter numbers only' },
        ]}
      >
        <Input />
      </Form.Item>
      <Button onClick={handleGenerateRandomSsn} className="generate-btn">
        Generate Random SSN
      </Button>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SsnNumberInputfield;
