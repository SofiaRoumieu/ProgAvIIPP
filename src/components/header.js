import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    return ( 
        <header> 
            <img alt='Logo Pokemon' src={logo}></img>
        </header>
    );
}

export default Header;