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
      <CartContextProvider>
        <Form/>
          <Cart/>
      </CartContextProvider>
    <Footer />
    </div>
  );
}

export default App;