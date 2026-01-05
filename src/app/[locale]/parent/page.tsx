"use client";
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import HomeContact from '@/sections/HomeContact';
import PartnersSection from '@/sections/Partnersection';
import Courses from '@/sections/Courses';
import NosCentres from '@/sections/NosCentres';
import GridSection from '@/sections/GridSection';
import Testimonials from '@/sections/Testimonials';
import { useTranslations, useLocale } from 'next-intl';
import VideoTestimonialCarousel from '@/sections/Testimonialimage';

// --- Interfaces for type safety ---
interface ScolariteItemProps {
  id: string; // Added for translation key
  icon: string;
}

interface IlonaItemProps {
  id: string; // Added for translation key
  icon: string;
}

interface StatCardProps {
  id: string; // Added for translation key
  value: string; // The numerical/percentage value
}

// --- Data Configurations (now using IDs for translation keys) ---
const scolariteConfig: ScolariteItemProps[] = [
  { id: "attendance", icon: "/icons/calender.png" },
  { id: "evaluation_results", icon: "/icons/aim.png" },
  { id: "homework", icon: "/icons/pencil.png" }
];

const ilonaConfig: IlonaItemProps[] = [
  { id: "ilona_program", icon: "/icons/trophy.png" },
  { id: "unlockable_gifts", icon: "/icons/gift.png" },
  { id: "realtime_tracking", icon: "/icons/curve.png" }
];

const statCardsConfig: StatCardProps[] = [
  { id: "students_accompanied", value: "2K+" },
  { id: "success_rate", value: "96%" },
  { id: "satisfaction_score", value: "9/10" },
];

