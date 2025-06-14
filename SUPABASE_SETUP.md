# 🗄️ إعداد قاعدة البيانات Supabase - Supabase Database Setup

## نظرة عامة

تم ربط موقع أكاديمية ميمو للرسم بقاعدة بيانات Supabase لإدارة المحتوى بشكل ديناميكي ومتقدم.

## ✅ ما تم إنجازه

### 🏗️ إنشاء المشروع
- **اسم المشروع**: art-academy-website
- **المعرف**: fgekgmbiirrlkmbjahba
- **المنطقة**: us-east-1
- **الحالة**: نشط وصحي

### 📊 هيكل قاعدة البيانات

#### جدول المعرض (gallery)
```sql
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
```

#### جدول الدورات (courses)
```sql
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
```

#### جدول المدربين (instructors)
```sql
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
```

#### جدول الإعدادات (settings)
```sql
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 🔑 معلومات الاتصال

#### URL الأساسي
```
https://fgekgmbiirrlkmbjahba.supabase.co
```

#### مفاتيح API
- **Public Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZWtnbWJpaXJybGttYmphaGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NTI5OTEsImV4cCI6MjA2NTQyODk5MX0.dGnMMApjAGuavvkZiIIMlgZnIHk7xGq_h17O_4oPfj4`
- **Service Role Key**: محفوظ للاستخدام الخلفي فقط

### 📝 البيانات التجريبية

تم إدراج 5 أعمال فنية تجريبية في جدول المعرض:

1. **بورتريه واقعي بالقلم الرصاص** (مميز)
   - الطالب: سارة أحمد
   - المدرب: أحمد صادق
   - المستوى: متقدم

2. **منظر طبيعي بالألوان المائية** (مميز)
   - الطالب: محمد علي
   - المدرب: أحمد صادق
   - المستوى: متوسط

3. **رسم رقمي لشخصية كرتونية**
   - الطالب: فاطمة خالد
   - المدرب: أحمد صادق
   - المستوى: متوسط

4. **رسم تقليدي بالفحم**
   - الطالب: عبدالله محمد
   - المدرب: أحمد صادق
   - المستوى: مبتدئ

5. **فن تجريدي ملون** (مميز)
   - الطالب: أحمد يوسف
   - المدرب: أحمد صادق
   - المستوى: متقدم

## 🔧 التكامل مع التطبيق

### ملف الإعداد
تم إنشاء `src/lib/supabase.ts` مع:
- إعداد عميل Supabase
- تعريف أنواع البيانات (TypeScript interfaces)
- دوال خدمة شاملة لكل جدول

### المكونات المحدثة
- **Gallery.tsx**: يجلب البيانات من Supabase
- **GallerySettings.tsx**: إدارة كاملة للمعرض مع Supabase
- **AdminPanel.tsx**: محدث للعمل مع النظام الجديد

### الميزات المتاحة
- ✅ عرض أعمال المعرض من قاعدة البيانات
- ✅ إضافة أعمال جديدة
- ✅ تعديل الأعمال الموجودة
- ✅ حذف الأعمال
- ✅ التحكم في الرؤية والتمييز
- ✅ فلترة وبحث متقدم
- ✅ دعم اللغتين العربية والإنجليزية

## 🚀 الخطوات التالية

### للمطورين
1. **نسخ إعدادات البيئة**:
   ```bash
   cp .env.example .env
   ```

2. **تثبيت التبعيات**:
   ```bash
   npm install @supabase/supabase-js
   ```

3. **تشغيل التطبيق**:
   ```bash
   npm run dev
   ```

### للمدراء
1. **الوصول للوحة التحكم**: admin/admin
2. **الذهاب لتبويب "المعرض"**
3. **إدارة الأعمال**: إضافة، تعديل، حذف
4. **التحكم في العرض**: إظهار/إخفاء، تمييز

## 🔒 الأمان

### Row Level Security (RLS)
- **القراءة**: مفتوحة للجميع للبيانات المرئية
- **الكتابة**: محمية (تحتاج صلاحيات إدارية)
- **التحديث**: محمي (تحتاج صلاحيات إدارية)
- **الحذف**: محمي (تحتاج صلاحيات إدارية)

### أفضل الممارسات
- استخدام Public Anon Key في الواجهة الأمامية فقط
- عدم تعريض Service Role Key
- التحقق من صحة البيانات قبل الإرسال
- معالجة الأخطاء بشكل مناسب

## 📊 المراقبة والصيانة

### مراقبة الأداء
- **Dashboard**: https://supabase.com/dashboard/project/fgekgmbiirrlkmbjahba
- **Database**: مراقبة الاستعلامات والأداء
- **Storage**: مراقبة استخدام التخزين
- **Auth**: مراقبة المصادقة (إذا تم تفعيلها)

### النسخ الاحتياطية
- **تلقائية**: Supabase يقوم بنسخ احتياطية تلقائية
- **يدوية**: يمكن إنشاء نسخ احتياطية عند الحاجة
- **استعادة**: إمكانية استعادة البيانات لنقطة زمنية محددة

## 🆘 استكشاف الأخطاء

### مشاكل شائعة
1. **خطأ في الاتصال**: تحقق من URL ومفاتيح API
2. **خطأ في الصلاحيات**: تحقق من إعدادات RLS
3. **بطء في التحميل**: تحقق من فهرسة الجداول
4. **خطأ في البيانات**: تحقق من صحة البيانات المرسلة

### الحلول
- مراجعة console للأخطاء
- فحص Network tab في المتصفح
- مراجعة Supabase Dashboard للسجلات
- التأكد من صحة البيانات المرسلة

---

**تم إعداد قاعدة البيانات بنجاح! 🎉**

الموقع الآن متصل بـ Supabase ويمكن إدارة المحتوى بشكل ديناميكي.
