// src/components/ClientTrust.jsx

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Placeholder data for logos (NOTE: You must create and place these logos 
// in your /public folder for them to display correctly.)
const clientLogos = [
    { name: "TechCorp", src: "/logos/techcorp.svg" },
    { name: "RetailGiant", src: "/logos/retailgiant.svg" },
    { name: "AutoFlow", src: "/logos/autoflow.svg" },
    { name: "ChemPro", src: "/logos/chempro.svg" },
    { name: "GlobalFoods", src: "/logos/globalfoods.svg" },
    { name: "EcomFast", src: "/logos/ecomfast.svg" },
];

const ClientTrust = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Main Testimonial Section (Social Proof) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-blue-50 p-10 rounded-xl shadow-2xl border-l-8 border-yellow-500 mb-16"
                >
                    <Quote className="w-12 h-12 text-blue-600 mb-6" />
                    <p className="text-2xl font-serif italic text-gray-800 leading-relaxed mb-6">
                        "FlyX Global Logistics transformed our supply chain resilience. We saw a 15% reduction in transit times and their end-to-end customs clearance eliminated all our previous bottlenecks. A truly integrated, reliable partner."
                    </p>
                    <div className="font-semibold text-lg text-gray-900">
                        Sameer Mohite
                    </div>
                    <div className="text-blue-600 font-medium">
                        Logistics Director, AMAT logistics
                    </div>
                </motion.div>


                
            </div>
        </section>
    );
};

export default ClientTrust;