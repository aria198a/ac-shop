import styles from "./Step3.module.css"

export default function Step3() {
    return (
      <form data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.inputLine1}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input className={styles.inputStyle} type="text" placeholder="XXXX XXX"/>
            </div>
          </div>
          <div className={styles.inputLine2}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>卡號</div>
              <input className={styles.inputStyle} type="text" placeholder="XXXX XXXX XXXX XXXX"/>
            </div>
          </div>
          <div className={styles.inputLine3}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <input className={styles.inputStyle} type="text" placeholder="XX/XX"/>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input className={styles.inputStyle} type="text" placeholder="XXX"/>
            </div>
          </div>
        </section>
      </form>
    )
  }