import React, { Component } from 'react';
import styles from './footer.module.css'
import phone from '../../assets/phoneicon.svg'
import email from '../../assets/Emailicon.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/Facebook.svg'

function Footer() {
    return ( 
        <div className={styles.footer}>
            <h1>Contact</h1>
            <div className={styles.footerItems}>
                    <span>
                        <img src={phone} />
                        <p>+995 551 25 50 07</p>
                    </span>
                    <span>
                        <img src={email} />
                        <p>dvise.official@gmail.com</p>
                    </span>
                    <span>
                        <img src={instagram} />
                        <p>dvise_official</p>
                    </span>
                    <span>
                        <img src={facebook} />
                        <p>Dvise</p>
                    </span>
            </div>
            <div className={styles.rights}>
                <p>Copyright © 2025 - All Rights Reserved</p>
            </div>
        </div>
     );
}

export default Footer;