import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Experience Our ERP?
        </motion.h2>
        <p className="text-lg mb-8">
          Get started with a free demo or contact us to learn more about how our ERP can help your business.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/demo"
              className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-lg transition hover:bg-gray-200"
            >
              Try Demo
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
