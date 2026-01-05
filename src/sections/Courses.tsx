"use client";
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { MoveUpRight, MoveUpLeft } from 'lucide-react';

// Placeholder image for courses
const CourseImage1 = "/images/courseimage1.png";
const CourseImage2 = "/images/courseimage2.png";
const CourseImage3 = "/images/courseimage3.png";

// Static configuration for courses (IDs, image sources, flag sources)
const coursesConfig = [
  {
    id: '1',
    imageSrc: [CourseImage1,CourseImage2],
    flagSrc: 'https://flagcdn.com/w20/fr.png', // French flag
  },
  {
    id: '2',
    imageSrc: [CourseImage2,CourseImage3],
    flagSrc: 'https://flagcdn.com/w20/gb.png', // British flag
  },
  {
    id: '3',
    imageSrc: [CourseImage3,CourseImage1],
    flagSrc: 'https://flagcdn.com/w20/tn.png', // Tunisian flag, or a generic math icon
  },
  {
    id: '4',
    imageSrc: [CourseImage2,CourseImage1,],
    flagSrc: 'https://flagcdn.com/w20/jp.png', // French flag
  },
  {
    id: '5',
    imageSrc: [CourseImage3,CourseImage2,],
    flagSrc: 'https://flagcdn.com/w20/kr.png', // British flag
  },
  {
    id: '6',
    imageSrc: [CourseImage1,CourseImage3],
    flagSrc: 'https://flagcdn.com/w20/es.png', // Tunisian flag, or a generic math icon
  },
];

import { useState, useEffect } from 'react';

interface CourseCardProps {
  imageSrc: string[];
  title: string;
  description: string;
  date: string;
  flagSrc: string;
  altText: string;
  datePrefix: string;
  isArabic: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, description, date, flagSrc, altText, datePrefix, isArabic }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!imageSrc || imageSrc.length <= 1) return;
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImageIdx((prevIdx) => (prevIdx + 1) % imageSrc.length);
        setFade(true); // Start fade in
      }, 600); // Fade duration (ms)
    }, 2000);
    return () => clearInterval(interval);
  }, [imageSrc, currentImageIdx]);

  return (
    <div className={`bg-white rounded-xl hover:shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col w-full max-w-[270px] h-fit flex-shrink-0 ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className="relative w-full h-40 p-2 rounded-xl">
        <img
          src={imageSrc[currentImageIdx]}
          alt={altText}
          className={`absolute top-0 left-0 m-1 w-[97%] object-cover  rounded-lg border border-[#825ebf] transition-opacity duration-800 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 2 }}
        />
      </div>
      <div className="p-4 flex-grow justify-between">
        <div className={`flex items-center mb-2 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
          <img src={flagSrc} alt={`${title} flag`} className={`w-5 h-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          <h3 className={`text-base md:text-lg font-semibold text-gray-800 ${isArabic ? '!font-arabic' : 'font-title'}`}>{title}</h3>
        </div>
        <p className="text-gray-600 text-xs md:text-sm mb-4 flex-grow">{description}</p>
        <p className="text-purple-500 text-xs">{datePrefix} {date}</p>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const t = useTranslations('coursesSection'); // Scope translations for this section
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Get the raw testimonials object from translations
  const translatedCourses = t.raw('courses') as Record<string, { title: string; description: string; date: string; altText: string; }>;

  // Show only 3 courses at a time, rotate every 2 seconds
  const [visibleStartIdx, setVisibleStartIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setVisibleStartIdx((prevIdx) => (prevIdx + 3) % coursesConfig.length);
        setFade(true); // Start fade in
      }, 500); // Fade duration (ms)
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleCourses = coursesConfig.slice(visibleStartIdx, visibleStartIdx + 3);
  // If at the end, wrap around to show always 3
  const displayedCourses =
    visibleCourses.length < 3
      ? [...visibleCourses, ...coursesConfig.slice(0, 3 - visibleCourses.length)]
      : visibleCourses;

  return (
    <div className={`my-20 mx-auto rounded-2xl px-4 flex items-center justify-center ${isArabic ? 'font-arabic' : 'font-sans'}`}>
      <div className={`bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8 rounded-2xl   w-full flex flex-col space-y-8 ${isArabic ? 'lg:flex-row-reverse lg:space-x-reverse lg:space-x-12' : 'lg:flex-row lg:space-x-12'} lg:space-y-0`}>
        {/* Left Section */}
        <div className={`flex-shrink-0 lg:w-1/4 ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}> 
          <h2 className={`text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6 text-left ${isArabic ? '!font-arabic' : 'font-title'}`}>
            {t('mainTitle')}
          </h2>
          <button className={`bg-[#5D4089] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:cursor-pointer hover:bg-[#7B5AA6] transition duration-300 ease-in-out shadow-lg flex items-center justify-center lg:inline-flex ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
            {t('buttonText')}
            {isArabic ? (
              <MoveUpLeft className={`w-5 h-5 mr-2`} />
            ) : (
              <MoveUpRight className={`w-5 h-5 ml-2`} />
            )}
          </button>
        </div>

        {/* Right Section - Course Cards */}
        <div className="flex flex-wrap justify-center lg:justify-evenly gap-4 flex-grow w-full  overflow-hidden">
          <div className={`w-full flex flex-col max-md:items-center md:flex-row gap-4  transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {displayedCourses.map((courseConf) => {
              const courseData = translatedCourses[courseConf.id];
              if (!courseData) return null;

              return (
                <CourseCard
                  key={courseConf.id}
                  imageSrc={courseConf.imageSrc}
                  title={courseData.title}
                  description={courseData.description}
                  date={courseData.date}
                  flagSrc={courseConf.flagSrc}
                  altText={courseData.altText}
                  datePrefix={t('courseCardDatePrefix')}
                  isArabic={isArabic}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;