import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import FloatingCTAS from '../FloatingCTAS'; // <-- NEW IMPORT

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Main content area where pages (Home, About, Contact) are rendered */}
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer />

            <FloatingCTAS /> {/* <-- NEW COMPONENT ADDED HERE */}
        </div>
    );
};

// **CRITICAL: Default export is included to resolve the error**
export default Layout;
