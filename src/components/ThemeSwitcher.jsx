import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { FaPalette, FaCheck, FaTimes } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, themes, switchTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full cyber-btn shadow-2xl flex items-center justify-center group"
        title="Switch Theme"
      >
        <FaPalette className="text-white text-xl group-hover:rotate-180 transition-transform duration-500" />
      </motion.button>

      {/* Theme Selection Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 bg-darkerBg/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl w-80 z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-orbitron text-lg flex items-center">
                  <FaPalette className="mr-3 text-primary" />
                  SELECT THEME
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-gray-400" />
                </button>
              </div>

              {/* Current Theme */}
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 font-mono mb-2">ACTIVE THEME</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-lg mr-3"
                      style={{
                        background: theme.gradients.primary
                      }}
                    />
                    <span className="text-white font-orbitron">{theme.name}</span>
                  </div>
                  <FaCheck className="text-primary" />
                </div>
              </div>

              {/* Theme List */}
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {Object.values(themes).map((themeOption) => (
                  <motion.button
                    key={themeOption.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      switchTheme(themeOption.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${
                      theme.id === themeOption.id
                        ? 'bg-white/10 border border-primary/50'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-10 h-10 rounded-lg"
                          style={{
                            background: themeOption.gradients.primary
                          }}
                        />
                        <div className="text-left">
                          <div className="text-white font-orbitron">{themeOption.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            {Object.values(themeOption.colors).slice(0, 3).map((color, idx) => (
                              <div
                                key={idx}
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {theme.id === themeOption.id && (
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500 font-mono">
                  Theme applied globally • Changes persist
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;