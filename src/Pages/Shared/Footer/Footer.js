import React from 'react';
import { Link } from 'react-router-dom';
import footer from "../../../assets/images/footer.png";

const Footer = () => {
    return (
        <footer
            style={
                {
                    background: `url(${footer})`,
                    backgroundSize: 'cover'
                }
            }

            className=" p-10 ">
            <div className='footer'>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </nav>
            </div>

            <div className='mt-16 text-center'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;