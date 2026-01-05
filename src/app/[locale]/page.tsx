import React from 'react'
import Hero from '../../components/Hero'
import Testimonials from '../../sections/Testimonials'
import VideoTestimonialCarousel from '../../sections/Testimonialimage'
import PartnersSection from '@/sections/Partnersection'
import Courses from '@/sections/Courses'
import Mission from '@/sections/Mission'
import HomeContact from '@/sections/HomeContact'
import Locations from '@/sections/Locations'
import Onsite from '@/sections/Onsite'
import HybrideCard from '@/sections/HybrideCard'
import Online from '@/sections/Online'
import GridSection from '@/sections/GridSection'
import Image from 'next/image'
import { useLocale } from "next-intl";
import NosCentres from '@/sections/NosCentres'






const Page = () => {
      const locale = useLocale();
      const isArabic = locale === 'ar';
  return (
    <div className={`md:pt-12 ${isArabic?'!font-arabic':''} `}>
      <Hero />

      {/* Mission */}
      <Mission />


      <GridSection />



      <div className={`relative max-lg:flex max-lg:flex-col max-md:overflow-hidden max-lg:h-fit ${isArabic ? '!font-arabic' : ''}`}>
                   <Image
               src={"/images/bluevector.png"}
               width={600}
               height={2000}
               alt="blue vector"

            className={`2xl:visible absolute  top-40 object-cover left-10     w-[492px] -z-20 -rotate-3 invisible md:block rounded-full ${isArabic ? 'right-20 translate-x-1/2' : 'left-20 -translate-x-1/2'}`}

           />
        <Online />

        <Onsite />

        <HybrideCard />
      </div>
      <Testimonials />
      <VideoTestimonialCarousel />
      <PartnersSection  />
      <Courses />
      <HomeContact />
      <div className='max-md:hidden'>

      <Locations />
      </div>
      <div className='md:hidden'>

      <NosCentres />
      </div>





















    </div>
  )
}

export default Page