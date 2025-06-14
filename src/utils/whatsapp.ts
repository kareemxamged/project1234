/**
 * دوال مساعدة للواتساب
 * WhatsApp Helper Functions
 */

/**
 * تنظيف رقم الهاتف وإزالة الرموز غير المرغوب فيها
 * Clean phone number and remove unwanted characters
 */
export const cleanPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return '';
  
  // إزالة جميع الرموز والمسافات
  let cleaned = phoneNumber.replace(/[^\d]/g, '');
  
  // إذا كان الرقم يبدأ بـ 0، استبدله بـ 966
  if (cleaned.startsWith('0')) {
    cleaned = '966' + cleaned.substring(1);
  }
  
  // إذا لم يبدأ بـ 966، أضفه
  if (!cleaned.startsWith('966')) {
    cleaned = '966' + cleaned;
  }
  
  return cleaned;
};

/**
 * تنسيق رقم الهاتف للعرض
 * Format phone number for display
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  
  if (cleaned.length === 12 && cleaned.startsWith('966')) {
    // تنسيق: +966 50 123 4567
    return `+${cleaned.substring(0, 3)} ${cleaned.substring(3, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8)}`;
  }
  
  return phoneNumber; // إرجاع الرقم كما هو إذا لم يكن بالتنسيق المتوقع
};

/**
 * إنشاء رابط واتساب مع رسالة
 * Generate WhatsApp link with message
 */
export const generateWhatsAppLink = (phoneNumber: string, message?: string): string => {
  const cleanedNumber = cleanPhoneNumber(phoneNumber);
  
  if (!cleanedNumber) {
    console.warn('رقم الواتساب غير صحيح:', phoneNumber);
    return '#';
  }
  
  let url = `https://wa.me/${cleanedNumber}`;
  
  if (message && message.trim()) {
    url += `?text=${encodeURIComponent(message.trim())}`;
  }
  
  return url;
};

/**
 * إنشاء رابط واتساب للتسجيل في دورة
 * Generate WhatsApp link for course enrollment
 */
export const generateCourseEnrollmentLink = (phoneNumber: string, courseTitle: string): string => {
  const message = `مرحباً، أريد التسجيل في دورة: ${courseTitle}`;
  return generateWhatsAppLink(phoneNumber, message);
};

/**
 * إنشاء رابط واتساب للاستفسار العام
 * Generate WhatsApp link for general inquiry
 */
export const generateGeneralInquiryLink = (phoneNumber: string): string => {
  const message = 'مرحباً، أريد الاستفسار عن دورات الرسم في أكاديمية ميمو';
  return generateWhatsAppLink(phoneNumber, message);
};

/**
 * إنشاء رابط واتساب للتواصل مع مدرب
 * Generate WhatsApp link for instructor contact
 */
export const generateInstructorContactLink = (phoneNumber: string, instructorName: string): string => {
  const message = `مرحباً، أريد التواصل مع المدرب ${instructorName}`;
  return generateWhatsAppLink(phoneNumber, message);
};

/**
 * إنشاء رابط فايبر
 * Generate Viber link
 */
export const generateViberLink = (phoneNumber: string): string => {
  const cleanedNumber = cleanPhoneNumber(phoneNumber);
  return `viber://chat?number=${cleanedNumber}`;
};

/**
 * إنشاء رابط المكالمة الهاتفية
 * Generate phone call link
 */
export const generatePhoneCallLink = (phoneNumber: string): string => {
  const formatted = formatPhoneNumber(phoneNumber);
  return `tel:${formatted}`;
};

/**
 * التحقق من صحة رقم الهاتف السعودي
 * Validate Saudi phone number
 */
export const isValidSaudiPhoneNumber = (phoneNumber: string): boolean => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  
  // يجب أن يبدأ بـ 966 ويكون 12 رقم
  if (!cleaned.startsWith('966') || cleaned.length !== 12) {
    return false;
  }
  
  // يجب أن يبدأ الرقم المحلي بـ 5 (للجوال)
  const localNumber = cleaned.substring(3);
  return localNumber.startsWith('5') && localNumber.length === 9;
};

export default {
  cleanPhoneNumber,
  formatPhoneNumber,
  generateWhatsAppLink,
  generateCourseEnrollmentLink,
  generateGeneralInquiryLink,
  generateInstructorContactLink,
  generateViberLink,
  generatePhoneCallLink,
  isValidSaudiPhoneNumber
};
