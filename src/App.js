import "./App.css";
import Cart from "./components/Cart/Cart.jsx"
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx"
import Step1 from "./components/Steps/Step1/Step1.jsx"
import StepProgress from "./components/StepsProgress/StepsProgress.jsx";


function App() {
  return (
    <div>
      <main className="mainContainer">
        <div className="stepContainer">
          <StepProgress />
          <div className="formContainer">
            <Step1 />
          </div>
          <div className="controlContainer">
            <ProgressControl />
          </div>
        </div>
        <div className="cartSideContainer">
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default App;
