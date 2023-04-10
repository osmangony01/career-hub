import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <div className='header'>
                <Navbar />
                <div className='header-info'>
                    <div className='info-details'>
                        <h2>One Step Closer To Your <br /><span className='dream-job'>Dream Job</span></h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started</button>
                    </div>
                    <div>
                        <img src="/images/job-interview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='change-layout'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;