import styles from "../styles/Cart.module.css"
import CartItem from "./CartItem.jsx"

function Cart() {
    return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <CartItem />
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$5,298</div>
      </section>
    </section>
    )
  }
  
  export default Cart

