'use client'

import { useState } from 'react'
import {Link, useRouter, usePathname} from '../i18n/navigation'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { 
  SimpleDropdown, 
  SimpleDropdownItem
} from './ui/SimpleDropdown'
import { FrenchFlag, TunisianFlag } from './ui/FlagIcons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav') // 'nav' refers to the key in your JSON files
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    console.log('Language change requested:', newLocale)
    console.log('Current locale:', locale)
    console.log('Current pathname:', pathname)
    router.push(pathname, { locale: newLocale })
  }


  return (
    <header className="top-0 left-0 right-0 z-50 w-full px-4 py-3 mb-4">
    <div className="bg-white shadow-sm px-6 py-3 rounded-2xl mx-auto mt-4">
    <div className="flex justify-between items-center">
      <div className='flex flex-row justify-start gap-4' >

              {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-purple-700 focus:outline-none  cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      
        {/* Logo Image */}
        <Link href="/">
          <Image
            src="/logoNameLogo.png" // Place your logo in /public folder and rename accordingly
            alt="Archipel Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>
                      <Link
            href="https://espace.archipelmix.com/#/auth/register"
            className="bg-purple-100 hover:bg-purple-200 text-purple-900 font-medium font-sans py-2 px-4 rounded-xl md:hidden"
          >
            {t("signup")}
          </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-black font-medium gap-2  font-sans">
          <Link href="/about" className="hover:bg-[#D2C5ED] p-2 rounded-full">{t('about')}</Link>
          <Link href="/pedagogy" className="hover:bg-[#D2C5ED] p-2 rounded-full">{t('pedagogy')}</Link>
          <Link href="/packs" className="hover:bg-[#D2C5ED] p-2 rounded-full">{t('packs')}</Link>
          <Link href="/contact" className="hover:bg-[#D2C5ED] p-2 rounded-full">{t('contact')}</Link>
          <Link href="/parent" className="hover:bg-[#D2C5ED] p-2 rounded-full">{t('parent')}</Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          {/* Language Switcher */}
          <SimpleDropdown
            align="right"
            trigger={
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                {locale === 'fr' ? (
                  <>
                    <FrenchFlag className="w-5 h-4" />
                    <span className="text-sm font-medium">FR</span>
                  </>
                ) : (
                  <>
                    <TunisianFlag className="w-5 h-4" />
                    <span className="text-sm font-medium">AR</span>
                  </>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            }
          >
            <SimpleDropdownItem onClick={() => handleLanguageChange('fr')}>
              <FrenchFlag className="w-5 h-4 mr-2" />
              <span>Français</span>
            </SimpleDropdownItem>
            <SimpleDropdownItem onClick={() => handleLanguageChange('ar')}>
              <TunisianFlag className="w-5 h-4 mr-2" />
              <span>العربية</span>
            </SimpleDropdownItem>
          </SimpleDropdown>
          
          <Link href="https://espace.archipelmix.com/#/auth/login" className="text-purple-500 hover:text-purple-700">{t("signin")}</Link>
          <Link
            href="https://espace.archipelmix.com/#/auth/register"
            className="bg-purple-100 hover:bg-purple-200 text-purple-900 font-semibold py-2 px-4 rounded-xl"
          >
            {t("signup")}
          </Link>
        </div>


      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden space-y-4 text-black font-medium text-center">
          <div className="flex flex-col space-y-2">
          <Link href="/about" className="hover:bg-[#D2C5ED] p-2 rounded-full" onClick={() => setIsOpen(false)}>{t("about")}</Link>
          <Link href="/pedagogy" className="hover:bg-[#D2C5ED] p-2 rounded-full" onClick={() => setIsOpen(false)}>{t("pedagogy")}</Link>
          <Link href="/packs" className="hover:bg-[#D2C5ED] p-2 rounded-full" onClick={() => setIsOpen(false)}>{t("packs")}</Link>
          <Link href="/contact" className="hover:bg-[#D2C5ED] p-2 rounded-full" onClick={() => setIsOpen(false)}>{t("contact")}</Link>
          <Link href="/parent" className="hover:bg-[#D2C5ED] p-2 rounded-full" onClick={() => setIsOpen(false)}>{t("parent")}</Link>
          </div>
          
          {/* Mobile Language Switcher */}
          <div className="flex justify-center">
            <SimpleDropdown
              align="left"
              trigger={
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  {locale === 'fr' ? (
                    <>
                      <FrenchFlag className="w-5 h-4" />
                      <span className="text-sm font-medium">FR</span>
                    </>
                  ) : (
                    <>
                      <TunisianFlag className="w-5 h-4" />
                      <span className="text-sm font-medium">AR</span>
                    </>
                  )}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              }
            >
              <SimpleDropdownItem onClick={() => handleLanguageChange('fr')}>
                <FrenchFlag className="w-5 h-4 mr-2" />
                <span>Français</span>
              </SimpleDropdownItem>
              <SimpleDropdownItem onClick={() => handleLanguageChange('ar')}>
                <TunisianFlag className="w-5 h-4 mr-2" />
                <span>العربية</span>
              </SimpleDropdownItem>
            </SimpleDropdown>
          </div>
          
          <div className="flex flex-col space-y-2 pt-2">
            <Link href="https://espace.archipelmix.com/#/auth/login" className="text-purple-500 hover:text-purple-700" onClick={() => setIsOpen(false)}>{t("signin")}</Link>
            <Link
              href="https://espace.archipelmix.com/#/auth/register"
              className="bg-purple-100 hover:bg-purple-200 text-purple-900 font-semibold py-2 px-4 rounded-xl text-center"
              onClick={() => setIsOpen(false)}
            >
              {t("signup")}
            </Link>
          </div>
        </div>
      )}
    </div>
    </header>
  )
}
