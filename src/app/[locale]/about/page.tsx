'use client';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpLeft , ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'; // Import ScrollTrigger if needed
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
// --- Interfaces for type safety ---
interface MissionCardProps {
  id: string; // Unique ID for translation lookup
  icon: string; // Path to icon image
}

interface ValueCardProps {
  id: string; // Unique ID for translation lookup
  bgColor: string;
  textColor: string;
  labelBgColor: string;
  labelTextColor: string;
  labelPositioning: string; // Optional for flexibility
  rotation: string;
  positioning: string;
  cursorPositioning: string;

}

interface Teacher {
  id: string; // Changed to string for consistency with translation keys
  image: string; // URL for the teacher's image
}

interface HistoryConfig {
  id: string; // Unique ID for translation lookup
  bgcolor: string;
  img: string; // This is the year-specific background image
}

// --- Data Configurations (now only include IDs and non-translatable properties) ---
const teachersConfig: Teacher[] = [
  { id: 'mehdi_zribi', image: '/people/teacher.jpg' },
  { id: 'nada_ben_salah', image: '/people/nabiha.png' },
  { id: 'yassine_khemiri', image: '/people/ameni.png' },
  { id: 'ala_gharbi', image: '/people/teacher.jpg' },
];

const valueCardsConfig: Omit<ValueCardProps, 'description' | 'label'>[] = [
  {
    id: 'innovation',
    bgColor: 'bg-[#ff9379]',
    textColor: 'text-white',
    labelBgColor: 'bg-[#98daff]',
    labelTextColor: 'text-black',
    rotation: '-rotate-6',
    positioning: 'lg:col-start-1 lg:row-start-1 lg:justify-self-start lg:self-start lg:mt-12',
    cursorPositioning: '-right-8 -top-8',
    labelPositioning: 'bottom-4 -left-8',
  },
  {
    id: 'trust',
    bgColor: 'bg-[#eaaeff]',
    textColor: 'text-white',
    labelBgColor: 'bg-[#ffdca9]',
    labelTextColor: 'text-black',
    rotation: 'rotate-3',
    positioning: 'lg:col-start-3 lg:row-start-1 lg:justify-self-end lg:self-end lg:mt-4',
    cursorPositioning: '-right-8 -top-8',
    labelPositioning: 'bottom-4 -left-8',
  },
  {
    id: 'empathy',
    bgColor: 'bg-[#ffdca9]',
    textColor: 'text-gray-800',
    labelBgColor: 'bg-[#eaaeff]',
    labelTextColor: 'text-black',
    rotation: 'rotate-4',
    positioning: 'lg:col-start-2 lg:row-start-2 lg:justify-self-center lg:self-start lg:-ml-8 lg:-mt-20',
    cursorPositioning: '-left-8 -top-8 rotate-300',
    labelPositioning: '-bottom-2 -right-8',
  },
  {
    id: 'honesty',
    bgColor: 'bg-[#98daff]',
    textColor: 'text-white',
    labelBgColor: 'bg-[#ff9379]',
    labelTextColor: 'text-black',
    rotation: '-rotate-5',
    positioning: 'lg:col-start-4 lg:row-start-1 lg:justify-self-end lg:row-span-2 lg:self-center lg:mx-6 lg:mt-16',
    cursorPositioning: '-right-8 -top-8',
    labelPositioning: 'bottom-4 -left-8',
  },
  {
    id: 'transparency',
    bgColor: 'bg-[#c3bbf9]',
    textColor: 'text-gray-800',
    labelBgColor: 'bg-[#98daff]',
    labelTextColor: 'text-black',
    rotation: 'rotate-4',
    positioning: 'lg:col-start-4 lg:row-start-2 lg:col-span-2 lg:justify-self-end lg:self-start lg:mr-12 lg:mb-12',
    cursorPositioning: '-left-8 -top-8 rotate-300',
    labelPositioning: 'bottom-4 -right-8',
  },
];

const missionCardsConfig: Omit<MissionCardProps, 'title' | 'description'>[] = [
  { id: 'structured-courses', icon: '/icons/notebook.png' },
  { id: 'updated-content', icon: '/icons/books.png' },
  { id: 'qualified-teachers', icon: '/icons/notebook.png' },
  { id: 'personalized-followup', icon: '/icons/curve.png' },
  { id: 'skill-workshops', icon: '/icons/brain.png' },
  { id: 'digital-platform', icon: '/icons/laptop.png' },
];

