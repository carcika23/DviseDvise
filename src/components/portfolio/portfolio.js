import React, { useState, useEffect, useRef } from 'react';
import styles from './portfolio.module.css'
import Underline from '../../assets/underline.svg'
import { Carousel, Card, Button, Modal } from 'antd';
import './slides.css'
import Slider from "react-slick";
import Open from '../../assets/Open.svg'
import Performators from '../../assets/performators.svg'
import web1 from '../../assets/web1.svg'
import web2 from '../../assets/web2.svg'
import web3 from '../../assets/web3.svg'
import web4 from '../../assets/web4.svg'
import { useTranslation } from 'react-i18next';

function Portfolio() {

      const [scrolling, setScrolling] = useState(false);
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const { t } = useTranslation();
      

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 768, // Mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const cards = [
        { id: 1, link: 'tuclothing.sainsburys.co.uk', img: web2, open: Open },
        { id: 2, link: 'lilyhomes.com.au', img: web3, open: Open },
        { id: 3, link: 'performators.com', img: Performators, open: Open },
        { id: 4, link: 'rwsteelservices.co.uk', img: web1, open: Open },
        { id: 5, link: 'prokura.com', img: web4, open: Open },
      ];
    

    return ( 
        <div className={styles.portfolio}>
            <h1 className={styles.title}>{t("portfolio")}</h1>
            <img src={Underline} className={styles.underline} />

            <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="carousel-card">
            <img className='portfolioImage' src={card.img} />
            <h3>{card.link}</h3>
            <img src={card.open} className='open' />
          </div>
        ))}
      </Slider>
    </div>

        </div> 
    );
}

export default Portfolio;