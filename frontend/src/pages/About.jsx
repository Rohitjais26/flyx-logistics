// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Using a general high-impact logistics image from your assets for the header cover
const HEADER_COVER_IMAGE = "/public/cargo-ship-sea.jpg"; 

const About = () => {
    return (
        <div className="container mx-auto p-6 lg:p-10">
            {/* 1. Hero Header - Founder's Name, Title, and PHOTO as a Cover */}
            <motion.header 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-80 overflow-hidden mb-10 rounded-xl shadow-2xl"
            >
                {/* Background Image */}
                <img 
                    src={HEADER_COVER_IMAGE}
                    alt="Global Logistics Operations"
                    className="w-full h-full object-cover brightness-[.35]" // Darken the image for text contrast
                />
                
                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                        A Message from Our Founder
                    </h1>
                    <p className="mt-2 text-xl font-light text-yellow-400 max-w-4xl mx-auto">
                        Ajay Kamble, Founder & Managing Director
                    </p>
                </div>
            </motion.header>

            {/* 2. Main Narrative - The Founder's Letter (Unchanged) */}
            <section className="max-w-4xl mx-auto mb-16">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white rounded-xl shadow-2xl border-t-4 border-blue-600"
                >
                    <blockquote className="text-gray-800 text-2xl font-serif leading-snug italic border-l-4 border-yellow-500 pl-6 mb-8">
                        "After dedicating more than 25 years of my professional journey to the logistics industry, I realized one simple truth — logistics is not just about moving goods; it’s about building connections that move the world."
                    </blockquote>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            My career began with humble beginnings and evolved through decades of dedication, learning, and international exposure. Working with Inter National Set for Wadar Kerry Logistics, one of Hong Kong’s top-ranking logistics companies, gave me the opportunity to understand the global logistics ecosystem at its core — from complex freight operations to customer-centric service excellence.
                        </p>

                        <p>
                            With this strong foundation, I established "FlyX Global Logistics LLP" — a company built on the values of trust, innovation, and integrity, with a vision to redefine logistics on a global scale.
                        </p>

                        <p>
                            At FlyX Global Logistics, "our mission is to deliver seamless and reliable logistics solutions" that empower international trade and connect businesses across continents. Every shipment we handle represents our commitment to precision, transparency, and customer satisfaction.
                        </p>

                        <p>
                            Driven by a passion for logistics and a dream to build India’s most trusted global logistics brand, I believe that true success lies in long-term partnerships and delivering excellence — consistently, every single time.
                        </p>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-gray-200">
                        <p className="font-bold text-xl text-blue-900 leading-snug">– Ajay Kamble</p>
                        <p className="text-md text-gray-600">Founder & Managing Director, FlyX Global Logistics LLP</p>
                        <p className="mt-4 text-sm italic text-gray-500">
                            I invite you to join us on this journey as we continue to connect markets, bridge opportunities, and move the world forward — together.
                        </p>
                    </div>
                </motion.div>
            </section>
            
            {/* 3. Final CTA - Simplified (Unchanged) */}
            <section className="py-12 bg-blue-50 text-center rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Partner with India's Most Trusted Brand?</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Connect with our team to experience the FlyX commitment to excellence firsthand.
                </p>
                <Link to="/contact" className="inline-block bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
                    Request a Consultation
                </Link>
            </section>
        </div>
    );
};

export default About;