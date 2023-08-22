import { Button, Form, Input } from 'antd';
import React from 'react';
import { useAppContext } from '../../context/AppProvider';

const LastNameInputField = () => {
  const { formData, setFormData, nextStep } = useAppContext();

  const onFinish = (values) => {
    setFormData({ ...formData, lastName: values.lastName });
    nextStep();
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please enter your last name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LastNameInputField;
