import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import {
  FaArrowRight,
  FaPlay,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaCogs,
  FaServer,
  FaUsers,
  FaCloud,
  FaRobot
} from "react-icons/fa";

const Home = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "AI-Powered Analytics",
      desc: "Real-time insights with predictive algorithms",
      color: `from-${theme.colors.primary} to-${theme.colors.teal}`
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Enterprise Security",
      desc: "Military-grade encryption & compliance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Global Scalability",
      desc: "Cloud-native architecture worldwide",
      color: `from-${theme.colors.secondary} to-${theme.colors.accent}`
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Automation Suite",
      desc: "Intelligent workflow optimization",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-primary text-sm font-orbitron tracking-widest">SYSTEM ONLINE</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-black mb-8 leading-tight">
              <span style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                ENTERPRISE
              </span>
              <span className="block text-white mt-4">SOFTWARE</span>
              <span className="block text-gray text-4xl md:text-5xl mt-8">
                Redefined
              </span>
            </h1>

            <p className="text-xl text-gray max-w-3xl mx-auto mb-12 font-poppins leading-relaxed">
              We architect enterprise-grade software solutions that propel businesses into the future.
              From AI-driven ERPs to scalable cloud platforms.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${theme.colors.primary}80` }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 rounded-full overflow-hidden"
                  style={{ background: theme.gradients.primary }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: theme.gradients.secondary }}
                  />
                  <span className="relative text-white font-orbitron font-bold text-lg tracking-widest flex items-center">
                    EXPLORE SOLUTIONS <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group px-12 py-5 border-2 border-white/20 rounded-full hover:border-primary transition-all"
                onClick={() => window.alert('Please contact customer service!')}
              >
                <span className="text-white font-orbitron font-bold text-lg tracking-widest flex items-center">
                  <FaPlay className="mr-3 text-primary" /> WATCH DEMO
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {["100+", "99.9%", "24/7", "5+"].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="text-5xl font-orbitron font-bold"
                  style={{
                    background: theme.gradients.primary,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat}
                </div>
                <div className="text-gray text-sm mt-2 font-poppins">
                  {["Enterprise Clients", "Uptime SLA", "Support", "Countries"][idx]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-primary/20 animate-pulse float" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-secondary/20 animate-pulse float delay-1000" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-orbitron font-bold mb-6">
              <span className="text-white">CORE</span>{" "}
              <span style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                CAPABILITIES
              </span>
            </h2>
            <p className="text-gray text-xl max-w-2xl mx-auto font-poppins">
              Powered by cutting-edge technology and decades of enterprise expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="cyber-card p-8 rounded-2xl"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: theme.gradients.primary }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray font-poppins">{feature.desc}</p>
                <Link to={"/solutions"}>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-primary text-sm font-orbitron tracking-widest flex items-center">
                      LEARN MORE <FaArrowRight className="ml-2" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to right, ${theme.colors.primary}05, transparent, ${theme.colors.secondary}05)`
        }} />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <FaRocket className="text-6xl text-primary" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-8">
            READY TO <span style={{
              background: theme.gradients.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>LAUNCH</span>?
          </h2>
          <p className="text-gray text-xl mb-12 max-w-3xl mx-auto font-poppins">
            Join thousands of enterprises that have transformed their operations with our solutions
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-16 py-6 rounded-full overflow-hidden"
              style={{ background: theme.gradients.primary }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: theme.gradients.secondary }}
              />
              <span className="relative text-white font-orbitron font-bold text-xl tracking-widest">
                INITIATE PROJECT
              </span>
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;