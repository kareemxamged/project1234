import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

/**
 * خصائص مكون الهيدر
 * Header Component Props
 */
interface HeaderProps {
  siteData: {
    siteName: string;
    siteNameEn: string;
    description: string;
    descriptionEn: string;
    logo: string;
    showLogo: boolean;
  };
}

/**
 * مكون الهيدر - يحتوي على شعار الأكاديمية واسمها
 * Header Component - Contains academy logo and name
 */
const Header: React.FC<HeaderProps> = ({ siteData }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 md:mb-12 lg:mb-16 relative"
    >
      {/* شعار الأكاديمية - Academy Logo */}
      {siteData.showLogo && (
        <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center relative">
          <Logo size="lg" logoPath={siteData.logo} />
        </div>
      )}

      {/* اسم الأكاديمية - Academy Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-1"
      >
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 font-arabic"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {siteData.siteName}
        </motion.h1>
        <motion.h2
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        >
          {siteData.siteNameEn}
        </motion.h2>
        <motion.p
          className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 font-arabic mt-2 md:mt-4"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        >
          {siteData.description}
        </motion.p>
      </motion.div>
    </motion.header>
  );
};

export default Header;
