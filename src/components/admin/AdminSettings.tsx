import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { LogoUpload } from '../ImageUpload';

// مكون الإعدادات العامة
export const GeneralSettings: React.FC<{ data: any; onUpdate: (field: string, value: any) => void }> = ({ data, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-gray-800 font-arabic">الإعدادات العامة</h3>

    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم الموقع</label>
          <input
            type="text"
            value={data.siteName}
            onChange={(e) => onUpdate('siteName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم الموقع (إنجليزي)</label>
          <input
            type="text"
            value={data.siteNameEn}
            onChange={(e) => onUpdate('siteNameEn', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">وصف الموقع</label>
          <textarea
            value={data.description}
            onChange={(e) => onUpdate('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">وصف الموقع (إنجليزي)</label>
          <textarea
            value={data.descriptionEn}
            onChange={(e) => onUpdate('descriptionEn', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <LogoUpload
            currentLogo={data.logo}
            onLogoChange={(logoUrl) => onUpdate('logo', logoUrl)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">رقم الواتساب</label>
          <input
            type="text"
            value={data.whatsappNumber}
            onChange={(e) => onUpdate('whatsappNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="966501234567"
          />
          <p className="text-xs text-gray-500 mt-1 font-arabic">
            أدخل الرقم بدون علامة + (مثال: 966501234567)
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <label className="flex items-center gap-2 font-arabic">
          <input
            type="checkbox"
            checked={data.showLogo}
            onChange={(e) => onUpdate('showLogo', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>إظهار الشعار</span>
        </label>
      </div>
    </div>
  </div>
);

// مكون إعدادات وسائل التواصل الاجتماعي
export const SocialSettings: React.FC<{ data: any[]; onUpdate: (social: any[]) => void }> = ({ data, onUpdate }) => {
  const toggleVisibility = (id: string) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, visible: !item.visible } : item
    );
    onUpdate(updated);
  };

  const updateItem = (id: string, field: string, value: any) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onUpdate(updated);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 font-arabic">إدارة وسائل التواصل الاجتماعي</h3>
      
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم المنصة</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم المنصة (إنجليزي)</label>
                <input
                  type="text"
                  value={item.nameEn}
                  onChange={(e) => updateItem(item.id, 'nameEn', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">الرابط</label>
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => updateItem(item.id, 'url', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2 flex items-center justify-between">
                <label className="flex items-center gap-2 font-arabic">
                  <input
                    type="checkbox"
                    checked={item.visible}
                    onChange={() => toggleVisibility(item.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>إظهار في الموقع</span>
                </label>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 font-arabic">الحالة:</span>
                  {item.visible ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">مرئي</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-400">
                      <EyeOff className="w-4 h-4" />
                      <span className="text-sm">مخفي</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// مكون إعدادات المدربين
export const InstructorsSettings: React.FC<{ data: any[]; onUpdate: (instructors: any[]) => void }> = ({ data, onUpdate }) => {
  const toggleVisibility = (id: number) => {
    const updated = data.map(instructor =>
      instructor.id === id ? { ...instructor, visible: !instructor.visible } : instructor
    );
    onUpdate(updated);
  };

  const updateInstructor = (id: number, field: string, value: any) => {
    const updated = data.map(instructor =>
      instructor.id === id ? { ...instructor, [field]: value } : instructor
    );
    onUpdate(updated);
  };

  const updateSpecialties = (id: number, specialties: string[]) => {
    updateInstructor(id, 'specialties', specialties);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 font-arabic">إدارة المدربين</h3>
      
      <div className="space-y-6">
        {data.map((instructor) => (
          <div key={instructor.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم المدرب</label>
                <input
                  type="text"
                  value={instructor.name}
                  onChange={(e) => updateInstructor(instructor.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم المدرب (إنجليزي)</label>
                <input
                  type="text"
                  value={instructor.nameEn}
                  onChange={(e) => updateInstructor(instructor.id, 'nameEn', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">المنصب</label>
                <input
                  type="text"
                  value={instructor.title}
                  onChange={(e) => updateInstructor(instructor.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">المنصب (إنجليزي)</label>
                <input
                  type="text"
                  value={instructor.titleEn}
                  onChange={(e) => updateInstructor(instructor.id, 'titleEn', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">مسار الصورة</label>
                <input
                  type="text"
                  value={instructor.image}
                  onChange={(e) => updateInstructor(instructor.id, 'image', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">رابط الملف الشخصي</label>
                <input
                  type="url"
                  value={instructor.profileUrl}
                  onChange={(e) => updateInstructor(instructor.id, 'profileUrl', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">سنوات الخبرة</label>
                <input
                  type="text"
                  value={instructor.experience}
                  onChange={(e) => updateInstructor(instructor.id, 'experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">سنوات الخبرة (إنجليزي)</label>
                <input
                  type="text"
                  value={instructor.experienceEn}
                  onChange={(e) => updateInstructor(instructor.id, 'experienceEn', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">التقييم</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={instructor.rating}
                  onChange={(e) => updateInstructor(instructor.id, 'rating', parseFloat(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">عدد الطلاب</label>
                <input
                  type="number"
                  min="0"
                  value={instructor.studentsCount}
                  onChange={(e) => updateInstructor(instructor.id, 'studentsCount', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">التخصصات (مفصولة بفاصلة)</label>
              <input
                type="text"
                value={instructor.specialties.join(', ')}
                onChange={(e) => updateSpecialties(instructor.id, e.target.value.split(', ').filter(s => s.trim()))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="الرسم الرقمي, الرسم التقليدي, البورتريه"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">الوصف</label>
              <textarea
                value={instructor.description}
                onChange={(e) => updateInstructor(instructor.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">الوصف (إنجليزي)</label>
              <textarea
                value={instructor.descriptionEn}
                onChange={(e) => updateInstructor(instructor.id, 'descriptionEn', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 font-arabic">
                <input
                  type="checkbox"
                  checked={instructor.visible}
                  onChange={() => toggleVisibility(instructor.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>إظهار في الموقع</span>
              </label>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-arabic">الحالة:</span>
                {instructor.visible ? (
                  <span className="flex items-center gap-1 text-green-600">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">مرئي</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400">
                    <EyeOff className="w-4 h-4" />
                    <span className="text-sm">مخفي</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// مكون إعدادات الموقع
export const LocationSettings: React.FC<{ data: any; onUpdate: (field: string, value: any) => void }> = ({ data, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-gray-800 font-arabic">إعدادات موقع الأكاديمية</h3>
    
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم الأكاديمية</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">اسم الأكاديمية (إنجليزي)</label>
          <input
            type="text"
            value={data.nameEn}
            onChange={(e) => onUpdate('nameEn', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">العنوان</label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => onUpdate('address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">العنوان (إنجليزي)</label>
          <input
            type="text"
            value={data.addressEn}
            onChange={(e) => onUpdate('addressEn', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">رقم الهاتف</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">ساعات العمل</label>
          <input
            type="text"
            value={data.workingHours}
            onChange={(e) => onUpdate('workingHours', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">ساعات العمل (إنجليزي)</label>
          <input
            type="text"
            value={data.workingHoursEn}
            onChange={(e) => onUpdate('workingHoursEn', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 font-arabic mb-1">رابط خرائط جوجل</label>
          <input
            type="url"
            value={data.mapsUrl}
            onChange={(e) => onUpdate('mapsUrl', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <label className="flex items-center gap-2 font-arabic">
          <input
            type="checkbox"
            checked={data.visible}
            onChange={(e) => onUpdate('visible', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>إظهار قسم الموقع</span>
        </label>
      </div>
    </div>
  </div>
);

// مكون إعدادات الصفحات
export const PagesSettings: React.FC<{ data: any; onUpdate: (field: string, value: any) => void }> = ({ data, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-gray-800 font-arabic">إعدادات إظهار الصفحات</h3>
    
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <span className="font-arabic">إظهار صفحة المدربين</span>
          <input
            type="checkbox"
            checked={data.showInstructors}
            onChange={(e) => onUpdate('showInstructors', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>
        
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <label className="flex items-center justify-between">
            <span className="font-arabic">إظهار وسائل التواصل الاجتماعي</span>
            <input
              type="checkbox"
              checked={data.showSocialMedia}
              onChange={(e) => onUpdate('showSocialMedia', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </label>

          {data.showSocialMedia && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 font-arabic mb-2">
                نمط العرض
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="socialMediaStyle"
                    value="icons"
                    checked={data.socialMediaStyle === 'icons'}
                    onChange={(e) => onUpdate('socialMediaStyle', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm font-arabic">أيقونات دائرية (بسيط)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="socialMediaStyle"
                    value="cards"
                    checked={data.socialMediaStyle === 'cards'}
                    onChange={(e) => onUpdate('socialMediaStyle', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm font-arabic">بطاقات مفصلة</span>
                </label>
              </div>
            </div>
          )}
        </div>
        
        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <span className="font-arabic">إظهار قسم الموقع</span>
          <input
            type="checkbox"
            checked={data.showLocation}
            onChange={(e) => onUpdate('showLocation', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>
        
        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <span className="font-arabic">إظهار الفوتر</span>
          <input
            type="checkbox"
            checked={data.showFooter}
            onChange={(e) => onUpdate('showFooter', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  </div>
);
