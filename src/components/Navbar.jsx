import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        {/* LEFT: brand */}
        <div className={styles.navLeft}>
          <div className={styles.logo}>EMPOWER</div>
        </div>

        {/* RIGHT: Instagram + menu */}
        <div className={styles.navRight}>
          <a
            href="https://www.instagram.com/empwrspeech/profilecard/?igsh=MW83YTh6bXE1Z21rMg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Empower Speech on Instagram"
            className={styles.igLink}
          >
            <svg viewBox="0 0 24 24" className={styles.igIcon} aria-hidden="true">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
            </svg>
          </a>

          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className={styles.menuToggleBar} />
            <span className={styles.menuToggleBar} />
            <span className={styles.menuToggleBar} />
          </button>

          <ul
            id="primary-navigation"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Meet The Team
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;
