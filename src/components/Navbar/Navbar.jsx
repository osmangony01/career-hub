import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <p className='title'>JobHub</p>
            <div>
                <Link to="/">Home</Link>
                <Link to="/applied-jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/statistics">Statistics</Link>
            </div>
            <button className='btn-primary'><Link to="">Start Applying</Link></button>
        </nav>
    );
};

export default Navbar;