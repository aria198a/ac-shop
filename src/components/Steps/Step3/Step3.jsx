import styles from "./Step3.module.css"
import { useContext } from "react"
import { FormContext } from "../../../context/FormContext"

export default function Step3() {
  const { handleInputChange } = useContext(FormContext)

    return (
      <form data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.inputLine1}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input className={styles.inputStyle} name="cardName" type="text" placeholder="XXXX XXX" onChange={e => {handleInputChange(e)}}/>
            </div>
          </div>
          <div className={styles.inputLine2}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>卡號</div>
              <input className={styles.inputStyle} name="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" onChange={e => {handleInputChange(e)}}/>
            </div>
          </div>
          <div className={styles.inputLine3}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <input className={styles.inputStyle} name="cardValue" type="text" placeholder="XX/XX" onChange={e => {handleInputChange(e)}}/>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input className={styles.inputStyle} name="cardCvc" type="text" placeholder="XXX" onChange={e => {handleInputChange(e)}}/>
            </div>
          </div>
        </section>
      </form>
    )
  }