import React from 'react';
import logo from"../../assets/LOGO.png"
import Nav from '../Nav/Nav';


const Header = () => {
    return (
        <header>
            <div className='header'>
                <div className='header_logo'>
                    <img src={logo} alt="logo Kasa" className='header_logo--img' />
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;