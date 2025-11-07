// src/pages/TermsOfService.jsx

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    // Current Year for boilerplate text
    const currentYear = new Date().getFullYear(); 
    // Legal Entity Name
    const companyName = "FlyX Global Logistics LLP";
    const companyAddress = "building no. 2, ground floor/7, nandanvan, ajivali, panvel - 410221";

    return (
        <div className="container mx-auto p-6 lg:p-10">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 bg-blue-900 text-white mb-10 rounded-xl shadow-2xl text-center"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                    Terms of Service
                </h1>
                <p className="mt-2 text-lg text-yellow-400">
                    Last Updated: October 24, {currentYear}
                </p>
            </motion.header>

            <section className="max-w-5xl mx-auto space-y-10 text-gray-700 leading-relaxed">
                
                {/* 1. Acceptance of Terms */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using the website ("Site") operated by {companyName} ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the service. These Terms govern your access to and use of our website, services, and content.
                    </p>
                </div>

                {/* 2. Logistics Service Disclaimer */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">2. Scope of Logistics Services</h2>
                    <p>
                        The Company provides freight forwarding, warehousing, and integrated logistics solutions. All services arranged through this Site (including quotes and service inquiries) are subject to a separate, formal, written **Logistics Services Agreement** between the client and {companyName}.
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>Quotes:</strong> Any rate quote provided via the website is for estimation purposes only and is subject to change without notice based on final cargo dimensions, weight, commodity, fuel surcharges, and market conditions.</li>
                        <li><strong>Liability:</strong> The Company's liability for loss, damage, or delay of goods is governed exclusively by the terms of the formal bill of lading or a specific contract, and typically follows international conventions (e.g., Hague-Visby Rules, Warsaw/Montreal Convention).</li>
                        <li><strong>No Tracking Guarantee:</strong> The real-time visibility and accuracy of shipment tracking (if provided) depend on third-party carriers and port systems and cannot be guaranteed.</li>
                    </ul>
                </div>

                {/* 3. User Obligations */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">3. User Obligations</h2>
                    <p>
                        You warrant that all information you provide to us through the contact forms, including commodity descriptions, weights, and values, is accurate, complete, and legally compliant. You agree not to use the Site to solicit or transmit any prohibited, dangerous, or illegal goods.
                    </p>
                </div>

                {/* 4. Intellectual Property */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">4. Intellectual Property Rights</h2>
                    <p>
                        All content on the Site, including text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of {companyName} or its suppliers and protected by copyright and other laws.
                    </p>
                </div>
                
                {/* 5. Limitation of Liability */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">5. Limitation of Liability</h2>
                    <p>
                        In no event shall {companyName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service.
                    </p>
                </div>

                {/* 6. Governing Law */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">6. Governing Law & Jurisdiction</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree that any dispute arising out of or relating to these Terms will be resolved in the competent courts located in Panvel, Maharashtra, India.
                    </p>
                </div>

                {/* 7. Contact Information */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-900 border-b pb-2">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
                        <br/>
                        <strong>Email:</strong> info@flyxgloballogistics.com
                        <br/>
                        <strong>Address:</strong> {companyAddress}
                    </p>
                </div>

                <div className="h-10"></div>
            </section>
        </div>
    );
};

export default TermsOfService;