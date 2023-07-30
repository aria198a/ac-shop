import styles from "./Cart.module.css"
import { useState } from "react"
import { listData } from "./listData.js"
import { ReactComponent as PlusImg } from "../../icons/plus.svg"
import { ReactComponent as MinusImg } from "../../icons/minus.svg"

function Product({item, handleMinus, handlePlus}) {
  return (
    <div className={styles.productContainer} key={item.id}>
      <img className={styles.imgContainer} alt={item.name} src={item.image}/>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusImg
              className={styles.productAction} 
              onClick={() => handleMinus(item.id)}
            />
            <span className={styles.productCount}>{item.quantity}</span>
            <PlusImg
              className={styles.productAction}
              onClick={() => handlePlus(item.id)}
            />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  );
}

function CartItem({ shippingPrice }) {
  const [cartProduct, setCartProduct] = useState(listData);

  function handleClickPlus(id) {
    const newCartProduct = cartProduct.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setCartProduct(newCartProduct)
  }

  function handleClickMinus(id) {
    const newCartProduct = cartProduct.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    setCartProduct(newCartProduct.filter(product => product.quantity !== 0))
  }

  function addTotalPrice() {
    const totalPrice = cartProduct.reduce((total, product) => {
      return total + (product.quantity * product.price)
    }, 0)

    if (totalPrice !== 0) {
      return totalPrice + shippingPrice;
    } else {
      return 0
    }
    
  }

  return (
    <section className={styles.productList}>
      {cartProduct.map((item) => (
        <Product
          item={item}
          key={item.id}
          handleMinus={handleClickMinus}
          handlePlus={handleClickPlus}
        />
      ))}

      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>
          {shippingPrice === 0 ? "免費" : "$"+shippingPrice}
        </div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${addTotalPrice()}</div>
      </section>
    </section>
  );
}

export default CartItem