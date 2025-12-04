// CyberButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CyberButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary',
    secondary: 'bg-gradient-to-r from-secondary to-accent',
    accent: 'bg-gradient-to-r from-accent to-teal'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        relative overflow-hidden rounded-lg
        font-orbitron font-bold tracking-widest
        text-white uppercase
        transition-all duration-300
        hover:shadow-[0_0_30px_var(--cyber-orange)]
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%]
        hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
      `}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default CyberButton;