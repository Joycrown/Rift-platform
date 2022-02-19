import { useState } from "react";
// import "./styles.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import StepOne from './step1'
import StepTwo from './step2'
import StepThree from './step3'


export default function Multistep() {
    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      country: '',
      region: '',
      city: '',
      dateOfBirth: '',
      occupation: '',
      experience: '',
      monthlyIncome: '',
      MetatraderAccount: '',
    });
    const [currentStep, setCurrentStep] = useState(0);
  
    const makeRequest = (formData) => {
      console.log("Form Submitted", formData);
    };
  
    const handleNextStep = (newData, final = false) => {
      setData((prev) => ({ ...prev, ...newData }));
  
      if (final) {
        makeRequest(newData);
        return;
      }
  
      setCurrentStep((prev) => prev + 1);
    };
  
    const handlePrevStep = (newData) => {
      setData((prev) => ({ ...prev, ...newData }));
      setCurrentStep((prev) => prev - 1);
    };
  
    const steps = [
      <StepOne next={handleNextStep} data={data} />,
      <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
      <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />
    ];
  
    console.log("data", data);
  
    return <div className="App">{steps[currentStep]}</div>;
  }
  