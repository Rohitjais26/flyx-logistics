// client/src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE_PATH = "/cargo-ship-sea.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FALLBACK_IMAGE_PATH})` }}
    >
      {/* ===== Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/60 to-blue-900/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-yellow-500/20 z-10"></div>

      {/* ===== Hero Content ===== */}
      <motion.div
        className="relative z-20 text-center text-white px-4 sm:px-8 md:px-10 lg:px-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl font-light mb-4 sm:mb-6 text-yellow-400 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your Trusted Partner in Every Mile
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          FlyX GLOBAL LOGISTICS
          <br className="hidden sm:block" />
          <span className="text-blue-300 sm:text-yellow-400 block sm:inline">
            Seamless Global Supply Chain
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {/* Smaller Button */}
       <Link
  to="/contact"
  className="hero-quote-btn px-6 py-3 text-base font-semibold bg-white text-blue-900 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
>
  Request a Quote Now
</Link>

          {/* Secondary Button */}
          <Link
            to="/services"
            className="flex items-center justify-center space-x-2 text-base sm:text-lg font-semibold border-2 border-white text-white rounded-full px-8 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:bg-white hover:text-blue-900"
          >
            <ChevronRight className="w-5 h-5" />
            <span>Learn More</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-xs sm:text-sm mb-1 tracking-widest uppercase text-gray-300">
          Scroll
        </span>
        <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-yellow-400 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
