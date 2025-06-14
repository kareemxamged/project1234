import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';

/**
 * خصائص مكون خريطة الموقع
 * Location Map Component Props
 */
interface LocationMapProps {
  locationData: {
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
}

/**
 * مكون خريطة الموقع
 * Location Map Component
 */
const LocationMap: React.FC<LocationMapProps> = ({ locationData }) => {
  const handleDirectionsClick = () => {
    window.open(locationData.mapsUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${locationData.phone}`, '_self');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="mb-8"
    >
      {/* عنوان القسم - Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="text-center mb-6 relative"
      >
        <h3 className="text-xl font-bold text-gray-800 font-arabic relative inline-block">
          موقع الأكاديمية
          {/* خط تحت العنوان - Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
          ></motion.div>
        </h3>
        <p className="text-gray-600 text-sm mt-2">Academy Location</p>
      </motion.div>

      {/* حاوي الخريطة والمعلومات - Map and Info Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/60 overflow-hidden group relative"
      >
        {/* تأثير الخلفية المتحركة - Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* الخريطة - Map */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1956!2d${locationData.coordinates.lng}!3d${locationData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-t-3xl filter brightness-95 group-hover:brightness-100 transition-all duration-300"
            ></iframe>
          </motion.div>

          {/* طبقة تراكب مع أيقونة الموقع - Overlay with location pin */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-red-500 text-white p-3 rounded-full shadow-lg"
            >
              <MapPin className="w-6 h-6" />
            </motion.div>
          </div>
        </div>

        {/* معلومات الموقع - Location Info */}
        <div className="relative p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6">
          {/* اسم الأكاديمية - Academy Name */}
          <div className="text-center">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 font-arabic">
              {locationData.name}
            </h4>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              {locationData.nameEn}
            </p>
          </div>

          {/* تفاصيل الموقع - Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* العنوان - Address */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/30 hover:border-blue-200 transition-all duration-300"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-right flex-1">
                <p className="font-semibold text-gray-800 font-arabic">
                  {locationData.address}
                </p>
                <p className="text-sm text-gray-600">
                  {locationData.addressEn}
                </p>
              </div>
            </motion.div>

            {/* رقم الهاتف - Phone Number */}
            <motion.button
              onClick={handleCallClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/30 hover:border-green-200 transition-all duration-300 group/phone"
            >
              <div className="p-2 bg-green-100 rounded-lg group-hover/phone:bg-green-200 transition-colors duration-300">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-right flex-1">
                <p className="font-semibold text-gray-800 font-arabic">
                  اتصل بنا
                </p>
                <p className="text-sm text-gray-600">
                  {locationData.phone}
                </p>
              </div>
            </motion.button>

            {/* ساعات العمل - Working Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/30 hover:border-purple-200 transition-all duration-300"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-right flex-1">
                <p className="font-semibold text-gray-800 font-arabic">
                  {locationData.workingHours}
                </p>
                <p className="text-sm text-gray-600">
                  {locationData.workingHoursEn}
                </p>
              </div>
            </motion.div>
          </div>

          {/* زر الاتجاهات - Directions Button */}
          <motion.button
            onClick={handleDirectionsClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
          >
            {/* تأثير الخلفية المتحركة - Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"></div>
            
            <Navigation className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="font-arabic relative">احصل على الاتجاهات</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LocationMap;
