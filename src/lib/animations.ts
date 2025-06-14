/**
 * تكوين التأثيرات المحسنة للموقع
 * Optimized animations configuration for the website
 */

// تأثيرات الهوفر السريعة والسلسة - Fast and smooth hover effects
export const hoverAnimations = {
  // تأثير البطاقات الرئيسية - Main cards effect
  cardHover: {
    scale: 1.02,
    y: -2
  },

  // تأثير الأيقونات - Icons effect
  iconHover: {
    scale: 1.05,
    rotate: 2
  },

  // تأثير الأيقونات الاجتماعية - Social icons effect
  socialIconHover: {
    scale: 1.1,
    y: -2
  },

  // تأثير الأزرار - Buttons effect
  buttonHover: {
    scale: 1.05
  },

  // تأثير الصور - Images effect
  imageHover: {
    scale: 1.05
  }
};

// تأثيرات الضغط - Tap effects
export const tapAnimations = {
  cardTap: {
    scale: 0.98
  },

  buttonTap: {
    scale: 0.95
  }
};

// تأثيرات الظهور - Entrance animations
export const entranceAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
};

// تأثيرات الخلفية المتحركة - Background animations
export const backgroundAnimations = {
  shimmer: {
    initial: { x: '-100%' },
    animate: { x: '100%' },
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  },

  glow: {
    initial: { opacity: 0 },
    animate: { opacity: 0.2 },
    transition: {
      duration: 0.2,
      ease: "easeOut",
    }
  }
};

// دوال مساعدة للتأثيرات - Helper functions for animations
export const createStaggeredAnimation = (delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (index: number) => ({
    delay: index * delay,
    duration: 0.5,
    ease: "easeOut",
  })
});

export const createDelayedAnimation = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.5,
    ease: "easeOut",
  }
});

// تكوين CSS للتأثيرات - CSS configuration for animations
export const cssTransitions = {
  fast: 'transition-all duration-150 ease-out',
  smooth: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-300 ease-out',
  colors: 'transition-colors duration-150 ease-out',
  transform: 'transition-transform duration-200 ease-out',
  shadow: 'transition-shadow duration-200 ease-out',
};
