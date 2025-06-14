import React from 'react';
import { motion } from 'framer-motion';

/**
 * مكون لوجو أكاديمية MEMO
 * MEMO Academy Logo Component
 */
const Logo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; logoPath?: string }> = ({
  className = '',
  size = 'lg',
  logoPath = '/1.png'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
    xl: 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      className={`${sizeClasses[size]} ${className} relative`}
    >
      {/* تأثير الإضاءة خلف اللوجو - Glow effect behind logo */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-red-500/20 rounded-full blur-xl"
      ></motion.div>

      {/* اللوجو الحقيقي - Actual logo */}
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: [0, -2, 2, 0],
          transition: { duration: 0.3 }
        }}
        className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-white/20"
      >
        <img
          src={logoPath}
          alt="MEMO Academy Logo"
          className="w-full h-full object-cover rounded-full"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />

        {/* تأثير الانعكاس - Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
      </motion.div>

      {/* حلقة متحركة حول اللوجو - Animated ring around logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 border-2 border-dashed border-yellow-400/30 rounded-full"
        style={{
          borderRadius: '50%',
          transform: 'scale(1.1)'
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Logo;
