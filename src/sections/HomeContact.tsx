"use client";
import React from 'react';
import PhoneInputDiv from '../components/PhoneInputDiv';
import { useTranslations, useLocale } from 'next-intl'; // Import useTranslations and useLocale

const HomeContact: React.FC = () => {
  const t = useTranslations('homeContactSection'); // Scope translations for this section
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className="  w-full mt-8 mx-auto flex items-center justify-center px-2 sm:p-4 lg:p-8">
      {/* Outer div with gradient "border" */}
      <div className="rounded-2xl p-[2px] bg-gradient-to-r from-purple-100 to-transparent w-full max-w-full">
        {/* Inner container */}
        <div className={`bg-[#f9fafb] rounded-2xl flex flex-col overflow-hidden ${isArabic ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Left Section */}
          <div className={`lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
            <span className={`text-[#9b7dd1] bg-[#f1edfa] rounded-2xl p-2 w-fit font-semibold mb-2 text-lg ${isArabic ? 'self-center lg:self-end' : 'self-center lg:self-start'}`}>
              {t('tag')} {/* Translated tag */}
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6 ${isArabic ? '!font-arabic' : 'font-title'}`}>
              {t('title')} {/* Translated title */}
            </h2>
            <p className="text-gray-700 font-semibold  max-sm:text-base lg:text-xl mb-2 md:mb-4">
              {t('description')} {/* Translated description */}
            </p>
            <div className={`flex flex-col gap-4 mb-8 ${isArabic ? 'items-center lg:items-end' : 'items-center lg:items-start'}`}>
              <a
                href="tel:+21622082410"
                className={`bg-purple-200 text-purple-800 px-6 py-3 rounded-xl font-semibold hover:bg-purple-300 transition duration-300 flex items-center justify-center ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <svg className={`w-5 h-5 ${isArabic ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                {t('callButton')} {/* Translated call button text */}
              </a>

              <a
                href="mailto:contact@archipelmix.com"
                className="text-[#94a3b8] font-semibold text-xl hover:underline transition duration-300"
              >
                contact@archipelmix.com 
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
        
        <div className='lg:w-1/2 h-full flex flex-col items-end justify-center px-2'>
            <div className={`p-3 sm:p-4 lg:p-8 bg-[#F1EDFA] mx-auto rounded-2xl m-2 sm:m-4 flex flex-col justify-center h-full w-full ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className={`max-md:text-left text-2xl sm:text-2xl lg:text-5xl font-bold text-gray-900 mb-2  ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left font-title'}`}>
              {t('formTitle')} {/* Translated form title */}
            </h3>
            <p className={`max-md:text-left text-gray-800 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base lg:text-lg ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              {t('formDescription')} {/* Translated form description */}
            </p>
            <form className="space-y-2 w-full">
              <div>
                <input
                  type="text"
                  placeholder={t('namePlaceholder')} 
                  className={`w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ${isArabic ? 'text-right' : 'text-left'}`}
                />
              </div>
              <div>
                <div className="relative">
                  <span className={`absolute top-1/2 transform -translate-y-1/2 text-gray-500 ${isArabic ? 'right-3' : 'left-3'}`}>
                    🇹🇳 {/* Flag emoji remains static */}
                  </span>
                  <PhoneInputDiv/>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#5d4089] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7b5aa6] cursor-pointer transition duration-300 shadow-md"
              >
                {t('submitButton')} {/* Translated submit button */}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;