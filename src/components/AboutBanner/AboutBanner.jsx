import React from 'react';
import IMGG from"../../assets/IMGG.jpg"

const AboutBanner = () => {
    return (
        <div className='abanner'>
            <img src={IMGG} alt="bannière kasa" className='abanner_img'/>
        </div>
    );
};

export default AboutBanner;
