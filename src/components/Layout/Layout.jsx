import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='header'>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;