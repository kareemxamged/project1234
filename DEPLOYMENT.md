# 🚀 دليل النشر - Deployment Guide

دليل شامل لنشر موقع أكاديمية ميمو للرسم على منصات مختلفة.

## 📋 المتطلبات الأساسية

### قبل النشر
- [x] تأكد من عمل المشروع محلياً (`npm run dev`)
- [x] اختبر البناء (`npm run build`)
- [x] تحقق من عدم وجود أخطاء (`npm run lint`)
- [x] راجع جميع الروابط والمعلومات

### ملفات مطلوبة
- [x] `.env` مع المتغيرات الصحيحة
- [x] `package.json` محدث
- [x] `README.md` شامل
- [x] صور الشعار والمحتوى في مجلد `public/`

## 🌐 Vercel (موصى به)

### الطريقة الأولى: من GitHub
1. **ادفع الكود إلى GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **اربط مع Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول بحساب GitHub
   - اضغط "New Project"
   - اختر repository الخاص بك
   - اضغط "Deploy"

3. **إعدادات البناء (تلقائية)**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

### الطريقة الثانية: Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# للنشر في الإنتاج
vercel --prod
```

### متغيرات البيئة في Vercel
1. اذهب إلى Project Settings
2. اضغط Environment Variables
3. أضف المتغيرات من ملف `.env`:
   ```
   VITE_WHATSAPP_NUMBER=966501234567
   VITE_ACADEMY_NAME=أكاديمية ميمو للرسم
   VITE_ACADEMY_NAME_EN=MEMO Art Academy
   ```

## 🌍 Netlify

### من GitHub
1. **ادفع إلى GitHub** (نفس خطوات Vercel)

2. **اربط مع Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - اضغط "New site from Git"
   - اختر GitHub واختر repository
   - إعدادات البناء:
     ```
     Build command: npm run build
     Publish directory: dist
     ```

### رفع مباشر
```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
# اسحب وأفلت مجلد dist على netlify.com
```

### Netlify CLI
```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# تسجيل الدخول
netlify login

# النشر
netlify deploy

# للنشر في الإنتاج
netlify deploy --prod
```

## 📄 GitHub Pages

### إعداد GitHub Actions
1. **أنشئ ملف** `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **فعل GitHub Pages**
   - اذهب إلى Settings > Pages
   - اختر Source: GitHub Actions

### يدوياً
```bash
# بناء المشروع
npm run build

# تثبيت gh-pages
npm install -g gh-pages

# نشر إلى GitHub Pages
gh-pages -d dist
```

## ☁️ Firebase Hosting

### إعداد Firebase
```bash
# تثبيت Firebase CLI
npm install -g firebase-tools

# تسجيل الدخول
firebase login

# تهيئة المشروع
firebase init hosting

# إعدادات:
# Public directory: dist
# Single-page app: Yes
# Rewrite all URLs to index.html: Yes
```

### النشر
```bash
# بناء المشروع
npm run build

# النشر
firebase deploy
```

## 🐳 Docker

### إنشاء Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### إنشاء nginx.conf
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

### بناء ونشر Docker
```bash
# بناء الصورة
docker build -t art-academy .

# تشغيل الحاوية
docker run -p 80:80 art-academy
```

## 🔧 إعدادات خاصة

### تخصيص Domain
1. **في Vercel/Netlify**
   - اذهب إلى Project Settings
   - اضغط Domains
   - أضف domain الخاص بك
   - اتبع تعليمات DNS

### SSL Certificate
- **Vercel/Netlify**: تلقائي
- **GitHub Pages**: تلقائي للـ .github.io
- **Firebase**: تلقائي
- **خادم خاص**: استخدم Let's Encrypt

### تحسين الأداء
```bash
# ضغط الملفات
npm install -g gzip-cli
gzip -r dist/

# تحسين الصور
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images/
```

## 📊 مراقبة الأداء

### Google Analytics
```html
<!-- في public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Lighthouse CI
```bash
# تثبيت Lighthouse CI
npm install -g @lhci/cli

# تشغيل اختبار الأداء
lhci autorun
```

## 🔍 استكشاف الأخطاء

### مشاكل شائعة
1. **404 على الصفحات الفرعية**
   - تأكد من إعداد SPA redirects
   - أضف `_redirects` في Netlify
   - أضف `vercel.json` في Vercel

2. **متغيرات البيئة لا تعمل**
   - تأكد من البادئة `VITE_`
   - أعد بناء المشروع بعد التغيير

3. **مشاكل الخطوط العربية**
   - تأكد من تحميل خطوط Google Fonts
   - تحقق من إعدادات CSS direction

### ملفات مفيدة

#### vercel.json
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### _redirects (Netlify)
```
/*    /index.html   200
```

## ✅ قائمة مراجعة النشر

- [ ] اختبار المشروع محلياً
- [ ] تحديث معلومات التواصل
- [ ] رفع الصور المطلوبة
- [ ] إعداد متغيرات البيئة
- [ ] اختبار الروابط الخارجية
- [ ] تحسين الصور
- [ ] إعداد Analytics
- [ ] اختبار الأداء
- [ ] اختبار على أجهزة مختلفة
- [ ] إعداد Domain مخصص (اختياري)

---

**نصيحة**: ابدأ بـ Vercel أو Netlify للنشر السريع، ثم انتقل لحلول أكثر تعقيداً حسب الحاجة.
