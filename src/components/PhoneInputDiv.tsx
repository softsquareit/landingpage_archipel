'use client';
import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useTranslations } from 'next-intl'; // Import useTranslations

const StyledPhoneInput = () => {
  const [phone, setPhone] = useState('');
  const t = useTranslations('phoneInput'); // Scope translations for this component

  return (
    <div className="w-full max-w-full overflow-hidden">
      <PhoneInput
        defaultCountry="tn"
        disableDialCodeAndPrefix
        value={phone}
        onChange={setPhone}
        placeholder={t('placeholder')} // Use translated placeholder
        className="
          flex items-center w-full max-w-full
          border border-gray-300 bg-white rounded-md
          px-3 py-2
          focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
        "
        inputClassName="
          flex-1 pl-2 text-gray-700 placeholder-gray-400 text-sm
          bg-transparent focus:outline-none min-w-0
        "
        countrySelectorStyleProps={{
          buttonClassName: "flex items-center pr-2 flex-shrink-0",
          flagClassName: "mr-1",
          dropdownArrowClassName: "ml-1 text-gray-500"
        }}
        
      />
    </div>
  );
};

export default StyledPhoneInput;