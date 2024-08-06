import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    return (
        <div className="footer " id='footer'>
            <div className="social-icons flex justify-center">
                <FaInstagram className="icon mx-2" />
                <FaFacebookF className="icon mx-2" />
                <FaLinkedinIn className="icon mx-2" />
                <FaTwitter className="icon mx-2" />
            </div>
            <div className="copyright text-center">
                &copy; 2024 Restaurant. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
