// components/GridSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl'; // Import useTranslations and useLocale

const GridSection = () => {
  const t = useTranslations('gridSection'); // Scope translations to 'gridSection'
  const locale = useLocale();
  const isArabic = locale === 'ar';




  return (
    <section className="  mx-auto py-10 mb-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

          {/* Video Box */}
          <div className="relative rounded-3xl overflow-hidden w-full h-[300px] md:h-[500px]">
            <Image
              src="/images/video_thumb.png"
              alt={t('videoText')} 
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5D4089]/30 flex items-center justify-center flex-col text-white">
              <div className={`animated-bg text-white rounded-full p-4`}>
                <a href="https://www.youtube.com/@ArchipelMix">
                <Play className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-stroke`} />
                </a>
              </div>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-center px-4">{t('videoText')}</p>
            </div>
          </div>

          {/* Right Column with inner grid: Stats + Boy */}
          <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[500px]">

            {/* Stats Column */}
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="bg-[#ffdca9] rounded-3xl p-4 md:p-6 h-1/2 flex flex-col justify-evenly">
                <div className={`flex items-center mb-2 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                  <Image
                    src="/people/teacher.jpg"
                    alt={t('teachersDescription')}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white object-cover aspect-square w-8 h-8 md:w-12 md:h-12"
                  />
                  <Image
                    src="/people/teacher.jpg"
                    alt={t('teachersDescription')} 
                    width={40}
                    height={40}
                    className={`rounded-full border-2 border-white object-cover aspect-square w-8 h-8 md:w-12 md:h-12 ${isArabic ? '-mr-2' : '-ml-2'}`}
                  />
                  <Image
                    src="/people/teacher.jpg"
                    alt={t('teachersDescription')} 
                    width={40}
                    height={40}
                    className={`rounded-full border-2 border-white object-cover aspect-square w-8 h-8 md:w-12 md:h-12 ${isArabic ? '-mr-2' : '-ml-2'}`}
                  />
                </div>
                <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
                  <p className="text-lg md:text-2xl lg:text-3xl xl:text-[38px] font-bold text-gray-900">{t('teachersCount')}</p>
                  <p className="text-xs md:text-sm lg:text-base xl:text-xl text-gray-800">{t('teachersDescription')}</p>
                </div>
              </div>

              <div className={`bg-[#abe8f6] rounded-3xl p-4 md:p-6 h-1/2 flex flex-col justify-evenly ${isArabic ? 'text-right' : 'text-left'}`}>
                <p className="text-lg md:text-2xl lg:text-3xl xl:text-[38px] font-bold text-gray-900">{t('studentsCount')}</p>
                <p className="text-xs md:text-sm lg:text-base xl:text-xl text-gray-800 mb-2">{t('studentsDescription')}</p>
                <p className="text-lg md:text-2xl lg:text-3xl xl:text-[38px] font-bold text-gray-900">{t('sessionsCount')}</p>
                <p className="text-xs md:text-sm lg:text-base xl:text-xl text-gray-800">{t('sessionsDescription')}</p>
              </div>
            </div>

            {/* Boy with flower Column */}
            <div className="rounded-3xl overflow-hidden h-full">
              <Image
                src="/images/boywithflower.png"
                alt={t('boyWithFlowerAlt')} 
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
  )
}

export default GridSection;