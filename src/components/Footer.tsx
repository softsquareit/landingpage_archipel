'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl' // Import useTranslations
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations('footer') // Scope translations to 'footer'

  const currentYear = new Date().getFullYear() // Get the current year dynamically

  return (
    <footer className="w-full px-6 py-10 mt-16 text-gray-700">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Subscription */}
        <div>
          <Link href="/">
          <Image
            src="/logo.png"
            alt="Archipel Logo"
            width={170}
            height={30}
            className="mb-4"
          />
          </Link>

          <p className="mb-4">
            {t('description')}
          </p>
          <form className="flex items-center bg-white rounded-xl border border-gray-300 overflow-hidden">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="px-4 py-2 w-full outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#5D4089] cursor-pointer text-white font-semibold px-4 py-2 hover:bg-[#7B5AA6] text-sm"
            >
              {t('subscribeButton')}
            </button>
          </form>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-4">{t('servicesTitle')}</h4>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>{t('service1')}</li>
            <li>{t('service2')}</li>
            <li>{t('service3')}</li>
            <li>{t('service4')}</li>
          </ul>
        </div>

        {/* Column 3: À propos */}
        <div>
          <h4 className="font-semibold mb-4">{t('aboutTitle')}</h4>
          <ul className="space-y-2 text-sm cursor-pointer" >
            <li>{t('about1')}</li>
            <li>{t('about2')}</li>
            <li>{t('about3')}</li>
            <li>{t('about4')}</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-semibold mb-4">{t('contactInfoTitle')}</h4>
          <p className="text-sm mb-2 leading-snug">
            {t('address')}
          </p>
          <div className="flex items-center text-sm mt-4 space-x-2 cursor-pointer">
            <Phone size={16} className="text-purple-500" />
            <span>+216 22 082 410</span>
          </div>
          <div className="flex items-center text-sm mt-2 space-x-2 cursor-pointer">
            <Mail size={16} className="text-purple-500" />
            <span>contact@archipelmix.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="  mx-auto mt-10 border-t pt-4 text-center text-xs text-gray-500">
        {t('copyright', { year: currentYear })}
      </div>
    </footer>
  )
}