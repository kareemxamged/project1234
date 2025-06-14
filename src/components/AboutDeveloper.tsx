import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

/**
 * مكون "حول المطور"
 * About Developer Component
 */
const AboutDeveloper: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="mb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center mb-4 relative"
      >
        <h3 className="text-lg font-semibold text-gray-700 font-arabic relative inline-block">
          حول المطور
          {/* خط تحت العنوان - Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
          ></motion.div>
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-white/70 group cursor-pointer relative overflow-hidden"
      >
        {/* تأثير الخلفية المتحركة - Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

        {/* تأثير الإضاءة - Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100/30 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* اللوجو - Logo */}
            <div className="p-2 group-hover:scale-110 transition-transform duration-300">
              <Logo size="sm" />
            </div>

            {/* النص - Text */}
            <div className="text-right">
              <h4 className="text-lg font-semibold text-gray-800 font-arabic group-hover:text-gray-900 transition-colors duration-300">
                أكاديمية ميمو
              </h4>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Design and dev studio
              </p>
            </div>
          </div>

          {/* سهم - Arrow */}
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutDeveloper;
