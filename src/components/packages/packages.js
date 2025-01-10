import React, { Component } from 'react';
import styles from './packages.module.css'
import PinkCheck from '../../assets/Check2.svg'
import GrayCheck from '../../assets/Check1.svg'
import Underline from '../../assets/underline.svg'

const data = [
    {
      title: 'Basic',
      price: '1600 GEL',
      items: [
        { name: 'Unique design for your website', img: PinkCheck },
        { name: 'Informative basic website, one page', img: PinkCheck },
        { name: 'Functional Slider', img: PinkCheck },
        { name: 'Functional contact form', img: PinkCheck },
        { name: 'Free Domain', img: PinkCheck },
        { name: 'Deliver within 1-3 weeks', img: PinkCheck },
        { name: 'Logo', img: GrayCheck },
        { name: 'Banner', img: GrayCheck },
        { name: 'Social media management', img: GrayCheck },
        { name: 'Content management', img: GrayCheck },
        { name: 'Copywriting', img: GrayCheck },
      ],
    },
    {
      title: 'Standart',
      price: '3800 GEL',
      items: [
        { name: 'Unique design for your website', img: PinkCheck },
        { name: 'Informative basic website, one page', img: PinkCheck },
        { name: 'Functional Slider', img: PinkCheck },
        { name: 'Functional contact form', img: PinkCheck },
        { name: 'Free Domain', img: PinkCheck },
        { name: 'Deliver within 1-3 weeks', img: PinkCheck },
        { name: 'Logo', img: PinkCheck },
        { name: 'Banner', img: PinkCheck },
        { name: 'Copywriting', img: PinkCheck },
        { name: 'Content management', img: GrayCheck },
        { name: 'Social media management', img: GrayCheck },
      ],
    },
    {
      title: 'Premium',
      price: '6500 GEL',
      items: [
        { name: 'Unique design for your website', img: PinkCheck },
        { name: 'Informative basic website, one page', img: PinkCheck },
        { name: 'Functional Slider', img: PinkCheck },
        { name: 'Functional contact form', img: PinkCheck },
        { name: 'Free Domain', img: PinkCheck },
        { name: 'Deliver within 1-3 weeks', img: PinkCheck },
        { name: 'Logo', img: PinkCheck },
        { name: 'Banner', img: PinkCheck },
        { name: 'Social media management', img: PinkCheck },
        { name: 'Content management', img: PinkCheck },
        { name: 'Copywriting', img: PinkCheck },
      ],
    },
  ];

function Packages() {
    return ( 
        <div className={styles.packagesDiv}>
            <h1 className={styles.title}>Packages</h1>
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