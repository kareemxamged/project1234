# 🗄️ نسخة احتياطية كاملة لقاعدة بيانات أكاديمية ميمو للرسم
# Complete Database Backup for MEMO Art Academy

## 📋 معلومات النسخة الاحتياطية | Backup Information

- **تاريخ النسخة الاحتياطية**: 2025-06-15
- **Backup Date**: 2025-06-15
- **مشروع Supabase**: art-academy-website
- **Supabase Project**: art-academy-website
- **معرف المشروع**: fgekgmbiirrlkmbjahba
- **Project ID**: fgekgmbiirrlkmbjahba
- **المنطقة**: us-east-1
- **Region**: us-east-1
- **إصدار PostgreSQL**: 17.4.1.043
- **PostgreSQL Version**: 17.4.1.043

## 📁 الملفات المتضمنة | Included Files

### 1. `database_backup_complete.sql`
- نسخة احتياطية كاملة بصيغة SQL
- Complete SQL backup file
- يحتوي على جميع الجداول والبيانات
- Contains all tables and data
- جاهز للتشغيل في أي قاعدة بيانات PostgreSQL
- Ready to run on any PostgreSQL database

### 2. `database_backup_json.json`
- نسخة احتياطية بصيغة JSON
- JSON format backup
- سهل القراءة والتحليل
- Easy to read and analyze
- مفيد للمطورين والتحليل
- Useful for developers and analysis

### 3. `BACKUP_README.md`
- هذا الملف - دليل الاستخدام
- This file - Usage guide

## 🗃️ الجداول والبيانات | Tables and Data

| الجدول | Table | عدد السجلات | Records | الوصف | Description |
|---------|-------|-------------|---------|--------|-------------|
| gallery | Gallery | 8 | 8 | معرض الأعمال الفنية | Art gallery works |
| courses | Courses | 3 | 3 | الدورات التدريبية | Training courses |
| instructors | Instructors | 1 | 1 | المدربون | Instructors |
| drawing_techniques | Drawing Techniques | 6 | 6 | تقنيات الرسم | Drawing techniques |
| settings | Settings | 6 | 6 | إعدادات الموقع | Website settings |
| admins | Admins | 1 | 1 | المديرون | Administrators |
| admin_sessions | Admin Sessions | 0 | 0 | جلسات المديرين | Admin sessions |

## 🪣 Storage Buckets

### instructor-images
- **النوع**: عام (Public)
- **Type**: Public
- **الحد الأقصى لحجم الملف**: 5MB
- **File Size Limit**: 5MB
- **أنواع الملفات المسموحة**: image/jpeg, image/png, image/webp, image/gif
- **Allowed MIME Types**: image/jpeg, image/png, image/webp, image/gif

## 🔄 تعليمات الاستعادة | Restoration Instructions

### الخطوة 1: إنشاء مشروع Supabase جديد
### Step 1: Create New Supabase Project

1. اذهب إلى [Supabase Dashboard](https://supabase.com/dashboard)
2. Go to [Supabase Dashboard](https://supabase.com/dashboard)
3. انقر على "New Project"
4. Click "New Project"
5. اختر اسماً للمشروع والمنطقة
6. Choose project name and region
7. انتظر حتى يكتمل إنشاء المشروع
8. Wait for project creation to complete

### الخطوة 2: استعادة قاعدة البيانات
### Step 2: Restore Database

1. اذهب إلى SQL Editor في لوحة التحكم
2. Go to SQL Editor in dashboard
3. انسخ محتوى ملف `database_backup_complete.sql`
4. Copy content of `database_backup_complete.sql`
5. الصق المحتوى في SQL Editor
6. Paste content in SQL Editor
7. انقر على "Run" لتشغيل الاستعلام
8. Click "Run" to execute query

### الخطوة 3: إنشاء Storage Bucket
### Step 3: Create Storage Bucket

```sql
-- في SQL Editor
-- In SQL Editor
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'instructor-images',
  'instructor-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);
```

أو استخدم لوحة التحكم:
Or use dashboard:
1. اذهب إلى Storage
2. Go to Storage
3. انقر على "New Bucket"
4. Click "New Bucket"
5. اسم البكت: `instructor-images`
6. Bucket name: `instructor-images`
7. فعّل "Public bucket"
8. Enable "Public bucket"

### الخطوة 4: تحديث إعدادات التطبيق
### Step 4: Update Application Settings

1. احصل على URL الجديد ومفاتيح API
2. Get new URL and API keys
3. حدّث ملف `.env` أو إعدادات البيئة
4. Update `.env` file or environment settings

```env
VITE_SUPABASE_URL=https://YOUR_NEW_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_NEW_ANON_KEY
```

## ⚠️ ملاحظات هامة | Important Notes

### الأمان | Security
- **لا تشارك مفاتيح API الخاصة**
- **Do not share private API keys**
- **استخدم متغيرات البيئة للمفاتيح الحساسة**
- **Use environment variables for sensitive keys**
- **فعّل Row Level Security (RLS) إذا لزم الأمر**
- **Enable Row Level Security (RLS) if needed**

### كلمات المرور | Passwords
- كلمة مرور المدير الافتراضية مشفرة
- Default admin password is encrypted
- ستحتاج لإعادة تعيين كلمة المرور
- You'll need to reset the password
- أو إنشاء مدير جديد
- Or create a new admin

### الصور | Images
- الصور المرفوعة في Storage تحتاج نقل يدوي
- Uploaded images in Storage need manual transfer
- أو تحديث روابط الصور للمصادر الجديدة
- Or update image URLs to new sources

## 🔧 استكشاف الأخطاء | Troubleshooting

### خطأ في الصلاحيات | Permission Errors
```sql
-- تأكد من صلاحيات الجداول
-- Ensure table permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
```

### خطأ في التسلسل | Sequence Errors
```sql
-- إعادة تعيين التسلسلات
-- Reset sequences
SELECT setval('gallery_id_seq', (SELECT MAX(id) FROM gallery));
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));
SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));
SELECT setval('drawing_techniques_id_seq', (SELECT MAX(id) FROM drawing_techniques));
SELECT setval('settings_id_seq', (SELECT MAX(id) FROM settings));
```

## 📞 الدعم | Support

إذا واجهت أي مشاكل في الاستعادة:
If you encounter any issues during restoration:

1. تحقق من سجلات الأخطاء في Supabase Dashboard
2. Check error logs in Supabase Dashboard
3. تأكد من صحة صيغة SQL
4. Verify SQL syntax correctness
5. راجع إعدادات الصلاحيات
6. Review permission settings

## ✅ التحقق من نجاح الاستعادة | Verify Successful Restoration

```sql
-- تحقق من وجود الجداول
-- Check if tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- تحقق من عدد السجلات
-- Check record counts
SELECT 'gallery' as table_name, COUNT(*) as records FROM gallery
UNION ALL
SELECT 'courses', COUNT(*) FROM courses
UNION ALL
SELECT 'instructors', COUNT(*) FROM instructors
UNION ALL
SELECT 'drawing_techniques', COUNT(*) FROM drawing_techniques
UNION ALL
SELECT 'settings', COUNT(*) FROM settings
UNION ALL
SELECT 'admins', COUNT(*) FROM admins;
```

النتيجة المتوقعة:
Expected result:
- gallery: 8 records
- courses: 3 records  
- instructors: 1 record
- drawing_techniques: 6 records
- settings: 6 records
- admins: 1 record

---

**تمت النسخة الاحتياطية بنجاح في 2025-06-15**
**Backup completed successfully on 2025-06-15**
