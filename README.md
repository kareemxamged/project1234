# أكاديمية الفن للرسم | Art Academy for Drawing

موقع ويب أنيق وحديث لأكاديمية تعليم الرسم، مصمم كصفحة واحدة (Single Page Application) تشبه مواقع Linktree لكن بتصميم احترافي يناسب أكاديمية تعليم الفنون.

A modern and elegant website for an art drawing academy, designed as a Single Page Application similar to Linktree but with a professional design suitable for an art education academy.

## 🎨 المميزات | Features

- **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة (هواتف، أجهزة لوحية، أجهزة سطح المكتب)
- **تأثيرات حركية**: استخدام Framer Motion لتأثيرات بصرية جذابة
- **دعم اللغة العربية**: تصميم يدعم النصوص العربية والإنجليزية
- **نموذج تواصل**: نموذج تواصل تفاعلي مع التحقق من صحة البيانات
- **روابط اجتماعية**: أزرار أنيقة لوسائل التواصل الاجتماعي
- **أقسام الأكاديمية**: روابط لأقسام مختلفة من الأكاديمية

### Technical Features
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Using Framer Motion for attractive visual effects
- **Arabic Support**: Design supports both Arabic and English text
- **Contact Form**: Interactive contact form with data validation
- **Social Links**: Elegant buttons for social media platforms
- **Academy Sections**: Links to different academy sections

## 🎨 معرض الأعمال | Gallery Features

### ميزات المعرض | Gallery Features
- **عرض تفاعلي**: شبكة متجاوبة لعرض أعمال الطلاب
- **فلترة متقدمة**: فلترة حسب الفئة (رسم تقليدي، رقمي، بورتريه، إلخ)
- **عارض صور**: Lightbox متطور لعرض الأعمال بالتفصيل
- **معلومات شاملة**: عرض اسم الطالب، المدرب، التاريخ، المستوى
- **أعمال مميزة**: نظام لتمييز الأعمال المتميزة
- **إدارة كاملة**: لوحة تحكم شاملة لإدارة المعرض

### Gallery Features
- **Interactive Display**: Responsive grid layout for student artworks
- **Advanced Filtering**: Filter by category (Traditional, Digital, Portrait, etc.)
- **Image Viewer**: Advanced lightbox for detailed artwork viewing
- **Comprehensive Info**: Display student name, instructor, date, skill level
- **Featured Works**: System to highlight outstanding artworks
- **Full Management**: Complete admin panel for gallery management

## 🗄️ قاعدة البيانات | Database

### Supabase Integration
- **PostgreSQL**: قاعدة بيانات قوية ومتقدمة
- **Real-time**: تحديثات فورية للبيانات
- **RESTful API**: واجهة برمجية حديثة
- **Row Level Security**: أمان متقدم للبيانات
- **Auto-backup**: نسخ احتياطية تلقائية

### Database Features
- **PostgreSQL**: Powerful and advanced database
- **Real-time**: Instant data updates
- **RESTful API**: Modern programming interface
- **Row Level Security**: Advanced data security
- **Auto-backup**: Automatic data backups

## 🛠️ التقنيات المستخدمة | Technologies Used

- **React 18** - مكتبة JavaScript لبناء واجهات المستخدم
- **TypeScript** - لكتابة كود أكثر أماناً وموثوقية
- **Vite** - أداة بناء سريعة وحديثة
- **Tailwind CSS** - إطار عمل CSS للتصميم السريع
- **Framer Motion** - مكتبة التأثيرات الحركية
- **Supabase** - قاعدة بيانات وخدمات خلفية
- **React Hook Form** - لإدارة النماذج والتحقق من البيانات
- **Lucide React** - مكتبة الأيقونات الحديثة

## 📦 التثبيت والتشغيل | Installation & Setup

### المتطلبات الأساسية | Prerequisites

تأكد من تثبيت Node.js (الإصدار 16 أو أحدث) على جهازك.
Make sure you have Node.js (version 16 or newer) installed on your machine.

```bash
node --version
npm --version
```

### خطوات التثبيت | Installation Steps

1. **استنساخ المشروع | Clone the project**
```bash
git clone <repository-url>
cd art-academy
```

2. **تثبيت التبعيات | Install dependencies**
```bash
npm install
```

3. **تشغيل المشروع محلياً | Run development server**
```bash
npm run dev
```

4. **فتح المتصفح | Open browser**
افتح المتصفح وانتقل إلى: `http://localhost:5173`
Open your browser and navigate to: `http://localhost:5173`

## 🗄️ إعداد قاعدة البيانات | Database Setup

الموقع متصل بقاعدة بيانات Supabase للحصول على أداء متقدم وإدارة ديناميكية للمحتوى.
The website is connected to a Supabase database for advanced performance and dynamic content management.

### الإعداد السريع | Quick Setup

```bash
# نسخ ملف البيئة | Copy environment file
cp .env.example .env

# تثبيت Supabase (مثبت بالفعل) | Install Supabase (already installed)
npm install @supabase/supabase-js
```

