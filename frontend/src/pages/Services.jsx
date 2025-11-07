import React from "react";
import { Ship, Plane, Warehouse, Package, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Ocean Freight",
    desc: "Reliable Full Container Load (FCL) and Less Than Container Load (LCL) shipping solutions across global routes with trusted partners.",
    icon: <Ship className="w-12 h-12 text-blue-600" />,
    // Mapped to: public/SAP-supplychains.jpg (Large cargo ship at sea)
    img: "/public/SAP-supplychains.jpg", 
  },
  {
    title: "Air Freight",
    desc: "Fast, secure, and flexible international air cargo services for time-critical deliveries worldwide.",
    icon: <Plane className="w-12 h-12 text-blue-600" />,
    // Mapped to: public/Cargo-loading-on-plane-scaled.jpeg
    img: "/public/Cargo-loading-on-plane-scaled.jpeg",
  },
  {
    title: "Warehousing & Distribution",
    desc: "State-of-the-art warehousing solutions for storage, inventory management, and efficient last-mile distribution.",
    icon: <Warehouse className="w-12 h-12 text-blue-600" />,
    // Mapped to: public/storage-systems.1.2.avif (High-tech warehouse interior)
    img: "/public/storage-systems.1.2.avif",
  },
  {
    title: "Customs Clearance & Forwarding",
    desc: "Comprehensive customs documentation, compliance, and forwarding services ensuring hassle-free global trade.",
    icon: <Package className="w-12 h-12 text-blue-600" />,
    // Mapped to: public/Mundra-Port.jpg (Large port/logistics hub)
    img: "/public/Mundra-Port.jpg",
  },
  {
    title: "Transportation",
    desc: "End-to-end inland transportation and fleet management services that ensure safety and timely cargo delivery.",
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    // Mapped to: public/container-yard.jpg (Containers and transport vehicles)
    img: "/public/container-yard.jpg",
  },
];

const Services = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        // Using one of your high-impact images for the hero
        style={{ backgroundImage: "url('/public/cover photo.webp')" }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
            Simplifying logistics through innovation, precision, and global reach.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Integrated Solutions to Power Your Supply Chain
        </h2>
        {/* Adjusted grid to be dynamic, handling 5 items gracefully (2 rows of 3, with one empty space) */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Visual overlay for image */}
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
              </div>

              {/* Content Block */}
              <div className="p-6">
                <div className="mb-4 p-3 w-fit rounded-full bg-blue-100/70">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                    to="/contact"
                    className="inline-block text-yellow-500 font-semibold hover:text-yellow-400 transition"
                >
                    Get a Quote &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Move Your Business Forward</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Contact our logistics experts today and discover efficient, tailored solutions for your supply chain needs.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg text-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Services;
