import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import {Link} from 'react-scroll'
import ChangeLanguage from '../changeLanguage/changeLanguage';
import Login from '../../assets/login.svg'
import Hamburger from '../../assets/hamburgerMenu.svg'
import HamburgerScrolled from '../../assets/hamburgerScrolled.svg'
import Login1 from '../../assets/loginIcon1.svg'

function Navbar() {

  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // Adjust 50 to the point where you want the background to appear
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={`${styles.mobileNav} ${scrolling ? styles.navbarScrolled : ""}`}>
          {scrolling ? (
              <img src={HamburgerScrolled} className={styles.hamburger} />
          ): (
            <img src={Hamburger} className={styles.hamburger} />
          )}
          <h1 className={`${styles.logo} ${scrolling ? styles.logoColored : ""}`}>Dvise</h1>
          <div className={styles.mobileNavItems}>
            <ChangeLanguage/>
            {scrolling ? (
            <img src={Login1} className={styles.login}/>
            ): (
              <img src={Login} className={styles.login}/>
            )}
        </div>
        </div>
      ): (
        <div className={`${styles.navbar} ${scrolling ? styles.navbarScrolled : ""}`}>
          <h1 className={`${styles.logo} ${scrolling ? styles.logoColored : ""}`}>Dvise</h1>
      <div className={styles.navbarItems}>
        <Link>Home</Link>
        <Link>About us</Link>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>Packages</Link>
        <Link>Contact</Link>
      </div>
        <ChangeLanguage/>
        {scrolling ? (
        <img src={Login1} className={styles.login}/>
        ): (
          <img src={Login} className={styles.login}/>
        )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
