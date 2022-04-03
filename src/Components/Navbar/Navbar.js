import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-link'>
            <Link to='/'>HOME</Link>
            <Link to='/reviews'>REVIEWS</Link>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/about'>ABOUT</Link>
        </nav>
    );
};

export default Navbar;