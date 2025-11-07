// src/components/IndustrySolutions.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Zap, Shirt, Atom, Wrench, Package, Truck, Utensils } from "lucide-react";
import { motion } from "framer-motion";

// 1. Define Industry Data based on common logistics sectors (inspired by Maersk)
const industrySectors = [
    {
        title: "Retail & E-commerce",
        icon: <Package className="w-8 h-8" />,
        snippet: "Agile, omnichannel logistics for seamless order fulfillment, inventory management, and last-mile delivery to meet consumer speed demands.",
        link: "/contact?industry=Retail" // Direct link for qualified leads
    },
    {
        title: "Chemicals & Energy",
        icon: <Atom className="w-8 h-8" />,
        snippet: "Secure and compliant transport of hazardous and non-hazardous materials, ensuring safety and integrity across the supply chain.",
        link: "/contact?industry=Chemicals"
    },
    {
        title: "Manufacturing & Automotive",
        icon: <Wrench className="w-8 h-8" />,
        snippet: "Just-In-Time (JIT) delivery of components and spare parts, supporting production lines with precision and reducing downtime.",
        link: "/contact?industry=Manufacturing"
    },
    {
        title: "FMCG (Consumer Goods)",
        icon: <Utensils className="w-8 h-8" />,
        snippet: "High-volume, rapid-turnover logistics optimized for cost-efficiency, speed, and deep market distribution for fast-moving goods.",
        link: "/contact?industry=FMCG"
    },
    {
        title: "Fashion & Lifestyle",
        icon: <Shirt className="w-8 h-8" />,
        snippet: "Flexible logistics solutions that handle seasonal peaks, product launches, and returns with visibility and speed.",
        link: "/contact?industry=Fashion"
    },
    {
        title: "Technology & Electronics",
        icon: <Zap className="w-8 h-8" />,
        snippet: "High-security transport and white-glove services for high-value and sensitive electronic components and finished goods.",
        link: "/contact?industry=Technology"
    },
];

const IndustrySolutions = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-900">
                    Solutions Tailored to Your Industry
                </h2>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Global logistics requires specialized knowledge. We speak your language and understand your supply chain challenges.
                </p>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industrySectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-yellow-500 hover:shadow-2xl hover:border-blue-600 transition duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 rounded-full bg-yellow-500/20 text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition">
                                    {sector.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                                    {sector.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4 text-sm">{sector.snippet}</p>
                            
                            {/* Call to Action */}
                            <Link
                                to={sector.link}
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-yellow-500 transition text-md"
                            >
                                Get Sector-Specific Quote 
                                <span className="ml-2">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;