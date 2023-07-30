import styles from "./Step2.module.css"
import { useState } from "react";

export default function Step2({setShippingPrice}) {
  const [shipping, setShipping] = useState('shipping-standard')
  const handleSelectedShipping = e => setShipping(e.target.id)

  function handleRadioChange(price) {
    setShippingPrice(price)
  }

  return (
    <form className="d-none col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className={`form-body col col-12 ${styles.formBody}`}>
        <label className={styles.radioGroup} onClick={() => handleRadioChange(0)}>
          <input
            className={styles.input}
            id="shipping-standard"
            type="radio"
            name="shipping"
            checked={shipping === 'shipping-standard'}
            onChange={handleSelectedShipping}
          />
          <div className={styles.radioInfo}>
            <div className={styles.shipInfo}>
              <div className={styles.text}>標準運送</div>
              <div className={styles.price}></div>
            </div>
            <div className="styles.period">約 3~7 個工作天</div>
          </div>
          <div className={styles.radioboxBorder}>免費</div>
        </label>
        <label className={styles.radioGroup} onClick={() => handleRadioChange(500)}>
          <input
            className={styles.input}
            id="shipping-dhl"
            type="radio"
            name="shipping"
            checked={shipping === 'shipping-dhl'}
            onChange={handleSelectedShipping}
          />
          <div className={styles.radioInfo}>
            <div className={styles.shipInfo}>
              <div className={styles.text}>快速 貨運</div>
              <div className={styles.price}></div>
            </div>
            <div className="styles.period">48 小時內送達</div>
          </div>
          <div className={styles.radioboxBorder}>$109</div>
        </label>
      </section>
    </form>
  );
}
    