import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the 3D background component

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkIsMobile();
  }, []);

  // Handle the link click for mobile users
  const handleLinkClick = (e) => {
    if (isMobile) {
      e.preventDefault(); // Prevent the link from opening
      alert("Please use a laptop or desktop to access this feature.");
    }
  };

  return (
    <section className="relative bg-gray-900 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 3D Background Animation */}
      <BackgroundAnimation />

      <div className="container mx-auto text-center relative z-10 my-1">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4"
        >
          The Ultimate ERP Solution
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-6"
        >
          Streamline your business with our powerful ERP system.
        </motion.p>

        {/* Call-to-Action (CTA) */}
        <div className="flex items-center justify-center pt-5 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              to="https://erp-deployment.vercel.app/"
              onClick={handleLinkClick}
              className="px-6 py-3 text-lg font-semibold hover:text-white hover:bg-primary dark:bg-gray-700 rounded-lg text-primary border-2 border-primary shadow-lg hover:shadow-xl transition-all"
            >
              View Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              to="/product"
              className="px-6 py-3 text-lg font-semibold hover:text-white hover:bg-primary dark:bg-gray-700 rounded-lg text-primary border-2 border-primary shadow-lg hover:shadow-xl transition-all"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;