"use client";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl"; // Import useTranslations

// Define a static configuration array for testimonials, including image paths, colors, and IDs
const testimonialsConfig = [
  {
    id: "1", // Use string IDs for consistency with JSON keys
    image: "/people/ameni.png",
    rating: 5,
    bgColor: "bg-[#d2f4fb]",
  },
  {
    id: "2",
    image: "/people/nabiha.png",
    rating: 5,
    bgColor: "bg-[#fff0d5]",
  },
  {
    id: "3",
    image: "/people/ameni.png",
    rating: 5,
    bgColor: "bg-[#ffdca9]",
  },
  {
    id: "4",
    image: "/people/nabiha.png",
    rating: 5,
    bgColor: "bg-[#abe8f6]",
  },
];

const VideoTestimonialCarousel = () => {
  const t = useTranslations('videoTestimonialsSection'); // Scope translations
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Retrieve testimonials data from translations
  const translatedTestimonials = t.raw('testimonials') as Record<string, { name: string; role: string; imageAlt: string; }>;

  // Function to scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = 312; // Approximate width of each card (280px + margins/gaps)
      const scrollPosition = index * cardWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setActiveIndex(index);
    }
  };

  // Update activeIndex when user scrolls manually
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = 312; // Approximate width of each card (280px + margins/gaps)
        
        // Calculate which slide is most visible
        const newActiveIndex = Math.round(scrollLeft / cardWidth);
        const clampedIndex = Math.max(0, Math.min(newActiveIndex, testimonialsConfig.length - 1));
        
        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex);
        }
      }
    };

    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      // Add scroll event listener with throttling
      let timeoutId: NodeJS.Timeout;
      const throttledHandleScroll = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };

      currentCarousel.addEventListener("scroll", throttledHandleScroll);
      handleScroll(); // Initial call

      return () => {
        clearTimeout(timeoutId);
        currentCarousel.removeEventListener("scroll", throttledHandleScroll);
      };
    }
  }, [activeIndex]);

  return (
    
    <div className="md:  xl:mx-auto overflow-hidden relative pb-16">
            <Image
            src="/images/vector.png"
            alt="blue vector"
fill
            className={`absolute top-[20%] md:top-[50%] left-0  max-md:h-[400px] max-md:min-w-[800px]  max-md:-right- md:w-fit  `} />
      <div
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory"
        ref={carouselRef}
      >
        
        {testimonialsConfig.map((testimonialConf, i) => {
          const translatedTestimonial = translatedTestimonials[testimonialConf.id];
          if (!translatedTestimonial) return null; // Handle missing translations gracefully

          return (
            <div
              key={testimonialConf.id} // Use id for key
              className={`relative min-w-[280px] max-w-xs rounded-xl m-8 z-10 ${testimonialConf.bgColor} shadow-lg ${
                i % 2 === 0 ? "rotate-3" : "-rotate-3"
              } animate-float snap-center flex-shrink-0`}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl ">
                <Image
                  src={testimonialConf.image}
                  alt={translatedTestimonial.imageAlt} // Use translated alt text
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white text-black p-2 rounded-full">
                    <Play className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className=" p-4 flex flex-row justify-between items-center">
                <div>

                <h3 className={`text-base md:text-lg font-semibold ${isArabic ? '!font-arabic' : 'font-title'}`}>{translatedTestimonial.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: testimonialConf.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 w-4 h-4 fill-yellow-400"
                    />
                  ))}
                </div>
                </div>
                <p className="text-xs md:text-[18px] font-semibold text-black">{translatedTestimonial.role}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots for carousel pagination */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {testimonialsConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
              index === activeIndex
                ? 'bg-purple-600 scale-125 shadow-lg'
                : 'bg-purple-300 hover:bg-purple-400'
            }`}
            aria-label={t('dotButtonLabel', { index: index + 1 })} // Use translation for aria-label
          />
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonialCarousel;