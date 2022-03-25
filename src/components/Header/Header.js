import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='pages'>
                <a href="/Shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;