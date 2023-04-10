import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
            <div className='header'><Navbar /></div>
            <div className='header2'>
                <img className='bg1' src="/images/header_bg2.svg" alt="bg1" />
                <h3>This a text</h3>
                <img className='bg2' src="/images/header_bg1.svg" alt="bg2" />
            </div>
        </div>
    );
};

export default Header;