'use client';
import React from 'react';
import { Home } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PhoneInputDiv from '@/components/PhoneInputDiv';
import { useTranslations, useLocale } from 'next-intl'; // Import useTranslations

// Fix for marker icons in React-Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Define centers with IDs for translation lookup
const centersConfig = [
  { id: 'la_goulette', lat: 36.8206, lng: 10.3013 }, // Add actual coordinates
  { id: 'boumhal', lat: 36.7200, lng: 10.3000 },     // Add actual coordinates
  { id: 'el_menzah', lat: 36.8500, lng: 10.1900 },    // Add actual coordinates
  { id: 'bardo', lat: 36.8050, lng: 10.1300 },       // Add actual coordinates
];

const Page = () => {
  const t = useTranslations('contactPage'); // Scope translations for this page
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Calculate the center of all markers for initial map view
  const initialMapCenter: [number, number] = centersConfig.length > 0
    ? [
        centersConfig.reduce((sum, c) => sum + c.lat, 0) / centersConfig.length,
        centersConfig.reduce((sum, c) => sum + c.lng, 0) / centersConfig.length
      ]
    : [36.8065, 10.1815]; // Default center if no centers are defined

  return (
    <section className="py-16 px-4">
      <div className={`mx-auto h-full grid md:grid-cols-2 gap-12 items-center ${isArabic ? 'md:grid-flow-col-dense' : ''}`}>
        {/* Left Text Block */}
        <div className={`${isArabic ? 'md:order-2 text-right' : 'text-left'}`}>
          <span className="inline-block bg-purple-100 text-purple-700 font-lg px-4 py-2 rounded-xl text-lg mb-4">
            {t('contactSection.tag')}
          </span>
          <h2 className={`text-5xl font-extrabold text-gray-900 mb-4 ${isArabic ? 'font-arabic' : 'font-title'}`}>
            {t('contactSection.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {t('contactSection.description')}
          </p>
          <p className="text-gray-500 font-xl font-medium text-lg mb-1">{t('contactSection.phone')}</p>
          <p className="text-gray-500 font-xl font-medium text-lg">{t('contactSection.email')}</p>
        </div>

        {/* Right Contact Form */}
        <div className={`bg-purple-50 p-8 rounded-2xl shadow-sm ${isArabic ? 'md:order-1 text-right' : 'text-left'}`}>
          <h3 className={`text-5xl font-bold text-gray-900 mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('contactSection.formTitle')}</h3>
          <p className="text-gray-700 mb-6 text-lg">{t('contactSection.formSubtitle')}</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t('contactSection.firstNamePlaceholder')}
                className={`w-full p-3 rounded-lg border border-gray-300 bg-white placeholder-gray-400 text-sm ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              />
              <input
                type="text"
                placeholder={t('contactSection.lastNamePlaceholder')}
                className={`w-full p-3 rounded-lg border border-gray-300 bg-white placeholder-gray-400 text-sm ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              />
            </div>

            <div className="relative">
              {/* PhoneInputDiv component is already internationalized via its own internal useTranslations hook */}
              <PhoneInputDiv />
            </div>

            <textarea
              rows={4}
              placeholder={t('contactSection.messagePlaceholder')}
              className={`w-full p-3 rounded-lg border border-gray-300 bg-white placeholder-gray-400 text-sm ${isArabic ? 'text-right' : 'text-left'}`}
              style={{ direction: isArabic ? 'rtl' : 'ltr' }}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#623e85] text-white font-semibold py-3 rounded-lg hover:bg-purple-800 transition"
            >
              {t('contactSection.submitButton')}
            </button>
          </form>
        </div>
      </div>
      {/* nos centres */}
      <div className={`mx-auto mt-28 ${isArabic ? 'text-right' : 'text-left'}`}>
  <h2 className={`text-5xl font-bold text-gray-900 mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('centersSection.mainTitle')}</h2>
        <p className="text-lg font-semibold text-gray-800 mb-4">
          {t('centersSection.subtitle')}
        </p>
        <p className={`text-gray-700 mb-6 max-w-3xl ${isArabic ? 'ml-auto' : ''}`}>
          {t('centersSection.description')}
        </p>

        <p className={`flex items-center font-medium text-gray-800 mb-6 font-title ${isArabic ? 'flex-row-reverse' : ''}`}>
          <span className={`text-xl ${isArabic ? 'ml-2' : 'mr-2'}`}><Home /></span> {t('centersSection.currentCentersLabel')}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {centersConfig.map((center) => (
            <div
              key={center.id}
              className={` border border-[#E6DFF5]  p-4 rounded-xl shadow-sm flex items-start ${isArabic ? 'flex-row-reverse space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'}`}
            >
              <span className={`text-xl ${isArabic ? 'ml-2' : 'mr-2'}`}>📍</span>
              <div>
                <h4 className={`font-bold font-lg mb-1 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t(`centersSection.list.${center.id}.title`)}</h4>
                <p className="text-sm text-gray-700">{t(`centersSection.list.${center.id}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 rounded-xl z-0">
        <MapContainer center={initialMapCenter} zoom={11} style={{ height: '500px', width: '100%', zIndex: 0 }} className='z-0 rounded-xl'>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centersConfig.map((center) => (
            <Marker key={center.id} position={[center.lat, center.lng]}>
              <Popup>
                {t('centersSection.centerPopup')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Page;