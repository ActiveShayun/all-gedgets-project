import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" lg:flex flex-col items-center justify-start lg:justify-center lg:p-10 space-y-8 bg-white rounded-lg">
            <div className='lg:text-center space-y-2'>
                <h2 className='text-3xl font-bold'>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='flex flex-col text-left lg:flex-row justify-start lg:text-center lg:gap-20 space-y-3 lg:space-y-0'>
                <div>
                    <h6 className="footer-title">Services</h6>
                    <NavLink className="block">Product Support  </NavLink>
                    <NavLink className="block">Order Tracking</NavLink>
                    <NavLink className="block">  Shipping & Delivery  </NavLink>
                    <NavLink className="block">Returns</NavLink>
                </div>
                <div>
                    <h6 className="footer-title">Company</h6>
                    <NavLink className="block">About Us</NavLink>
                    <NavLink className="block">Careers</NavLink>
                    <NavLink className="block">Contact</NavLink>
                </div>
                <div>
                    <h6 className="footer-title">Legal</h6>
                    <NavLink className="block">About UsTerms of Service</NavLink>
                    <NavLink className="block">Privacy Policy</NavLink>
                    <NavLink className="block">Cookie PolicyCareers</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;