"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl'; // Import useTranslations

// TestimonialImage Component - Now a standalone "card"
interface TestimonialImageProps {
  image: string;
  imageAlt: string; // Add imageAlt prop for translation
}

const TestimonialImage: React.FC<TestimonialImageProps> = ({ image, imageAlt }) => (
  <div className={`flex-shrink-0 w-[18rem] h-[28rem] snap-center z-10 rounded-3xl shadow-lg transform animate-float relative flex flex-col items-center justify-center -rotate-6 m-6 `}>
    <Image
      src={image}
      alt={imageAlt} // Use the translated alt text
      width={200}
      height={400}
      className="rounded-xl object-cover w-full h-full "
    />
  </div>
);

// Define a static configuration array for testimonial details (like image paths, background colors, and IDs)
// This array will remain in the component, while text content comes from translations.
const testimonialsConfig = [
  {
    id: 1,
    image: "/people/nabiha.png",
        bgDeco : "1",
    bgColor: "bg-[#d2f4fb]",
    rating: 5 // Rating remains static per testimonial for now
  },
  {
    id: 2,
    image: "/people/ameni.png",
    bgDeco : "2",
    bgColor: "bg-[#fff0d5]",
    rating: 5
  },
  // Add more testimonials config here
];

const Testimonials: React.FC = () => {
  const t = useTranslations('testimonialsSection'); // Scope translations
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Retrieve testimonials data from translations
  // Use t.raw() to get the whole object of testimonials from the JSON
  const translatedTestimonials = t.raw('testimonials') as Record<string, { name: string; role: string; text: string; imageAlt: string; }>;


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-orange-400 fill-orange-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      // Re-evaluate these widths based on your actual CSS and desired snap points
      const testimonialCardWidth = 384; // md:w-96
      const imageCardWidth = 288; // w-[18rem] = 288px
      const totalItemWidthWithGap = testimonialCardWidth + imageCardWidth + (8 * 4); // Testimonial card + its margin + image card + its margin (space-x-8 means 32px between items)

      // Calculate new index based on scroll position
      const newIndex = Math.round(scrollLeft / totalItemWidthWithGap);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTestimonial = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const testimonialCardWidth = 384; // md:w-96
      const imageCardWidth = 288; // w-[18rem] = 288px
      const gap = 32; // space-x-8

      // Calculate the scroll position for the start of the testimonial-image pair
      const scrollPosition = index * (testimonialCardWidth + imageCardWidth + gap); // Adjusted for gap logic, assuming it's between pairs
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative md:py-32 overflow-hidden ">
      {/* Decorative elements (no change needed here as they are static JSX) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mt-20">


        <div className="absolute top-16 left-4 md:top-36 md:left-48 w-26 h-26 ">
          <img src="/backgrounds/boat.png" alt="boat" />
        </div>

      </div>

      <div className="relative w-full">
        {/* Header */}
        <div className="text-center mb-16 relative px-4">
          <div className="flex justify-center mb-6">
            <Image src="/images/starfish.png" alt={t('starfishAlt')} width={100} height={100} />
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4  ${isArabic ? '!font-arabic' : 'font-title'}`}>
            {t('title')}
          </h2>
        </div>

        {/* Main carousel container */}
        <div className="relative hide-scrollbar overflow-visible">
          {/* Background vector */}
          

          {/* Testimonial display */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            <Image
            src="/images/vector.png"
            alt="blue vector"
fill
            className={`absolute top-[20%] md:top-[50%] left-0  max-md:h-[400px] max-md:min-w-[800px]  max-md:-right- md:w-fit  `} />
            {testimonialsConfig.map((testimonialConf) => {
              const translatedTestimonial = translatedTestimonials[testimonialConf.id];
              if (!translatedTestimonial) return null; // Handle missing translations gracefully

              return (
                <React.Fragment key={testimonialConf.id}>
                  {/* Testimonial Text Card */}
                  <div
                    className={`${testimonialConf.bgColor} relative flex-shrink-0 w-[290px] md:w-96 h-[269px] md:h-fit snap-center -rotate-[5deg] md:rotate-6 m-6 md:m-12 animate-float rounded-2xl md:rounded-3xl z-0 overflow-hidden`}
                  >
                    <img src={`../backgrounds/testimonial-card-bg-${testimonialConf.bgDeco}.png`} alt="bg deco" className={`absolute z-10 ${testimonialConf.bgDeco === "1" ? "" : "bottom-0 right-0 "}`} />
                    <div
                      className={`p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 relative h-full flex flex-col gap-5 md:gap-4 justify-between z-20`}
                    >
                      <div className=" z-20">
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed z-20">
                          {translatedTestimonial.text}
                        </p>
                      </div>
                        <div className="space-y-2 z-20">
                          <div className='flex flex-row justify-between' >

                          <div className="flex flex-col items-start justify-end gap-0 z-20">
                          <h4 className="font-bold text-gray-800 text-base md:text-lg z-20">{translatedTestimonial.name}</h4>
                            <div className="flex space-x-1 z-20">
                              {renderStars(testimonialConf.rating)}
                            </div>
                          </div>
                          <div className="inline-block text-[18px] font-semibold px-3 py-1 rounded-full z-20">
                            {translatedTestimonial.role}
                          </div>
                          </div>

                        </div>
                    </div>
                  </div>

                  {/* Testimonial Image Card */}
                  <TestimonialImage
                    image={testimonialConf.image}
                    imageAlt={translatedTestimonial.imageAlt} // Pass translated alt text
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center space-x-3 mt-12 px-4">
          {testimonialsConfig.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
                index === activeIndex
                  ? 'bg-purple-500 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              // Use t() for aria-label with interpolation
              aria-label={t('dotButtonLabel', { index: index + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;