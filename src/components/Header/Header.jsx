import glass from "../../icons/magnifying-glass.svg"
import cart from "../../icons/cart.svg"
import logo from "../../icons/Logo.svg"
import sun from "../../icons/sun.svg"
import styles from "./Header.module.css"

export default function Header() {
	return (
  <header className={styles.siteHeader}>
    <div className={styles.headerContainer}>
      <nav className={styles.navbarMenu}>
        <ul className={`${styles.navList} ${styles.siteMenuList}`}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="http://localhost:3002/">
              男款
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="http://localhost:3002/">
              女款
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="http://localhost:3002/">
              最新消息
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="http://localhost:3002/">
              客製商品
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="http://localhost:3002/">
              聯絡我們
            </a>
          </li>
        </ul>
        <ul className={`${styles.navList} ${styles.siteActionList}`}>
          <li className={styles.navItem}>
            <a href="http://localhost:3002/"><img className={styles.glass} src={glass} alt="glass"/></a>
          </li>
          <li className={styles.navItem}>
            <a href="http://localhost:3002/"><img className={styles.cart} src={cart} alt="cart"/></a>
          </li>
          <li id="theme-toggle" className={styles.navItem}>
            <a href="http://localhost:3002/"><img className={styles.sun} src={sun} alt="sun"/></a>
          </li>
        </ul>
      </nav>
      <a className={styles.headerLogoContainer} href="http://localhost:3002/">
        <img className={styles.logo} src={logo} alt='logo'/>
      </a>
    </div>
  </header>
	)
}