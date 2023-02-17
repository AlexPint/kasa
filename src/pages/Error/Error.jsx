import React from 'react';
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <div className='error'>
            <p className='error_title'>404</p>
            <p className='error_txt'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                <p className="error_link">Retourner sur la page d'accueil</p>
            </Link>
        </div>
    );
};

export default Error;