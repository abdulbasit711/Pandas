import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50 transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary dark:text-white">
          PANDAS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className={({isActive}) => ` ${isActive ? "text-primary" : "text-grey-700"}   dark:text-gray-300 hover:text-primary dark:hover:text-white transition`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => ` ${isActive ? "text-primary" : "text-grey-700"}   dark:text-gray-300 hover:text-primary dark:hover:text-white transition`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({isActive}) => ` ${isActive ? "text-primary" : "text-grey-700"}   dark:text-gray-300 hover:text-primary dark:hover:text-white transition`}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => ` ${isActive ? "text-primary" : "text-grey-700"}   dark:text-gray-300 hover:text-primary dark:hover:text-white transition`}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-gray-300 text-xl transition">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 text-xl md:hidden">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-100 dark:bg-gray-800 text-center py-4 space-y-4">
          <li>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/product" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
