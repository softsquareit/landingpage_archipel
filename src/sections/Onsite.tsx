"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

// Define a static configuration array for courses, including icon paths and unique IDs
const coursesConfig = [
    { id: 'weeklyAssured', icon: "/icons/school.png" },
    { id: 'digitalAccess', icon: "/icons/laptop.png" },
    { id: 'videoOnDemand', icon: "/icons/movie.png" },
    { id: 'modernSkills', icon: "/icons/brain.png" },
    { id: 'ilonaMotivation', icon: "/icons/aim.png" },
    { id: 'schoolCurriculum', icon: "/icons/books.png" },
];

const Onsite = () => {
    const t = useTranslations('onsiteSection'); // Scope translations to 'onsiteSection'
    const locale = useLocale();
    const isArabic = locale === 'ar';

    // Define center IDs that correspond to your JSON keys
    const centerIds = [
      'center_lagoulette',
      'center_elmenzah',
      'center_boumhal',
      'center_bardo',
    ];

    return(
      <section className={`md:pt-20 px-4 md:px-16 md:mt-8 mb-8 z-20 lg:h-[100vh] lg:sticky md:top-5 ${isArabic ? 'text-right' : 'text-left'}`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>

      <div className="relative text-gray-800   mx-auto bg-[#f9f7fd] border-gray-300 border-2 rounded-2xl py-6 px-4 md:px-16 shadow-sm">
                        <Image 
                src={"/images/steering-onsite.svg"}
                alt="steering"
                width={311}
                height={311}
                className={`max-md:hidden absolute bottom-0 z-0 ${isArabic ? 'right-2/12' : 'left-2/12'}`}
                />
      <div className={`flex flex-col gap-10 ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
          {/* Left Column */}
          <div className={`flex-1 md:w-2/6 md:max-w-2/6 relative z-10 ${isArabic ? 'text-right' : 'text-left'}`}>
              <h2 className={`text-[40px] xl:text-5xl text-[#18181B] font-bold mb-2 md:mt-8 ${isArabic ? '!font-arabic' : 'font-title'}`}>{t('title')}</h2>
              <p className="text-[#94A3B8] mb-6 md:mb-2 text-base md:text-lg lg:text-xl">
                  {t('descriptionPart1')}
              </p>
              <p className="text-[#94A3B8] mb-6 text-base md:text-lg lg:text-xl">
                  {t('descriptionPart2')}
              </p>
              <div className="text-sm space-y-2">
                  <h4 className={`font-semibold text-base md:text-lg ${isArabic ? '!font-arabic' : 'font-title'}`}>{t('centersTitle')}</h4>
                  <ul className={`space-y-1 text-gray-700 font-bold mb-4 text-sm md:text-base ${isArabic ? 'pr-5' : 'pl-5'}`}>
                      {centerIds.map((id) => ( 
                          <li key={id}>{t(id)}</li> 
                      ))}
                  </ul>
              </div>
              <button
                  className={`bg-[#5D4089] hover:bg-[#7B5AA6] text-[#F1EDFA] font-medium px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base w-fit mb-4 ${isArabic ? 'ml-auto' : 'mr-auto'}`}>
                  {t('button')}
              </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-wrap gap-4">
              {coursesConfig.map((courseConf) => ( // Map over the local config for courses
                  <div
                      key={courseConf.id} // Use the unique ID as the key
                      className={`flex flex-col justify-evenly gap-4 border-4 border-[#F1EDFA] rounded-[20px] p-4 md:p-6 z-10 bg-[#f9f7fd] shadow-sm w-full md:w-[47%] lg:w-[30%] ${isArabic ? 'text-right' : 'text-left'}`}
                  >
                      <div className={`${isArabic ? 'flex justify-end' : 'flex justify-start'} mb-4`}>
                          <Image
                              src={courseConf.icon} // Icon path from local config
                              alt={t(`courses.${courseConf.id}.title`)} // Alt text from translation
                              width={40}
                              height={40}
                              className="object-cover aspect-square"
                          />
                      </div>
                      <h3 className={`font-bold text-[28px] mb-2 text-[#334155] break-words leading-tight ${isArabic ? '!font-arabic' : 'font-title'}`}>
                          {t(`courses.${courseConf.id}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{t(`courses.${courseConf.id}.desc`)}</p>
                  </div>
              ))}
          </div>
      </div>
      </div>
    </section>
    )
};

export default Onsite;