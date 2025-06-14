import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Image, Award, Calendar, PenTool, ArrowRight, Star, Heart, Music, Camera, Palette, Brush } from 'lucide-react';
import { hoverAnimations, tapAnimations, cssTransitions } from '../lib/animations';

/**
 * دالة لتحويل اسم الأيقونة إلى مكون
 * Function to convert icon name to component
 */
const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: any } = {
    BookOpen,
    Users,
    Image,
    Award,
    Calendar,
    PenTool,
    Star,
    Heart,
    Music,
    Camera,
    Palette,
    Brush
  };
  return icons[iconName] || BookOpen;
};

/**
 * خصائص مكون روابط أقسام الأكاديمية
 * Academy Sections Links Component Props
 */
interface SectionLinksProps {
  onPageChange?: (page: string) => void;
  sections: {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    url: string;
    iconColor: string;
    iconBg: string;
    visible: boolean;
  }[];
}

/**
 * مكون روابط أقسام الأكاديمية
 * Academy Sections Links Component
 */
const SectionLinks: React.FC<SectionLinksProps> = ({ onPageChange, sections }) => {
  const handleLinkClick = (url: string) => {
    if (url.startsWith('#')) {
      // للروابط الداخلية - For internal links
      const page = url.replace('#', '');
      if (onPageChange && (page === 'instructors' || page === 'courses' || page === 'gallery' || page === 'techniques')) {
        onPageChange(page);
      } else {
        // للأقسام الأخرى، يمكن إضافة منطق التمرير السلس هنا
        // For other sections, smooth scrolling logic can be added here
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // للروابط الخارجية - For external links
      window.open(url, '_blank');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mb-8"
    >
      <div className="space-y-3">
        {sections.map((link, index) => {
          const IconComponent = getIconComponent(link.icon);
          return (
            <motion.button
              key={link.id}
              onClick={() => handleLinkClick(link.url)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={hoverAnimations.cardHover}
              whileTap={tapAnimations.cardTap}
              className={`w-full bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl border border-white/60 hover:border-blue-200 group relative overflow-hidden ${cssTransitions.smooth}`}
            >
              {/* تأثير الخلفية المتحركة - Animated background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]`}></div>

              {/* تأثير الإضاءة - Glow effect */}
              <div className={`absolute inset-0 rounded-2xl ${link.iconBg} opacity-0 group-hover:opacity-20 ${cssTransitions.fast}`}></div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center flex-row-reverse gap-4 md:gap-6">
                  {/* النص - Text */}
                  <div className="text-right">
                    <h4 className={`text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 font-arabic group-hover:text-gray-900 ${cssTransitions.colors}`}>
                      {link.name}
                    </h4>
                    <p className={`text-sm md:text-base lg:text-lg text-gray-500 group-hover:text-gray-600 ${cssTransitions.colors}`}>
                      {link.nameEn}
                    </p>
                  </div>

                  {/* الأيقونة - Icon */}
                  <div className={`p-3 md:p-4 lg:p-5 rounded-xl ${link.iconBg} group-hover:scale-105 group-hover:rotate-2 shadow-sm group-hover:shadow-md ${cssTransitions.transform}`}>
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${link.iconColor} group-hover:scale-105 ${cssTransitions.transform}`} />
                  </div>
                </div>

                {/* سهم - Arrow */}
                <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:scale-105 ${cssTransitions.smooth}`} />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.section>
  );
};

export default SectionLinks;
