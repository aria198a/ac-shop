import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"

function Cart() {
  return (
    <div>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <CartItem/>
      </section>
    </div>
  );
}

export default Cart