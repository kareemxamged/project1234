import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Star } from 'lucide-react';
import { galleryService } from '../lib/supabase';
import type { GalleryItem } from '../types/database';

/**
 * مكون معرض الأعمال - Gallery Component
 * صفحة بسيطة وأنيقة لعرض أعمال طلاب الأكاديمية
 */
const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  // الفئات المتاحة
  const categories = ['الكل', 'رسم تقليدي', 'رسم رقمي', 'بورتريه', 'مناظر طبيعية', 'رسم كاريكاتير', 'فن تجريدي'];

  // تحميل البيانات من قاعدة البيانات
  useEffect(() => {
    loadGalleryData();
  }, []);

  const loadGalleryData = async () => {
    setLoading(true);
    try {
      const data = await galleryService.getVisible();
      setGalleryItems(data);
    } catch (error) {
      console.error('خطأ في تحميل أعمال المعرض:', error);
    } finally {
      setLoading(false);
    }
  };

  // فلترة الأعمال حسب الفئة
  const filteredItems = selectedCategory === 'الكل' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // دالة لتحديد لون الفئة
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'رسم تقليدي': 'bg-blue-100 text-blue-800',
      'رسم رقمي': 'bg-purple-100 text-purple-800',
      'بورتريه': 'bg-pink-100 text-pink-800',
      'مناظر طبيعية': 'bg-green-100 text-green-800',
      'رسم كاريكاتير': 'bg-orange-100 text-orange-800',
      'فن تجريدي': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // دالة لتحديد لون المستوى
  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'مبتدئ': 'bg-green-100 text-green-800',
      'متوسط': 'bg-yellow-100 text-yellow-800',
      'متقدم': 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-arabic">جاري تحميل المعرض...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* عنوان المعرض */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-arabic mb-4">
          معرض أعمال الطلاب
        </h1>
        <p className="text-lg text-gray-600 font-arabic max-w-2xl mx-auto">
          استكشف إبداعات طلابنا المميزة في أكاديمية الفن للرسم
        </p>
      </motion.div>

      {/* فلاتر الفئات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-arabic ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* شبكة الأعمال */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* الصورة */}
                <div className="relative aspect-square overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error('فشل في تحميل الصورة:', item.image_url);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span class="text-gray-400 font-arabic">فشل في تحميل الصورة</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-arabic">لا توجد صورة</span>
                    </div>
                  )}
                  
                  {/* شارة العمل المميز */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                  
                  {/* تأثير التمرير */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <p className="font-arabic text-lg font-semibold">عرض التفاصيل</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* رسالة عدم وجود أعمال */}
      {filteredItems.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 font-arabic text-lg">
            لا توجد أعمال في هذه الفئة حالياً
          </p>
        </motion.div>
      )}

      {/* النافذة المنبثقة لعرض تفاصيل العمل */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* الصورة */}
                <div className="lg:w-2/3 relative">
                  {selectedItem.image_url ? (
                    <img
                      src={selectedItem.image_url}
                      alt={selectedItem.title}
                      className="w-full h-64 lg:h-full object-cover"
                      onError={(e) => {
                        console.error('فشل في تحميل الصورة في النافذة المنبثقة:', selectedItem.image_url);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-64 lg:h-full bg-gray-200 flex items-center justify-center">
                              <span class="text-gray-400 font-arabic">فشل في تحميل الصورة</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 lg:h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-arabic">لا توجد صورة</span>
                    </div>
                  )}

                  {/* زر الإغلاق */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* التفاصيل */}
                <div className="lg:w-1/3 p-6 overflow-y-auto">
                  <div className="space-y-4">
                    {/* العنوان */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 font-arabic mb-2">
                        {selectedItem.title}
                      </h2>
                      {selectedItem.description && (
                        <p className="text-gray-600 font-arabic leading-relaxed">
                          {selectedItem.description}
                        </p>
                      )}
                    </div>

                    {/* معلومات العمل */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500 font-arabic">الطالب:</p>
                          <p className="font-medium text-gray-800 font-arabic">{selectedItem.student_name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500 font-arabic">المدرب:</p>
                          <p className="font-medium text-gray-800 font-arabic">{selectedItem.instructor}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500 font-arabic">تاريخ الإنجاز:</p>
                          <p className="font-medium text-gray-800">{selectedItem.completion_date}</p>
                        </div>
                      </div>
                    </div>

                    {/* الفئة والمستوى */}
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedItem.category)}`}>
                        {selectedItem.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(selectedItem.skill_level)}`}>
                        {selectedItem.skill_level}
                      </span>
                      {selectedItem.featured && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          عمل مميز
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
