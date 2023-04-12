import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true);
        }
    }

    return (
        <div>
            <nav className='nav'>
                <p className='title'><Link to="/">AspirantHub</Link></p>
                <div>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
                <button className='btn-primary'><Link to="">Start Applying</Link></button>
            </nav>
            <nav className='nav2'>
                <div className='nav-title'>
                    <p className='title'>JobHub</p>
                    <div onClick={handleHamburger}><FontAwesomeIcon icon={faBars} /></div>
                </div>
                {
                    isOpen && <div className='nav2-info'>
                        <div>
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                            <ActiveLink to="/statistics">Statistics</ActiveLink>
                            <ActiveLink to="/blog">Blog</ActiveLink>
                        </div>
                        <button className='btn-primary2'><Link to="">Start Applying</Link></button>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Navbar;