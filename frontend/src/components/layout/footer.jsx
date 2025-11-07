// src/components/layout/footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/converted_image.png'; // Import your FlyX logo
import { Phone, MapPin } from 'lucide-react'; // Import icons for visual appeal

const Footer = () => {
    // FIX: Define currentYear here so it can be used in the JSX
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="bg-blue-900 text-white mt-auto border-t-4 border-yellow-500">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"> {/* Reduced top/bottom padding */}
                
                {/* Main Link Grid & Contact Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 border-b border-blue-800 pb-8 mb-4"> {/* Changed to 3 columns on desktop */}
                    
                    {/* Column 1: Branding and Contact (Most critical info) */}
                    <div className="col-span-2 md:col-span-1">
                        {/* Logo/Brand Section */}
                        <div className="flex items-center mb-3"> 
                            <img src={Logo} alt="FlyX Logo" className="h-9 w-auto mr-2" /> 
                            <span className="text-xl font-extrabold text-white tracking-wider">
                                FLYX GLOBAL<span className="text-yellow-400"> LOGISTICS LLP</span>
                            </span>
                        </div>
                        
                        {/* High-Impact Contact */}
                        <h3 className="text-base font-semibold mb-2 text-yellow-400 mt-4">Speak to an Expert</h3>
                        <a href="tel:+917700909747" className="flex items-center text-lg font-bold text-yellow-500 hover:text-white transition duration-150 mb-3">
                            <Phone className="w-4 h-4 mr-2" /> 
                            +91 7700909747
                        </a>

                        {/* Address (HIGHLIGHTED) */}
                        <div className="flex items-start text-blue-300 text-sm mt-4">
                            <MapPin className="w-5 h-5 mr-2 mt-0 flex-shrink-0 text-yellow-500" /> {/* Larger icon, yellow highlight */}
                            <span className="text-base font-semibold text-white"> {/* Increased size and made white/bold */}
                                Head Office: Building no. 2, Ground floor/7, Nandanvan, Ajivali, Panvel - 410221
                            </span>
                        </div>
                        

                    </div>

                    

                    {/* Column 2: Quick Links (Combined Services & Company) */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-yellow-400">Quick Links</h3>
                        <ul className="space-y-2 text-sm"> {/* More compact list */}
                            <li><Link to="/contact" className="hover:text-yellow-400 transition duration-150 font-bold">Get a Quick Quote &rarr;</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">All Services</Link></li>
                            <li><Link to="/projects" className="hover:text-yellow-400 transition duration-150">Case Studies</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-400 transition duration-150">About Us</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Main Services Breakdown */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-yellow-400">Logistics Modes</h3>
                        <ul className="space-y-2 text-sm"> {/* More compact list */}
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">Ocean Freight (FCL/LCL)</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">Air Freight</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">Warehousing & SCM</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">Inland Transport</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 transition duration-150">Customs Clearance</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright Row (Final small row with legal links) */}
                <div className="text-center md:flex md:justify-between items-center text-xs text-blue-400 pt-4"> 
                    {/* Used currentYear here */}
                    <p className="mb-2 md:mb-0">&copy; {currentYear} FlyX Global Logistics LLP. All rights reserved.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
                        <span>|</span>
                        <Link to="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;