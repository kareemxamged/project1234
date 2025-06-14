/**
 * بيانات الموقع القابلة للتعديل
 * Editable Site Data
 */

import { generateWhatsAppLink, generateViberLink, generatePhoneCallLink, formatPhoneNumber } from '../utils/whatsapp';

export interface SiteData {
  // إعدادات عامة - General Settings
  general: {
    siteName: string;
    siteNameEn: string;
    description: string;
    descriptionEn: string;
    logo: string;
    showLogo: boolean;
    whatsappNumber: string;
  };

  // أقسام الأكاديمية - Academy Sections
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

  // وسائل التواصل الاجتماعي - Social Media
  socialMedia: {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    url: string;
    iconColor: string;
    iconBg: string;
    visible: boolean;
  }[];

  // الدورات التدريبية - Training Courses
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

  // معرض الأعمال - Gallery
  gallery: {
    id: number;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    image: string;
    category: string;
    categoryEn: string;
    studentName: string;
    studentNameEn: string;
    instructor: string;
    instructorEn: string;
    date: string;
    featured: boolean;
    visible: boolean;
    level: 'مبتدئ' | 'متوسط' | 'متقدم';
    levelEn: 'Beginner' | 'Intermediate' | 'Advanced';
  }[];

  // المدربون - Instructors
  instructors: {
    id: number;
    name: string;
    nameEn: string;
    title: string;
    titleEn: string;
    image: string;
    profileUrl: string;
    experience: string;
    experienceEn: string;
    specialties: string[];
    specialtiesEn: string[];
    rating: number;
    studentsCount: number;
    description: string;
    descriptionEn: string;
    visible: boolean;
  }[];

  // موقع الأكاديمية - Academy Location
  location: {
    visible: boolean;
    name: string;
    nameEn: string;
    address: string;
    addressEn: string;
    phone: string;
    workingHours: string;
    workingHoursEn: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    mapsUrl: string;
  };

  // إعدادات الصفحات - Page Settings
  pages: {
    showInstructors: boolean;
    showGallery: boolean;
    showSocialMedia: boolean;
    socialMediaStyle: 'icons' | 'cards'; // نمط عرض وسائل التواصل
    showLocation: boolean;
    showFooter: boolean;
  };
}

