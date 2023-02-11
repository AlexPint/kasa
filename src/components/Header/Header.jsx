import React from 'react';
import logo from"../../assets/LOGO.png"
import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <header className='header'>
            <div className='header_logo'>
                <img src={logo} alt="logo Kasa" className='header_logo--img' />
            </div>
            <Nav />
        </header>
    );
};

export default Header;