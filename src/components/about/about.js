import React, { Component } from 'react';
import styles from './about.module.css'
import Underline from '../../assets/underline.svg'
import Support from '../../assets/image8.svg'
import Domain from '../../assets/image9.svg'


const cardData = [
    {
        name: 'Safe & Simple',
        description: "At Dvise, we prioritize safety and simplicity in every web solution. Our secure, user-friendly designs ensure a seamless experience, empowering your business with innovative technology that's easy to use and built to protect.",
        img: Support
    },
    {
        name: 'Fast Delivery',
        description: "At Dvise, we deliver fast, efficient, and high-quality web solutions tailored to your needs. Our streamlined process ensures your project is completed on time without compromising on excellence. Your vision, delivered swiftly.",
        img: Domain
    },
]

function About() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.text}>
                <h1 className={styles.title}>Why Choose<h1>Dvise</h1></h1>
                <img className={styles.underline} src={Underline} />
                <p className={styles.description}>At Dvise, we combine expert web development, innovative ideas, and 24/7 support to deliver exceptional digital experiences. Your vision becomes our mission as we craft solutions tailored to drive your online success and growth.</p>
            </div>
            <div className={styles.cards}>
                {cardData.map((res, key) => {
                    return <div key={key} className={styles.card}>
                        <img src={res.img} />
                        <div className={styles.cardInfo}>
                            <h1>{res.name}</h1>
                            <p>{res.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default About;