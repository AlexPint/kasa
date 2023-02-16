import React from 'react';

const Host = (host) => {
    return (
        <div className='host'>
            <div className='host_name'>
                <p>{host.name}</p>
            </div>
            <img 
                className='host_picture'
                src={host.picture}
                alt="hote des logements kasa"
            />
        </div>
    );
};

export default Host;