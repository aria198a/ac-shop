import { useState } from "react";
import { FormContextProvider } from "../../context/FormContext.js"
import Step1 from "./Step1/Step1.jsx";
import Step2 from "./Step2/Step2.jsx";
import Step3 from "./Step3/Step3.jsx";
import StepsProgress from "./StepsProgress/StepsProgress.jsx"
import ProgressControl from "./ProgressControl/ProgressControl.jsx";

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleClickPrev() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  function handleClickNext() {
    if (currentStep < 3) 
      setCurrentStep(currentStep + 1)
  }

  return (
<div className="stepContainer">
  <StepsProgress currentStep={currentStep} />
  <FormContextProvider>
    <div className="formContainer">
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </div>
    <div className="controlContainer">
      <ProgressControl
        currentStep={currentStep}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </div>
  </FormContextProvider>
</div>
  )
}

