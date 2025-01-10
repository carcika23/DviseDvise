import React, { Component} from 'react';
import styles from './home.module.css'
import background from '../../assets/landing2.svg'
import ServerImg from '../../assets/serverImg.svg'
import { useState, useEffect } from 'react';
import LandingMobile from '../../assets/landingMobile.svg'

const welcomeText = 'We specialize in creating modern, responsive, and dynamic websites tailored to your needs. Whether you’re launching a new business, upgrading your online presence, or looking for innovative web solutions, we’re here to bring your vision to life. Explore our services and let us help you turn ideas into reality. Your digital success starts here!'

function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.blur}></div>
      {isMobile ? (
         <img src={LandingMobile} className={styles.background} />
      ): (
        <img src={background} className={styles.background} />
      )}
      <div className={styles.left}>
        <div>
        {isMobile ? (
            <h1>We're Building Your <h2>Future</h2></h1>
        ): (
          <h1>We're Building Your Future</h1>
        )}
        <p>{welcomeText}</p>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Home;
