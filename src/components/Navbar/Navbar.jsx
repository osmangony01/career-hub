import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        if(isOpen){
            setIsOpen(false)
        }
        else{
            setIsOpen(true);
        }
        
    }
    return (


        //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //     <div class="container-fluid">
        //       <a class="navbar-brand" href="#">Navbar</a>
        //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //       </button>
        //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        //           <li class="nav-item">
        //             <a class="nav-link" aria-current="page" href="#">Home</a>
        //           </li>
        //           <li class="nav-item">
        //             <a class="nav-link" href="#">Link</a>
        //           </li>
        //         </ul>
        //           <button class="btn-primary" >Search</button>
        //       </div>
        //     </div>
        //   </nav>

        <div>
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
            <nav className='nav2'>
                <div className='nav-title'>
                    <p className='title'>JobHub</p>
                    <div onClick={handleHamburger}><FontAwesomeIcon icon={faBars}/></div>
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