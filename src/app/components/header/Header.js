// Header.jsx
import React, { useState } from 'react';
import styles from './header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Optionally close the menu after click
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3> माँ करणी फास्ट फूड कॉर्नर</h3>
        </div>
        
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, 'home')}
                className={styles.navLink}
              >
                                होम

              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#menu"
                onClick={(e) => handleScroll(e, 'menu')}
                className={styles.navLink}
              >
                                मेनू

              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#order"
                onClick={(e) => handleScroll(e, 'order')}
                className={styles.navLink}
              >
                                ऑर्डर

              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className={styles.navLink}
              >
                                संपर्क

              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
