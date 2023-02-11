import React from 'react';
import bannerImg from"../../assets/Banner-img.jpg"

const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerImg} alt="bannière kasa" className='banner_img'/>
            <h1 className='banner_title'>
                Chez vous, partout et ailleurs
            </h1>
        </div>
    );
};

export default Banner;
