import React from 'react';
import Star from"../../assets/star.svg"
import GStar from"../../assets/grey-star.svg"


const Rate = () => {
    return (
        <div className='rate'>
            <img src={Star} alt="étoile de notation" className='star'/>
            <img src={Star} alt="étoile de notation" />
            <img src={Star} alt="étoile de notation" />
            <img src={GStar} alt="étoile de notation" />
            <img src={GStar} alt="étoile de notation" />
        </div>
    );
};

export default Rate;