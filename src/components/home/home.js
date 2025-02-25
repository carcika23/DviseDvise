import React, { Component} from 'react';
import styles from './home.module.css'
import { useState, useEffect } from 'react';
import LandingMobile from '../../assets/homebg.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";

const welcomeText = 'We build your entire digital world with expert web development, creative design, programming, and social media solutions to ensure your business thrives in the digital space.'

function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.blur}></div>
      {isMobile ? (
         <LazyLoadImage src={LandingMobile} height="auto" effect='blur' className={styles.background} />
      ): (
        <div className={styles.background}></div>
      )}
      <div className={styles.left}>
        <div>
        {isMobile ? (
            <h1>{t('welcome')}</h1>
        ): (
          <h1>{t('welcome')}</h1>
        )}
        <p>{t('welcomeDescription')}</p>
        </div>
        <button>{t('learnMore')}</button>
      </div>
    </div>
  );
}

export default Home;
