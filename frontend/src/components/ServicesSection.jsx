import React, { useState, useEffect } from "react";
import axios from "axios";
import { Truck, Globe, Warehouse, Plane, Box, FileText, XCircle } from "lucide-react"; 

// Mapping expected service titles to Lucide icons
const iconMap = {
    'Ocean Freight': Globe,
    'Air Freight': Plane,
    'Warehousing': Warehouse,
    'Road Transport': Truck,
    'Inland Transportation': Truck,
    'Contract Logistics & SCM': Box,
    'Customs Clearance & Trade': FileText,
};

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Fetch from your backend route: GET /api/services
                const response = await axios.get('/api/services'); 
                setServices(response.data);
            } catch (err) {
                console.warn("Could not fetch services from API. Using placeholder data for demo.");
                // Use placeholder data for robustness if API fails (matching expected backend structure)
                setServices([
                    { title: "Ocean Freight", shortDescription: "Global container shipping for FCL and LCL cargo.", iconUrl: "" },
                    { title: "Air Freight", shortDescription: "Fast, reliable air transport for time-sensitive and high-value goods.", iconUrl: "" },
                    { title: "Warehousing", shortDescription: "Secure storage, fulfillment, and advanced inventory management.", iconUrl: "" },
                    { title: "Road Transport", shortDescription: "Efficient domestic and cross-border trucking solutions (FTL/LTL).", iconUrl: "" },
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    // Function to render the correct icon component
    const renderIcon = (title) => {
        const IconComponent = iconMap[title] || Box; // Default to Box if title not found
        return <IconComponent className="w-8 h-8" />;
    };

    return (
        <section className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Integrated Logistics Solutions</h2>
            {loading ? (
                <div className="text-center">Loading services...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                    {services.map((s, i) => (
                        <div key={s.title || i} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border-t-4 border-blue-600">
                            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
                                {renderIcon(s.title)}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {s.shortDescription || s.description}
                            </p>
                            <a href="/services" className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition text-sm">
                                Learn More &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ServicesSection;
