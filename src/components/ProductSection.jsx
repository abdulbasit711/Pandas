import React from "react";
import { FaChartBar, FaUsers, FaBox, FaFileInvoice, FaMoneyBillWave, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaChartBar className="text-primary text-5xl" />, title: "Analytics & Reports", description: "Get detailed insights into sales, stock, and finances." },
  { icon: <FaUsers className="text-secondary text-5xl" />, title: "User Management", description: "Control user roles and permissions efficiently." },
  { icon: <FaBox className="text-accent text-5xl" />, title: "Stock Management", description: "Track inventory in real-time with automated updates." },
  { icon: <FaFileInvoice className="text-primary text-5xl" />, title: "Invoicing & Billing", description: "Generate invoices and manage billing seamlessly." },
  { icon: <FaMoneyBillWave className="text-secondary text-5xl" />, title: "Accounts & Finance", description: "Handle transactions, ledgers, and financial reports." },
  { icon: <FaCogs className="text-accent text-5xl" />, title: "Customizable Modules", description: "Tailor ERP functionalities as per your business needs." },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 pt-28">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-primary dark:text-white mb-6"
        >
          Key Features of Our ERP
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-primary dark:text-white mt-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
