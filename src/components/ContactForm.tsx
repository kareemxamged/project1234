import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * نوع بيانات النموذج
 * Form data type
 */
interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * مكون نموذج التواصل
 * Contact Form Component
 */
const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  /**
   * معالج إرسال النموذج
   * Form submission handler
   */
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات - Simulate data submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // إخفاء رسالة النجاح بعد 5 ثوان - Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="mb-8"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="text-2xl font-bold text-white text-center mb-6 font-arabic"
      >
        تواصل معنا
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        {/* رسالة النجاح - Success message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
          >
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-green-300 font-arabic">تم إرسال رسالتك بنجاح!</p>
            <p className="text-green-400 text-sm">Your message has been sent successfully!</p>
          </motion.div>
        )}

        {/* النموذج - Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-6"
        >
          {/* حقل الاسم - Name field */}
          <div>
            <label className="block text-white font-arabic mb-2">
              الاسم الكامل <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                {...register('name', {
                  required: 'الاسم مطلوب',
                  minLength: {
                    value: 2,
                    message: 'الاسم يجب أن يكون أكثر من حرفين'
                  }
                })}
                type="text"
                placeholder="أدخل اسمك الكامل"
                className="
                  w-full pr-12 pl-4 py-3 
                  bg-white/5 border border-white/20 rounded-lg
                  text-white placeholder-white/50
                  focus:outline-none focus:border-primary-400 focus:bg-white/10
                  transition-all duration-300
                  font-arabic
                "
                dir="rtl"
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-red-400 text-sm flex items-center font-arabic"
              >
                <AlertCircle className="w-4 h-4 ml-1" />
                {errors.name.message}
              </motion.p>
            )}
          </div>

          {/* حقل البريد الإلكتروني - Email field */}
          <div>
            <label className="block text-white font-arabic mb-2">
              البريد الإلكتروني <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                {...register('email', {
                  required: 'البريد الإلكتروني مطلوب',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'البريد الإلكتروني غير صحيح'
                  }
                })}
                type="email"
                placeholder="example@email.com"
                className="
                  w-full pr-12 pl-4 py-3 
                  bg-white/5 border border-white/20 rounded-lg
                  text-white placeholder-white/50
                  focus:outline-none focus:border-primary-400 focus:bg-white/10
                  transition-all duration-300
                "
                dir="ltr"
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-red-400 text-sm flex items-center font-arabic"
              >
                <AlertCircle className="w-4 h-4 ml-1" />
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* حقل الرسالة - Message field */}
          <div>
            <label className="block text-white font-arabic mb-2">
              الرسالة <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute right-3 top-4 text-white/50 w-5 h-5" />
              <textarea
                {...register('message', {
                  required: 'الرسالة مطلوبة',
                  minLength: {
                    value: 10,
                    message: 'الرسالة يجب أن تكون أكثر من 10 أحرف'
                  }
                })}
                rows={5}
                placeholder="اكتب رسالتك هنا..."
                className="
                  w-full pr-12 pl-4 py-3 
                  bg-white/5 border border-white/20 rounded-lg
                  text-white placeholder-white/50
                  focus:outline-none focus:border-primary-400 focus:bg-white/10
                  transition-all duration-300 resize-none
                  font-arabic
                "
                dir="rtl"
              />
            </div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-red-400 text-sm flex items-center font-arabic"
              >
                <AlertCircle className="w-4 h-4 ml-1" />
                {errors.message.message}
              </motion.p>
            )}
          </div>

          {/* زر الإرسال - Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            className="w-full py-3 px-6 text-white font-medium rounded-lg transition-all duration-300 transform hover:shadow-lg flex items-center justify-center space-x-2 space-x-reverse disabled:cursor-not-allowed font-arabic"
            style={{
              background: isSubmitting
                ? 'linear-gradient(to right, #6b7280, #4b5563)'
                : 'linear-gradient(to right, var(--color-primary-500), var(--color-primary-600))'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'linear-gradient(to right, var(--color-primary-600), var(--color-primary-700))';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'linear-gradient(to right, var(--color-primary-500), var(--color-primary-600))';
              }
            }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
