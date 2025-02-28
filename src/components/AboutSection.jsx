/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-light dark:bg-gray-900 transition-all mt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary dark:text-white">About Our Company</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
          Empowering businesses with our advanced ERP solutions.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            To simplify business management through innovative ERP technology, ensuring efficiency and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-white">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            To be a global leader in ERP solutions, transforming businesses with seamless automation.
          </p>
        </motion.div>
      </div>

      {/* Company Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-primary dark:text-white mb-6">
          Our Journey
        </h2>
        <div className="relative border-l-4 border-primary dark:border-white pl-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold text-primary dark:text-white">Founded in 2020</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Started with a vision to revolutionize business management with ERP solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold text-primary dark:text-white">Expansion in 2022</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Launched our first major ERP product, gaining multiple clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold text-primary dark:text-white">Present Day</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Serving businesses with cutting-edge ERP technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <Link to="/contact" className="px-6 py-3 hover:bg-primary hover:text-white rounded-md text-primary border-2 border-primary transition">
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutSection;
