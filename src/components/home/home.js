import React, { Component} from 'react';
import styles from './home.module.css'
import background from '../../assets/Wave.svg'
import ServerImg from '../../assets/serverImg.svg'
import { useState, useEffect } from 'react';
import LandingMobile from '../../assets/WaveMobile.svg'
import { useTranslation } from 'react-i18next';

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
         <img src={LandingMobile} className={styles.background} />
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
