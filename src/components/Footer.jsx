import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeContext";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaRss,
  FaTerminal
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <FaLinkedinIn />, label: "LinkedIn" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaDiscord />, label: "Discord" },
    { icon: <FaYoutube />, label: "YouTube" },
    { icon: <FaRss />, label: "Blog" }
  ];

  const solutions = [
    "Enterprise ERP",
    "Healthcare Systems",
    "CRM Platforms",
    "Cloud Infrastructure",
    "Mobile Applications",
    "Data Analytics"
  ];

  const company = [
    "About PANDAS",
    "Careers",
    "Press Center",
    "Partners",
    "Legal",
    "Contact"
  ];

  return (
    <footer className="relative bg-darkerBg/50 backdrop-blur-xl border-t border-white/10 pt-20 pb-10 mt-20">
      {/* Footer Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ background: theme.gradients.primary }}
                >
                  <FaTerminal className="text-2xl text-white" />
                </div>
                <div>
                  <span className="text-2xl font-stretch-50% font-black text-white">PANDAS</span>
                  {/* <span className="text-primary text-2xl font-orbitron">.TECH</span> */}
                </div>
              </div>
            </Link>
            <p className="text-gray text-sm leading-relaxed font-poppins mb-6">
              Building the future of enterprise software with artificial intelligence, 
              scalable architecture, and visionary design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-orbitron font-bold mb-6 text-lg tracking-widest">SOLUTIONS</h4>
            <ul className="space-y-3">
              {solutions.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="text-gray text-sm font-poppins hover:text-primary transition-colors duration-300"
                >
                  <Link to="#" className="flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-orbitron font-bold mb-6 text-lg tracking-widest">COMPANY</h4>
            <ul className="space-y-3">
              {company.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="text-gray text-sm font-poppins hover:text-primary transition-colors duration-300"
                >
                  <Link to="#" className="flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-orbitron font-bold mb-6 text-lg tracking-widest">STAY CONNECTED</h4>
            <p className="text-gray text-sm font-poppins mb-6">
              Subscribe to our newsletter for the latest in enterprise technology.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 cyber-btn rounded-lg"
                style={{ background: theme.gradients.primary }}
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px my-12"
          style={{ background: `linear-gradient(to right, transparent, ${theme.colors.primary}20, transparent)` }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray text-sm font-poppins mb-4 md:mb-0">
            © {currentYear} PANDAS. All systems operational.
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray text-sm font-poppins hover:text-primary transition-colors">
              Privacy Protocol
            </Link>
            <Link to="#" className="text-gray text-sm font-poppins hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray text-sm font-poppins hover:text-primary transition-colors">
              SLA 99.9%
            </Link>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["AI/ML", "Cloud Native", "Kubernetes", "React", "Node.js", "MongoDB", "Redis", "AWS"].map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray font-poppins border border-white/10 hover:border-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.colors.primary}05` }}
      />
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.colors.secondary}05` }}
      />
    </footer>
  );
};

export default Footer;