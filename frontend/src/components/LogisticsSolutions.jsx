// src/components/LogisticsSolutions.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; 

// Define the data for your Logistics Solutions cards
const logisticsSolutionsData = [
    {
        id: 1,
        title: "Warehouse Solutions",
        // Mapped to: C:\Users\...\public\storage-systems.1.2.avif
        image: "/public/storage-systems.1.2.avif", 
        subLinks: [
            { text: "Warehousing for Small & Medium Businesses", link: "/contact?solution=SMBWarehouse" },
            { text: "Warehousing for Enterprises", link: "/contact?solution=EnterpriseWarehouse" },
        ],
        description: "Optimized storage and inventory management for businesses of all sizes."
    },
    {
        id: 2,
        title: "Transport and Distribution",
        // Mapped to: C:\Users\...\public\trucks.jpeg
        image: "/public/trucks.jpeg", 
        subLinks: [
            { text: "Transportation Management for Small & Medium Businesses", link: "/contact?solution=SMBTransport" },
            { text: "Transporting Management for Enterprises", link: "/contact?solution=EnterpriseTransport" },
        ],
        description: "Efficient and reliable movement of goods across all modes of transport."
    },
    {
        id: 3,
        title: "Contract Logistics",
        // Mapped to: C:\Users\...\public\business-partners.jpg
        image: "/public/business-partners.jpg", 
        subLinks: [
            { text: "Find Out More About Contract Logistics", link: "/contact?solution=ContractLogistics" },
        ],
        description: "Customized, long-term logistics partnerships to optimize your supply chain."
    },
];

const LogisticsSolutions = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
                    Your Tailored Logistics Solutions
                </h2>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    From warehousing to global distribution, we provide comprehensive services designed for your unique needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {logisticsSolutionsData.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image Section */}
                            <div className="w-full h-56 overflow-hidden">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                                    {solution.title}
                                </h3>
                                
                                {/* Sub-links */}
                                <div className="space-y-3 mt-4">
                                    {solution.subLinks.map((subLink, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subLink.link}
                                            className="flex items-center text-blue-600 hover:text-yellow-500 font-medium transition duration-200 text-base"
                                        >
                                            {subLink.text} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticsSolutions;