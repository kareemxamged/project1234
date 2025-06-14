import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, generateGeneralInquiryLink } from '../utils/whatsapp';

/**
 * خصائص زر الواتساب
 * WhatsApp Button Props
 */
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'floating' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

/**
 * مكون زر الواتساب
 * WhatsApp Button Component
 */
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  showIcon = true
}) => {
  const handleClick = () => {
    if (!phoneNumber) {
      console.warn('رقم الواتساب غير محدد');
      return;
    }

    const whatsappUrl = message 
      ? generateWhatsAppLink(phoneNumber, message)
      : generateGeneralInquiryLink(phoneNumber);
    
    window.open(whatsappUrl, '_blank');
  };

  // تحديد الأنماط بناءً على النوع
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-white hover:bg-gray-50 text-green-600 border-2 border-green-500 hover:border-green-600';
      case 'floating':
        return 'bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl fixed bottom-6 right-6 z-50 rounded-full';
      case 'icon':
        return 'bg-green-500 hover:bg-green-600 text-white rounded-full p-3';
      default:
        return 'bg-green-500 hover:bg-green-600 text-white';
    }
  };

  // تحديد الحجم
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-3 text-base';
      case 'lg':
        return 'px-6 py-4 text-lg';
      default:
        return 'px-4 py-3 text-base';
    }
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-arabic';
  const variantStyles = getVariantStyles();
  const sizeStyles = variant !== 'floating' && variant !== 'icon' ? getSizeStyles() : '';

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showIcon && (
        <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />
      )}
      {children || 'تواصل عبر الواتساب'}
    </motion.button>
  );
};

/**
 * زر الواتساب العائم
 * Floating WhatsApp Button
 */
export const FloatingWhatsAppButton: React.FC<{ phoneNumber: string; message?: string }> = ({ 
  phoneNumber, 
  message 
}) => {
  if (!phoneNumber) return null;

  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      message={message}
      variant="floating"
      showIcon={true}
      className="animate-pulse hover:animate-none"
    >
      <span className="sr-only">تواصل عبر الواتساب</span>
    </WhatsAppButton>
  );
};

/**
 * زر الواتساب للتسجيل في الدورات
 * Course Enrollment WhatsApp Button
 */
export const CourseWhatsAppButton: React.FC<{ 
  phoneNumber: string; 
  courseTitle: string;
  className?: string;
}> = ({ phoneNumber, courseTitle, className }) => {
  const message = `مرحباً، أريد التسجيل في دورة: ${courseTitle}`;
  
  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      message={message}
      variant="primary"
      size="md"
      className={className}
    >
      سجل الآن
    </WhatsAppButton>
  );
};

/**
 * زر الواتساب للتواصل مع المدرب
 * Instructor Contact WhatsApp Button
 */
export const InstructorWhatsAppButton: React.FC<{ 
  phoneNumber: string; 
  instructorName: string;
  className?: string;
}> = ({ phoneNumber, instructorName, className }) => {
  const message = `مرحباً، أريد التواصل مع المدرب ${instructorName}`;
  
  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      message={message}
      variant="secondary"
      size="sm"
      className={className}
    >
      تواصل مع المدرب
    </WhatsAppButton>
  );
};

/**
 * زر الواتساب للاستفسار العام
 * General Inquiry WhatsApp Button
 */
export const GeneralInquiryWhatsAppButton: React.FC<{ 
  phoneNumber: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ phoneNumber, className, children }) => {
  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      variant="primary"
      size="md"
      className={className}
    >
      {children || 'استفسر الآن'}
    </WhatsAppButton>
  );
};

/**
 * أيقونة الواتساب البسيطة
 * Simple WhatsApp Icon
 */
export const WhatsAppIcon: React.FC<{ 
  phoneNumber: string;
  className?: string;
}> = ({ phoneNumber, className }) => {
  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      variant="icon"
      showIcon={true}
      className={className}
    >
      <span className="sr-only">واتساب</span>
    </WhatsAppButton>
  );
};

export default WhatsAppButton;
