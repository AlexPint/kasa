import React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav_ul'>
                <Link to="/">
                <li className="nav_li">Accueil</li>
                </Link>
                <Link to="/about">
                <li className="nav_li">A Propos</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;