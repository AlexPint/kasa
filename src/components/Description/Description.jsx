import React from 'react';

const Description = ({title, location}) => {
    return (
        <div className='logement'>
            <h2 className='logement_title'>{title}</h2>
            <h3 className='logement_location'>{location}</h3>
        </div>
    );
};

export default Description;