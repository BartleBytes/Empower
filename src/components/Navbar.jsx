import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* LEFT: brand */}
      <div className={styles.navLeft}>
        <div className={styles.logo}>EMPOWER</div>
      </div>

      {/* RIGHT: Instagram + menu (IG sits just left of "Home") */}
      <div className={styles.navRight}>
        <a
          href="https://www.instagram.com/empwrspeech"  // <-- her Instagram
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Empower Speech on Instagram"
          className={styles.igLink}
        >
          {/* clean outline Instagram */}
          <svg viewBox="0 0 24 24" className={styles.igIcon} aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="4"
                    fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
          </svg>
        </a>

        <ul className={styles.menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Meet The Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
