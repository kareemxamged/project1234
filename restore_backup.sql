-- =====================================================
-- سكريبت استعادة النسخة الاحتياطية السريع
-- Quick Backup Restoration Script
-- =====================================================
-- استخدم هذا الملف لاستعادة النسخة الاحتياطية بسرعة
-- Use this file to quickly restore the backup
-- =====================================================

-- التحقق من وجود الجداول وحذفها إذا كانت موجودة
-- Check for existing tables and drop them if they exist
DROP TABLE IF EXISTS admin_sessions CASCADE;
DROP TABLE IF EXISTS admins CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS drawing_techniques CASCADE;
DROP TABLE IF EXISTS instructors CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS gallery CASCADE;

-- إنشاء الجداول
-- Create tables
CREATE TABLE gallery (
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

CREATE TABLE courses (
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

CREATE TABLE instructors (
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

CREATE TABLE drawing_techniques (
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

CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE admins (
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

CREATE TABLE admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES admins(id) ON DELETE CASCADE,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- إدراج البيانات الأساسية
-- Insert essential data
INSERT INTO gallery (id, title, title_en, description, description_en, image_url, category, category_en, student_name, student_name_en, instructor, instructor_en, completion_date, featured, visible, skill_level, skill_level_en, created_at, updated_at) VALUES
(1, 'بورتريه واقعي بالقلم الرصاص', 'Realistic Pencil Portrait', 'عمل فني رائع يظهر مهارة عالية في رسم البورتريه الواقعي', 'Amazing artwork showing high skill in realistic portrait drawing', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&auto=format', 'بورتريه', 'Portrait', 'سارة أحمد', 'Sarah Ahmed', 'أحمد صادق', 'Ahmed Sadek', '2024-12-15', true, true, 'متقدم', 'Advanced', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00'),
(2, 'منظر طبيعي بالألوان المائية', 'Watercolor Landscape', 'لوحة جميلة تصور منظر طبيعي خلاب بتقنية الألوان المائية', 'Beautiful painting depicting a stunning landscape using watercolor technique', 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop&auto=format', 'مناظر طبيعية', 'Landscape', 'محمد علي', 'Mohammed Ali', 'أحمد صادق', 'Ahmed Sadek', '2024-12-10', true, true, 'متوسط', 'Intermediate', '2025-06-13 22:38:43.424906+00', '2025-06-13 22:38:43.424906+00');

INSERT INTO instructors (id, name, name_en, title, title_en, image_url, experience, experience_en, specialties, specialties_en, rating, students_count, description, description_en, visible, created_at, updated_at) VALUES
(1, 'أحمد صادق', 'Ahmed Sadek', 'مدرب رسم محترف', 'Professional Drawing Instructor', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format', '10 سنوات خبرة في تعليم الرسم', '10 years experience in teaching drawing', ARRAY['رسم تقليدي', 'بورتريه', 'رسم بالقلم الرصاص'], ARRAY['Traditional Drawing', 'Portrait', 'Pencil Drawing'], 4.90, 150, 'مدرب متخصص في الرسم التقليدي والبورتريه مع خبرة واسعة في تطوير مهارات الطلاب', 'Specialized instructor in traditional drawing and portraits with extensive experience in developing student skills', true, '2025-06-13 23:09:57.374454+00', '2025-06-15 19:15:29.751+00');

INSERT INTO courses (id, title, title_en, description, description_en, duration, duration_en, level_name, level_name_en, price, currency, show_price, image_url, features, features_en, instructor, instructor_en, category, category_en, enrollment_url, visible, featured, created_at, updated_at) VALUES
(1, 'أساسيات الرسم للمبتدئين', 'Drawing Fundamentals for Beginners', 'تعلم أساسيات الرسم من الصفر مع التركيز على التقنيات الأساسية والمهارات الضرورية', 'Learn drawing fundamentals from scratch with focus on basic techniques and essential skills', '4 أسابيع', '4 Weeks', 'مبتدئ', 'Beginner', 299.00, 'ريال سعودي', true, '/course-basics.jpg', ARRAY['تعلم أساسيات الخطوط والأشكال', 'تقنيات التظليل والإضاءة', 'رسم الطبيعة الصامتة', 'مشاريع عملية متدرجة'], ARRAY['Learn basic lines and shapes', 'Shading and lighting techniques', 'Still life drawing', 'Progressive practical projects'], 'أحمد صادق', 'Ahmed Sadek', 'رسم تقليدي', 'Traditional Drawing', '#enroll-basics', true, true, '2025-06-15 00:11:30.10463+00', '2025-06-15 00:11:30.10463+00');

INSERT INTO settings (id, setting_key, setting_value, created_at, updated_at) VALUES
(1, 'general', '{"logo": "/1.png", "showLogo": true, "siteName": "أكاديمية ميمو للرسم", "siteNameEn": "MEMO Art Academy", "description": "تعلم فن الرسم والإبداع مع أفضل المدربين المحترفين", "descriptionEn": "Learn art and creativity with the best professional trainers", "whatsappNumber": "966501234567"}', '2025-06-13 22:38:00.454002+00', '2025-06-15 19:20:55.823+00');

INSERT INTO admins (id, username, email, password_hash, role, is_active, created_at, updated_at) VALUES
('2ea7fa5d-0078-4589-a379-c046a5756955', 'superadmin', 'admin@artacademy.com', '$2b$10$QCOkckjrZnFJZ/TMzFOfhu5t1.l3PSP3nEjzRxsaKA9CnxWM4tcSC', 'super_admin', true, '2025-06-14 13:59:31.392323+00', '2025-06-14 13:59:31.392323+00');

-- تحديث التسلسلات
-- Update sequences
SELECT setval('gallery_id_seq', (SELECT MAX(id) FROM gallery));
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));
SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));
SELECT setval('settings_id_seq', (SELECT MAX(id) FROM settings));

-- إنشاء Storage Bucket (اختياري - قد يحتاج صلاحيات خاصة)
-- Create Storage Bucket (optional - may need special permissions)
-- INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
-- VALUES ('instructor-images', 'instructor-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

-- رسالة نجاح
-- Success message
SELECT 'تمت استعادة النسخة الاحتياطية بنجاح! Backup restored successfully!' as message;
