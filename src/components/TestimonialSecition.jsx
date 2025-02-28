/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Sample Testimonials Data
const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    feedback: "This ERP system has transformed our business operations. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Lee",
    position: "Operations Manager, RetailPro",
    feedback: "An intuitive and feature-rich ERP solution that meets all our needs.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Smith",
    position: "CFO, FinServe",
    feedback: "The financial reporting features are top-notch and incredibly easy to use.",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-10"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md text-center relative overflow-hidden"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-primary text-2xl opacity-30" />
              <FaQuoteRight className="absolute bottom-4 right-4 text-primary text-2xl opacity-30" />
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">{testimonial.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
