import styles from "../styles/Header.module.css";
import logo from "/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Empower Logo" className={styles.logo} />
      <h1>Empower Speech Pathology</h1>
    </header>
  );
}

export default Header;
