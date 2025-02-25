import React, { Component } from 'react';
import styles from './packages.module.css'
import PinkCheck from '../../assets/Check2.webp'
import GrayCheck from '../../assets/Check1.webp'
import Underline from '../../assets/underline.svg'
import { useTranslation } from 'react-i18next';

function Packages() {

  const { t } = useTranslation();

  const data = [
    {
      title: 'Basic',
      price: '2100 GEL',
      items: [
        { name: t("fpack1"), img: PinkCheck },
        { name: t("fpack2"), img: PinkCheck },
        { name: t("fpack3"), img: PinkCheck },
        { name: t("fpack4"), img: PinkCheck },
        { name: t("fpack5"), img: PinkCheck },
        { name: t("fpack6"), img: PinkCheck },
        { name: t("fpack7"), img: GrayCheck },
        { name: t("fpack8"), img: GrayCheck },
        { name: t("fpack9"), img: GrayCheck },
        { name: t("fpack10"), img: GrayCheck },
        { name: t("fpack11"), img: GrayCheck },
      ],
    },
    {
      title: 'Standart',
      price: '5200 GEL',
      items: [
        { name: t("fpack1"), img: PinkCheck },
        { name: t("secpack1"), img: PinkCheck },
        { name: t("fpack3"), img: PinkCheck },
        { name: t("fpack4"), img: PinkCheck },
        { name: t("fpack5"), img: PinkCheck },
        { name: t("secpack2"), img: PinkCheck },
        { name: t("fpack7"), img: PinkCheck },
        { name: t("fpack8"), img: PinkCheck },
        { name: t("fpack9"), img: PinkCheck },
        { name: t("fpack10"), img: GrayCheck },
        { name: t("fpack11"), img: GrayCheck },
      ],
    },
    {
      title: 'Premium',
      price: '8900+ GEL',
      items: [
        { name: t("fpack1"), img: PinkCheck },
        { name: t("thirdpack1"), img: PinkCheck },
        { name: t("fpack3"), img: PinkCheck },
        { name: t("fpack4"), img: PinkCheck },
        { name: t("fpack5"), img: PinkCheck },
        { name: t("thirdpack2"), img: PinkCheck },
        { name: t("fpack7"), img: PinkCheck },
        { name: t("fpack8"), img: PinkCheck },
        { name: t("fpack9"), img: PinkCheck },
        { name: t("fpack10"), img: PinkCheck },
        { name: t("fpack11"), img: PinkCheck },
      ],
    },
  ];

    return ( 
        <div className={styles.packagesDiv}>
            <h1 className={styles.title}>{t("packages")}</h1>
            <img src={Underline} className={styles.underline} />
            <div className={styles.pricingContainer}>
      {data.map((plan, index) => (
        <div
          key={index}
          className={`${styles.pricingCard} ${
            plan.title === 'Standart' ? styles.highlighted : ''
          }`}
        >
          <h2 className={styles.planTitle}>{plan.title}</h2>
          <p className={styles.planPrice}>{plan.price}</p>
          <ul className={styles.planItems}>
            {plan.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`${styles.planItem} ${
                  item.img === GrayCheck ? styles.grayText : ''
                }`}
              >
                <img src={item.img} alt="check" className={styles.checkIcon} />
                {item.name}
              </li>
            ))}
          </ul>
          <button className={styles.purchaseButton}>
            Purchase
          </button>
        </div>
      ))}
    </div>
        </div>
     );
}

export default Packages;