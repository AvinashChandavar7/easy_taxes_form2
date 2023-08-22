import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import saveData from '../utils/saveData';

const initialData = localStorage.getItem('formData');
const initialState = initialData ? JSON.parse(initialData) : [];

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState(initialState || []);
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedDependencies, setSelectedDependencies] = useState({});
  const [selectedName, setSelectedName] = useState({});
  const [savedNames, setSavedNames] = useState({});

  const navigate = useNavigate();

  const handleDependenciesChange = (record, value) => {
    setSelectedDependencies({ ...selectedDependencies, [record.id]: value });
  };

  const handleNameChange = (id, value) => {
    setSelectedName({ ...selectedName, [id]: value });
  };

  const handleSaveName = (id) => {
    const name = selectedName[id];
    setSavedNames({ ...savedNames, [id]: name });
    setSelectedDependencies({ ...selectedDependencies, [id]: false });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const submitForm = () => {
    const updatedFormData = {
      ...formData,
      martialStatus: formData.martialStatus.toLowerCase(),
    };
    setTableData([...tableData, updatedFormData]);
    setFormData({});
    setCurrentStep(1);
    setModalVisible(false);
    navigate('/');

    // saveData(tableData);

    // Save data to localStorage
    localStorage.setItem('formData', JSON.stringify(tableData));
  };

  const contextValue = {
    modalVisible,
    setModalVisible,
    formData,
    setFormData,
    tableData,
    setTableData,
    currentStep,
    setCurrentStep,
    nextStep,
    showModal,
    closeModal,
    submitForm,
    //
    selectedDependencies,
    setSelectedDependencies,
    selectedName,
    setSelectedName,
    savedNames,
    setSavedNames,

    handleDependenciesChange,
    handleNameChange,
    handleSaveName,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
