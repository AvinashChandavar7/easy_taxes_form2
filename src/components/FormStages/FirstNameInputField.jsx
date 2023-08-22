import { Button, Form, Input } from 'antd';
import React from 'react';
import { useAppContext } from '../../context/AppProvider';

const FirstNameInputField = () => {
  const { formData, setFormData, nextStep } = useAppContext();

  const onFinish = (values) => {
    setFormData({ ...formData, firstName: values.firstName });
    nextStep();
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please enter your first name' }]}
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

export default FirstNameInputField;
