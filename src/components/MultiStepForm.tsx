import React, { useState } from 'react';
import Signup from './Signup';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success'
import {Typography,Stepper,Step,StepLabel,AppBar,Toolbar} from '@material-ui/core';
import {InitialFormValues} from '../types'




const getSteps = () => {
  return ['Fill Signup Form', 'Enter Personal Details', 'Confirm'];
}


export const MultiStepForm = () => {
  const [step, setStep] = useState<number>(0);
  //Set initial Form values//
  const [formData, setFormData] = useState<InitialFormValues>({
    firstName: '',
    lastName: '',
    password:'',
    email: '',
    profession:'',
    hobby:'',
    city:'',
    bio:''
  });
  const steps = getSteps();
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const handleReset = () => {
    setStep(0);
    setFormData({
      firstName: '',
      lastName: '',
      password:'',
      email: '',
      profession:'',
      hobby:'',
      city:'',
      bio:''
    });
  };
  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <Signup
           formData={formData}
           setFormData={setFormData}
           nextStep={nextStep}
          />
        );
      case 1:
        return (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} handleReset={handleReset}/>
        );
      default:
        return <Success handleReset={handleReset}/>
    }
  }
  return(
    <>
    <AppBar>
      <Toolbar>
        <Typography variant='h6'>
          Signup Multi Step Form
        </Typography>
      </Toolbar>
    </AppBar>
    <Stepper activeStep={step} alternativeLabel style={{marginTop:'50px'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography variant="subtitle1">
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
    </Stepper> 
    {getStepContent(step)}  
    </>
  )
};

export default MultiStepForm;

