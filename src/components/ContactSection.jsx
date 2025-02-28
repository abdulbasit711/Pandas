/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mpwqvwkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-light dark:bg-gray-900 transition-all pt-28">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary dark:text-white">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
          Have questions? We’d love to hear from you.
        </p>
      </motion.div>

      {/* Contact Form and Info */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Our Office</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            📍 Gulberg Greens, Islamabad
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3">📞 +92310-3480229</p>
          <p className="text-gray-600 dark:text-gray-300">✉️ getinfo.pandas@gmail.com</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Send a Message</h2>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
