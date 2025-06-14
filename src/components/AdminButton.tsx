import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Lock, Unlock } from 'lucide-react';

interface AdminButtonProps {
  onOpenAdmin: () => void;
}

const AdminButton: React.FC<AdminButtonProps> = ({ onOpenAdmin }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  // كلمة المرور القوية والعشوائية
  // للمطور: كلمة المرور هي Kx9#mP2$vL8@nQ5!
  const ADMIN_PASSWORD = 'Kx9#mP2$vL8@nQ5!';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // فحص إذا كان المستخدم محظور
    if (isBlocked) {
      alert('تم حظر المحاولات مؤقتاً. يرجى المحاولة لاحقاً.');
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setShowPasswordInput(false);
      setPassword('');
      setAttemptCount(0);
      onOpenAdmin();
    } else {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);

      if (newAttemptCount >= 3) {
        setIsBlocked(true);
        alert('تم تجاوز عدد المحاولات المسموح. تم حظر الوصول مؤقتاً لمدة 5 دقائق.');

        // إلغاء الحظر بعد 5 دقائق
        setTimeout(() => {
          setIsBlocked(false);
          setAttemptCount(0);
        }, 5 * 60 * 1000);
      } else {
        alert(`كلمة المرور غير صحيحة. المحاولات المتبقية: ${3 - newAttemptCount}`);
      }

      setPassword('');
    }
  };

  const handleButtonClick = () => {
    if (isBlocked) {
      alert('الوصول محظور مؤقتاً. يرجى المحاولة لاحقاً.');
      return;
    }

    if (isUnlocked) {
      onOpenAdmin();
    } else {
      setShowPasswordInput(true);
    }
  };

  return (
    <>
      {/* زر لوحة التحكم */}
      <motion.button
        onClick={handleButtonClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={`fixed bottom-6 left-6 z-40 p-3 ${
          isBlocked
            ? 'bg-gradient-to-r from-red-600 to-red-700 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl'
        } text-white rounded-full shadow-lg transition-all duration-300 group`}
        whileHover={{ scale: isBlocked ? 1 : 1.1 }}
        whileTap={{ scale: isBlocked ? 1 : 0.95 }}
      >
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          {isUnlocked ? (
            <Unlock className="w-4 h-4" />
          ) : (
            <Lock className="w-4 h-4" />
          )}
        </div>
        
        {/* تلميح */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <span className="font-arabic">
            {isBlocked ? 'محظور مؤقتاً' : 'لوحة التحكم'}
          </span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </motion.button>

      {/* نموذج كلمة المرور */}
      {showPasswordInput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPasswordInput(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-arabic">دخول لوحة التحكم</h3>
              <p className="text-gray-600 text-sm mt-2 font-arabic">
                يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم
              </p>
              {attemptCount > 0 && (
                <p className="text-red-600 text-xs mt-1 font-arabic">
                  المحاولات المتبقية: {3 - attemptCount}
                </p>
              )}
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-arabic mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل كلمة المرور"
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordInput(false);
                    setPassword('');
                  }}
                  className="flex-1 px-4 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-arabic"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-arabic"
                >
                  دخول
                </button>
              </div>
            </form>

            {/* تم إخفاء عرض كلمة المرور لأسباب أمنية */}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AdminButton;
