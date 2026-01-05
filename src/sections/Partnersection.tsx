"use client";
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl'; // Import useTranslations

const partners = [
  { name: 'Stripe', logo: '/partners/Stripe.png' },
  { name: 'Payoneer', logo: '/partners/payoneer.png' },
  { name: 'Visa', logo: '/partners/Visa&mastercard.png' },
  { name: 'Cash App', logo: '/partners/cashapp.png' },
  { name: 'Bitcoin', logo: '/partners/Bitcoin.png' },
  { name: 'Bitpay', logo: '/partners/bitpay.png' },
  { name: 'Gumroad', logo: '/partners/Gumroad.png' },
];

// Duplicate partners array to create a seamless marquee effect
// We only need to do this once, outside the component, or inside with useMemo if dynamic
const allPartnersForMarquee = [...partners, ...partners];

const PartnersSection: React.FC = () => {
  const t = useTranslations('partnersSection'); // Scope translations for this section
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section className="pt-16 overflow-hidden">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 ${isArabic ? 'font-arabic' : 'font-title'}`}>
          {t('title')} {/* Use translation for the title */}
        </h2>

        {/* Partners Logos Container for Animation */}
        <div className="relative w-full overflow-hidden">
          {/* Apply animation to this inner div */}
          <div className="flex animate-marquee whitespace-nowrap gap-x-8">
            {allPartnersForMarquee.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="transition-opacity duration-300 rounded-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                    // Fallback text is also translatable if desired, but keeping it simple here.
                    (e.target as HTMLImageElement).src = `https://placehold.co/120x40/CCCCCC/000000?text=${partner.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Adjusted to -50% because we duplicated the array.
                                           -100% would scroll past the entire duplicated set.
                                           -50% means it scrolls exactly one original set length. */
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration for speed */
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;