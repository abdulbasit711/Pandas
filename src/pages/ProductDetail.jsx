import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeContext";
import { products } from "../data/product";
import {
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  // Removed unused icons for brevity, assuming they are in the actual file
} from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const product = products.find((p) => p.id === id);
  const [selectedPlan, setSelectedPlan] = useState(1);

  if (!product) return <Navigate to="/solutions" />;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-darkBg relative overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute top-0 left-0 w-full h-96"
        style={{ background: `linear-gradient(to bottom, ${theme.colors.primary}10, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Product Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block p-6 rounded-3xl backdrop-blur-sm mb-8"
            style={{
              background: `linear-gradient(to bottom right, ${theme.colors.primary}20, ${theme.colors.secondary}20)`
            }}
          >
            <div className="text-6xl text-white">
              {product.icon}
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 glow-text-primary">
            {product.name}
          </h1>

          <p className="text-2xl text-gray max-w-4xl mx-auto mb-8 font-poppins leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {product.features.map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-primary transition-colors"
              >
                <span className="text-primary mr-2">✓</span>
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 mb-6"
              style={{ background: `linear-gradient(to right, ${theme.colors.primary}10, ${theme.colors.secondary}10)` }}
            >
              <FaStar className="text-primary mr-3" />
              <span className="text-white font-orbitron tracking-widest">ENTERPRISE TIERS</span>
            </div>
            <h2 className="text-5xl font-orbitron font-bold mb-6">
              <span className="text-white">SELECT</span>{" "}
              <span style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                YOUR PLAN
              </span>
            </h2>
            <p className="text-gray text-xl max-w-2xl mx-auto font-poppins">
              Choose the perfect tier for your organization's needs
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                onClick={() => setSelectedPlan(index)}
                className={`relative cursor-pointer ${selectedPlan === index ? 'scale-105' : ''}`}
              >
                {/* Plan Card */}
                <div 
                  // FIX: Increased top padding to pt-16 to provide guaranteed space for the badge.
                  // The standard p-8 is replaced by px-8 and pt-16 (top space for badge) and pb-8 (bottom space)
                  className={`cyber-card px-8 pb-8 rounded-3xl h-full flex flex-col relative transition-all duration-500 ${plan.recommend
                    ? "border-2 border-secondary shadow-[0_0_50px_rgba(0,0,0,0.3)] pt-16" 
                    : "border border-white/10 p-8" // Fallback to p-8 if not recommended
                  }`}
                >

                  {/* Glowing Effect for Recommended */}
                  {plan.recommend && (
                    <div
                      className="absolute inset-0 animate-pulse"
                      style={{ background: `linear-gradient(to bottom right, ${theme.colors.secondary}20, transparent, ${theme.colors.teal}10)` }}
                    />
                  )}

                  {/* Most Popular Badge */}
                  {plan.recommend && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 z-10 -translate-y-1/2"
                    >
                      <div
                        className="px-6 py-2 mt-14 rounded-full shadow-xl"
                        style={{ background: theme.gradients.secondary }}
                      >
                        <span className="text-white font-orbitron text-xs tracking-widest flex items-center">
                          <FaStar className="mr-2" /> MOST POPULAR
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${plan.recommend
                        ? ""
                        : ""}`}
                      style={{
                        background: plan.recommend
                          ? theme.gradients.secondary
                          : theme.gradients.primary
                      }}
                    >
                      {index === 0 && <FaRocket className="text-2xl text-white" />}
                      {index === 1 && <FaChartLine className="text-2xl text-white" />}
                      {index === 2 && <FaShieldAlt className="text-2xl text-white" />}
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-5xl font-orbitron font-bold text-white mb-1">
                      {plan.price}
                    </div>
                    {/* {plan.price !== "Custom" && (
                      <div className="text-gray font-poppins">per month</div>
                    )} */}
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start text-gray font-poppins"
                        >
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1"
                            style={{ backgroundColor: `${theme.colors.primary}20` }}
                          >
                            <FaCheckCircle className="text-primary text-sm" />
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-orbitron font-bold tracking-widest transition-all duration-300 ${plan.recommend
                        ? "cyber-btn"
                        : "cyber-btn"
                      }`}
                    style={{
                      background: plan.recommend
                        ? theme.gradients.secondary
                        : theme.gradients.primary
                    }}
                  >
                    {plan.price === "Custom" ? "CONTACT SALES" : "GET STARTED"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;