const HistoryarrayConfig: HistoryConfig[] = [
  { id: '2016', bgcolor: "bg-[#fff0d5]", img: "/icons/2016.png" },
  { id: '2021', bgcolor: "bg-[#d2f4fb]", img: "/icons/2021.png" },
  { id: '2023', bgcolor: "bg-[#f1f5f9]", img: "/icons/2023.png" },
  { id: '2024', bgcolor: "bg-[#d8ffea]", img: "/icons/2024.png" },
  { id: '2025', bgcolor: "bg-[#fdf0d7]", img: "/icons/2025.png" }
];

// --- ValueCard Component (now uses translations) ---
const ValueCard: React.FC<Omit<ValueCardProps, 'description' | 'label' | 'id'> & { t: ReturnType<typeof useTranslations>, cardId: string }> = ({
  cardId,
  bgColor,
  textColor,
  labelBgColor,
  labelTextColor,
  rotation,
  positioning,
  t,
  cursorPositioning,
  labelPositioning
}) => {
  // Generate a random animation delay for each card instance (between 0 and 2s)
  const [animationDelay] = React.useState(() => `${Math.random() * 2}s`);
  return (
    <div className={`relative ${positioning}`}>
      {/* Main sticky note */}
      <div
        className={`
          ${bgColor}
          ${textColor}
          ${rotation}
          w-[216px] h-[216px]
          p-6
          shadow-lg
          relative
          font-sans
          animate-float
        `}
        style={{ animationDelay }}
      >
        {/* Text content */}
        <div className="text-[#222222] leading-relaxed font-medium text-[16px]">
          {t(`valuesSection.cards.${cardId}.description`)}
        </div>
      </div>

      {/* Label tag with custom pointer */}
      <div className={`absolute ${labelPositioning} transform rotate-3 bg-white p-1 `}>
        <div className={`${labelBgColor} px-6  py-1 shadow-md  border-opacity-30 border-gray-900 border-3 relative m-[2px] `}>
          {/* Custom SVG pointer */}
          <div className={`${cursorPositioning} absolute m-2 w-6 h-6 pointer-events-none z-50`}>
            <Image
              src="/images/pointer.svg"
              alt="pointer"
              width={24}
              height={24}
              className="w-full h-full object-contain "
              style={{
                
                filter: `hue-rotate(${cardId === 'innovation' ? '0deg' :
                  cardId === 'trust' ? '200deg' :
                    cardId === 'empathy' ? '120deg' :
                      cardId === 'honesty' ? '140deg' :
                        '0deg'})`
              }}
              
            />
          </div>
          <span className={`${labelTextColor} text-md font-medium  `}>{t(`valuesSection.cards.${cardId}.label`)}</span>
        </div>
      </div>
    </div>
  );
};

