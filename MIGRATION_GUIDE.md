# 🚀 دليل نقل قاعدة البيانات إلى حساب Supabase الجديد
# Database Migration Guide to New Supabase Account

## ✅ الخطوات المطلوبة | Required Steps

### 1. إعداد المشروع الجديد | Setup New Project

1. **اذهب إلى Supabase Dashboard**
   - [supabase.com/dashboard](https://supabase.com/dashboard)

2. **أنشئ مشروع جديد**
   - انقر "New Project"
   - اسم المشروع: `art-academy-new` (أو أي اسم تريده)
   - المنطقة: `us-east-1` (يفضل)
   - انتظر حتى يكتمل الإنشاء

### 2. استعادة قاعدة البيانات | Restore Database

1. **اذهب إلى SQL Editor**
   - في لوحة التحكم الجديدة
   - انقر "SQL Editor"

2. **انسخ والصق الكود**
   - افتح ملف `database_backup_complete.sql`
   - انسخ **كامل المحتوى** (293 سطر)
   - الصقه في SQL Editor
   - انقر "Run" أو Ctrl+Enter

3. **تأكد من نجاح العملية**
   - يجب أن ترى رسالة نجاح
   - تحقق من وجود الجداول في Table Editor

### 3. إنشاء Storage Bucket | Create Storage Bucket

**الطريقة الأولى - عبر لوحة التحكم:**
1. اذهب إلى "Storage"
2. انقر "New Bucket"
3. اسم البكت: `instructor-images`
4. فعّل "Public bucket"
5. انقر "Create bucket"

**الطريقة الثانية - عبر SQL:**
```sql
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'instructor-images',
  'instructor-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);
```

### 4. الحصول على معلومات الاتصال | Get Connection Info

1. **اذهب إلى Settings → API**
2. **انسخ المعلومات التالية:**
   - **Project URL**: `https://[project-id].supabase.co`
   - **anon public key**: المفتاح العام

### 5. تحديث التطبيق | Update Application

#### أ. تحديث ملف Supabase
في ملف `src/lib/supabase.ts`:

```typescript
// إعدادات Supabase
const supabaseUrl = 'https://YOUR_NEW_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_NEW_ANON_KEY';
```

#### ب. تحديث ملف البيئة
أنشئ ملف `.env` من `.env.example` وحدّث:

```env
VITE_SUPABASE_URL="https://YOUR_NEW_PROJECT_ID.supabase.co"
VITE_SUPABASE_ANON_KEY="YOUR_NEW_ANON_KEY"
```

### 6. اختبار التطبيق | Test Application

```bash
# تشغيل التطبيق
npm run dev

# أو
yarn dev
```

تحقق من:
- ✅ تحميل المعرض
- ✅ عرض الدورات
- ✅ عرض المدربين
- ✅ عمل لوحة الإدارة

## 🔍 التحقق من نجاح النقل | Verify Migration Success

### تحقق من الجداول والبيانات:

```sql
-- تحقق من وجود الجداول
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- تحقق من عدد السجلات
SELECT 
  'gallery' as table_name, COUNT(*) as records FROM gallery
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

**النتيجة المتوقعة:**
- gallery: 8 records
- courses: 3 records
- instructors: 1 record
- drawing_techniques: 6 records
- settings: 6 records
- admins: 1 record

## ⚠️ ملاحظات مهمة | Important Notes

### كلمة مرور المدير | Admin Password
- كلمة المرور الحالية مشفرة
- ستحتاج لإنشاء مدير جديد أو إعادة تعيين كلمة المرور

### الصور | Images
- الصور المرفوعة في Storage القديم تحتاج نقل يدوي
- أو يمكن تحديث الروابط للمصادر الجديدة

### إعدادات الأمان | Security Settings
- تأكد من إعدادات RLS إذا كنت تحتاجها
- راجع صلاحيات الجداول

## 🛠️ استكشاف الأخطاء | Troubleshooting

### خطأ في الصلاحيات | Permission Errors
```sql
-- منح الصلاحيات للجداول
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
```

### خطأ في التسلسل | Sequence Errors
```sql
-- إعادة تعيين التسلسلات
SELECT setval('gallery_id_seq', (SELECT MAX(id) FROM gallery));
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));
SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));
SELECT setval('drawing_techniques_id_seq', (SELECT MAX(id) FROM drawing_techniques));
SELECT setval('settings_id_seq', (SELECT MAX(id) FROM settings));
```

### خطأ في Storage | Storage Errors
```sql
-- التحقق من وجود البكت
SELECT * FROM storage.buckets WHERE name = 'instructor-images';

-- إنشاء البكت إذا لم يكن موجود
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'instructor-images',
  'instructor-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);
```

## 📋 قائمة التحقق | Checklist

- [ ] إنشاء مشروع Supabase جديد
- [ ] تشغيل ملف `database_backup_complete.sql`
- [ ] إنشاء Storage bucket `instructor-images`
- [ ] نسخ Project URL و anon key
- [ ] تحديث `src/lib/supabase.ts`
- [ ] تحديث ملف `.env`
- [ ] اختبار التطبيق
- [ ] التحقق من البيانات
- [ ] اختبار رفع الصور
- [ ] اختبار لوحة الإدارة

## 🎉 بعد النقل الناجح | After Successful Migration

1. **احذف المراجع للمشروع القديم**
2. **حدّث الوثائق والملاحظات**
3. **أنشئ نسخة احتياطية جديدة**
4. **شارك معلومات الاتصال الجديدة مع الفريق**

---

**تم إنشاء هذا الدليل في 2025-06-15**
**Created on 2025-06-15**
