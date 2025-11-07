// src/pages/Contact.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react'; 

// Using a high-impact logistics image from your assets
const CONTACT_HERO_IMAGE = "/public/Mundra-Port.jpg"; 

// Initial state for the combined form (matches your backend structure)
const initialFormState = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Ocean Freight',
    budget: '₹5,000 - ₹15,000', 
    message: ''
};

const Contact = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [status, setStatus] = useState(null); // 'success', 'error', 'submitting'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submits the form data to your existing backend endpoint
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Frontend validation for required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            setStatus({ type: 'error', message: 'Please ensure Name, Email, Phone, and the Message are all filled.' });
            return;
        }

        setStatus({ type: 'submitting', message: 'Sending Inquiry...' });

        try {
            // POST to your existing backend route: /api/contact
            await axios.post('/api/contact', formData);
            setStatus({ type: 'success', message: 'Inquiry sent successfully! A logistics specialist will contact you within 24 hours.' });
            setFormData(initialFormState); // Reset form
        } catch (error) {
            console.error('Contact form submission failed:', error);
            setStatus({ 
                type: 'error', 
                message: 'Failed to send message. Please try again or call us directly. Error: ' + (error.response?.data?.message || 'Server error.')
            });
        }
    };

    return (
        <div className="container mx-auto p-6 lg:p-10">
            {/* 1. Attractive Hero Header with Background Photo */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                // Combined styling: height, flex centering, background image, and rounded corners
                className="relative h-80 flex items-center justify-center text-center rounded-xl shadow-2xl bg-cover bg-center overflow-hidden mb-10"
                style={{ backgroundImage: `url(${CONTACT_HERO_IMAGE})` }} // Set image as background
            >
                {/* Dark overlay for contrast and professionalism */}
                <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
                
                <div className="relative z-20 text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
                        Let's Connect & Optimize Your Supply Chain
                    </h1>
                    <p className="mt-3 text-xl font-light text-yellow-400 max-w-3xl mx-auto drop-shadow-md">
                        Get a fast, personalized quote or speak directly with a logistics expert today.
                    </p>
                </div>
            </motion.header>
            

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* 3. Contact Form (Main Conversion Area) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-yellow-500"
                >
                    <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-3">Request a Logistics Quote</h2>
                    
                    {/* Status Messages */}
                    {status && status.type === 'success' && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                            <p className="font-bold">Success!</p>
                            <p className="text-sm">{status.message}</p>
                        </motion.div>
                    )}
                    {status && status.type === 'error' && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                            <p className="font-bold">Error!</p>
                            <p className="text-sm">{status.message}</p>
                        </motion.div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1: Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name (Required)" required
                                className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Business Email (Required)" required
                                className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number (Required)" required
                                className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company/Organization (Optional)"
                                className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        {/* Row 2: Shipment Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Shipment/Service</label>
                                <select name="projectType" value={formData.projectType} onChange={handleChange} 
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500">
                                    <option value="Ocean Freight">Ocean Freight (FCL/LCL)</option>
                                    <option value="Air Freight">Air Freight (Time-Sensitive)</option>
                                    <option value="Road/Inland Transport">Road/Inland Transport (FTL/LTL)</option>
                                    <option value="Warehousing/SCM">Warehousing / SCM</option>
                                    <option value="Customs Clearance">Customs Clearance Only</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget (Per Shipment/Project)</label>
                                <select name="budget" value={formData.budget} onChange={handleChange} 
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500">
                                    <option value="< ₹50,000">Less than ₹50,000</option>
                                    <option value="₹50,000 - ₹5,00,000">₹50,000 - ₹5,00,000</option>
                                    <option value="₹5,00,000 - ₹10,00,000">₹₹5,00,000 - ₹10,00,000</option>
                                    <option value="> ₹10,0,000">Over ₹10,0,000</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message/Details (Required)</label>
                            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about the commodity, origin, destination, and dimensions..." required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        
                        {/* Submission Button */}
                        <button type="submit" disabled={status && status.type === 'submitting'}
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md disabled:bg-gray-400">
                            {status && status.type === 'submitting' ? status.message : 'Submit Inquiry & Get Started'}
                        </button>
                    </form>
                </motion.div>

                {/* 4. Contact Information & Trust Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-1 bg-blue-900 text-white p-8 rounded-xl shadow-2xl h-fit"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-3">Direct Contact</h2>
                    
                    <div className="space-y-6">
                        {/* Phone Contact */}
                        <div className="flex items-start">
                            <Phone className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" />
                            <div>
                                <span className="block font-semibold text-sm opacity-80">24/7 Logistics Support</span>
                                <span className="block text-lg">+91 7700909747</span> 
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" />
                            <div>
                                <span className="block font-semibold text-sm opacity-80">General Inquiries</span>
                                <span className="block text-lg">contact@flyx-logistics.com</span> 
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" />
                            <div>
                                <span className="block font-semibold text-sm opacity-80">Head Office</span>
                                <span className="block text-lg">Building no. 2, Ground floor/7, Nandanvan Complex, Ajivali, Panvel - 410221</span>
                            </div>
                        </div>

                        {/* Working Hours (New Trust Element) */}
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" />
                            <div>
                                <span className="block font-semibold text-sm opacity-80">Office Hours (IST)</span>
                                <span className="block text-lg">Mon - Sat: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-8 mb-3 border-t border-blue-700 pt-3">Quick Access</h3>
                    <Link to="/projects" className="block text-sm font-medium text-yellow-400 hover:text-yellow-300 transition">
                        &rarr; View Case Studies
                    </Link>
                    <Link to="/services" className="block text-sm font-medium text-yellow-400 hover:text-yellow-300 transition mt-2">
                        &rarr; Explore Services
                    </Link>
                </motion.div>
            </div>
            
            {/* 5. Map Embed Section (NEW) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600"
            >
                <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b pb-3">Find Our Head Office</h2>
                <div className="rounded-lg overflow-hidden h-96 w-full">
                    {/* Google Maps Embed for Panvel Head Office */}
                    <iframe
                        src="https://maps.google.com/maps?q=Building%20no.%202,%20Ground%20floor%2F7,%20Nandanvan,%20Ajivali,%20Panvel%20-%20410221&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FlyX Global Logistics Head Office Location"
                    ></iframe>
                </div>
            </motion.div>


            {/* 6. Final CTA/Trust Bar (Below the main content) */}
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
                 className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-xl shadow-md text-center"
            >
                <h3 className="text-xl font-bold text-gray-800 mb-2">Not ready for a quote?</h3>
                <p className="text-gray-600">
                    Explore our <Link to="/services" className="text-blue-600 font-semibold hover:text-yellow-500 underline">full list of services</Link> to find the perfect fit for your supply chain needs.
                </p>
            </motion.div>
        </div>
    );
};

export default Contact;