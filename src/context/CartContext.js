import { createContext, useState } from "react";
import { listData } from "../components/Cart/listData.js"

const CartContext = createContext()

function CartContextProvider({children}) {
  const [currentProduct, setCurrentProduct] = useState(listData)
  const [shippingPrice, setShippingPrice] = useState(0)
  const allPrice = addTotalPrice()

    function handlePlus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setCurrentProduct(newCurrentProduct)
  }

  function handleMinus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    setCurrentProduct(newCurrentProduct.filter(product => product.quantity !== 0))
  }

  function addTotalPrice() {
    const totalPrice = currentProduct.reduce((total, product) => {
      return total + (product.quantity * product.price)
    }, 0)

  return totalPrice + shippingPrice;

  }

  function addShippingPrice(price) {
    setShippingPrice(price)
  }


  return (
    <CartContext.Provider value={{currentProduct, handlePlus, handleMinus, addShippingPrice, allPrice, shippingPrice}}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartContextProvider}