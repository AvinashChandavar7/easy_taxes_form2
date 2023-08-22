import { Button, Form, Radio } from 'antd';
import React from 'react';
import { useAppContext } from '../../context/AppProvider';

const MartialStatusInputField = () => {
  const { formData, setFormData, submitForm } = useAppContext();

  // const onFinish = (values) => {
  //   setFormData({
  //     ...formData,
  //     martialStatus: values.martialStatus.toLowerCase(),
  //   });

  //   submitForm();
  // };

  const onFinish = (values) => {
    const updatedValues = {
      ...formData,
      martialStatus: values.martialStatus.toLowerCase(),
      hasDependencies:
        values.martialStatus === 'single' ? values.hasDependencies : '',
      nameOfDependent:
        values.martialStatus === 'single' ? values.nameOfDependent : '',
      hasChildren: values.martialStatus === 'married' ? values.hasChildren : '',
      nameOfChild: values.martialStatus === 'married' ? values.nameOfChild : '',
    };

    setFormData(updatedValues);
    submitForm();
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Martial Status"
        name="martialStatus"
        rules={[
          { required: true, message: 'Please select your martial status' },
        ]}
      >
        <Radio.Group>
          <Radio value="single">Single</Radio>
          <Radio value="married">Married</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MartialStatusInputField;
