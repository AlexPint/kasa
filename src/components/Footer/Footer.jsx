import React from 'react';
import logoW from"../../assets/LOGO-white.svg"


const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <img src={logoW} alt="logo kasa en blanc" />
                <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;