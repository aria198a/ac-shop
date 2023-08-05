import "./App.css";
import { CartContextProvider } from "./context/CartContext.js"
import Form from "./components/Steps/Form"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
    <Header />
    <main className="mainContainer">
      <CartContextProvider>
        <Form/>
        <div className="cartSideContainer">
          <Cart/>
        </div>
      </CartContextProvider>
    </main>
    <Footer />
    </div>
  );
}

export default App;