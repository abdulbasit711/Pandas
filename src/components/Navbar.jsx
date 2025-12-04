import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../theme/ThemeContext";
import {
  FaBars,
  FaTimes,
  FaTerminal,
  FaChevronRight,
  FaBolt,
  FaUserSecret,
  FaCog
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative px-6 py-3 font-orbitron font-bold tracking-widest transition-all duration-500 
     ${glitch ? 'glitch-text' : ''}
     ${isActive
      ? "text-primary glow-text-primary"
      : "text-gray hover:text-primary hover:glow-text-primary"
    }`;

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled
          ? "bg-darkerBg/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
        }`}
    >
      {/* Top scanning bar */}
      <div
        className="h-1"
        style={{ background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-darkerBg to-cardBg border border-white/10 group-hover:border-primary/50 transition-colors">
                <FaTerminal className="text-2xl text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <motion.span
                className={`text-2xl font-orbitron font-black ${glitch ? 'glitch' : ''}`}
                animate={glitch ? { x: [0, 2, -2, 0] } : {}}
              >
                <span className="font-stretch-50%">
                  PANDAS
                </span>
                {/* <span className="text-accent">TECH</span> */}
              </motion.span>
              <span style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
                className="text-xs  font-mono tracking-widest">SOFTWARE SYSTEMS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {["HOME", "SOLUTIONS", "CONTACT"].map((item, idx) => (
              <NavLink
                key={item}
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className={navLinkStyle}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* <span className="text-xs text-secondary mr-1">#{idx + 1}</span> */}
                  {item}
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 hover:scale-x-100 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` }}
                  />
                </motion.div>
              </NavLink>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-8 py-3 cyber-btn rounded-full relative overflow-hidden group"
              style={{ background: theme.gradients.primary }}
            >
              <span className="relative z-10 flex items-center">
                <FaBolt className="mr-2" /> ACCESS
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: theme.gradients.secondary }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50"
          >
            <div className="text-xl text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden absolute top-full left-0 right-0 bg-darkerBg/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-2">
              {["HOME", "SOLUTIONS", "CONTACT"].map((item, idx) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="border-l-2 border-primary/30 hover:border-primary pl-4"
                >
                  <NavLink
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-orbitron py-4 text-gray hover:text-white group"
                  >
                    <div className="flex items-center">
                      <span className="text-secondary text-sm mr-3">0{idx + 1}</span>
                      {item}
                    </div>
                    <FaChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                </motion.div>
              ))}

              <motion.button
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 px-8 py-4 cyber-btn rounded-lg relative overflow-hidden group"
                style={{ background: theme.gradients.primary }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FaUserSecret className="mr-3" /> ACCESS TERMINAL
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: theme.gradients.secondary }}
                />
              </motion.button>
            </div>

            {/* Mobile menu footer */}
            <div className="px-6 py-4 border-t border-white/10">
              <div className="text-xs text-gray font-mono">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                  SYSTEM: <span className="text-secondary ml-2">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom scanning effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </motion.nav>
  );
};

export default Navbar;