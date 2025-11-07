// client/src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero'; 


import ContactCTA from "../components/ContactCTA";
import FloatingCTAS from "../components/FloatingCTAS";
import ServicesSection from "../components/ServicesSection";
import IndustrySolutions from '../components/IndustrySolutions'; // <--- NEW IMPORT
import LogisticsSolutions from '../components/LogisticsSolutions'; // <--- NEW IMPORT
import ClientTrust from "../components/ClientTrust";


const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <ServicesSection />
      <LogisticsSolutions />
      <IndustrySolutions />
      <ClientTrust />
      <ContactCTA />
      <FloatingCTAS />
    </div>
  );
};

export default Home;