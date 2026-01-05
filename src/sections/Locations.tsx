"use client";
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl'; // Import useTranslations and useLocale

// Define a static configuration array for centers with IDs
const centersConfig = [
  { id: 'la_goulette' },
  { id: 'boumhal' },
  { id: 'el_menzah' },
  { id: 'bardo' },
];

const Locations : React.FC = () => {
  const t = useTranslations('locationsSection'); // Scope translations for this section
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Get the raw centers object from translations
  const translatedCenters = t.raw('centers') as Record<string, { title: string; description: string }>;

  return (
    <section className={`  mx-auto md:mt-20 max-md:p-4 ${isArabic ? 'text-right' : 'text-left'}`}>
      <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('mainTitle')}</h1>
      <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-4 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('subtitle')}</h3>
      <p className={`text-gray-600 mb-6 text-base md:text-lg lg:text-xl ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('description')}</p>
      <div className={`mb-2 flex items-center ${isArabic ? ' flex-row-reverse' : 'justify-start flex-row'}`}>
        <Image src="/icons/school.png" alt={t('schoolIconAlt')} width={40} height={40} />
        <p className={`text-lg md:text-xl font-bold items-center font-title ${isArabic ? 'mr-2' : 'ml-2'}`}>{t('listHeader')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {centersConfig.map((centerConf) => {
          const centerData = translatedCenters[centerConf.id];
          if (!centerData) return null; // Handle cases where translation data might be missing

          return (
            <div key={centerConf.id} className={`border-gray-200 border-2 p-6 rounded-2xl flex gap-0.5 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className='w-[40px] h-[40px] flex items-center justify-center'>
                <Image src="/icons/pin.png" alt={t('pinIconAlt')} width={40} height={40} />
              </div>
              <div className={`${isArabic ? 'mr-2' : 'ml-2'}`}>
                <h2 className={`text-lg md:text-xl font-bold mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{centerData.title}</h2>
                <p className={`text-gray-600 mb-2 text-sm md:text-base ${isArabic ? 'font-arabic' : ''}`}>{centerData.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Locations;