// --- HistoryCard Component (modified for overlay) ---
const HistoryCard: React.FC<{ index: number; historyConfig: HistoryConfig; t: ReturnType<typeof useTranslations> }> = ({ index, historyConfig, t }) => {
  const zIndexValue = (HistoryarrayConfig.length - index) * 10;
  // Use deterministic rotation based on index to avoid hydration mismatch
  const rotationDegrees = (index * 3.7) - 5; // Deterministic value based on index

  return (
    <motion.div
      className={`flex w-full md:w-[30rem] p-4 rounded-xl flex-col justify-center items-center gap-5 shadow-lg  
                   ${historyConfig.bgcolor}
                   ${index === 0 ? 'mt-0' : 'mt-8 md:mt-16'} `}
      style={{
        zIndex: zIndexValue,
        transform: `rotate(${rotationDegrees}deg)`,
      }}
    >
      {/* History Year Image in Top Right Corner */}


      <h1 className='text-black text-3xl font-semibold mb-2'>{t(`historySection.historyItems.${historyConfig.id}.title`)}</h1>
      <p className='text-gray-600 text-base leading-relaxed'>{t(`historySection.historyItems.${historyConfig.id}.description`)}</p>

      {/* Image Container for Group Overlay */}
      <div className='relative w-full rounded-2xl overflow-x-clip'>
        {/* Overlay Image (group.png) */}
        <Image
          src={historyConfig.img}
          alt={t(`historySection.historyItems.${historyConfig.id}.title`)}
          width={150}
          height={150}
          className="absolute -top-18 -right-4 rounded-lg rotate-60 object-cover z-0 opacity-80"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = 'https://placehold.co/80x80/FFFFFF/676DBD?text=Err';
          }}
        />
        <Image
          src="/people/group.png"
          alt="Group Icon"
          width={400}
          height={200}
          className="relative z-10 object-contain w-full h-full rounded-2xl"
        />
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
const Page = () => {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations('aboutPage'); // Scope translations for this page
  const locale = useLocale();
  const isArabic = locale === 'ar';
  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      gsap.fromTo('.history-card:not(:first-child)',{y:700,},{y:0,
        stagger : 3,
        scrollTrigger:{

          pin:container.current,
          scrub:true,
                      end: "+=1500", 
        }
      })
    })
    return () => ctx.revert()
  },[])
  return (
    <>
      {/* Hero section */}
      <section className="relative mx-4 md:mx-auto mt-4 sm:p-8 rounded-2xl overflow-hidden text-center">
        {/* Background image layer with controlled opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-2xl z-20"
          style={{ 
            backgroundImage: 'url("/backgrounds/hero-map.jpg")',
            opacity: 0.3, // Only the background image opacity
            filter: 'saturate(0.2) hue-rotate(0deg) brightness(1.0)' // Lowest saturation, no tint
          }}
        ></div>
        
        {/* Dark overlay layer (separate from background image) */}
        <div className="absolute inset-0 bg-[#4a3370] z-10 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center gap-5 text-white px-4 py-8 md:py-12">
          <h1 className={`max-md:text-4xl md:text-[56px] font-bold ${isArabic ? 'font-arabic' : 'font-title'}`}>{t('heroSection.title')}</h1>
          <p className=" text-[14px] md:text-base max-w-2xl">
            {t('heroSection.description')}
          </p>
        </div>
      </section>

      {/* History section mobile*/}
      <section className="md:hidden relative flex w-full justify-center mx-auto overflow-hidden mt-8 md:snap-always md:snap-mandatory md:snap-center md:snap-y ">
        {/* Mobile Layout */}
        <div className={`flex flex-col justify-start md:hidden text-center w-full ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
          {/* Header Section */}
          <div className="p-6 flex flex-col gap-5">
            <h1 className={`text-3xl ${isArabic ? 'font-arabic' : 'font-title'} font-bold bg-gradient-to-r from-[#734EAF] to-[#44C0E2] bg-clip-text text-transparent`}>
              {t('historySection.mobileHeaderTitle')}
            </h1>
            <p className="text-base text-gray-500">
              {t('historySection.mobileHeaderDescription1')}
            </p>
            <p className="text-base text-gray-500">
              {t('historySection.mobileHeaderDescription2')}
            </p>
            <button className={`bg-[#5d4089] text-white text-base font-semibold py-3 px-6 rounded-xl hover:bg-[#5d4089] transition w-fit self-center ${isArabic ? 'md:self-end' : 'md:self-start'}`}>
              {t('historySection.buttonText')}
            </button>
          </div>
{/* 
          Mobile Cards - Regular scroll */}
          <div className="flex flex-col gap-6 p-6">
            {HistoryarrayConfig.map((historyConfig, index) => (
              <div key={historyConfig.id} className="w-full">
                <HistoryCard index={index} historyConfig={historyConfig} t={t} />
              </div>
            ))}
          </div>
        </div>

       
      </section>

      {/* History section desktop */}
      <section ref={container} className='hidden md:flex h-[100vh]  items-start justify-center relative gap-10' >
        <div className={`w-1/2 sticky top-0 mt-32 h-screen flex flex-col justify-start gap-5  z-10 pointer-events-none ${isArabic ? 'text-right' : 'text-left'}`}>
            <div className="pointer-events-auto gap-6 flex flex-col w-[60%] ">
              <h1 className={`text-3xl lg:text-[38px] font-bold bg-gradient-to-r from-[#734EAF] to-[#44C0E2] bg-clip-text text-transparent ${isArabic ? 'font-arabic' : 'font-title'}`}>
                {t('historySection.mobileHeaderTitle')}
              </h1>
              <p className="text-base lg:text-[20px] max-w-2xl text-gray-500">
                {t('historySection.mobileHeaderDescription1')}
              </p>
              <p className="text-base lg:text-[20px] max-w-2xl text-gray-500">
                {t('historySection.mobileHeaderDescription2')}
              </p>
              <button className={`bg-[#5d4089] text-white text-base font-normal py-3 px-6 rounded-xl hover:bg-[#7b5aa6] transition ${isArabic ? 'self-end' : 'self-start'}`}>
                {t('historySection.buttonText')}
              </button>
            </div>
          </div>
      <div className='relative w-[420px] h-[600px] mt-32'>
{HistoryarrayConfig.map((historyConfig, index) => (
                <div
                  key={historyConfig.id}
                  className="history-card"
                  style={{ zIndex: HistoryarrayConfig.length + index }}
                >
                    <HistoryCard index={index} historyConfig={historyConfig} t={t} />
                </div>
              ))}
      </div>
      </section>

      {/* Mission section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 font-inter ${isArabic ? 'text-right' : 'text-left'}`}>
        <div className="max-w-7xl mx-auto ">
          <h2 className={`text-5xl font-bold ${isArabic ? 'font-arabic' : 'font-title'} text-gray-900 mb-4`}>{t('missionSection.title')}</h2>
          <p className="text-xl text-gray-500 mb-12 ">
            {t('missionSection.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCardsConfig.map((card) => (
              <div key={card.id} className={`rounded-xl p-4 border-[#d2c5ed] border-2 flex flex-col ${isArabic ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4`}>
                  <Image src={card.icon} alt={t(`missionSection.cards.${card.id}.title`)} width={48} height={48} />
                </div>
                <h3 className="text-[28px] font-semibold text-gray-900 mb-2">{t(`missionSection.cards.${card.id}.title`)}</h3>
                <p className="text-[#334155] text-[20px]">{t(`missionSection.cards.${card.id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className={`mx-auto p-4 max-md:flex-col flex justify-between items-center md:h-[60vh] my-6 ${isArabic ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
        <div className={`flex flex-col gap-6 w-full md:w-2/5 justify-center mb-4 ${isArabic ? 'items-end' : 'items-start'}`}>
          <h1 className={`text-5xl font-bold ${isArabic ? 'font-arabic' : 'font-title'} text-gray-900`}>{t('visionSection.title')}</h1>
          <p className='text-gray-500 text-xl'>{t('visionSection.description')}</p>
          <button className={`bg-[#5d4089] w-fit text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#7b5aa6] transition ${isArabic ? 'self-end' : 'self-start'}`}>
            {t('visionSection.buttonText')}
          </button>
        </div>
        <div className='flex justify-center w-full md:w-3/5'>
          <Image src="/images/tropical.png" alt={t('visionSection.title')} width={400} height={200} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Values section */}
      <div className="min-h-screen max-md:min-h-[50vh] max-md:max-h-[60vh] bg-gray-100 max-md:p-0 p-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/valuesvector.png"
            alt="background"
            width={1200}
            height={400}
            className="w-full h-full object-contain max-md:object-contain "
            priority
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center relative z-10">
          <h1 className={`text-5xl max-md:text-3xl font-bold mb-12 max-md:mb-6 max-md:mt-6 text-gray-800 text-center ${isArabic ? 'font-arabic' : 'font-title'}`}>
            {t('valuesSection.title')}
          </h1>

          <div className={`overflow-x-auto overflow-y-visible py-10 max-md:py-4 scrollbar-hide max-md:p-0 p-2 w-full ${isArabic ? 'direction-rtl' : ''}`}>
            <div className="grid grid-cols-5 grid-rows-2 gap-8 max-md:gap-30 min-h-96 min-w-[1400px] max-w-6xl scroll-smooth mx-auto my-10 max-md:mx-0 max-md:ml-8">
              {valueCardsConfig.map((card) => (
                <ValueCard
                  key={card.id}
                  cardId={card.id}
                  bgColor={card.bgColor}
                  textColor={card.textColor}
                  labelBgColor={card.labelBgColor}
                  labelTextColor={card.labelTextColor}
                  rotation={card.rotation}
                  positioning={card.positioning}
                  t={t}
                  cursorPositioning={card.cursorPositioning}
                  labelPositioning={card.labelPositioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teachers section */}
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h1 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight ${isArabic ? 'font-arabic' : 'font-title'}`}>
              {t('teachersSection.mainTitlePart1')}
              <br className="hidden sm:inline" /> {t('teachersSection.mainTitlePart2')}
            </h1>
            <p className="mt-6 text-xl text-[#94a3b8] max-w-2xl mx-auto">
              {t('teachersSection.description')}
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachersConfig.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-xl overflow-hidden "
              >
                <Image
                  className="w-full h-64 object-cover object-center rounded-t-xl   "
                  src={teacher.image}
                  alt={t(`teachersSection.teachersList.${teacher.id}.name`)}
                  width={400}
                  height={256}
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x400/E0E0E0/666666?text=Image+Not+Found`;
                  }}
                />
                <div className={`p-6 ${isArabic ? 'text-right' : 'text-center'}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(`teachersSection.teachersList.${teacher.id}.name`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`teachersSection.teachersList.${teacher.id}.experience`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
        </div>
        <div className='flex justify-center items-center mt-10'>

            <button className={`bg-[#f1edfa] text-[#5d4089] text-base font-semibold py-3 px-6 flex rounded-xl hover:text-[#7b5aa6] transition mt-8 cursor-pointer ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
              {t('teachersSection.call')}
              <span className={`text-gray-700`}>
{
                isArabic ? <ArrowUpLeft className='inline-block mr-2' /> : <ArrowUpRight className='inline-block ml-2' />
}
              </span>
            </button>
        </div>
      </div>
    </>
  );
};

export default Page;