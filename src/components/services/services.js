import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from './services.module.css'
import Underline from '../../assets/underline.svg'
import ServicesImg from '../../assets/servicesImg.webp'
import ServicesMobile from '../../assets/servicesMobile.webp'
import Coding from '../../assets/coding2.svg'
import Design from '../../assets/design2.svg'
import Socials from '../../assets/socials2.svg'
import { useTranslation } from 'react-i18next';


function Services() {

    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const { t } = useTranslation();

    const data = [
        {
            name: t("service1"),
            description: t("service1desc"),
            img: Coding
        },
        {
            name: t("service2"),
            description: t("service2desc"),
            img: Design
        },
        {
            name: t("service3"),
            description: t("service3desc"),
            img: Socials
        },
    ]
      
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return ( 
        <div className={styles.services}>
            <h1 className={styles.title}>{t("servicesTitle")}</h1>
            <img src={Underline} className={styles.underline} />
            <div className={styles.servicesContainer}>
                {isMobile ? (
                    <img src={ServicesMobile} className={styles.servicesImg} />
                ):(
                    <img src={ServicesImg} className={styles.servicesImg} />
                )}
                <div className={styles.servicesCards}>
                    {data.map((item, key) => {
                        return (
                            <div key={key} className={styles.card}>
                                <div className={styles.icon}>
                                    <img src={item.img} />
                                </div>
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}

export default Services;