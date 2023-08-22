import React from 'react'
import { DataDisplayTable, StepByStepFrom } from './components'
import { Button, Modal } from 'antd';
import { Routes, Route, } from 'react-router-dom';
import { useAppContext } from './context/AppProvider';

const App = () => {

  const {
    modalVisible,
    showModal,
    closeModal,
    formData,
    setFormData,
    tableData,
  } = useAppContext();


  return (
    <>
      <header className='header'>
        <h1>Eazy Taxes</h1>
        <Button type="primary" onClick={showModal} className='from-btn'>
          Form Create
        </Button>
      </header>

      <main >
        <h1 className='table-title'>Table</h1>
        <Modal title="Create Entry" open={modalVisible} onCancel={closeModal} footer={null}>
          <StepByStepFrom formData={formData} setFormData={setFormData} />
        </Modal>
      </main>


      <section>
        <Routes>
          <Route path="/" element={<DataDisplayTable tableData={tableData} />} exact />
        </Routes>
      </section>
    </>
  )
}

export default App








// import React, { useEffect, useState } from 'react'
// import { DataDisplayTable, StepByStepFrom } from './components'
// import { Button, Modal } from 'antd';
// import { Routes, Route, useNavigate, } from 'react-router-dom';

// const App = () => {

//   const navigate = useNavigate();

//   const [modalVisible, setModalVisible] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);


//   const showModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const submitForm = (e) => {

//     setTableData([...tableData, formData]);
//     setFormData({});
//     setModalVisible(false);
//     // navigate('/data-display');
//   };

//   useEffect(() => {
//     submitForm();
//   }, [])


//   return (
//     <>
//       <header>
//         <h1>Form</h1>
//       </header>
//       <main>
//         <Button type="primary" onClick={showModal}>
//           Create
//         </Button>
//         <Modal
//           title="Create Entry"
//           visible={modalVisible}
//           onCancel={closeModal}
//           footer={null}
//         >
//           <StepByStepFrom
//             formData={formData}
//             setFormData={setFormData}
//             submitForm={submitForm}
//           />
//         </Modal>


//       </main>


//       <section>
//         <Routes>
//           <Route path="/data-display" element={<DataDisplayTable tableData={tableData} />} />
//         </Routes>
//       </section>
//     </>
//   )
// }

// export default App