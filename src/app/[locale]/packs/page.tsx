"use client";
import React, { useRef } from 'react';
import HomeContact from '@/sections/HomeContact';
import PricingCard from '@/components/PricingCard';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const educationLevelConfigs = [
  { id: 'primary' },
  { id: 'college' },
  { id: 'lycee' },
  { id: 'bachelier' }
];

const specialOfferConfigs = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

// Define different pricing based on education level
// const pricingByLevel: Record<string, { ilotPrice: string; archilotPrice: string; discount?: string }> = {
//   primary: {
//     ilotPrice: '150',
//     archilotPrice: '450',
//     discount: '10%'
//   },
//   college: {
//     ilotPrice: '180',
//     archilotPrice: '500',
//     discount: '15%'
//   },
//   lycee: {
//     ilotPrice: '200',
//     archilotPrice: '550',
//     discount: '20%'
//   },
//   bachelier: {
//     ilotPrice: '250',
//     archilotPrice: '650',
//     discount: '25%'
//   }
// };

const Page = () => {
  const t = useTranslations('offersPage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Only one selected education level
  const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null);

  // Ref for scrolling to pricing section
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleRadioChange = (id: string) => {
    setSelectedLevel(id);

    // Scroll to pricing section
    setTimeout(() => {
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className='flex flex-col'>
      {/* Hero + Level Selection */}
      <section className={`  max-md:mt-6 mx-4 md:mx-auto flex flex-col justify-between gap-4 md:flex-row md:mt-14 py-4  md:py-18 px-4 md:px-14 bg-gradient-to-r from-[#e7e1f6] to-[#f1edfa] rounded-xl ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        <div className={`flex flex-col gap-8 w-full md:w-1/2 justify-center  max-md:text-center ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={` text-[36px] md:text-5xl text-[#334155] font-bold ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('hero.title')}</h1>
          <h2 className={`text-xl font-medium ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('hero.subtitle')}</h2>
          <p className='text-[16px] text-gray-500 font-medium'>{t('hero.description')}</p>
          <button className={`bg-[#5d4089] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition w-fit text-sm sm:text-base max-md:self-center ${isArabic ? 'self-end' : 'self-start'}`}>{t('hero.buttonText')}</button>
        </div>

        {/* Radio Buttons Section */}
        <div className='relative flex justify-end items-center md:w-1/2 w-full'>
          <div className='absolute -bottom-18 -left-4 md:-bottom-7 md:-left-15'>
            <Image src="/images/selectprofile.png" alt="Select Profile" width={165} height={200} />
          </div>
          <div className={`bg-[#f9f7fd] rounded-[16px] px-2 py-4 md:p-6 flex flex-col w-full md:w-[85%] border-2 border-[#ddd5f2] max-md:text-center ${isArabic ? 'text-right' : 'text-left'}`}>
            <h1 className={`text-[26px] md:text-[32px] font-semibold mb-2 max-md:text-center ${isArabic ? 'font-arabic text-right' : 'font-title text-start'}`}>{t('educationLevels.sectionTitle')}</h1>
            <div className='flex flex-col gap-4'>
              {educationLevelConfigs.map((level) => (
              <div
                key={level.id}
                onClick={() => handleRadioChange(level.id)}
                className={`flex gap-4 items-center rounded-xl px-4 py-2 border-2 bg-white transition-all duration-200 cursor-pointer ${isArabic ? 'flex-row-reverse' : 'flex-row'} ${selectedLevel === level.id
                  ? 'border-purple-500 text-purple-500'
                  : 'border-gray-900 text-gray-800'
                  }`}
              >
                <input
                  type="radio"
                  name="educationLevel"
                  value={level.id}
                  checked={selectedLevel === level.id}
                  onChange={() => handleRadioChange(level.id)}
                  className="w-5 min-w-5 h-5  appearance-none border-2 border-gray-300 rounded-full
                    checked:bg-purple-500 checked:border-purple-500
                    focus:ring-2 focus:ring-purple-200 cursor-pointer pointer-events-none"
                />
                <div className={`flex flex-col ${isArabic ? 'text-right' : 'text-left'}`}>
                  <label className={`text-[18px] font-bold cursor-pointer leading-6 ${isArabic ? 'font-arabic' : 'font-title'}`}> 
                    {t(`educationLevels.levels.${level.id}.title`)}
                  </label>
                  <p className={` text-[16px] leading-4 ${selectedLevel === level.id ? 'text-purple-400' : 'text-gray-800'}`}>
                    {t(`educationLevels.levels.${level.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className='flex flex-col gap-4   my-20 mx-auto p-4'>
  <h1 className={`text-4xl font-bold text-center mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('specialOffers.sectionTitle')}</h1>
        <p className='text-center text-gray-500 mb-4'>{t('specialOffers.sectionDescription')}</p>
        <div className='flex flex-col gap-8 md:gap-4 md:flex-row justify-center items-center'>
          {specialOfferConfigs.map((offer) => (
            <div key={offer.id} className={`flex flex-col gap-1 rounded-xl justify-between w-full md:w-1/3 h-60 border-2 border-[#ddd5f2] ${isArabic ? 'text-right' : 'text-left'}`} >
              <h1 className={`bg-purple-100 text-purple-500 w-full rounded-t-xl text-center border-b-2 border-[#ddd5f2] p-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('specialOffers.cardDiscount')}</h1>
              <div className='flex flex-col gap-2 p-2'>
                <h2 className={`text-lg font-semibold ${isArabic ? 'font-arabic' : 'font-title'}`}>{t(`specialOffers.offers.${offer.id}.title`)}</h2>
                <p className='text-gray-800 text-md'>{t(`specialOffers.offers.${offer.id}.description`)}</p>
              </div>
              <div className='flex justify-center items-center'>
                <button className='bg-[#9A7BD1] hover:bg-[#734eaf] text-white m-1 font-semibold py-2.5 sm:py-1.5 px-4 sm:px-6 rounded-[8px] transition w-full text-sm sm:text-base text-center'>{t('specialOffers.cardButtonText')}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section (scroll target) */}
      <section ref={pricingRef} className='flex flex-col gap-4   mx-auto p-4'>
        <h1 className={`text-4xl font-bold text-center mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('pricing.sectionTitle')}</h1>
        <p className='text-center text-gray-500 mb-4 text-base'>{t('pricing.sectionDescription')}</p>
  
        {/* Pricing cards - pass selectedLevel to change prices dynamically */}
        <div className='flex flex-col gap-4 md:flex-row justify-center items-end'>
          <PricingCard selectedLevel={selectedLevel} />
          <PricingCard offer="archilot" selectedLevel={selectedLevel} />
        </div>
      </section>

      <HomeContact />
    </div>
  );
};

export default Page;