const Page = () => {
  const t = useTranslations('parentAccountPage'); // Scope translations for this page
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div>
      {/* Header section */}
      <section className={`  mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-12 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        {/* Left Content */}
        <div className={`flex flex-col max-md:items-center max-md:text-center w-full md:w-1/2 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-[#734EAF]  to-[#44C0E2] text-transparent bg-clip-text ${isArabic ? 'font-arabic' : 'font-title'}`}>
            {t('headerSection.titlePart1')} <br />
            {t('headerSection.titlePart2')} <br />
            {t('headerSection.titlePart3')} <br />
            {t('headerSection.titlePart4')}
          </h1>

          <p className={`text-gray-700 mt-6 max-w-md text-lg ${isArabic ? 'text-right self-end' : 'text-left'}`}>
            {t('headerSection.description')}
          </p>

          <button className={`bg-[#5d4089] w-fit my-2 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition max-md:self-center ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('headerSection.buttonText')}
          </button>

          <div className={`flex items-center text-sm text-gray-700 gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-md text-gray-600">{t('headerSection.satisfiedParents')}</span>
          </div>
        </div>

        {/* Right Content (Image with overlayed stat cards) */}
        <div className="relative flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none">
          <div className="relative w-full object-cover aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/parent.png"
              alt={t('headerSection.imageAlt')}
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-1 bottom-0 md:top-0 md:-left-10 w-1/3 md:w-fit max-md:-bottom-10 md:h-fit px-4 py-2 font-title bg-white shadow-md rounded-xl  text-center border border-blue-100 flex flex-col items-start">
            <p className="text-[34px] font-bold text-gray-800">{statCardsConfig[0].value}</p>
            <p className="text-xs text-gray-500">{t(`headerSection.stats.${statCardsConfig[0].id}`)}</p>
          </div>

          <div className="absolute mx-0.5 bottom-0 right-1/3 md:top-1/4 md:-left-20 w-1/3 md:w-fit max-md:-bottom-10 md:h-fit px-4 py-2 font-title bg-white shadow-md rounded-xl text-center border border-blue-100 flex flex-col items-start">
            <p className="text-[34px] font-bold text-gray-800">{statCardsConfig[1].value}</p>
            <p className="text-xs text-gray-500">{t(`headerSection.stats.${statCardsConfig[1].id}`)}</p>
          </div>

          <div className="absolute bottom-0 -right-1 md:-bottom-2 md:-left-10 w-1/3 md:w-fit max-md:-bottom-10 md:h-fit px-4 py-2 font-title bg-white shadow-md rounded-xl text-center border border-blue-100 flex flex-col items-start">
            <p className="text-[34px] font-bold text-gray-800">{statCardsConfig[2].value}</p>
            <p className="text-xs text-gray-500">{t(`headerSection.stats.${statCardsConfig[2].id}`)}</p>
          </div>
        </div>
      </section>

      {/* Section call to action */}
      <section className='bg-[#F1F5F9]   mx-auto flex flex-col rounded-2xl shadow-sm my-2 md:my-24 justify-center items-center gap-4 p-4'>
  <h1 className={`text-4xl font-bold text-center mb-2 ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('ctaSection.title')}</h1>
        <p className='text-gray-500 mb-2 text-center'>
          {t('ctaSection.descriptionPart1')} <br /> {t('ctaSection.descriptionPart2')}
        </p>
        <button className='bg-[#5d4089] w-fit my-2 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition'>
          {t('ctaSection.buttonText')}
        </button>
      </section>

      {/* Section scolarité */}
      <section className={`flex flex-col   max-md:text-center mx-auto p-4 mt-6 gap-4 -mb-16 ${isArabic ? 'text-right' : 'text-left'}`}>
      <h1 className={`text-4xl  font-bold ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('scolariteSection.title')}</h1>
        <p className='text-gray-500 mb-2'>
          {t('scolariteSection.descriptionPart1')} <br /> {t('scolariteSection.descriptionPart2')}
        </p>
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center w-full'>
          {scolariteConfig.map((item, index) => (
            <div key={index} className={`flex flex-col gap-2 w-full md:w-1/4 rounded-xl p-4 md:p-6 h-50 border-2 border-[#ddd5f2] ${isArabic ? 'text-right' : 'text-left'}`}>
              <div className={`flex-shrink-0 ${isArabic ? 'self-end' : 'self-start'}`}>
                <Image
                  src={item.icon}
                  alt={t(`scolariteSection.items.${item.id}.title`)}
                  width={40}
                  height={40}
                  className='w-8 h-8 md:w-10 md:h-10 object-contain'
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = 'https://placehold.co/40x40/5d4089/FFFFFF?text=Icon';
                  }}
                />
              </div>
              <h3 className={`font-semibold text-gray-800 text-[28px] md:text-[28px] leading-tight ${isArabic ? 'font-arabic' : 'font-title'}`}>{t(`scolariteSection.items.${item.id}.title`)}</h3>
              <p className='text-xl md:text-base text-gray-600 leading-relaxed flex-grow'>{t(`scolariteSection.items.${item.id}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section ilona */}
      <section className={`flex flex-col md:grid-cols-2   mx-auto p-4 md:mt-6 gap-4 md:my-20 `}>
  {/* Left Content (Sticky Sidebar) */}
  {/* This column stays visible at the top as the user scrolls */}
  <div className={`flex flex-col justify-end w-full md:w-1/2 pt-10 md:pt-30  gap-4 md:sticky md:top-0    ${isArabic ? 'text-right pr-6' : 'text-left'}`}>
    <Image
      src={"/images/waves.png"}
      width={120}
      height={60}
      alt={t('ilonaSection.wavesAlt')}
      className={isArabic ? 'self-end' : 'self-start'}
    />
    <p className='text-gray-500 my-4 max-md:text-center text-md'>{t('ilonaSection.tagline')}</p>
  <h1 className={`text-4xl max-md:text-center font-bold ${isArabic ? 'font-arabic ' : 'font-title'}`}>{t('ilonaSection.title')}</h1>
    <p className='text-gray-500 mb-2 max-md:text-center'>
      {t('ilonaSection.descriptionPart1')} <br />
      {t('ilonaSection.descriptionPart2')} <br />
      {t('ilonaSection.descriptionPart3')}
    </p>
  </div>

  {/* Right Content (Scrollable Cards) */}
  {/* This column is what causes the scrolling action */}

  <div className='w-full flex justify-end md:-mt-[30vh]'  >

  <div className='w-full md:w-1/2 flex flex-col space-y-6 md:space-y-28 '>
    {ilonaConfig.map((item, index) => (
      <div 
        key={index} 
        className=' flex items-center justify-center'
      >
        <div className={`flex flex-col gap-4 w-full rounded-xl p-6 h-fit border-2 border-[#ddd5f2] ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`flex-shrink-0 ${isArabic ? 'self-end' : 'self-start'}`}>
            <Image
              src={item.icon}
              alt={t(`ilonaSection.items.${item.id}.title`)}
              width={40}
              height={40}
              className='w-8 h-8 md:w-10 md:h-10 object-contain'
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = 'https://placehold.co/40x40/5d4089/FFFFFF?text=Icon';
              }}
            />
          </div>
          <h3 className={`font-semibold text-gray-800 text-xl md:text-2xl leading-tight ${isArabic ? 'font-arabic' : 'font-title'}`}>{t(`ilonaSection.items.${item.id}.title`)}</h3>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed flex-grow'>{t(`ilonaSection.items.${item.id}.paragraph1`)}</p>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed flex-grow'>{t(`ilonaSection.items.${item.id}.paragraph2`)}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
</section>
      {/* Section: Don't miss important moments */}
      <section className={`  mx-auto p-4 mt-6 gap-4 flex flex-col ${isArabic ? 'text-right' : 'text-left'}`}>
  <h1 className={`text-3xl font-bold max-md:text-center ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('importantMomentsSection.title')}</h1>
        <p className='text-gray-500 text-xl max-md:text-center'>{t('importantMomentsSection.description')}</p>
      </section>

      {/* Section: Alerts and Reminders */}
      <section className={`mb-8   mx-auto p-4 mt-6 gap-4 flex flex-col md:flex-row  ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        <div className={`rounded-3xl border-2 border-[#ddd5f2] overflow-hidden pt-2  md:pt-6 pl-6  min-h-full w-full md:w-1/2 gap-4 bg-[#F1EDFA] ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={` text-xl md:text-3xl text-[#0C2D40] font-bold md:mb-6 ${isArabic ? 'font-arabic pr-10' : 'font-title'}`}>{t('alertsAndRemindersSection.title')}</h1>
          <div className={`flex ${isArabic ? 'justify-start' : 'justify-end'}`}>
            <Image
              src={'/images/mescours.png'}
              width={550}
              height={550}
              alt={t('alertsAndRemindersSection.imageAlt')}
              className='rounded-xl'
            />
          </div>
        </div>
        <div className={`w-full md:w-1/2 flex flex-col p-2 text-gray-800 space-y-4 max-md:text-center ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${isArabic ? "font-arabic" : "font-title"} from-purple-700 to-blue-500`}>
            {t('archipelHistorySection.titlePart1')} <br />
            {t('archipelHistorySection.titlePart2')}
          </h2>
          <p className="text-md text-gray-500 leading-relaxed">
            {t('archipelHistorySection.description1')}
          </p>
          <p className="text-md text-gray-500 leading-relaxed">
            {t('archipelHistorySection.description2')}
          </p>
          <button className={`mt-2 max-md:self-center px-4 py-2 bg-[#5d4089] hover:bg-purple-800 text-white text-sm rounded-lg w-fit ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('archipelHistorySection.buttonText')}
          </button>
        </div>
      </section>

      {/* Section: Calendar of workshops */}
      <section className={` mb-8   mx-auto p-4  gap-4 flex flex-col-reverse md:flex-row ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        <div className={`w-full md:w-1/2 flex flex-col p-2 text-gray-800 space-y-4 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl max-md:text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 ${isArabic ? 'font-arabic' : 'font-title'}`}> 
            {t('archipelHistorySection.titlePart1')} <br />
            {t('archipelHistorySection.titlePart2')}
          </h2>
          <p className="text-md text-gray-500 leading-relaxed max-md:text-center">
            {t('archipelHistorySection.description1')}
          </p>
          <p className="text-md text-gray-500 leading-relaxed max-md:text-center">
            {t('archipelHistorySection.description2')}
          </p>
          <button className={`mt-2 max-md:self-center px-4 py-2 bg-[#5d4089] hover:bg-purple-800 text-white text-sm rounded-lg w-fit ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('archipelHistorySection.buttonText')}
          </button>
        </div>
        <div className={`rounded-3xl border-2 overflow-hidden border-[#ddd5f2] pt-2  md:pt-6 pl-6 min-h-full w-full md:w-1/2 gap-4 bg-[#F1EDFA]  ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-xl md:text-3xl font-bold text-[#0C2D40] md:mb-6 ${isArabic ? 'font-arabic pr-10' : 'font-title'}`}>{t('workshopCalendarSection.title')}</h1>
          <div className={`flex  ${isArabic ? 'justify-start' : 'justify-end'}`}>
            <Image
              src={'/images/Calendrier.png'}
              width={550}
              height={550}
              alt={t('workshopCalendarSection.imageAlt')}
              className='rounded-xl'
            />
          </div>
        </div>
      </section>

      {/* Section: Upcoming Live Courses */}
      <section className={`  mx-auto p-4 mt-6 gap-4 flex flex-col md:flex-row mb-8 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
        <div className={`rounded-3xl border-2 border-[#ddd5f2] pt-2  md:pt-6 pl-6 overflow-hidden min-h-full w-full md:w-1/2 gap-4 bg-[#F1EDFA]  ${isArabic ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-xl md:text-3xl font-bold text-[#0C2D40] md:mb-6 ${isArabic ? 'font-arabic pr-10' : 'font-title'}`}>{t('upcomingCoursesSection.title')}</h1>
          <div className={`flex ${isArabic ? 'justify-start' : 'justify-end'}`}>
            <Image
              src={'/images/avenir.png'}
              width={550}
              height={550}
              alt={t('upcomingCoursesSection.imageAlt')}
              className='rounded-xl'
            />
          </div>
        </div>
        <div className={`w-full md:w-1/2 flex flex-col p-2 text-gray-800 space-y-4 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl max-md:text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 ${isArabic ? 'font-arabic' : 'font-title'}`}> 
            {t('archipelHistorySection.titlePart1')} <br />
            {t('archipelHistorySection.titlePart2')}
          </h2>
          <p className="text-md text-gray-500 max-md:text-center leading-relaxed">
            {t('archipelHistorySection.description1')}
          </p>
          <p className="text-md text-gray-500 max-md:text-center leading-relaxed">
            {t('archipelHistorySection.description2')}
          </p>
          <button className={`mt-2 max-md:self-center px-4 py-2 bg-[#5d4089] hover:bg-purple-800 text-white text-sm rounded-lg w-fit ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('archipelHistorySection.buttonText')}
          </button>
        </div>
      </section>

      {/* Reused sections */}
      <GridSection />
      <Testimonials />
      <VideoTestimonialCarousel />
      <PartnersSection />
      <Courses />
      <HomeContact />
      <NosCentres />
    </div>
  );
};

export default Page;