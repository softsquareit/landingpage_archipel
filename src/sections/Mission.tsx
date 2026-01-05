// components/Mission.tsx
'use client';

import { useLocale, useTranslations } from 'next-intl';

const Mission = () => {
    const t = useTranslations('mission');
    const locale = useLocale();
    const isArabic = locale === 'ar';

    return (
       <section className="py-8 md:py-16 px-4 md:mt-6 md:mb-6  ">
               <div className="max-w-2xl mx-auto text-center max-md:p-10 max-md:bg-[#F1F5F9]">
                   <h2 className={`text-4xl md:text-4xl lg:text-4xl font-bold text-[#18181B] mb-4 md:mb-6  ${isArabic ? '!font-arabic' : 'font-title'}`}>
                       {t('title')}
                   </h2>
                   <p className={`text-base md:text-xl leading-relaxed font-bold text-gray-700 ${isArabic ? '!font-arabic' : 'font-title'}`}>
                       {t('descriptionPart1')}
                       <span className="text-purple-600 underline">{t('descriptionPart2')}</span>
                       {t('descriptionPart3')}
                       <span className="text-orange-500 font-semibold">{t('descriptionPart4')}</span>
                       {t('descriptionPart5')}
                       <span className="text-cyan-600 underline">{t('descriptionPart6')}</span>
                       {t('descriptionPart7')}
                       <span className="text-purple-500 font-semibold">{t('descriptionPart8')}</span>
                   </p>
               </div>
        </section>
    );
}

export default Mission;