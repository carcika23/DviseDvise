import React, { Component } from 'react';
import styles from './about.module.css'
import Underline from '../../assets/underline.svg'
import Support from '../../assets/image8.webp'
import Domain from '../../assets/image9.webp'
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();

    const cardData = [
        {
            name: t("about1"),
            description: t("about1desc"),
            img: Support
        },
        {
            name: t("about2"),
            description: t("about2desc"),
            img: Domain
        },
    ]

    return (
        <div className={styles.aboutUs}>
            <div className={styles.text}>
                <h1 className={styles.title}>{t("aboutTitle")}<h1>{t("dvise")}</h1></h1>
                <img className={styles.underline} src={Underline} />
                <p className={styles.description}>{t("aboutText")}</p>
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