// البيانات الافتراضية - Default Data
export const defaultSiteData: SiteData = {
  general: {
    siteName: 'أكاديمية ميمو للرسم',
    siteNameEn: 'MEMO Art Academy',
    description: 'تعلم فن الرسم والإبداع مع أفضل المدربين المحترفين',
    descriptionEn: 'Learn art and creativity with the best professional trainers',
    logo: '/1.png',
    showLogo: true,
    whatsappNumber: '966501234567',
  },

  sections: [
    {
      id: 'courses',
      name: 'الدورات التدريبية',
      nameEn: 'Training Courses',
      icon: 'BookOpen',
      url: '#courses',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      visible: true,
    },
    {
      id: 'instructors',
      name: 'المدربون',
      nameEn: 'Instructors',
      icon: 'Users',
      url: '#instructors',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      visible: true,
    },
    {
      id: 'gallery',
      name: 'معرض الأعمال',
      nameEn: 'Gallery',
      icon: 'Image',
      url: '#gallery',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      visible: true,
    },
    {
      id: 'techniques',
      name: 'تقنيات الرسم',
      nameEn: 'Drawing Techniques',
      icon: 'PenTool',
      url: '#techniques',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      visible: true,
    },
    {
      id: 'certificates',
      name: 'الشهادات',
      nameEn: 'Certificates',
      icon: 'Award',
      url: '#certificates',
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      visible: true,
    },
    {
      id: 'schedule',
      name: 'الجدول الزمني',
      nameEn: 'Schedule',
      icon: 'Calendar',
      url: '#schedule',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100',
      visible: true,
    },
  ],

  socialMedia: [
    {
      id: 'instagram',
      name: 'إنستغرام',
      nameEn: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/memoacademy',
      iconColor: 'text-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-400 to-pink-400',
      visible: true,
    },
    {
      id: 'facebook',
      name: 'فيسبوك',
      nameEn: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-blue-600',
      visible: true,
    },
    {
      id: 'youtube',
      name: 'يوتيوب',
      nameEn: 'YouTube',
      icon: 'YouTube',
      url: 'https://youtube.com/@memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-red-600',
      visible: true,
    },
    {
      id: 'whatsapp',
      name: 'واتساب',
      nameEn: 'WhatsApp',
      icon: 'WhatsApp',
      url: 'https://wa.me/966501234567',
      iconColor: 'text-white',
      iconBg: 'bg-green-500',
      visible: true,
    },
    {
      id: 'linkedin',
      name: 'لينكد إن',
      nameEn: 'LinkedIn',
      icon: 'LinkedIn',
      url: 'https://linkedin.com/company/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-blue-700',
      visible: false,
    },
    {
      id: 'snapchat',
      name: 'سناب شات',
      nameEn: 'Snapchat',
      icon: 'Snapchat',
      url: 'https://snapchat.com/add/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-yellow-400',
      visible: false,
    },
    {
      id: 'tiktok',
      name: 'تيك توك',
      nameEn: 'TikTok',
      icon: 'TikTok',
      url: 'https://tiktok.com/@memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-black',
      visible: false,
    },
    {
      id: 'telegram',
      name: 'تيليجرام',
      nameEn: 'Telegram',
      icon: 'Telegram',
      url: 'https://t.me/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-blue-500',
      visible: false,
    },
    {
      id: 'twitter',
      name: 'تويتر (X)',
      nameEn: 'Twitter (X)',
      icon: 'TwitterX',
      url: 'https://x.com/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-black',
      visible: false,
    },
    {
      id: 'email',
      name: 'البريد الإلكتروني',
      nameEn: 'Email',
      icon: 'Mail',
      url: 'mailto:info@memoacademy.com',
      iconColor: 'text-gray-600',
      iconBg: 'bg-gray-100',
      visible: false,
    },
    {
      id: 'phone',
      name: 'الهاتف',
      nameEn: 'Phone',
      icon: 'Phone',
      url: 'tel:+966501234567',
      iconColor: 'text-green-700',
      iconBg: 'bg-green-50',
      visible: false,
    },
    {
      id: 'discord',
      name: 'ديسكورد',
      nameEn: 'Discord',
      icon: 'Discord',
      url: 'https://discord.gg/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-indigo-600',
      visible: false,
    },
    {
      id: 'pinterest',
      name: 'بينتريست',
      nameEn: 'Pinterest',
      icon: 'Pinterest',
      url: 'https://pinterest.com/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-red-500',
      visible: false,
    },
    {
      id: 'reddit',
      name: 'ريديت',
      nameEn: 'Reddit',
      icon: 'Reddit',
      url: 'https://reddit.com/r/memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-orange-500',
      visible: false,
    },
    {
      id: 'threads',
      name: 'ثريدز',
      nameEn: 'Threads',
      icon: 'Threads',
      url: 'https://threads.net/@memoacademy',
      iconColor: 'text-white',
      iconBg: 'bg-black',
      visible: false,
    },
    {
      id: 'website',
      name: 'الموقع الإلكتروني',
      nameEn: 'Website',
      icon: 'Globe',
      url: 'https://memoacademy.com',
      iconColor: 'text-white',
      iconBg: 'bg-indigo-600',
      visible: false,
    },
    {
      id: 'viber',
      name: 'فايبر',
      nameEn: 'Viber',
      icon: 'Video',
      url: 'viber://chat?number=966501234567',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      visible: false,
    },
  ],

  courses: [
    {
      id: 1,
      title: 'أساسيات الرسم للمبتدئين',
      titleEn: 'Drawing Fundamentals for Beginners',
      description: 'تعلم أساسيات الرسم من الصفر مع التركيز على التقنيات الأساسية والمهارات الضرورية',
      descriptionEn: 'Learn drawing fundamentals from scratch with focus on basic techniques and essential skills',
      duration: '4 أسابيع',
      durationEn: '4 Weeks',
      level: 'مبتدئ',
      levelEn: 'Beginner',
      price: 299,
      currency: 'ريال',
      showPrice: true,
      image: '/course-basics.jpg',
      features: [
        'تعلم أساسيات الخطوط والأشكال',
        'تقنيات التظليل والإضاءة',
        'رسم الطبيعة الصامتة',
        'مشاريع عملية متدرجة'
      ],
      featuresEn: [
        'Learn basic lines and shapes',
        'Shading and lighting techniques',
        'Still life drawing',
        'Progressive practical projects'
      ],
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      category: 'رسم تقليدي',
      categoryEn: 'Traditional Drawing',
      enrollmentUrl: '#enroll-basics',
      visible: true,
      featured: true,
    },
    {
      id: 2,
      title: 'الرسم الرقمي المتقدم',
      titleEn: 'Advanced Digital Art',
      description: 'احترف الرسم الرقمي باستخدام أحدث البرامج والتقنيات المتطورة',
      descriptionEn: 'Master digital art using the latest software and advanced techniques',
      duration: '6 أسابيع',
      durationEn: '6 Weeks',
      level: 'متقدم',
      levelEn: 'Advanced',
      price: 499,
      currency: 'ريال',
      showPrice: true,
      image: '/course-digital.jpg',
      features: [
        'استخدام برامج الرسم الاحترافية',
        'تقنيات الرسم الرقمي المتقدمة',
        'إنشاء أعمال فنية احترافية',
        'نصائح من خبراء المجال'
      ],
      featuresEn: [
        'Professional drawing software usage',
        'Advanced digital art techniques',
        'Creating professional artwork',
        'Expert tips and tricks'
      ],
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      category: 'رسم رقمي',
      categoryEn: 'Digital Art',
      enrollmentUrl: '#enroll-digital',
      visible: true,
      featured: true,
    },
    {
      id: 3,
      title: 'فن البورتريه',
      titleEn: 'Portrait Art',
      description: 'تعلم رسم الوجوه والبورتريه بدقة واحترافية عالية',
      descriptionEn: 'Learn to draw faces and portraits with high precision and professionalism',
      duration: '5 أسابيع',
      durationEn: '5 Weeks',
      level: 'متوسط',
      levelEn: 'Intermediate',
      price: 399,
      currency: 'ريال',
      showPrice: false,
      image: '/course-portrait.jpg',
      features: [
        'تشريح الوجه ونسبه',
        'تقنيات رسم العيون والأنف',
        'التعبير والمشاعر',
        'البورتريه الواقعي'
      ],
      featuresEn: [
        'Face anatomy and proportions',
        'Eye and nose drawing techniques',
        'Expression and emotions',
        'Realistic portraiture'
      ],
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      category: 'بورتريه',
      categoryEn: 'Portrait',
      enrollmentUrl: '#enroll-portrait',
      visible: true,
      featured: false,
    }
  ],

  gallery: [
    {
      id: 1,
      title: 'بورتريه واقعي بالقلم الرصاص',
      titleEn: 'Realistic Pencil Portrait',
      description: 'عمل فني رائع يظهر مهارة عالية في رسم البورتريه الواقعي باستخدام القلم الرصاص',
      descriptionEn: 'Amazing artwork showing high skill in realistic portrait drawing using pencil',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
      category: 'بورتريه',
      categoryEn: 'Portrait',
      studentName: 'سارة أحمد',
      studentNameEn: 'Sarah Ahmed',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-12-15',
      featured: true,
      visible: true,
      level: 'متقدم',
      levelEn: 'Advanced'
    },
    {
      id: 2,
      title: 'منظر طبيعي بالألوان المائية',
      titleEn: 'Watercolor Landscape',
      description: 'لوحة جميلة تصور منظر طبيعي خلاب بتقنية الألوان المائية',
      descriptionEn: 'Beautiful painting depicting a stunning landscape using watercolor technique',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
      category: 'مناظر طبيعية',
      categoryEn: 'Landscape',
      studentName: 'محمد علي',
      studentNameEn: 'Mohammed Ali',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-12-10',
      featured: true,
      visible: true,
      level: 'متوسط',
      levelEn: 'Intermediate'
    },
    {
      id: 3,
      title: 'رسم رقمي لشخصية كرتونية',
      titleEn: 'Digital Cartoon Character',
      description: 'شخصية كرتونية مبدعة تم رسمها باستخدام برامج الرسم الرقمي',
      descriptionEn: 'Creative cartoon character drawn using digital art software',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop',
      category: 'رسم رقمي',
      categoryEn: 'Digital Art',
      studentName: 'فاطمة خالد',
      studentNameEn: 'Fatima Khalid',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-12-08',
      featured: false,
      visible: true,
      level: 'متوسط',
      levelEn: 'Intermediate'
    },
    {
      id: 4,
      title: 'رسم تقليدي بالفحم',
      titleEn: 'Traditional Charcoal Drawing',
      description: 'عمل فني تقليدي باستخدام الفحم يظهر تقنيات التظليل المتقدمة',
      descriptionEn: 'Traditional artwork using charcoal showing advanced shading techniques',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
      category: 'رسم تقليدي',
      categoryEn: 'Traditional Drawing',
      studentName: 'عبدالله محمد',
      studentNameEn: 'Abdullah Mohammed',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-12-05',
      featured: false,
      visible: true,
      level: 'مبتدئ',
      levelEn: 'Beginner'
    },
    {
      id: 5,
      title: 'رسم كاريكاتير مضحك',
      titleEn: 'Funny Caricature Drawing',
      description: 'رسم كاريكاتير مبدع يظهر المهارة في المبالغة الفنية والتعبير',
      descriptionEn: 'Creative caricature drawing showing skill in artistic exaggeration and expression',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
      category: 'رسم كاريكاتير',
      categoryEn: 'Caricature',
      studentName: 'نورا سعد',
      studentNameEn: 'Nora Saad',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-12-01',
      featured: false,
      visible: true,
      level: 'متوسط',
      levelEn: 'Intermediate'
    },
    {
      id: 6,
      title: 'فن تجريدي ملون',
      titleEn: 'Colorful Abstract Art',
      description: 'عمل فني تجريدي يستخدم الألوان الزاهية والأشكال الهندسية',
      descriptionEn: 'Abstract artwork using vibrant colors and geometric shapes',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop',
      category: 'فن تجريدي',
      categoryEn: 'Abstract Art',
      studentName: 'أحمد يوسف',
      studentNameEn: 'Ahmed Youssef',
      instructor: 'أحمد صادق',
      instructorEn: 'Ahmed Sadek',
      date: '2024-11-28',
      featured: true,
      visible: true,
      level: 'متقدم',
      levelEn: 'Advanced'
    }
  ],

  instructors: [
    {
      id: 1,
      name: 'أحمد صادق',
      nameEn: 'Ahmed Sadek',
      title: 'مدرب الرسم الرقمي والتقليدي',
      titleEn: 'Digital & Traditional Drawing Instructor',
      image: '/ahmed-sadek.png',
      profileUrl: 'https://ahmed-sadek-751n.vercel.app/',
      experience: '8+ سنوات',
      experienceEn: '8+ Years',
      specialties: ['الرسم الرقمي', 'الرسم التقليدي', 'البورتريه', 'الرسوم المتحركة'],
      specialtiesEn: ['Digital Art', 'Traditional Drawing', 'Portrait', 'Animation'],
      rating: 4.9,
      studentsCount: 150,
      description: 'خبير في فنون الرسم الرقمي والتقليدي مع أكثر من 8 سنوات من الخبرة في التدريس والإبداع الفني',
      descriptionEn: 'Expert in digital and traditional drawing arts with over 8 years of experience in teaching and artistic creativity',
      visible: true,
    },
  ],

  location: {
    visible: true,
    name: 'أكاديمية ميمو للفنون',
    nameEn: 'MEMO Art Academy',
    address: 'الرياض، المملكة العربية السعودية',
    addressEn: 'Riyadh, Saudi Arabia',
    phone: '+966 50 123 4567',
    workingHours: 'السبت - الخميس: 9:00 ص - 9:00 م',
    workingHoursEn: 'Sat - Thu: 9:00 AM - 9:00 PM',
    coordinates: {
      lat: 24.7136,
      lng: 46.6753,
    },
    mapsUrl: 'https://www.google.com/maps/place/Riyadh+Saudi+Arabia/@24.7135517,46.6752957,11z',
  },

  pages: {
    showInstructors: true,
    showGallery: true,
    showSocialMedia: true,
    socialMediaStyle: 'icons' as const,
    showLocation: true,
    showFooter: true,
  },
};

/**
 * تحديث روابط وسائل التواصل بناءً على رقم الواتساب
 * Update social media links based on WhatsApp number
 */
export const updateSocialMediaLinks = (data: SiteData): SiteData => {
  const whatsappNumber = data.general.whatsappNumber;

  return {
    ...data,
    socialMedia: data.socialMedia.map(item => {
      switch (item.id) {
        case 'whatsapp':
          return {
            ...item,
            url: generateWhatsAppLink(whatsappNumber)
          };
        case 'phone':
          return {
            ...item,
            url: generatePhoneCallLink(whatsappNumber)
          };
        case 'viber':
          return {
            ...item,
            url: generateViberLink(whatsappNumber)
          };
        default:
          return item;
      }
    }),
    location: {
      ...data.location,
      phone: formatPhoneNumber(whatsappNumber)
    }
  };
};

// دالة لحفظ البيانات في localStorage
export const saveSiteData = (data: SiteData): boolean => {
  try {
    // تحديث الروابط قبل الحفظ
    const updatedData = updateSocialMediaLinks(data);
    localStorage.setItem('siteData', JSON.stringify(updatedData));
    return true;
  } catch (error) {
    console.error('خطأ في حفظ البيانات:', error);
    return false;
  }
};

// دالة لتحميل البيانات من localStorage
export const loadSiteData = (): SiteData => {
  try {
    const saved = localStorage.getItem('siteData');
    if (saved) {
      const parsed = JSON.parse(saved);
      // التأكد من وجود جميع الخصائص المطلوبة
      const mergedData = {
        ...defaultSiteData,
        ...parsed,
        general: { ...defaultSiteData.general, ...parsed.general },
        courses: parsed.courses || defaultSiteData.courses,
        gallery: parsed.gallery || defaultSiteData.gallery,
        pages: { ...defaultSiteData.pages, ...parsed.pages }
      };

      // تحديث الروابط بناءً على رقم الواتساب الحالي
      return updateSocialMediaLinks(mergedData);
    }
  } catch (error) {
    console.error('خطأ في تحميل البيانات:', error);
  }
  return updateSocialMediaLinks(defaultSiteData);
};

// دالة لإعادة تعيين البيانات للقيم الافتراضية
export const resetSiteData = (): SiteData => {
  localStorage.removeItem('siteData');
  return defaultSiteData;
};

// دالة للحصول على حالة الخدمة
export const getDataServiceStatus = () => {
  return {
    firebaseEnabled: false,
    firebaseConfigured: false,
    lastSync: null,
    hasLocalData: !!localStorage.getItem('siteData')
  };
};
