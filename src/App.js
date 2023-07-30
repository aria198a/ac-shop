import "./App.css";
import Cart from "./components/Cart/Cart.jsx"
import { useState } from "react";
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx"
import Step1 from "./components/Steps/Step1/Step1.jsx"
import Step2 from "./components/Steps/Step2/Step2";
import Step3 from "./components/Steps/Step3/Step3";
import StepProgress from "./components/StepsProgress/StepsProgress.jsx";


function App() {
  const [cartStep, setCartStep] = useState(1)
  const [shippingPrice, setShippingPrice] = useState(0)

  function handleClickPrev() {
    if (cartStep > 1) {
      setCartStep(cartStep -1)
    }
  }

  function handleClickNext() {
    if (cartStep < 3) {
      setCartStep(cartStep + 1)
    }
  }

  return (
    <div>
      <main className="mainContainer">
        <div className="stepContainer">
          <StepProgress 
             cartStep={cartStep}
          />
          <div className="formContainer">
            {cartStep ===1 && <Step1 />}
            {cartStep ===2 && <Step2 setShippingPrice={setShippingPrice} />}
            {cartStep ===3 && <Step3 />}
          </div>
          <div className="controlContainer">
            <ProgressControl 
               cartStep={cartStep}
               handleClickPrev={handleClickPrev}
               handleClickNext={handleClickNext}
            />
          </div>
        </div>
        <div className="cartSideContainer">
          <Cart shippingPrice={shippingPrice}/>
        </div>
      </main>
    </div>
  );
}

export default App;
