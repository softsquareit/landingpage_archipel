'use client';
import React from 'react';
import Image from 'next/image';
import NosCentres from '@/sections/NosCentres';
import { useTranslations, useLocale } from 'next-intl';

// --- Interfaces for type safety ---
interface RhythmCardProps {
  id: string; // Added for translation key
  bgColor: string; // Tailwind CSS background color class, e.g., 'bg-yellow-100'
  icon: string; // Can be an SVG, an image component, or an icon component
  color: string;
}

interface CardProps {
  id: string; // Added for translation key
  icon: string;      // URL for the icon image
  image: string;     // URL for the main image
  bgColor: string;   // Tailwind CSS background color class (e.g., 'bg-blue-500')
}

interface ProgramFeatureProps {
  id: string; // Added for translation key
  bgColor: string;
}

// --- React functional component: Card ---
const Card: React.FC<Omit<CardProps, 'title'> & { t: ReturnType<typeof useTranslations>; isArabic?: boolean }> = ({ id, icon, image, bgColor, t, isArabic = false }) => {
  return (
    // Main container for the card, applying background color and basic styling
    <div className={`flex flex-col items-center rounded-3xl shadow-lg ${bgColor} w-fit h-fit md:w-[390px] md:h-[425px] p-4 gap-8 md:min-w-[519px] md:max-w-sm mx-6 md:mx-auto md:my-8 md:p-6`}>
      {/* Container for icon and title to be inline */}
      <div className={`flex items-start w-full ${isArabic ? 'flex-row-reverse' : ''}`}>
        {/* Icon display */}
        <h1 className={` text-[26px] md:text-[32px] m-1 ${isArabic ? 'ml-0 mr-1' : ''}`}>{icon}</h1>
        {/* Title display - now inline with the icon */}
  <h2 className={`text-[26px] md:text-[32px] font-semibold text-gray-900 flex-grow ${isArabic ? 'font-arabic text-right' : 'font-title text-left'}`}>{t(`archipelMixSection.cards.${id}.title`)}</h2>
      </div>

      {/* Main image display */}
      <Image
        src={image}
        width={600}
        height={400}
        alt={t(`archipelMixSection.cards.${id}.title`)}
        className=" w-[342px] h-[237px] md:w-[600px] md:h-[400px]  object-cover rounded-lg flex-1"
        // Fallback for broken image links
        onError={(e) => {
          e.currentTarget.onerror = null; // Prevents infinite loop
          e.currentTarget.src = "https://placehold.co/400x192/cccccc/000000?text=Image"; // Placeholder image
        }}
      />
    </div>
  );
};

