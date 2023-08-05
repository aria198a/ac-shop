import fb from "../../icons/facebook-f.svg"
import ig from "../../icons/instagram.svg"
import whatsApp from "../../icons/whatsapp.svg"
import logo from "../../icons/Logo.svg"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>客戶服務</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="http://localhost:3002/">
                運送說明
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                退換貨相關
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                付款資訊
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                FAQ
              </a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>關於我們</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="http://localhost:3002/">
                品牌故事
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                媒體聯繫
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                Press kit
              </a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>資訊</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="http://localhost:3002/">
                隱私權政策
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                Cookie
              </a>
              <a className={styles.pageLink} href="http://localhost:3002/">
                GDPR
              </a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
            <div className={styles.sectionContent}>
              <div className={styles.telInfo}>+886 02123-45678</div>
              <div className={styles.socialIconGroup}>
                <a href="http://localhost:3002/">
                  <img className={styles.fb} src={fb} alt="fb" />
                </a>
                <a href="http://localhost:3002/">
                  <img className={styles.ig} src={ig} alt="ig" />
                </a>
                <a href="http://localhost:3002/">
                  <img
                    className={styles.whatsApp}
                    src={whatsApp}
                    alt="whatsApp"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    );
  }
