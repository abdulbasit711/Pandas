import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaHeadset, FaClock, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    phone: "", 
    message: "", 
    plan: "Enterprise" 
  });
  const [status, setStatus] = useState("");
  const { theme } = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", message: "", plan: "Enterprise" });
      alert("Transmission successful! Our team will contact you within 24 hours.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Head Office",
      details: ["Galaxy Heights, Gulberg Greens", "Islamabad, Pakistan"],
      color: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.teal})`
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "24/7 Support",
      details: ["+92 310-3480229", "getinfo.pandas@gmail.com"],
      color: `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent})`
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM PST", "Emergency Support: 24/7"],
      color: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary})`
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Animated Background */}
      <div 
        className="absolute top-0 left-0 w-full h-64"
        style={{ background: `linear-gradient(to bottom, ${theme.colors.primary}10, transparent)` }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 mb-6"
            style={{ background: `linear-gradient(to right, ${theme.colors.primary}10, ${theme.colors.secondary}10)` }}
          >
            <span className="text-primary tracking-widest font-orbitron">CONTACT CENTER</span>
          </div>
          <h1 className="text-6xl font-orbitron font-bold mb-6">
            INITIATE{" "}
            <span style={{
              background: theme.gradients.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              COMMUNICATION
            </span>
          </h1>
          <p className="text-gray text-xl max-w-2xl mx-auto font-poppins">
            Connect with our solutions architects to discuss your enterprise requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="cyber-card p-8 rounded-3xl relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-24 h-24 blur-3xl opacity-20"
                  style={{ background: info.color }}
                />
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: info.color }}
                  >
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-orbitron text-white mb-4">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray font-poppins mb-2">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="cyber-card p-10 rounded-3xl relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(to bottom right, ${theme.colors.primary}10, transparent, ${theme.colors.secondary}10)` }}
              />
              
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins"
                      placeholder="abc@enterprise.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                      COMPANY *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins"
                      placeholder="Enterprise Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                    INTERESTED IN PLAN
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Essential", "Professional", "Enterprise"].map((plan) => (
                      <label
                        key={plan}
                        className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.plan === plan
                            ? 'border-primary bg-primary/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={plan}
                          checked={formData.plan === plan}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="font-orbitron text-white">{plan}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-primary text-sm font-bold mb-3 font-orbitron tracking-widest">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins resize-none"
                    placeholder="Describe your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 cyber-btn rounded-xl font-orbitron font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ background: theme.gradients.primary }}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      TRANSMITTING DATA...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <FaPaperPlane className="animate-pulse" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;