"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

// Define a static configuration array for features, including emoji paths
const featuresConfig = [
    { id: 'training', emoji: "/icons/pencil.png" },
    { id: 'parentalInvolvement', emoji: "/icons/family.png" },
    { id: 'fulfillment', emoji: "/icons/plant.png" },
    { id: 'schoolRhythm', emoji: "/icons/calender.png" },
    { id: 'gamified', emoji: "/icons/medal.png" },
    { id: 'replays', emoji: "/icons/movie.png" },
    { id: 'fullProgram', emoji: "/icons/books.png" }
];

const Online = () => {
    const t = useTranslations('onlineSection');
    const locale = useLocale();
    const isArabic = locale === 'ar';

    return(
        <section className={`relative md:pt-20 px-4 md:px-16  mt-8 mb-8  z-20 lg:h-[100vh] lg:sticky md:top-5 ${isArabic ? 'text-right' : 'text-left'}`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            {/* Smooth vertical path between cards */}
            <Image
                src={"/images/steering.svg"}
                alt="steering"
                width={160}
                height={160}
                className={`max-md:hidden absolute top-20 z-0 ${isArabic ? 'right-5/12' : 'left-5/12'}`}
            />
            <Image
                src={"/images/pool-ring.svg"}
                alt="pool-ring"
                width={118}
                height={118}
                className={` h-[70px] md:h-[118px] md:w-[118px] absolute -top-8 md:top-2 z-0 ${isArabic ? '' : '-right-6 md:right-26'}`}
            />


        

            <div
                className=' bg-[#f9f7fd] grid grid-cols-1 md:grid-cols-5 gap-2   mx-auto border-gray-300 border-2 rounded-2xl py-6 px-4 md:px-16'>
                {/* Info div*/}
                <div className={`col-span-1 flex flex-col justify-evenly max-md:mt-2 ${isArabic ? ' md:col-span-3' : 'md:col-span-3'}`}>
                    <h1 className={`text-[40px] xl:text-5xl text-[#18181B] font-bold mb-2  md:mt-8 ${isArabic ? '!font-arabic' : 'font-title'}`}>{t('title')}</h1>
                    <p className="text-[#94A3B8] mb-6 md:mb-2 text-base md:text-lg lg:text-xl">{t('description')}</p>
                    <button
                        className={`bg-[#5D4089] hover:bg-[#7B5AA6] text-[#F1EDFA] font-medium px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base w-fit mb-4 ${isArabic ? 'ml-auto' : 'mr-auto'}`}
                    >
                        {t('button')}
                    </button>
                </div>

                {featuresConfig.map((featureConf) => (
                    <div key={featureConf.id}
                        className="flex flex-col justify-evenly gap-4  border-4 border-[#F1EDFA] rounded-[20px] p-4 md:p-6">
                        <Image
                            src={featureConf.emoji}
                            alt={t(`features.${featureConf.id}.title`)}
                            width={40}
                            height={40}
                            className="object-cover aspect-square"
                        />
                        <h1 className={`font-bold text-[28px] mb-2  text-[#334155] break-words leading-tight ${isArabic ? '!font-arabic' : 'font-title'}`}>{t(`features.${featureConf.id}.title`)}</h1>
                        <p className="text-gray-600 text-sm md:text-base">{t(`features.${featureConf.id}.description`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Online;