// --- React functional component: RhythmCard ---
const RhythmCard: React.FC<Omit<RhythmCardProps, 'title' | 'quote' | 'descriptionPhrases'> & { t: ReturnType<typeof useTranslations>; isArabic?: boolean }> = ({
  id,
  bgColor,
  icon,
  color,
  t,
  isArabic = false,
}) => {
  return (
    <div className={`rounded-2xl p-6 ${bgColor} ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
        <div className={`rounded-full p-2 ${color} ${isArabic ? 'ml-3' : 'mr-3'}`}>
          <Image src={icon} width={36} height={36} alt={t(`rhythmSection.cards.${id}.title`)} />
        </div>
  <h2 className={`text-2xl font-semibold text-gray-800 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t(`rhythmSection.cards.${id}.title`)}</h2>
      </div>
      <p className={`text-xl  mb-5 ${color} bg-clip-text text-gray-900/25  font-bold`}>
        &quot;{t(`rhythmSection.cards.${id}.quote`)}&quot;
      </p>
      <ul className="space-y-3">
        {/* t.raw is used here because descriptionPhrases is an array of strings directly */}
        {t.raw(`rhythmSection.cards.${id}.descriptionPhrases`).map((phrase: string, index: number) => (
          <li key={index} className={`flex items-start text-[#475569] ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span className={`text-yellow-600 ${isArabic ? 'ml-2' : 'mr-2'}`}>👉</span>
            <span>{phrase}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Data Configurations (now using IDs for translation keys) ---
const rhythmCardsData: Omit<RhythmCardProps, 'title' | 'quote' | 'descriptionPhrases'>[] = [
  {
    id: "slow_rhythm",
    bgColor: "bg-[#fff0d5]",
    icon: "/icons/watch.png",
    color: "bg-[#F18C27]"
  },
  {
    id: "medium_rhythm",
    bgColor: "bg-[#D2F4FB]",
    icon: "/icons/guy.png",
    color: "bg-[#44C0E2]"
  },
  {
    id: "fast_rhythm",
    bgColor: "bg-[#F1EDFA]",
    icon: "/icons/bicycle.png",
    color: "bg-[#9A7BD1]"
  },
  {
    id: "very_fast_rhythm",
    bgColor: "bg-[#D8FFEA]",
    icon: "/icons/rocket.png",
    color: "bg-[#03B658]"
  },
];

const cardData: Omit<CardProps, 'title'>[] = [
  {
    id: "short_units",
    icon: "🌱",
    image: "/images/classroom.png",
    bgColor: "bg-[#fff0d5]"
  },
  {
    id: "clear_videos",
    icon: "📹",
    image: "/images/classroom.png",
    bgColor: "bg-[#d2f4fb]"
  },
  {
    id: "self_assessments",
    icon: "✅",
    image: "/images/classroom.png",
    bgColor: "bg-[#d8ffea]"
  },
  {
    id: "realtime_progress",
    icon: "📊",
    image: "/images/classroom.png",
    bgColor: "bg-[#ffdfdf]"
  }
];

const programFeaturesConfig: ProgramFeatureProps[] = [
  {
    id: "regular_attendance",
    bgColor: "bg-[#44c0e2]",
  },
  {
    id: "active_participation",
    bgColor: "bg-[#734eaf]",
  },
  {
    id: "academic_progress",
    bgColor: "bg-[#e8640a]",
  },
  {
    id: "positive_behavior",
    bgColor: "bg-[#ff6262]",
  }
];

// --- Main Page Component ---
const Page = () => {
  const t = useTranslations('pedagogyPage'); // Scope translations for this page
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div>
      {/* Hero section */}
      <section className="relative   mx-4 md:mx-auto mt-4 md:p-4 sm:p-8 rounded-2xl bg-cover bg-center text-center overflow-hidden"
        style={{ backgroundImage: 'url("/backgrounds/hero-map.jpg")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#147da6]/70 z-0 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-5 text-white px-4 py-4 md:py-12">
          <h1 className={` text-4xl md:text-5xl font-bold ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('heroSection.title')}</h1>
          <p className="text-base  max-w-2xl">
            {t('heroSection.description')}
          </p>
        </div>
      </section>

      {/* Blue Vector Background - spans full width */}
      <div className={`relative w-full  ${isArabic ? '' : ''}`}>
        {/* Full-width blue vector background */}
        <div className={`absolute top-0  max-md:hidden w-1/2 h-full pointer-events-none z-0 ${isArabic ? 'left-0' : 'right-0'}`}>
          <Image
            src="/images/bluevectorpedagogy.png"
            className={`absolute top-48 ${isArabic ? 'left-0' : 'right-0'} h-[505.8425239333829px] object-cover z-20`}
            alt="Blue Vector pedagogy"
            width={400}
            height={1300}
            style={{ 
              height: '300%', // Extends beyond section
              transform: isArabic ? 'scaleX(-1)' : ''
            }}
          />
        </div>

        {/* How it works section */}
        <section className={`flex max-md:flex-col    mt-6 mx-4 md:mx-auto relative ${isArabic ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex flex-col md:pr-16  gap-6 max-md:w-full w-1/2 relative z-10 text-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
          <h1
            className={`font-semibold bg-gradient-to-r from-[#676DBD] to-[#529ED3] bg-clip-text text-transparent text-4xl ${isArabic ? 'font-arabic' : 'font-title'}`}
          >
            {t('howItWorksSection.titlePart1')} <br /> {t('howItWorksSection.titlePart2')}
          </h1>
          <p className='text-base sm:text-lg max-w-2xl text-gray-500'>
            {t('howItWorksSection.description1')}
          </p>
          <ul className={`list-disc list-inside ${isArabic ? 'text-right' : 'text-center md:text-left'}`}>
            <li className='text-base sm:text-lg max-w-2xl text-gray-500 mx-auto'>{t('howItWorksSection.bullet1')}</li>
            <li className='text-base sm:text-lg max-w-2xl text-gray-500 mx-auto'>{t('howItWorksSection.bullet2')}</li>
            <li className='text-base sm:text-lg max-w-2xl text-gray-500 mx-auto'>{t('howItWorksSection.bullet3')}</li>
          </ul>
          <p className='text-base  sm:text-lg max-w-2xl text-[#475569]'>
            {t('howItWorksSection.description2')}
          </p>
          <button className={`bg-[#5d4089] text-white font-semibold py-3 px-6 max-md:mb-6 rounded-xl hover:bg-[#529ED3] transition w-fit self-center ${isArabic ? 'md:self-end' : 'md:self-start'}`}>
            {t('howItWorksSection.buttonText')}
          </button>
        </div>
        
        <div className='flex justify-center items-center rounded-2xl max-md:w-full w-1/2 relative z-10'>
          {/* Classroom image */}
          <Image 
            src="/images/classroom.png" 
            alt={t('howItWorksSection.imageAlt')} 
            width={628} 
            height={428}
            className='relative z-10'
          />
        </div>
        </section>
      </div>

      {/* Rhythm profiles section - with transparent background to show vector */}
      <section className='flex flex-col   p-4 mt-6 mx-auto relative z-10'>
        <h1 className={`text-4xl font-bold text-gray-900 mb-8 text-center relative z-10 ${isArabic ? 'font-arabic' : 'font-title'}`}>
          {t('rhythmSection.title')}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10'>
          {rhythmCardsData.map((card, index) => (
            <RhythmCard key={index} {...card} t={t} isArabic={isArabic} />
          ))}
        </div>
      </section>

      {/* ArchipelMix section */}
      <section className={`relative flex flex-col lg:grid-cols-2 md:min-h-screen   lg:snap-y lg:snap-mandatory lg:snap-normal lg:snap-center mx-auto h-fit overflow-x-clip`}>
        {/* Left column: responsive positioning */}
        <div className={` w-full lg:w-1/2 p-4 sm:p-6 lg:sticky lg:top-0 max-h-[50vh] md:min-h-[90vh] flex flex-col gap-4 sm:gap-6 justify-center z-10 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight ${isArabic ? 'font-arabic' : 'font-title'}`}> 
            {t('archipelMixSection.titlePart1')} <br />
            {t('archipelMixSection.titlePart2')} <br />
            {t('archipelMixSection.titlePart3')}
          </h1>
          <p className='text-sm sm:text-base lg:text-lg max-w-2xl text-gray-500 leading-relaxed'>
            {t('archipelMixSection.description')}
          </p>
          <button className={`bg-[#5d4089] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-[#529ED3] transition w-fit text-sm sm:text-base ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('archipelMixSection.buttonText')}
          </button>
        </div>
      
      {/* Mobile: Cards below text, Desktop: Cards beside text */}
      <div className='w-full lg:flex lg:justify-end lg:-mt-[85vh]'>
        {/* Right column: responsive card container */}
        <div className=' w-full lg:w-1/2 mt-8 lg:mt-0 relative top-0 flex flex-col gap-8 lg:gap-16 right-0'>
          {/* Background yellow vector */}
          <Image
            src="/images/verticalvector.png"
            className='absolute top-50 z-0 object-cover w-full'
            alt="Yellow Vector"
            width={600}
            height={400}
          />

          {cardData.map((card, index) => {
            const rotateClass = index % 2 === 0 ? 'rotate-[-10deg]' : 'rotate-[10deg]';
            return (
              <div
                key={index}
                className={`relative z-10 flex items-center justify-center p-2 sm:p-6 lg:p-0 ${rotateClass}`}
              >
                <Card {...card} t={t} isArabic={isArabic} />
              </div>
            );
          })}
        </div>
</div>
      </section>

      {/* ILONA section */}
      <section className='  mx-auto py-4 mt-8 md:mt-6 p-4'>
        <div
          className="relative w-full h-80 md:h-96 bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
          style={{ backgroundImage: "url('/images/classroom.png')" }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
            <h1 className={`text-3xl md:text-3xl xl:text-4xl font-bold mb-4 ${isArabic ? 'font-arabic' : 'font-title'}`}>
              {t('ilonaSection.title')}
            </h1>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${isArabic ? 'font-arabic' : 'font-title'}`}>
              {t('ilonaSection.subtitle')}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
              {t('ilonaSection.description')}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mt-8 ">
          {programFeaturesConfig.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} text-white rounded-3xl p-4 md:p-8 md:h-80 flex flex-col justify-between transition-transform duration-300 shadow-sm relative overflow-hidden`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-70">
                <Image
                  src={index % 2 === 0 ? "/images/bgShape1.png" : "/images/bgShape2.png"}
                  alt="Background Shape"
                  fill
                  className="object-contain aspect-square w-full h-fit"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 leading-tight relative z-10 ${isArabic ? 'font-arabic text-left' : 'font-title text-right'}`}>
                {t(`ilonaSection.features.${feature.id}.title`)}
              </h3>

              {/* Description */}
              <p className={`text-sm md:text-base leading-relaxed opacity-90 relative z-10 ${isArabic ? 'text-right' : 'text-left'}`}>
                {t(`ilonaSection.features.${feature.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Nos centres section */}
      <NosCentres />
    </div>
  );
};

export default Page;