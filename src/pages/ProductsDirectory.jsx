import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeContext";
import { products } from "../data/product";
import { FaArrowRight, FaStar, FaRocket, FaShieldAlt, FaChartLine, FaCrown } from "react-icons/fa";

const ProductsDirectory = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-20 px-6 relative">
      {/* Animated Background Elements */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.colors.primary}05` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.colors.secondary}05` }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <div 
              className="w-12 h-[2px] mr-4"
              style={{ background: theme.gradients.primary }}
            />
            <span className="text-primary font-orbitron tracking-widest">ENTERPRISE SOLUTIONS</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-orbitron font-bold mb-6">
            <span className="text-white">INDUSTRY</span>{" "}
            <span style={{
              background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.teal})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              PLATFORMS
            </span>
          </h1>
          <p className="text-gray text-xl max-w-3xl font-poppins">
            Scalable software solutions engineered for the world's most demanding enterprises
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/solutions/${product.id}`}>
                <div className="cyber-card p-8 rounded-3xl h-full relative overflow-hidden">
                  {/* Hover Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ 
                      background: `linear-gradient(to bottom right, ${theme.colors.primary}10, transparent, ${theme.colors.secondary}10)` 
                    }}
                  />
                  
                  {/* Product Icon */}
                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                      style={{ background: `linear-gradient(to bottom right, ${theme.colors.primary}20, ${theme.colors.secondary}20)` }}
                    >
                      <div className="text-3xl text-white">
                        {product.icon}
                      </div>
                    </div>
                    
                    {/* Badges */}
                    <div className="flex gap-2 mb-4">
                      {product.featured && (
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-orbitron text-black flex items-center"
                          style={{ background: theme.gradients.primary }}
                        >
                          <FaStar className="inline mr-1" /> FEATURED
                        </span>
                      )}
                      {product.enterprise && (
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-orbitron text-black flex items-center"
                          style={{ background: theme.gradients.secondary }}
                        >
                          <FaCrown className="inline mr-1" /> ENTERPRISE
                        </span>
                      )}
                    </div>

                    {/* Product Info */}
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-primary text-sm uppercase tracking-wider mb-4 font-bold">
                      {product.tagline}
                    </p>
                    <p className="text-gray mb-6 font-poppins leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="text-gray text-sm font-orbitron mb-3">KEY FEATURES</div>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray font-poppins">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div 
                        className="text-2xl font-orbitron font-bold"
                        style={{
                          background: theme.gradients.primary,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        FROM {product.plans[0].price}
                      </div>
                      <div className="flex items-center text-primary font-orbitron font-bold group-hover:glow-text-primary group-hover:translate-x-2 transition-all duration-500">
                        EXPLORE <FaArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Solutions Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="cyber-card rounded-3xl p-12 relative overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{ background: `linear-gradient(to right, ${theme.colors.primary}10, ${theme.colors.secondary}10)` }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-4xl text-primary mr-4" />
                  <h3 className="text-3xl font-orbitron font-bold text-white">NEED CUSTOM SOLUTION?</h3>
                </div>
                <p className="text-gray font-poppins max-w-2xl">
                  Our team of architects can design a bespoke platform tailored to your specific requirements.
                </p>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 lg:mt-0 px-10 py-4 cyber-btn rounded-full"
                  style={{ background: theme.gradients.primary }}
                >
                  CONTACT ARCHITECTS
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsDirectory;