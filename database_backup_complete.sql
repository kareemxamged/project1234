-- =====================================================
-- نسخة احتياطية كاملة لقاعدة بيانات أكاديمية ميمو للرسم
-- Complete Database Backup for MEMO Art Academy
-- =====================================================
-- تاريخ النسخة الاحتياطية: 2025-06-15
-- Backup Date: 2025-06-15
-- مشروع Supabase: art-academy-website (fgekgmbiirrlkmbjahba)
-- Supabase Project: art-academy-website (fgekgmbiirrlkmbjahba)
-- =====================================================

-- إنشاء قاعدة البيانات والجداول
-- Create Database and Tables

-- جدول المعرض (Gallery)
CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  category_en TEXT,
  student_name TEXT NOT NULL,
  student_name_en TEXT,
  instructor TEXT NOT NULL,
  instructor_en TEXT,
  completion_date DATE NOT NULL,
  featured BOOLEAN DEFAULT false,
  visible BOOLEAN DEFAULT true,
  skill_level TEXT CHECK (skill_level IN ('مبتدئ', 'متوسط', 'متقدم')) NOT NULL,
  skill_level_en TEXT CHECK (skill_level_en IN ('Beginner', 'Intermediate', 'Advanced')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول الدورات (Courses)
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  duration TEXT NOT NULL,
  duration_en TEXT,
  level_name TEXT NOT NULL,
  level_name_en TEXT,
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'ريال',
  show_price BOOLEAN DEFAULT true,
  image_url TEXT,
  features TEXT[],
  features_en TEXT[],
  instructor TEXT NOT NULL,
  instructor_en TEXT,
  category TEXT NOT NULL,
  category_en TEXT,
  enrollment_url TEXT,
  visible BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول المدربين (Instructors)
CREATE TABLE IF NOT EXISTS instructors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT,
  title TEXT NOT NULL,
  title_en TEXT,
  image_url TEXT,
  profile_url TEXT,
  experience TEXT,
  experience_en TEXT,
  specialties TEXT[],
  specialties_en TEXT[],
  rating DECIMAL(3,2) DEFAULT 0,
  students_count INTEGER DEFAULT 0,
  description TEXT,
  description_en TEXT,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول تقنيات الرسم (Drawing Techniques)
CREATE TABLE IF NOT EXISTS drawing_techniques (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  content TEXT NOT NULL,
  content_en TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('مبتدئ', 'متوسط', 'متقدم')) NOT NULL,
  difficulty_level_en TEXT CHECK (difficulty_level_en IN ('Beginner', 'Intermediate', 'Advanced')),
  category TEXT NOT NULL,
  category_en TEXT,
  tools_needed TEXT[],
  tools_needed_en TEXT[],
  steps TEXT[],
  steps_en TEXT[],
  tips TEXT[],
  tips_en TEXT[],
  image_url TEXT,
  video_url TEXT,
  estimated_time TEXT,
  estimated_time_en TEXT,
  prerequisites TEXT[],
  prerequisites_en TEXT[],
  related_techniques INTEGER[],
  featured BOOLEAN DEFAULT false,
  visible BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول الإعدادات (Settings)
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول المديرين (Admins)
CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES admins(id),
  last_login TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول جلسات المديرين (Admin Sessions)
CREATE TABLE IF NOT EXISTS admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES admins(id) ON DELETE CASCADE,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- =====================================================
-- إدراج البيانات - Data Insertion
-- =====================================================

-- بيانات المعرض (Gallery Data)
INSERT INTO gallery (id, title, title_en, description, description_en, image_url, category, category_en, student_name, student_name_en, instructor, instructor_en, completion_date, featured, visible, skill_level, skill_level_en, created_at, updated_at) VALUES
(1, 'بورتريه واقعي بالقلم الرصاص', 'Realistic Pencil Portrait', 'عمل فني رائع يظهر مهارة عالية في رسم البورتريه الواقعي', 'Amazing artwork showing high skill in realistic portrait drawing', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&auto=format', 'بورتريه', 'Portrait', 'سارة أحمد', 'Sarah Ahmed', 'أحمد صادق', 'Ahmed Sadek', '2024-12-15', true, true, 'متقدم', 'Advanced', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(2, 'منظر طبيعي بالألوان المائية', 'Watercolor Landscape', 'لوحة جميلة تصور منظر طبيعي خلاب بتقنية الألوان المائية', 'Beautiful painting depicting a stunning landscape using watercolor technique', 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop&auto=format', 'مناظر طبيعية', 'Landscape', 'محمد علي', 'Mohammed Ali', 'أحمد صادق', 'Ahmed Sadek', '2024-12-10', true, true, 'متوسط', 'Intermediate', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(3, 'رسم رقمي لشخصية كرتونية', 'Digital Cartoon Character', 'شخصية كرتونية مبدعة تم رسمها باستخدام برامج الرسم الرقمي', 'Creative cartoon character drawn using digital art software', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop&auto=format', 'رسم رقمي', 'Digital Art', 'فاطمة خالد', 'Fatima Khalid', 'أحمد صادق', 'Ahmed Sadek', '2024-12-08', false, true, 'متوسط', 'Intermediate', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(4, 'رسم تقليدي بالفحم', 'Traditional Charcoal Drawing', 'عمل فني تقليدي باستخدام الفحم يظهر تقنيات التظليل المتقدمة', 'Traditional artwork using charcoal showing advanced shading techniques', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&auto=format', 'رسم تقليدي', 'Traditional Drawing', 'عبدالله محمد', 'Abdullah Mohammed', 'أحمد صادق', 'Ahmed Sadek', '2024-12-05', false, true, 'مبتدئ', 'Beginner', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(5, 'فن تجريدي ملون', 'Colorful Abstract Art', 'عمل فني تجريدي يستخدم الألوان الزاهية والأشكال الهندسية', 'Abstract artwork using vibrant colors and geometric shapes', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop&auto=format', 'فن تجريدي', 'Abstract Art', 'أحمد يوسف', 'Ahmed Youssef', 'أحمد صادق', 'Ahmed Sadek', '2024-11-28', true, true, 'متقدم', 'Advanced', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(6, 'رسم كاريكاتير مضحك', 'Funny Caricature', 'رسم كاريكاتير مبدع يظهر مهارة في المبالغة الفنية', 'Creative caricature showing artistic exaggeration skills', 'https://fgekgmbiirrlkmbjahba.supabase.co/storage/v1/object/public/instructor-images/gallery-6-usfux6y8zlk.png', 'رسم كاريكاتير', 'Caricature', 'ليلى حسن', 'Layla Hassan', 'أحمد صادق', 'Ahmed Sadek', '2024-12-01', false, true, 'متوسط', 'Intermediate', '2025-06-14 15:13:36.142208+00', '2025-06-14 16:18:47.636+00'),
(7, 'رسم زيتي لوردة', 'Oil Painting Rose', 'لوحة زيتية جميلة لوردة حمراء بتفاصيل دقيقة', 'Beautiful oil painting of a red rose with fine details', 'https://fgekgmbiirrlkmbjahba.supabase.co/storage/v1/object/public/instructor-images/gallery-7-o8a5x7fio3.png', 'رسم تقليدي', 'Traditional Drawing', 'عمر أحمد', 'Omar Ahmed', 'أحمد صادق', 'Ahmed Sadek', '2024-11-25', true, true, 'متقدم', 'Advanced', '2025-06-14 15:13:59.150929+00', '2025-06-14 16:09:19.136+00'),
(8, 'رسم معماري بالقلم الرصاص', 'Architectural Pencil Drawing', 'رسم معماري دقيق يظهر مهارة في المنظور والتفاصيل', 'Precise architectural drawing showing perspective and detail skills', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=500&fit=crop&auto=format', 'رسم تقليدي', 'Traditional Drawing', 'نور محمد', 'Nour Mohammed', 'أحمد صادق', 'Ahmed Sadek', '2024-11-20', false, true, 'متقدم', 'Advanced', '2025-06-14 15:14:19.505987+00', '2025-06-14 15:14:19.505987+00');

-- تحديث تسلسل المعرف للمعرض
SELECT setval('gallery_id_seq', (SELECT MAX(id) FROM gallery));

-- بيانات الدورات (Courses Data)
INSERT INTO courses (id, title, title_en, description, description_en, duration, duration_en, level_name, level_name_en, price, currency, show_price, image_url, features, features_en, instructor, instructor_en, category, category_en, enrollment_url, visible, featured, created_at, updated_at) VALUES
(1, 'أساسيات الرسم للمبتدئين', 'Drawing Fundamentals for Beginners', 'تعلم أساسيات الرسم من الصفر مع التركيز على التقنيات الأساسية والمهارات الضرورية', 'Learn drawing fundamentals from scratch with focus on basic techniques and essential skills', '4 أسابيع', '4 Weeks', 'مبتدئ', 'Beginner', 299.00, 'ريال سعودي', true, '/course-basics.jpg', ARRAY['تعلم أساسيات الخطوط والأشكال', 'تقنيات التظليل والإضاءة', 'رسم الطبيعة الصامتة', 'مشاريع عملية متدرجة'], ARRAY['Learn basic lines and shapes', 'Shading and lighting techniques', 'Still life drawing', 'Progressive practical projects'], 'أحمد صادق', 'Ahmed Sadek', 'رسم تقليدي', 'Traditional Drawing', '#enroll-basics', true, true, '2025-06-15 00:11:30.10463+00', '2025-06-15 00:11:30.10463+00'),
(2, 'الرسم الرقمي المتقدم جدا', 'Advanced Digital Art', 'احترف الرسم الرقمي باستخدام أحدث البرامج والتقنيات المتطورة', 'Master digital art using the latest software and advanced techniques', '6 أسابيع', '6 Weeks', 'متقدم', 'Advanced', 499.00, 'ريال سعودي', true, '/course-digital.jpg', ARRAY['استخدام برامج الرسم الاحترافية', 'تقنيات الرسم الرقمي المتقدمة', 'إنشاء أعمال فنية احترافية', 'نصائح من خبراء المجال'], ARRAY['Professional drawing software usage', 'Advanced digital art techniques', 'Creating professional artwork', 'Expert tips and tricks'], 'أحمد صادق', 'Ahmed Sadek', 'رسم رقمي', 'Digital Art', '#enroll-digital', true, true, '2025-06-15 00:12:06.203821+00', '2025-06-15 00:16:08.153+00'),
(3, 'فن البورتريه', 'Portrait Art', 'تعلم رسم الوجوه والبورتريه بدقة واحترافية عالية', 'Learn to draw faces and portraits with high precision and professionalism', '5 أسابيع', '5 Weeks', 'متوسط', 'Intermediate', 399.00, 'جنيه مصري', true, '/course-portrait.jpg', ARRAY['تشريح الوجه ونسبه', 'تقنيات رسم العيون والأنف', 'التعبير والمشاعر', 'البورتريه الواقعي'], ARRAY['Face anatomy and proportions', 'Eye and nose drawing techniques', 'Expression and emotions', 'Realistic portraiture'], 'أحمد صادق', 'Ahmed Sadek', 'بورتريه', 'Portrait', '#enroll-portrait', true, false, '2025-06-15 00:12:51.984843+00', '2025-06-15 00:31:08.406+00');

-- تحديث تسلسل المعرف للدورات
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));

-- بيانات المدربين (Instructors Data)
INSERT INTO instructors (id, name, name_en, title, title_en, image_url, profile_url, experience, experience_en, specialties, specialties_en, rating, students_count, description, description_en, visible, created_at, updated_at) VALUES
(1, 'أحمد صادق', 'Ahmed Sadek', 'مدرب رسم محترف', 'Professional Drawing Instructor', 'https://fgekgmbiirrlkmbjahba.supabase.co/storage/v1/object/public/instructor-images/instructor-1-jewts2fu90q.png', null, '10 سنوات خبرة في تعليم الرسم', '10 years experience in teaching drawing', ARRAY['رسم تقليدي', 'بورتريه', 'رسم بالقلم الرصاص'], ARRAY['Traditional Drawing', 'Portrait', 'Pencil Drawing'], 4.90, 150, 'مدرب متخصص في الرسم التقليدي والبورتريه مع خبرة واسعة في تطوير مهارات الطلاب', 'Specialized instructor in traditional drawing and portraits with extensive experience in developing student skills', true, '2025-06-13 23:09:57.374454+00', '2025-06-15 19:15:29.751+00');

-- تحديث تسلسل المعرف للمدربين
SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));

-- بيانات تقنيات الرسم (Drawing Techniques Data)
INSERT INTO drawing_techniques (id, title, title_en, description, description_en, content, content_en, difficulty_level, difficulty_level_en, category, category_en, tools_needed, tools_needed_en, steps, steps_en, tips, tips_en, image_url, video_url, estimated_time, estimated_time_en, prerequisites, prerequisites_en, related_techniques, featured, visible, view_count, created_at, updated_at) VALUES
(1, 'تقنية التظليل بالقلم الرصاص', 'Pencil Shading Technique', 'تعلم أساسيات التظليل بالقلم الرصاص لإضافة العمق والبعد الثالث', 'Learn the basics of pencil shading to add depth and dimension to your drawings', 'التظليل هو أحد أهم التقنيات في الرسم بالقلم الرصاص. يساعد على إظهار الأبعاد والعمق في الرسمة، ويخلق تأثيرات بصرية مذهلة.', 'Shading is one of the most important techniques in pencil drawing. It helps show dimensions and depth in the drawing, creating stunning visual effects.', 'مبتدئ', 'Beginner', 'رسم تقليدي', 'Traditional Drawing', ARRAY['قلم رصاص 2B', 'قلم رصاص 4B', 'قلم رصاص 6B', 'ممحاة', 'ورق رسم'], ARRAY['2B Pencil', '4B Pencil', '6B Pencil', 'Eraser', 'Drawing Paper'], ARRAY['ابدأ برسم الشكل الأساسي', 'حدد مصدر الضوء', 'ابدأ بالظلال الفاتحة', 'أضف الظلال المتوسطة', 'أنهِ بالظلال الداكنة'], ARRAY['Start with basic shape', 'Identify light source', 'Begin with light shadows', 'Add medium shadows', 'Finish with dark shadows'], ARRAY['استخدم حركات دائرية للتظليل', 'لا تضغط بقوة على القلم', 'ابدأ بالفاتح وانتقل للداكن'], ARRAY['Use circular motions for shading', 'Do not press too hard on the pencil', 'Start light and go darker'], null, null, '30-45 دقيقة', '30-45 minutes', ARRAY['معرفة أساسيات الرسم'], ARRAY['Basic drawing knowledge'], null, true, true, 0, '2025-06-13 23:53:05.748224+00', '2025-06-13 23:53:05.748224+00'),
(2, 'رسم البورتريه بالقلم الرصاص', 'Portrait Drawing with Pencil', 'تعلم أساسيات رسم الوجوه بالقلم الرصاص بطريقة احترافية', 'Learn the basics of drawing faces with pencil in a professional way', 'رسم البورتريه يتطلب فهم نسب الوجه وتشريحه. سنتعلم كيفية رسم العينين والأنف والفم بدقة.', 'Portrait drawing requires understanding facial proportions and anatomy. We will learn how to draw eyes, nose, and mouth accurately.', 'متوسط', 'Intermediate', 'رسم تقليدي', 'Traditional Drawing', ARRAY['قلم رصاص HB', 'قلم رصاص 2B', 'قلم رصاص 4B', 'ممحاة', 'مسطرة'], ARRAY['HB Pencil', '2B Pencil', '4B Pencil', 'Eraser', 'Ruler'], ARRAY['رسم الشكل البيضاوي للوجه', 'تحديد مواقع العينين', 'رسم الأنف', 'رسم الفم', 'إضافة التفاصيل'], ARRAY['Draw oval face shape', 'Mark eye positions', 'Draw the nose', 'Draw the mouth', 'Add details'], ARRAY['استخدم قاعدة الثلث لتقسيم الوجه', 'ابدأ بالعين اليسرى', 'انتبه للنسب بين الملامح'], ARRAY['Use rule of thirds for face division', 'Start with left eye', 'Pay attention to proportions between features'], null, null, '60-90 دقيقة', '60-90 minutes', ARRAY['إتقان تقنية التظليل'], ARRAY['Master shading technique'], null, true, true, 0, '2025-06-13 23:55:10.812519+00', '2025-06-13 23:55:10.812519+00'),
(3, 'الرسم بالألوان المائية', 'Watercolor Painting', 'تعلم أساسيات الرسم بالألوان المائية وتقنيات المزج', 'Learn the basics of watercolor painting and blending techniques', 'الألوان المائية تتطلب تقنيات خاصة في التعامل مع الماء والألوان. سنتعلم كيفية التحكم في انتشار اللون.', 'Watercolors require special techniques in dealing with water and colors. We will learn how to control color spread.', 'مبتدئ', 'Beginner', 'ألوان مائية', 'Watercolor', ARRAY['ألوان مائية', 'فرش مختلفة الأحجام', 'ورق مائي', 'إسفنجة', 'ماء'], ARRAY['Watercolor paints', 'Different sized brushes', 'Watercolor paper', 'Sponge', 'Water'], ARRAY['تحضير الأدوات', 'بلل الورق', 'اختيار الألوان', 'البدء بالفاتح', 'إضافة التفاصيل'], ARRAY['Prepare tools', 'Wet the paper', 'Choose colors', 'Start light', 'Add details'], ARRAY['اعمل بسرعة قبل جفاف اللون', 'استخدم ماء نظيف', 'لا تخف من الأخطاء'], ARRAY['Work quickly before color dries', 'Use clean water', 'Do not be afraid of mistakes'], null, null, '45-60 دقيقة', '45-60 minutes', ARRAY[]::text[], ARRAY[]::text[], null, false, true, 0, '2025-06-13 23:55:10.812519+00', '2025-06-13 23:55:10.812519+00'),
(4, 'رسم المناظر الطبيعية', 'Landscape Drawing', 'تعلم رسم المناظر الطبيعية بالقلم الرصاص والألوان', 'Learn to draw natural landscapes with pencil and colors', 'رسم المناظر الطبيعية يتطلب فهم المنظور والعمق. سنتعلم رسم الأشجار والجبال والمياه.', 'Landscape drawing requires understanding perspective and depth. We will learn to draw trees, mountains, and water.', 'متوسط', 'Intermediate', 'رسم تقليدي', 'Traditional Drawing', ARRAY['قلم رصاص HB', 'قلم رصاص 2B', 'قلم رصاص 4B', 'ممحاة', 'منديل مزج'], ARRAY['HB Pencil', '2B Pencil', '4B Pencil', 'Eraser', 'Blending stump'], ARRAY['رسم خط الأفق', 'تحديد نقطة التلاشي', 'رسم العناصر البعيدة', 'رسم العناصر القريبة', 'إضافة التفاصيل'], ARRAY['Draw horizon line', 'Set vanishing point', 'Draw distant elements', 'Draw near elements', 'Add details'], ARRAY['ابدأ بالعناصر البعيدة أولاً', 'استخدم المنظور لإظهار العمق', 'انتبه للإضاءة الطبيعية'], ARRAY['Start with distant elements first', 'Use perspective to show depth', 'Pay attention to natural lighting'], null, null, '90-120 دقيقة', '90-120 minutes', ARRAY['فهم أساسيات المنظور'], ARRAY['Understanding perspective basics'], null, false, true, 0, '2025-06-13 23:56:32.862534+00', '2025-06-14 00:19:21.407+00'),
(5, 'الرسم الرقمي للمبتدئين', 'Digital Drawing for Beginners', 'مقدمة في الرسم الرقمي واستخدام البرامج', 'Introduction to digital drawing and software usage', 'الرسم الرقمي يفتح آفاقاً جديدة في عالم الفن. سنتعلم أساسيات استخدام البرامج والأدوات.', 'Digital drawing opens new horizons in the art world. We will learn the basics of using software and tools.', 'مبتدئ', 'Beginner', 'رسم رقمي', 'Digital Art', ARRAY['جهاز لوحي رقمي', 'قلم رقمي', 'برنامج رسم', 'حاسوب'], ARRAY['Digital tablet', 'Digital pen', 'Drawing software', 'Computer'], ARRAY['تحضير البرنامج', 'التعرف على الأدوات', 'رسم أشكال بسيطة', 'تجربة الطبقات', 'حفظ العمل'], ARRAY['Prepare software', 'Learn about tools', 'Draw simple shapes', 'Try layers', 'Save work'], ARRAY['ابدأ ببرامج مجانية', 'تدرب على استخدام الطبقات', 'لا تخف من التجريب'], ARRAY['Start with free software', 'Practice using layers', 'Do not be afraid to experiment'], null, null, '60-90 دقيقة', '60-90 minutes', ARRAY['معرفة أساسية بالحاسوب'], ARRAY['Basic computer knowledge'], null, false, true, 0, '2025-06-13 23:56:32.862534+00', '2025-06-13 23:56:32.862534+00'),
(6, 'تقنية الرسم بالفحم', 'Charcoal Drawing Technique', 'تعلم الرسم بالفحم وإنشاء تأثيرات دراماتيكية', 'Learn charcoal drawing and create dramatic effects', 'الفحم يعطي تأثيرات دراماتيكية وقوية. سنتعلم كيفية التحكم في هذه المادة وإنشاء أعمال مذهلة.', 'Charcoal gives dramatic and powerful effects. We will learn how to control this medium and create stunning works.', 'متقدم', 'Advanced', 'رسم تقليدي', 'Traditional Drawing', ARRAY['فحم طبيعي', 'فحم مضغوط', 'ممحاة عجينة', 'ورق خشن', 'منديل مزج'], ARRAY['Natural charcoal', 'Compressed charcoal', 'Kneaded eraser', 'Rough paper', 'Blending stump'], ARRAY['تحضير الورق', 'رسم الشكل العام', 'إضافة الظلال الداكنة', 'مزج الفحم', 'إضافة الإضاءة'], ARRAY['Prepare paper', 'Draw general shape', 'Add dark shadows', 'Blend charcoal', 'Add highlights'], ARRAY['اعمل في منطقة جيدة التهوية', 'استخدم مثبت الرسم', 'ابدأ بالفاتح وانتقل للداكن'], ARRAY['Work in well-ventilated area', 'Use fixative spray', 'Start light and go darker'], null, null, '120-150 دقيقة', '120-150 minutes', ARRAY['إتقان الرسم بالقلم الرصاص'], ARRAY['Master pencil drawing'], null, true, true, 0, '2025-06-13 23:56:32.862534+00', '2025-06-15 19:16:11.555+00');

-- تحديث تسلسل المعرف لتقنيات الرسم
SELECT setval('drawing_techniques_id_seq', (SELECT MAX(id) FROM drawing_techniques));

-- بيانات الإعدادات (Settings Data)
INSERT INTO settings (id, setting_key, setting_value, created_at, updated_at) VALUES
(1, 'general', '{"logo": "/1.png", "showLogo": true, "siteName": "أكاديمية ميمو للرسم", "siteNameEn": "MEMO Art Academy", "description": "تعلم فن الرسم والإبداع مع أفضل المدربين المحترفين", "descriptionEn": "Learn art and creativity with the best professional trainers", "whatsappNumber": "966501234567"}', '2025-06-13 22:38:00.454002+00', '2025-06-15 19:20:55.823+00'),
(2, 'pages', '{"showFooter": true, "showGallery": true, "showLocation": true, "showInstructors": true, "showSocialMedia": true, "socialMediaStyle": "icons"}', '2025-06-13 22:38:00.454002+00', '2025-06-15 19:20:57.344+00'),
(5, 'sections', '[{"id": "courses", "url": "#courses", "icon": "BookOpen", "name": "الدورات التدريبية", "iconBg": "bg-blue-100", "nameEn": "Training Courses", "visible": true, "iconColor": "text-blue-600"}, {"id": "instructors", "url": "#instructors", "icon": "Users", "name": "المدربون", "iconBg": "bg-green-100", "nameEn": "Instructors", "visible": true, "iconColor": "text-green-600"}, {"id": "gallery", "url": "#gallery", "icon": "Image", "name": "معرض الأعمال", "iconBg": "bg-purple-100", "nameEn": "Gallery", "visible": true, "iconColor": "text-purple-600"}, {"id": "techniques", "url": "#techniques", "icon": "PenTool", "name": "تقنيات الرسم", "iconBg": "bg-orange-100", "nameEn": "Drawing Techniques", "visible": true, "iconColor": "text-orange-600"}, {"id": "certificates", "url": "#certificates", "icon": "Award", "name": "الشهادا", "iconBg": "bg-yellow-100", "nameEn": "Certificates", "visible": false, "iconColor": "text-yellow-600"}, {"id": "schedule", "url": "#schedule", "icon": "Calendar", "name": "الجدول الزمني", "iconBg": "bg-red-100", "nameEn": "Schedule", "visible": false, "iconColor": "text-red-600"}]', '2025-06-14 22:24:16.886769+00', '2025-06-15 19:20:56.197+00'),
(9, 'socialMedia', '[{"id": "instagram", "url": "https://instagram.com/memoacademy", "icon": "Instagram", "name": "إنستغرام", "iconBg": "bg-gradient-to-br from-purple-400 to-pink-400", "nameEn": "Instagram", "visible": true, "iconColor": "text-pink-600"}, {"id": "facebook", "url": "https://facebook.com/memoacademy", "icon": "Facebook", "name": "فيسبوك", "iconBg": "bg-blue-600", "nameEn": "Facebook", "visible": true, "iconColor": "text-white"}, {"id": "youtube", "url": "https://youtube.com/@memoacademy", "icon": "YouTube", "name": "يوتيوب", "iconBg": "bg-red-600", "nameEn": "YouTube", "visible": false, "iconColor": "text-white"}, {"id": "whatsapp", "url": "https://wa.me/966501234567", "icon": "WhatsApp", "name": "واتساب", "iconBg": "bg-green-500", "nameEn": "WhatsApp", "visible": true, "iconColor": "text-white"}]', '2025-06-14 22:48:00.45845+00', '2025-06-15 19:20:56.579+00'),
(10, 'location', '{"name": "ميمو أكاديمي", "phone": "+966 50 123 4567", "nameEn": "MEMO Academy", "address": "سنباط", "mapsUrl": "https://www.google.com/maps/place/Riyadh+Saudi+Arabia/@24.7135517,46.6752957,11z", "visible": true, "addressEn": "خلف الثانوي بجوار صيدلية سحر شارع قاعة هابي سمر لاند", "coordinates": {"lat": 24.7136, "lng": 46.6753}, "workingHours": "السبت - الخميس: 9:00 ص - 9:00 م", "workingHoursEn": "Sat - Thu: 9:00 AM - 9:00 PM"}', '2025-06-14 22:48:01.824473+00', '2025-06-15 19:20:56.953+00'),
(11, 'last_sync', '"2025-06-15T19:20:57.529Z"', '2025-06-14 23:24:26.515885+00', '2025-06-15 19:20:57.721+00');

-- تحديث تسلسل المعرف للإعدادات
SELECT setval('settings_id_seq', (SELECT MAX(id) FROM settings));

-- بيانات المديرين (Admins Data)
INSERT INTO admins (id, username, email, password_hash, role, is_active, created_at, created_by, last_login, updated_at) VALUES
('2ea7fa5d-0078-4589-a379-c046a5756955', 'superadmin', 'admin@artacademy.com', '$2b$10$QCOkckjrZnFJZ/TMzFOfhu5t1.l3PSP3nEjzRxsaKA9CnxWM4tcSC', 'super_admin', true, '2025-06-14 13:59:31.392323+00', null, null, '2025-06-14 13:59:31.392323+00');

-- ملاحظة: جدول admin_sessions فارغ حالياً
-- Note: admin_sessions table is currently empty

-- =====================================================
-- إعدادات Storage - Storage Configuration
-- =====================================================

-- إنشاء Storage Bucket للصور
-- Create Storage Bucket for Images
-- Bucket Name: instructor-images
-- Public: true
-- File Size Limit: 5MB (5242880 bytes)
-- Allowed MIME Types: image/jpeg, image/png, image/webp, image/gif

-- ملاحظة: يجب إنشاء Storage bucket يدوياً في Supabase Dashboard
-- Note: Storage bucket must be created manually in Supabase Dashboard
-- أو استخدام Supabase CLI أو Management API
-- Or use Supabase CLI or Management API

-- =====================================================
-- معلومات إضافية - Additional Information
-- =====================================================

-- معلومات المشروع:
-- Project Information:
-- - اسم المشروع: art-academy-website
-- - Project Name: art-academy-website
-- - المعرف: fgekgmbiirrlkmbjahba
-- - Project ID: fgekgmbiirrlkmbjahba
-- - المنطقة: us-east-1
-- - Region: us-east-1
-- - إصدار PostgreSQL: 17.4.1.043
-- - PostgreSQL Version: 17.4.1.043

-- الجداول المتضمنة في النسخة الاحتياطية:
-- Tables included in backup:
-- 1. gallery (8 records) - معرض الأعمال
-- 2. courses (3 records) - الدورات التدريبية
-- 3. instructors (1 record) - المدربون
-- 4. drawing_techniques (6 records) - تقنيات الرسم
-- 5. settings (6 records) - الإعدادات
-- 6. admins (1 record) - المديرون
-- 7. admin_sessions (0 records) - جلسات المديرين

-- Storage Buckets:
-- 1. instructor-images (public bucket for images)

-- =====================================================
-- تعليمات الاستعادة - Restoration Instructions
-- =====================================================

-- لاستعادة النسخة الاحتياطية:
-- To restore the backup:
-- 1. إنشاء مشروع Supabase جديد
--    Create a new Supabase project
-- 2. تشغيل هذا الملف في SQL Editor
--    Run this file in SQL Editor
-- 3. إنشاء Storage bucket للصور
--    Create storage bucket for images
-- 4. تحديث معلومات الاتصال في التطبيق
--    Update connection info in application

-- ملاحظة هامة: تأكد من تحديث:
-- Important Note: Make sure to update:
-- - SUPABASE_URL في ملف البيئة
-- - SUPABASE_URL in environment file
-- - SUPABASE_ANON_KEY في ملف البيئة
-- - SUPABASE_ANON_KEY in environment file
-- - إعدادات RLS إذا لزم الأمر
-- - RLS settings if needed

-- تاريخ إنشاء النسخة الاحتياطية: 2025-06-15
-- Backup creation date: 2025-06-15
-- حالة قاعدة البيانات: ACTIVE_HEALTHY
-- Database status: ACTIVE_HEALTHY

-- انتهت النسخة الاحتياطية بنجاح
-- Backup completed successfully
