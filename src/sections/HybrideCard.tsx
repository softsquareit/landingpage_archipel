"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl"; // Import useTranslations and useLocale

// Define a static configuration array for hybrid features, including icon paths and unique IDs
const hybrideFeaturesConfig = [
  { id: 'optimalBalance', icon: "/icons/balance.png" },
  { id: 'doubleBenefit', icon: "/icons/replay.png" },
  { id: 'resourceAccess', icon: "/icons/web.png" },
  { id: 'hybridWorkshops', icon: "/icons/handshake.png" },
  { id: 'supervision', icon: "/icons/curve.png" },
  { id: 'flexibleCurriculum', icon: "/icons/notebook.png" },
];

const HybrideCard = () => {
  const t = useTranslations('hybrideSection'); // Scope translations to 'hybrideSection'
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return(
    <section className={`md:pt-20 px-4 md:px-16 mt-4 md:mt-8 mb-8 z-30 lg:h-[100vh] lg:sticky md:top-5 ${isArabic ? 'text-right' : 'text-left'}`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>

    <div className="relative text-gray-800   mx-auto min-h-[750px] bg-[#f9f7fd] border-gray-300 border-2 rounded-2xl py-6 px-4 md:px-16 shadow-sm">
                                <Image 
                        src={"/images/steering-onsite.svg"}
                        alt="steering"
                        width={311}
                        height={311}
                        className={`max-md:hidden absolute bottom-0  z-0 ${isArabic ? 'right-2/12' : 'left-2/12'}`}
                        />
    <div className={`flex flex-col gap-10 my-6 ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Left Column */}
        <div className={`flex-1 md:w-2/6 md:max-w-2/6 justify-center md:pt-24 relative z-10 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h2 className={`text-[40px] xl:text-5xl text-[#18181B] font-bold mb-2 md:mt-8 ${isArabic ? '!font-arabic' : 'font-title'}`}>
                {t('titlePart1')} <br/>{t('titlePart2')}
            </h2>
            <p className="text-[#94A3B8] mb-6 md:mb-2 text-base md:text-lg lg:text-xl">
                {t('descriptionPart1')}
            </p>
            <p className="text-[#94A3B8] mb-6 text-base md:text-lg lg:text-xl">
                {t('descriptionPart2')}
            </p>
            <button
                className={`bg-[#5D4089] hover:bg-[#7B5AA6] text-[#F1EDFA] font-medium px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base w-fit mb-4 relative z-20 ${isArabic ? 'ml-auto' : 'mr-auto'}`}>
                {t('button')}
            </button>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-wrap gap-4">
            {hybrideFeaturesConfig.map((featureConf) => ( // Map over the local config for hybrid features
                <div
                    key={featureConf.id} // Use the unique ID as the key
                    className={`flex flex-col justify-evenly gap-4 border-4 border-[#F1EDFA] rounded-[20px] p-4 md:p-6 shadow-sm w-full md:w-[47%] lg:w-[30%] ${isArabic ? 'text-right' : 'text-left'}`}
                >
                    <div className={`${isArabic ? 'flex justify-end' : 'flex justify-start'}`}>
                        <Image
                            src={featureConf.icon} // Icon path from local config
                            alt={t(`features.${featureConf.id}.title`)} // Alt text from translation
                            width={40}
                            height={40}
                            className="object-cover aspect-square"
                        />
                    </div>
                    <h3 className={`font-bold text-[28px] mb-2 text-[#334155] break-words leading-tight ${isArabic ? '!font-arabic' : 'font-title'}`}>
                        {t(`features.${featureConf.id}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{t(`features.${featureConf.id}.desc`)}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  </section>
  )
}

export default HybrideCard