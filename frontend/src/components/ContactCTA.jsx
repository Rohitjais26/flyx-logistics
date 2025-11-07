import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Move Forward?</h2>
      <p className="mb-6 text-lg">
        Let's streamline your logistics operations with smart global solutions.
      </p>
      <Link
        to="/contact"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
      >
        Contact Us Today
      </Link>
    </section>
  );
};

export default ContactCTA;
