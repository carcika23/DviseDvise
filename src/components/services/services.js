import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from './services.module.css'
import Underline from '../../assets/underline.svg'
import ServicesImg from '../../assets/servicesImg.svg'
import ServicesMobile from '../../assets/servicesMobile.svg'
import Coding from '../../assets/coding2.svg'
import Design from '../../assets/design2.svg'
import Socials from '../../assets/socials2.svg'


const data = [
    {
        name: 'Web/App Development',
        description: 'We create custom websites and apps designed to meet your unique needs. With a focus on sleek design, seamless functionality, and user experience, we turn your ideas into powerful digital solutions',
        img: Coding
    },
    {
        name: 'Graphic Design',
        description: 'We create stunning visuals with custom graphic and website design, including branding, logos, and marketing materials, tailored to enhance your brand’s identity, captivate audiences, and leave a lasting impression',
        img: Design
    },
    {
        name: 'Social Media Management',
        description: 'We grow your brand with expert social media management by creating engaging content, building connections, analyzing performance, and delivering strategies to maximize your online impact',
        img: Socials
    },
]

function Services() {

    const [scrolling, setScrolling] = useState(false);
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return ( 
        <div className={styles.services}>
            <h1 className={styles.title}>Services</h1>
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