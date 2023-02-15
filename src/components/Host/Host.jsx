import React from 'react';

const Host = (host) => {
    return (
        <div className='host'>
            <div className='host_name'>
                <p>{host.name}</p>
            </div>
            <div className={host.picture}></div>
        </div>
    );
};

export default Host;