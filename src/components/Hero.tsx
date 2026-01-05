'use client'; // This component and its children are client components

import React from 'react'; // Import React
import { useTranslations, useLocale } from 'next-intl'; // Import useTranslations and useLocale

type FeatureCardProps = {
  featureCardIcon: React.ReactNode;
  featureCardPosition: string;
  featureCardTitle: string;
  featureCardDescription: string;
  featureArrowPosition: string;
};

function FeatureCard({
  featureCardDescription,
  featureCardPosition,
  featureCardIcon,
  featureCardTitle,
  featureArrowPosition,
}: FeatureCardProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  console.log('locale:', locale); // Debugging line to check the actual locale
  console.log('isArabic:', isArabic); // Debugging line to check if the locale is Arabic  
  return (
    <>
      <div
        className={`${isArabic ? 'text-right' : 'text-left'} ${isArabic ? 'flex-row-reverse' : 'flex-row'} flex gap-2 relative ${featureCardPosition} bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-2`}
      >
        <div>{featureCardIcon}</div>
        <div className={`flex flex-col ${isArabic ? 'justify-start items-end' : 'justify-start items-start'}`}>
          <p className={'font-semibold text-sm md:text-base'}>{featureCardTitle}</p>
          <p className={'text-xs md:text-sm'}>{featureCardDescription}</p>
        </div>
      </div>
      <div className={`relative ${featureArrowPosition}`}>
        <img className={' h-10 md:h-14'} src="/images/arrow.png" alt="arrow" />
      </div>
    </>
  );
}

function HeroBody() {
  const t = useTranslations('hero'); // Scope translations to 'hero'
  return (
    <>
      <p className={'font-semibold text-lg md:text-xl lg:text-2xl'}>{t('bodyTitle')}</p>
      <p className={'font-medium text-base md:text-lg lg:text-xl text-[#475569]'}>
        {t('bodyDescription')}
      </p>
      <div className="">
        <button
          className={
            'hover:cursor-pointer hover:bg-[#7B5AA6] font-medium bg-[#5D4089] text-white py-2 md:py-3 px-4 md:px-6 rounded-xl mb-2 text-sm md:text-base'
          }
        >
          {t('buttonStart')}
        </button>
        <p className={'text-xs md:text-sm'}>{t('parentsSatisfaction')}</p>
      </div>
    </>
  );
}

function HeroFooter() {
  const t = useTranslations('hero'); // Scope translations to 'hero'

  // Fetch translated titles and descriptions directly
  const girlFeatureCardTitle = t('onlineFeatureTitle');
  const girlFeatureCardDescription = t('onlineFeatureDescription');

  const boyFeatureCardTitle = t('onsiteFeatureTitle');
  const boyFeatureCardDescription = t('onsiteFeatureDescription');

  return (
    <div
      className={
        'mb-17 mt-17 flex flex-col xl:flex-row justify-end items-end gap-24 xl:gap-[35rem]'
      }
    >
      <Student
        student={'girl'}
        featureCardTitle={girlFeatureCardTitle}
        featureCardDescription={girlFeatureCardDescription}
      />
      {/* this div is used to position the boy student component a bit higher, as the flex is actually */}
      {/* working with the heights of the background div tags, not the images' */}
      <div className={'xl:mb-17'}>
        <Student
          student={'boy'}
          featureCardTitle={boyFeatureCardTitle}
          featureCardDescription={boyFeatureCardDescription}
        />
      </div>
    </div>
  );
}

function HeroTitle({ isArabic }: { isArabic: boolean }) {
  const t = useTranslations('hero'); // Scope translations to 'hero'
  return (
    <div className={`text-center  text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold ${isArabic ? '!font-arabic' : 'font-title gap-4'}`}>
      <span className="bg-gradient-to-r from-[#676DBD] to-[#529ED3] bg-clip-text text-transparent ">
        {t('title1')}
      </span>
      <p className={
          'bg-gradient-to-r from-[#7350B0] to-[#55BDE1] bg-clip-text text-transparent pb-4'
        }
      >
        {t('title2')}
      </p>
    </div>
  );
}

function PulseIcon() {
  return (
    <div className={'flex justify-center items-center h-8 w-8 rounded-full bg-[#F9DEDF]'}>
      <div className={'rounded-full bg-[#E7463B] animate-pulse h-4 w-4'}></div>
    </div>
  );
}

function SchoolIcon() {
  return (
    <div className={'flex justify-center items-center h-8 w-8 rounded-full bg-[#F9DEDF]'}>
      <img src={'/icons/school.png'} className={'h-4 w-4'} alt={'school'} />
    </div>
  );
}

type StudentProps = {
  student: 'boy' | 'girl';
  featureCardTitle: string;
  featureCardDescription: string;
};

function Student({ student, featureCardTitle, featureCardDescription }: StudentProps) {
  const backgroundColor = student === 'boy' ? 'bg-cyan-500' : 'bg-amber-600';
  const imageUrl = `/people/${student}.png`;
  const backgroundSize = student === 'boy' ? 'md:w-72 md:h-72 w-[238px] h-[238px] ' : 'md:w-80 md:h-80 w-[238px] h-[238px]';
  const featureCardIcon = student === 'girl' ? <PulseIcon /> : <SchoolIcon />;
  const featureCardPosition =
    student === 'girl'
      ? 'xl:-right-72 xl:top-1/10 md:top-62 top-30 max-md:w-60 max-md:-left-10'
      : 'xl:-left-54 lg:top-45 md:top-62 top-30 max-md:w-60 max-md:-left-10';
  const featureArrowPosition =
    student === 'girl'
      ? 'xl:-right-[25rem] xl:-rotate-180 xl:bottom-30 max-md:-rotate-120  max-md:-right-26 max-md:top-30 '
      : 'xl:-left-[22rem] xl:top-30  -left-28 max-md:rotate-70 -top-5';

  return (
    <div className={`relative ${backgroundSize} aspect-square rounded-full ${backgroundColor}`}>
      <img
        src={imageUrl}
        // Tailwind JIT for arbitrary values like h-[30rem] might need to be explicitly parsed.
        // If this exact string `h-[${imageSize}]` doesn't work, consider fixed values or a custom class.
        className={`absolute bottom-0 md:h-[30rem] h-[363px] object-cover rounded-full`}
        alt="student"
      />
      <FeatureCard
        featureCardIcon={featureCardIcon}
        featureCardPosition={featureCardPosition}
        featureCardTitle={featureCardTitle}
        featureCardDescription={featureCardDescription}
        featureArrowPosition={featureArrowPosition}
      />
    </div>
  );
}

function Hero() {
  const locale = useLocale();
const isArabic = locale === 'ar';
  return (
    <div className="relative h-fit overflow-hidden py-18 max-md:m-4   md:mx-auto rounded-xl p-4 bg-[#f2eefa]  ">
      {/* background */}
      <div className="absolute inset-0 bg-[url('/backgrounds/hero-map.png')] mix-blend-hard-light   z-0 " />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 h-full text-center">
<HeroTitle isArabic={isArabic} />
<HeroBody  />
<HeroFooter  />
      </div>
    </div>
  );
}

export default Hero;