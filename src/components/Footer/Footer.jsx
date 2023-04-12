import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <div>
                    <h2>AspirantHub</h2>
                    <p><small>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</small></p>
                    <div className='footer-logo'>
                        <span><img className='logo-img' src="/images/facebook.svg" alt="" /></span>
                        <span><img className='logo-img' src="/images/twitter.svg" alt="" /></span>
                        <span><img className='logo-img' src="/images/instagram.svg" alt="" /></span>
                    </div>
                </div>
                <div>
                    <p className='info-title'>Company</p>
                    <p><small>About Us</small></p>
                    <p><small>Work</small></p>
                    <p><small>Latest News</small></p>
                    <p><small>Careers</small></p>

                </div>
                <div>
                    <p className='info-title'>Product</p>
                    <p><small>Prototype</small></p>
                    <p><small>Plans & Pricing</small></p>
                    <p><small>Customers</small></p>
                    <p><small>Integrations</small></p>
                </div>
                <div>
                    <p className='info-title'>Support</p>
                    <p><small>Help Desk</small></p>
                    <p><small>Sales</small></p>
                    <p><small>Become a Partner</small></p>
                    <p><small>Developers</small></p>
                </div>
                <div>
                    <p className='info-title'>Contact</p>
                    <p><small>524 Broadway , NYC</small></p>
                    <p><small>+1 777 - 978 - 5570</small></p>
                </div>
            </div>
            <hr />
            <div className='footer-info-bottom'>
                <p><small>@2023 AspirantHub. All Rights Reserved</small></p>
                <p><small>Powered by AspirantHub</small></p>
            </div>
        </div>
    );
};


export default Footer;