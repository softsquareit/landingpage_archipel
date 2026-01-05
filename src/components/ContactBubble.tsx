'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ContactBubble = () => {
  const t = useTranslations();

  return (
    <div className="max-md:hidden fixed bottom-4 right-4 z-50 flex items-end gap-2">
      {/* Chat bubble */}
      <div className="bg-white rounded-2xl shadow-md border rounded-br-none  border-gray-200 px-4 py-2 max-w-xs text-sm">
        <p className="text-gray-700 font-light text-xl">{t('contactBubble.availableText')}</p>
        <div className="mt-1 bg-[#5d4089] hover:bg-[#7B5AA6] text-white font-semibold px-3 py-1.5 rounded-xl inline-flex items-center gap-2 cursor-pointer">
          <Phone size={24} className="text-white " />
          <span className="text-lg font-light">{t('contactBubble.phoneNumber')}</span>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full  border-2 border-white shadow-md z-0">
        <Image
          src="/people/teacher.jpg" // replace with your image path
          alt="Avatar"
          fill
          className="object-cover rounded-full"
        />
        {/* Online indicator */}
        <div className="absolute bottom-0 right-0 w-3 h-3 z-60 bg-green-500 rounded-full border-2 border-white" />
      </div>
    </div>
  );
};

export default ContactBubble;
