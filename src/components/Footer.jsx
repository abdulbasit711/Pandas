import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">PANDAS</h2>
          <p className="text-sm">
            Providing innovative ERP solutions to streamline business operations and enhance productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/product" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-white pt-4">
        © {new Date().getFullYear()} PANDAS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
