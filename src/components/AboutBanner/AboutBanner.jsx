import React from 'react';
import abannerImg from"../../assets/About-banner.jpg"

const AboutBanner = () => {
    return (
        <div className='abanner'>
            <img src={abannerImg} alt="bannière kasa" className='abanner_img'/>
        </div>
    );
};

export default AboutBanner;
