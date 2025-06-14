import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, Award, ArrowRight, CheckCircle, TrendingUp, Zap, Target } from 'lucide-react';
import { hoverAnimations, tapAnimations, cssTransitions } from '../lib/animations';
import { generateCourseEnrollmentLink } from '../utils/whatsapp';

/**
 * خصائص مكون الدورات التدريبية
 * Courses Component Props
 */
interface CoursesProps {
  courses: {
    id: number;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    duration: string;
    durationEn: string;
    level: string;
    levelEn: string;
    price: number;
    currency: string;
    showPrice: boolean;
    image: string;
    features: string[];
    featuresEn: string[];
    instructor: string;
    instructorEn: string;
    category: string;
    categoryEn: string;
    enrollmentUrl: string;
    visible: boolean;
    featured: boolean;
  }[];
  whatsappNumber?: string;
}

/**
 * مكون صفحة الدورات التدريبية
 * Training Courses Page Component
 */
const Courses: React.FC<CoursesProps> = ({ courses, whatsappNumber }) => {
  const handleEnrollment = (url: string, courseTitle: string) => {
    // إذا كان الرابط يبدأ بـ # أو كان فارغ، استخدم الواتساب
    if (url.startsWith('#') || !url || url.trim() === '') {
      if (whatsappNumber) {
        const whatsappUrl = generateCourseEnrollmentLink(whatsappNumber, courseTitle);
        window.open(whatsappUrl, '_blank');
      } else {
        alert(`للتسجيل في دورة: ${courseTitle}، يرجى التواصل معنا`);
      }
    } else {
      // للروابط الخارجية
      window.open(url, '_blank');
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'مبتدئ':
        return 'bg-green-100 text-green-700';
      case 'متوسط':
        return 'bg-yellow-100 text-yellow-700';
      case 'متقدم':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'مبتدئ':
        return <Star className="w-3 h-3" />;
      case 'متوسط':
        return <TrendingUp className="w-3 h-3" />;
      case 'متقدم':
        return <Zap className="w-3 h-3" />;
      default:
        return <Target className="w-3 h-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'رسم تقليدي':
        return 'bg-blue-100 text-blue-700';
      case 'رسم رقمي':
        return 'bg-purple-100 text-purple-700';
      case 'بورتريه':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // فصل الدورات المميزة عن العادية
  const featuredCourses = courses ? courses.filter(course => course.featured && course.visible) : [];
  const regularCourses = courses ? courses.filter(course => !course.featured && course.visible) : [];

  // إذا لم تكن هناك دورات، عرض رسالة
  if (!courses || courses.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 text-center"
        id="courses"
      >
        <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 font-arabic mb-2">
            لا توجد دورات متاحة حالياً
          </h3>
          <p className="text-gray-600 font-arabic">
            سيتم إضافة دورات جديدة قريباً
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mb-8"
      id="courses"
    >
      {/* عنوان القسم - Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8 relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-arabic relative inline-block">
          الدورات التدريبية
          {/* خط تحت العنوان - Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          ></motion.div>
        </h2>
        <p className="text-gray-600 mt-4 text-lg font-arabic">
          اكتشف مجموعة متنوعة من الدورات المصممة لتطوير مهاراتك الفنية
        </p>
      </motion.div>

      {/* الدورات المميزة - Featured Courses */}
      {featuredCourses.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-gray-800 font-arabic mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            الدورات المميزة
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/60 hover:border-blue-200 group relative overflow-hidden ${cssTransitions.smooth}`}
              >
                {/* شارة مميز - Featured Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  مميز
                </div>

                {/* تأثير الخلفية المتحركة */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-out`}></div>

                {/* محتوى البطاقة */}
                <div className="relative">
                  {/* رأس البطاقة */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className={`text-xl md:text-2xl font-bold text-gray-800 font-arabic mb-2 group-hover:text-gray-900 ${cssTransitions.colors}`}>
                        {course.title}
                      </h4>
                      <p className={`text-gray-600 group-hover:text-gray-700 ${cssTransitions.colors}`}>
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* معلومات الدورة */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getLevelColor(course.level)}`}>
                      {getLevelIcon(course.level)}
                      {course.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(course.category)}`}>
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>

                  {/* المميزات */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 font-arabic mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      ما ستتعلمه:
                    </h5>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* السعر والتسجيل */}
                  <div className="flex items-center justify-between">
                    {course.showPrice ? (
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                        <span className="text-gray-600 mr-1">{course.currency}</span>
                      </div>
                    ) : (
                      <div className="text-right">
                        <span className="text-lg font-medium text-gray-600 font-arabic">للاستفسار عن السعر</span>
                      </div>
                    )}
                    
                    <motion.button
                      onClick={() => handleEnrollment(course.enrollmentUrl, course.title)}
                      whileHover={hoverAnimations.buttonHover}
                      whileTap={tapAnimations.buttonTap}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg group/btn ${cssTransitions.smooth}`}
                    >
                      <span className="font-arabic">سجل الآن</span>
                      <ArrowRight className={`w-5 h-5 group-hover/btn:translate-x-0.5 ${cssTransitions.transform}`} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* الدورات العادية - Regular Courses */}
      {regularCourses.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 font-arabic mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            دورات أخرى
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl border border-white/60 hover:border-purple-200 group relative overflow-hidden ${cssTransitions.smooth}`}
              >
                {/* تأثير الخلفية المتحركة */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-out`}></div>

                {/* محتوى البطاقة */}
                <div className="relative">
                  <h4 className={`text-lg font-bold text-gray-800 font-arabic mb-2 group-hover:text-gray-900 ${cssTransitions.colors}`}>
                    {course.title}
                  </h4>
                  <p className={`text-gray-600 text-sm mb-4 group-hover:text-gray-700 ${cssTransitions.colors}`}>
                    {course.description}
                  </p>

                  {/* معلومات مختصرة */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getLevelColor(course.level)}`}>
                      {getLevelIcon(course.level)}
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{course.duration}</span>
                    </div>
                  </div>

                  {/* السعر والتسجيل */}
                  <div className="flex items-center justify-between">
                    {course.showPrice ? (
                      <div className="text-right">
                        <span className="text-lg font-bold text-purple-600">{course.price}</span>
                        <span className="text-gray-600 text-sm mr-1">{course.currency}</span>
                      </div>
                    ) : (
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-600 font-arabic">للاستفسار</span>
                      </div>
                    )}
                    
                    <motion.button
                      onClick={() => handleEnrollment(course.enrollmentUrl, course.title)}
                      whileHover={hoverAnimations.buttonHover}
                      whileTap={tapAnimations.buttonTap}
                      className={`px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg ${cssTransitions.smooth}`}
                    >
                      <span className="font-arabic">سجل</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* رسالة تشجيعية - Encouraging Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Award className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-gray-800 font-arabic">
            ابدأ رحلتك الفنية اليوم
          </h4>
        </div>
        <p className="text-gray-600 font-arabic mb-4">
          انضم إلى آلاف الطلاب الذين طوروا مهاراتهم الفنية معنا
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-2 p-3 bg-white/50 rounded-lg">
            <div className="flex items-center gap-1 text-blue-600">
              <Users className="w-5 h-5" />
              <span className="text-lg font-bold">+500</span>
            </div>
            <span className="text-sm text-gray-600">طالب مسجل</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-white/50 rounded-lg">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-lg font-bold">4.9/5</span>
            </div>
            <span className="text-sm text-gray-600">تقييم الطلاب</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-white/50 rounded-lg">
            <div className="flex items-center gap-1 text-green-600">
              <Award className="w-5 h-5" />
              <span className="text-lg font-bold">معتمدة</span>
            </div>
            <span className="text-sm text-gray-600">شهادات رسمية</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Courses;
