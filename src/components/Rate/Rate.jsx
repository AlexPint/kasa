import React from 'react';
import Star from"../../assets/star.svg"
import EmptyStar from"../../assets/grey-star.svg"


const Rate = ({rating}) => {
    
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className='rate'>
            {stars.map((star) => (
                <img
                key={star}
                src={rating >= star ? Star : EmptyStar}
                alt='étoile de notation'
                className='star'
                />
            ))}
        </div>
    );
};

export default Rate;