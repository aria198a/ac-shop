import styles from "./StepsProgress.module.css"
import { ReactComponent as CheckIcon } from "../../icons/pg-complete.svg";

function Step({cartStep, step, stepLabel}) {
  return (
    <span className={cartStep >= step ? styles.cartGroup : styles.progressGroup}>
      <span className={styles.progressIcon}>
        <span className={styles.text}> {cartStep > step ? <CheckIcon/> : step} </span>
      </span>
      <span className={styles.progressLabel}>{stepLabel}</span>
    </span>
  )
}

function ProgressBar({cartStep, step}) {
  return (
    <span className={cartStep > step ? styles.progressBarDone : styles.progressBar}>
    </span>
  );
}

function StepProgress({cartStep}) {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step currentStep={cartStep} step={1} stepLabel={"寄送地址"}/>
        <ProgressBar currentStep={cartStep} step={1} />
        <Step currentStep={cartStep} step={2} stepLabel={"運送方式"}/>
        <ProgressBar currentStep={cartStep} step={2} />
        <Step currentStep={cartStep} step={3} stepLabel={"付款資訊"}/>
      </section>
    </div>
  );
}

export default StepProgress;