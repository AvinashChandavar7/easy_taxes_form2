import React from 'react';
import {
  FirstNameInputField,
  LastNameInputField,
  MartialStatusInputField,
  SsnNumberInputfield,
} from '../FormStages';

import { useAppContext } from '../../context/AppProvider';

const StepByStepFrom = () => {
  const { currentStep } = useAppContext();

  return (
    <div>
      {currentStep === 1 && <FirstNameInputField />}
      {currentStep === 2 && <LastNameInputField />}
      {currentStep === 3 && <SsnNumberInputfield />}
      {currentStep === 4 && <MartialStatusInputField />}
    </div>
  );
};

export default StepByStepFrom;
