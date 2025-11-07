import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTAS = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded menu (when open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-end space-y-3 mb-3"
          >
            {/* Contact Us */}
            <Link
              to="/contact"
              className="flex items-center bg-white text-blue-700 font-semibold shadow-lg rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h6l4 4v-4h4a2 2 0 002-2V8z"
                />
              </svg>
              Contact Us
            </Link>

            {/* Get a Quote */}
            <Link
              to="/quote"
              className="flex items-center bg-white text-blue-700 font-semibold shadow-lg rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18v4H3V3zm0 7h18v11H3V10zm8 5h2m-1-1v2"
                />
              </svg>
              Get a Quote
            </Link>

            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-blue-800 hover:bg-blue-900 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        title={isOpen ? "Close Menu" : "Quick Actions"}
      >
        {isOpen ? (
          // Close (X)
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat Bubble Icon (Main CTA)
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8m-8 4h5m-9 4v-1a2 2 0 012-2h8l4 4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingCTAS;
