import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <nav className='nav'>
            <p className='title'>JobHub</p>
            <div>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </div>
            <button className='btn-primary'><Link to="">Start Applying</Link></button>
        </nav>
    );
};

export default Navbar;