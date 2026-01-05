"use client";
import React from 'react';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTranslations, useLocale } from 'next-intl';

// Fix for default Leaflet icon issues with Webpack/Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

import 'leaflet/dist/leaflet.css';

// Define a static configuration array for centers with IDs and coordinates
// Add coordinates for each center here. You'll need to find the exact coordinates.
// For example purposes, I'm using placeholder coordinates.
const centersConfig = [
  { id: 'la_goulette', lat: 36.8206, lng: 10.3013 }, // Example: La Goulette coordinates
  { id: 'boumhal', lat: 36.7200, lng: 10.3000 },   // Example: Boumhal coordinates
  { id: 'el_menzah', lat: 36.8500, lng: 10.1900 },  // Example: El Menzah coordinates
  { id: 'bardo', lat: 36.8050, lng: 10.1300 },     // Example: Bardo coordinates
];

const NosCentres = () => {
  const t = useTranslations('ourCentersSection'); // Scope translations for this section
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Get the raw centers object from translations
  const translatedCenters = t.raw('centers') as Record<string, { title: string; description: string; popupText: string }>;

  // Calculate the center of all markers for initial map view
  // Fix: Explicitly cast the result to [number, number] or L.LatLngTuple to satisfy TypeScript
  const initialMapCenter: [number, number] = centersConfig.length > 0
    ? [
        centersConfig.reduce((sum, c) => sum + c.lat, 0) / centersConfig.length,
        centersConfig.reduce((sum, c) => sum + c.lng, 0) / centersConfig.length
      ]
    : [36.8065, 10.1815]; // Default center if no centers are defined

  return (
    <div>
      <section className={`   mx-auto p-4 md:mt-18 flex flex-col md:flex-row items-start gap-6 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        <div className={`w-full md:w-1/2 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-title">{t('mainTitle')}</h1>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('subtitle')}</h3>
          <p className="text-gray-600 mb-2 text-xl">{t('description')}</p>
          <div className={`mb-2 flex items-center ${isArabic ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
            <Image src="/icons/school.png" alt={t('schoolIconAlt')} width={40} height={40} />
            <p className={`text-xl font-bold items-center ${isArabic ? 'mr-2' : 'ml-2'}`}>{t('listHeader')}</p>
          </div>
          <div className="flex flex-col gap-1">
            {centersConfig.map((centerConf) => {
              const centerData = translatedCenters[centerConf.id];
              if (!centerData) return null; // Handle missing translations

              return (
                <div key={centerConf.id} className={`flex gap-0.5 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className='w-[36px] h-[36px] flex items-center justify-center'>
                    📍 {/* Keeping the emoji for simplicity, but could be an image with translated alt */}
                  </div>
                  <div className={isArabic ? 'text-right' : 'text-left'}>
                    <h2 className="text-xl font-bold mb-2 font-title">{centerData.title}</h2>
                    <p className="text-gray-600 mb-2">{centerData.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-xl flex justify-center items-center z-0">
          <MapContainer center={initialMapCenter} zoom={11} style={{ height: '80vh', width: '100%' }} className='rounded-xl h-full'>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centersConfig.map((centerConf) => {
              const centerData = translatedCenters[centerConf.id];
              if (!centerData) return null;

              return (
                <Marker key={centerConf.id} position={[centerConf.lat, centerConf.lng]}>
                  <Popup>
                    {centerData.popupText} {/* Translated popup text */}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default NosCentres;
