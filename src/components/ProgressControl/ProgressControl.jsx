import styles from "./ProgressControl.module.css";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";

function ProgressControl({ cartStep, handleClickPrev, handleClickNext}) {
  return (

    <section className={styles.progressControlContainer}>
      <section className={`${styles.buttonGroup} ${styles.buttonGroup2}`}>
        <button 
        onClick={handleClickPrev}
        className={cartStep === 1 ? `${styles.start}` : `${styles.prev}`}>
          <LeftArrow className={styles.arrowLeft}/>
          上一步
        </button>

        <button 
        onClick={handleClickNext}
        className={styles.next}>
          {cartStep === 3 ? "確認下單" : "下一步"}
          {cartStep < 3 && <RightArrow className={styles.arrowRight}/>}
        </button>
      </section>     
    </section>
  )
}

export default ProgressControl;