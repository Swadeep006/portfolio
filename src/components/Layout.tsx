import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 bg-grid-pattern">
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-20"
            >
                {children}
            </motion.main>
        </div>
    );
};

export default Layout;
