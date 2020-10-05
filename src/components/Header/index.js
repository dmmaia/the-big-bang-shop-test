import React from 'react';

import './styles.css';
import logo from '../../assets/logo-header.png';
import {FaSearch, FaRegUserCircle, FaRegHeart, FaShoppingBasket, FaSignOutAlt, FaBars} from 'react-icons/fa'
import boxIcon from '../../assets/box-icon.png'

function Header() {
  return (
    <header className="header">
        <ul className="header-menu mobile-config">
            <span><li>INÍCIO</li></span>
            <li>BLOG</li>
            <li>LOJA</li>
            <li>PODCASTS</li>
            <li>CURSOS</li>
            <li>CONTATO</li>
        </ul>

        <img alt="yamah logo" src={logo} className="logo-image" />

        <ul className="icons">
            <li className="search-desktop"><FaSearch /></li>
            <li><FaRegUserCircle /></li>
            <li className="box-icon-desktop"><img alt="box icon" src={boxIcon} /></li>
            <li><FaRegHeart /></li>
            <li><span className="basket-quantity">99</span><FaShoppingBasket /></li>
            <li className="exit-icon-desktop"><FaSignOutAlt /></li>
            <li className="menu-sandwisch"><FaBars /></li>
        </ul>
    </header>
  );
}

export default Header;