### معلومات الاتصال | Connection Info
- **URL**: https://fgekgmbiirrlkmbjahba.supabase.co
- **Public Key**: متوفر في `.env.example`
- **Dashboard**: [Supabase Dashboard](https://supabase.com/dashboard/project/fgekgmbiirrlkmbjahba)

### الميزات المتاحة | Available Features
- ✅ **معرض الأعمال**: عرض وإدارة أعمال الطلاب
- ✅ **إدارة الدورات**: إضافة وتعديل الدورات التدريبية
- ✅ **إدارة المدربين**: معلومات المدربين والخبرات
- ✅ **الإعدادات العامة**: تخصيص الموقع بالكامل
- ✅ **أمان متقدم**: Row Level Security
- ✅ **تحديثات فورية**: Real-time updates

📖 **للتفاصيل الكاملة**: [دليل إعداد Supabase](./SUPABASE_SETUP.md)

## 🚀 البناء والنشر | Build & Deployment

### بناء المشروع للإنتاج | Build for Production

```bash
npm run build
```

سيتم إنشاء مجلد `dist` يحتوي على الملفات المحسنة للنشر.
This will create a `dist` folder with optimized files ready for deployment.

### معاينة البناء | Preview Build

```bash
npm run preview
```

### النشر على Vercel

1. قم بإنشاء حساب على [Vercel](https://vercel.com)
2. اربط مستودع GitHub الخاص بك
3. سيتم النشر تلقائياً عند كل push

### النشر على Netlify

1. قم بإنشاء حساب على [Netlify](https://netlify.com)
2. اسحب وأفلت مجلد `dist` على لوحة تحكم Netlify
3. أو اربط مستودع GitHub للنشر التلقائي

## 📁 هيكل المشروع | Project Structure

```
art-academy/
├── public/                 # الملفات العامة | Public files
├── src/
│   ├── components/         # مكونات React | React components
│   │   ├── Header.tsx      # مكون الهيدر | Header component
│   │   ├── SocialLinks.tsx # روابط التواصل | Social links
│   │   ├── SectionLinks.tsx# روابط الأقسام | Section links
│   │   ├── ContactForm.tsx # نموذج التواصل | Contact form
│   │   └── Footer.tsx      # مكون الفوتر | Footer component
│   ├── App.tsx            # المكون الرئيسي | Main component
│   ├── main.tsx           # نقطة الدخول | Entry point
│   └── index.css          # الأنماط الرئيسية | Main styles
├── tailwind.config.js     # إعدادات Tailwind | Tailwind config
├── postcss.config.js      # إعدادات PostCSS | PostCSS config
├── vite.config.ts         # إعدادات Vite | Vite config
└── package.json           # تبعيات المشروع | Project dependencies
```

## 🎯 التخصيص | Customization

### تغيير الألوان | Changing Colors

يمكنك تخصيص ألوان الموقع من خلال تعديل ملف `tailwind.config.js`:

```js
colors: {
  primary: {
    // ألوان أساسية جديدة | New primary colors
    500: '#your-color',
    600: '#your-darker-color',
  }
}
```

### إضافة روابط جديدة | Adding New Links

لإضافة روابط وسائل تواصل اجتماعي جديدة، عدل ملف `src/components/SocialLinks.tsx`:

```tsx
const socialLinks = [
  // أضف رابط جديد هنا | Add new link here
  {
    name: 'تيك توك',
    nameEn: 'TikTok',
    icon: YourIcon,
    url: 'https://tiktok.com/@artacademy',
    color: 'from-black to-gray-800'
  }
];
```

### تعديل نموذج التواصل | Modifying Contact Form

يمكنك تخصيص نموذج التواصل في `src/components/ContactForm.tsx` لإضافة حقول جديدة أو تغيير التحقق من البيانات.

## 🔧 الأوامر المتاحة | Available Scripts

```bash
npm run dev          # تشغيل الخادم المحلي | Start development server
npm run build        # بناء المشروع | Build for production
npm run preview      # معاينة البناء | Preview production build
npm run lint         # فحص الكود | Lint code
```

## 📱 التوافق | Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 المساهمة | Contributing

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص | License

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل | Contact

- الموقع الإلكتروني: [artacademy.com](https://artacademy.com)
- البريد الإلكتروني: info@artacademy.com
- تويتر: [@artacademy](https://twitter.com/artacademy)

## 🚀 الميزات المتقدمة الجديدة | New Advanced Features

### 📚 إدارة الدورات التدريبية
- **لوحة تحكم شاملة** لإدارة الدورات
- **إضافة وتعديل الدورات** مع واجهة سهلة الاستخدام
- **إخفاء/إظهار الأسعار** لكل دورة منفصلة
- **تصنيف الدورات** (مميزة/عادية)
- **إدارة المميزات والمحتوى** لكل دورة

### 📱 التسجيل الذكي عبر الواتساب
- **رسائل مخصصة** لكل دورة تلقائياً
- **رقم واتساب قابل للتخصيص** من لوحة التحكم
- **دعم الروابط الخارجية** للتسجيل
- **تجربة مستخدم محسنة** للتسجيل

### ⚡ تحسينات الأداء
- **تأثيرات سريعة** (150-200ms بدلاً من 300ms)
- **تحسين GPU** للحركات والتأثيرات
- **تحميل محسن** للبيانات والمكونات
- **تصميم متجاوب محسن** لجميع الأحجام

### 🎨 تحسينات التصميم
- **تأثيرات هوفر طبيعية** وسلسة
- **ألوان متناسقة** للمستويات والفئات
- **أيقونات تعبيرية** للمستويات المختلفة
- **تخطيط محسن** للبطاقات والمحتوى

### 🔧 إدارة المحتوى
- **إدارة المدربين** مع معلوماتهم الكاملة
- **إعدادات وسائل التواصل** الاجتماعي
- **إعدادات الواتساب** والتواصل
- **حفظ تلقائي** للبيانات محلياً

## 📊 إحصائيات المشروع

- **+15 مكون React** محسن ومنظم
- **+300 سطر CSS** مخصص للتأثيرات
- **+50 تأثير حركي** سلس ومحسن
- **100% متجاوب** على جميع الأجهزة
- **TypeScript** لأمان الكود الكامل

---

صُنع بـ ❤️ لمحبي الفن والإبداع | Made with ❤️ for art and creativity lovers
