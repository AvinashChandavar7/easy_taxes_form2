import React from 'react';
import { Table, Radio, Input, Button } from 'antd';
import { useAppContext } from '../../context/AppProvider';

const DataDisplayTable = () => {
  const {
    tableData,
    selectedDependencies,
    selectedName,
    savedNames,
    handleDependenciesChange,
    handleNameChange,
    handleSaveName,
  } = useAppContext();

  const renderDependenciesColumn = (id, record) => {
    if (
      record.martialStatus === 'single' ||
      record.martialStatus === 'married'
    ) {
      return (
        <Radio.Group
          onChange={(e) => handleDependenciesChange(record, e.target.value)}
          value={selectedDependencies[id]}
        >
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      );
    }
    return null;
  };

  const renderNameColumn = (id) => {
    if (selectedDependencies[id] === true) {
      return <div>{savedNames[id] && <p>{savedNames[id]}</p>}</div>;
    }

    if (selectedDependencies[id] === false) {
      return (
        <div className="save">
          <Input
            placeholder="Enter Name"
            value={selectedName[id] || ''}
            onChange={(e) => handleNameChange(id, e.target.value)}
            className="save-input"
          />
          <Button
            type="primary"
            onClick={() => handleSaveName(id)}
            className="save-btn"
          >
            Save
          </Button>
        </div>
      );
    }
    return null;
  };

  const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'SSN Number', dataIndex: 'ssnNumber', key: 'ssnNumber' },
    {
      title: 'Martial Status',
      dataIndex: 'martialStatus',
      key: 'martialStatus',
      render: (martialStatus) =>
        martialStatus === 'single' ? 'Single' : 'Married',
    },
    {
      title: 'Dependencies / Children',
      dataIndex: 'id',
      key: 'dependencies',
      render: renderDependenciesColumn,
    },
    {
      title: 'Name of Dependent /  child',
      dataIndex: 'id',
      key: 'nameOfDependent',
      render: renderNameColumn,
    },
  ];

  return (
    <div>
      <Table
        dataSource={tableData}
        columns={columns}
        // rowKey={(item) => item.id}
        // rowKey="id"
        key={tableData.title}
        pagination={false}
      />
    </div>
  );
};

export default DataDisplayTable;
