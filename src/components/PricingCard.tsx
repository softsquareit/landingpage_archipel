'use client';

import { CheckCircle } from 'lucide-react';
import { ReactNode, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import pricingFeaturesData from '@/data/pricingFeatures.json';

interface PricingCardProps {
  offer?: 'ilot' | 'archilot';
  backgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  textColor?: string;
  activeTabColor?: string;
  inactiveTabColor?: string;
  tabTextColor?: string;
  activeTabTextColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: string[]; // Array of feature IDs
  buttonText?: string;
  options?: ('month' | 'quarter' | 'year')[];
  defaultOption?: 'month' | 'quarter' | 'year';
  showTabs?: boolean;
  showImage?: boolean;
  showOptions?: boolean;
  children?: ReactNode;
  selectedLevel?: string | null;
}

// Type definitions for the JSON structure
type LevelKey = 'primary' | 'college' | 'lycee' | 'bachelier';
type TabKey = 'online' | 'onsite' | 'mix';
type OfferKey = 'ilot' | 'archilot';

interface PricingFeaturesData {
  features: Record<string, { fr: string; ar: string }>;
  tabs: Record<TabKey, { fr: string; ar: string }>;
  options: Record<string, { fr: string; ar: string }>;
  general: Record<string, { fr: string; ar: string }>;
  imageAlt: Record<OfferKey, { fr: string; ar: string }>;
  levels: Record<LevelKey, Record<OfferKey, Record<TabKey, string[]>>>;
}

const pricingData: PricingFeaturesData = pricingFeaturesData as PricingFeaturesData;
const featureConfigsByLevel = pricingData.levels;

// Price table - base prices by offer and duration
const basePriceTable = {
  ilot: {
    month: 39,
    quarter: 99,
    year: 249,
  },
  archilot: {
    month: 110,
    quarter: 290,
    year: 790,
  },
};

// Price multipliers by education level
const levelPriceMultipliers: Record<string, number> = {
  primary: 1.0,    // 100% - base price
  college: 1.15,   // 115% - 15% increase
  lycee: 1.25,     // 125% - 25% increase
  bachelier: 1.4,  // 140% - 40% increase
};

export default function PricingCard({
  offer = 'ilot',
  backgroundColor,
  buttonColor,
  buttonTextColor,
  textColor,
  activeTabColor,
  inactiveTabColor = 'bg-gray-200',
  tabTextColor,
  activeTabTextColor,
  imageSrc,
  imageAlt,
  features, // This prop can still be used to override defaults
  buttonText,
  options,
  defaultOption = 'month',
  showTabs = true,
  showImage = true,
  showOptions = true,
  children,
  selectedLevel, // Add selectedLevel to destructured props
}: PricingCardProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [selectedTab, setSelectedTab] = useState<'online' | 'onsite' | 'mix'>('online');
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [price, setPrice] = useState('');

  const isIlot = offer === 'ilot';

  // Get translations from JSON
  const getTranslation = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = pricingData;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value && typeof value === 'object' && (locale in value)) {
      return value[locale as 'fr' | 'ar'];
    }
    return key;
  };

  // Fallback values for imageSrc and imageAlt
  const defaultImageSrc = isIlot ? '/images/ilot.png' : '/images/archilot.png';
  const defaultImageAlt = getTranslation(`imageAlt.${offer}`);

  // Apply default styles based on the offer
  backgroundColor = backgroundColor ?? (isIlot ? 'bg-[white]' : 'bg-[#147da6]');
  buttonColor = buttonColor ?? (isIlot ? 'bg-[#147da6]' : 'bg-white');
  buttonTextColor = buttonTextColor ?? (isIlot ? 'text-white' : 'text-[#147da6]');
  textColor = textColor ?? (isIlot ? 'text-gray-800' : 'text-white');
  activeTabColor = activeTabColor ?? (isIlot ? '!bg-white' : '!bg-white');
  tabTextColor = tabTextColor ?? (isIlot ? 'text-[#94A3B8]' : 'text-[#44C0E2]');
  activeTabTextColor = activeTabTextColor ?? (isIlot ? 'text-[#44C0E2]' : 'text-[#44C0E2]');

  // Use provided imageSrc/Alt or fall back to defaults
  const currentImageSrc = imageSrc ?? defaultImageSrc;
  const currentImageAlt = imageAlt ?? defaultImageAlt;

  // Determine which feature set to use based on the selected level, offer, and tab
  const getDefaultFeatures = (): string[] => {
    // If no level is selected, use primary as default
    if (!selectedLevel || !(selectedLevel in featureConfigsByLevel)) {
      return featureConfigsByLevel.primary[offer][selectedTab];
    }
    return featureConfigsByLevel[selectedLevel as LevelKey][offer][selectedTab];
  };

  const defaultFeaturesForOffer = getDefaultFeatures();
  // Features: use provided features prop or the determined default configs, then map to translated labels
  const featuresToDisplay = (features ?? defaultFeaturesForOffer).map((featureId: string) => ({
    id: featureId,
    label: getTranslation(`features.${featureId}`),
  }));

  // Options: use provided options or default ones, then map to translated labels
  const defaultOptionsKeys: ('month' | 'quarter' | 'year')[] = ['month', 'quarter', 'year'];
  const optionsToDisplay = (options ?? defaultOptionsKeys).map(optionKey => ({
    key: optionKey,
    label: getTranslation(`options.${optionKey}`),
  }));

  // Tabs: map tab keys to translated labels
  const tabsConfig: { key: 'online' | 'onsite' | 'mix'; label: string }[] = [
    { key: 'online', label: getTranslation('tabs.online') },
    { key: 'onsite', label: getTranslation('tabs.onsite') },
    { key: 'mix', label: getTranslation('tabs.mix') },
  ];

  useEffect(() => {
    // Calculate price based on selected level and option
    const basePrice = basePriceTable[offer]?.[selectedOption];
    if (basePrice) {
      // Apply level multiplier if selectedLevel exists
      const multiplier = selectedLevel && levelPriceMultipliers[selectedLevel] 
        ? levelPriceMultipliers[selectedLevel] 
        : 1.0;
      
      const calculatedPrice = Math.round(basePrice * multiplier);
      setPrice(`${calculatedPrice}DT`);
    } else {
      setPrice('');
    }
  }, [offer, selectedOption, selectedLevel]);

  return (
    <div className={`w-full max-w-[393px] md:w-[523px] mx-auto ${backgroundColor} shadow-lg rounded-2xl`}>
      {!isIlot && (
        <div className=" text-white w-full rounded-t-xl text-center bg-[#44c0e2] p-2">
          <h1 className="text-sm md:text-base">{getTranslation('general.discountMessage')}</h1>
        </div>
      )}
      <div className='p-4 md:p-6'>

        <div className={`flex items-center justify-between gap-2 mb-4  ${isArabic ? 'flex-row-reverse' : ''}`}>
          {showImage && (
            <img src={currentImageSrc} alt={currentImageAlt} className="w-[120px] h-[80px] md:w-[180px] md:h-[120px] object-contain" />
          )}
          <div className={isArabic ? 'text-left' : 'text-right'}>
            {showOptions && (
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value as 'month' | 'quarter' | 'year')}
                  className={`border rounded-lg border-gray-200 text-base md:text-lg px-2 py-1 pr-8 appearance-none focus:outline-none w-full ${textColor} ${isArabic ? 'text-right' : 'text-left'}`}
                  style={{ direction: isArabic ? 'rtl' : 'ltr', WebkitAppearance: 'none', appearance: 'none', background: 'none' }}
                >
                  {optionsToDisplay.map((option) => (
                    <option key={option.key} value={option.key} className='text-black'>
                      {option.label}
                    </option>
                  ))}
                </select>
                {/* Custom arrow icon for select */}
                <span
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    right: isArabic ? 'auto' : '12px',
                    left: isArabic ? '12px' : 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '18px',
                    color: textColor === 'text-white' ? '#fff' : '#888',
                  }}
                >
                  <ChevronDown />
                </span>
              </div>
            )}
            <div className={`text-2xl md:text-4xl font-bold mt-1 ${textColor} mb-1 ${isArabic ? 'text-left' : 'text-right'}`}>
              {price}
              <span className={`text-xs md:text-sm font-light ${isArabic ? 'mr-1' : 'ml-1'}`}>{getTranslation('general.priceSuffix')}</span>
              <span className={`text-xs md:text-sm text-gray-300 font-light ${isArabic ? 'mr-1' : 'ml-1'}`}>/{optionsToDisplay.find(opt => opt.key === selectedOption)?.label}</span>
            </div>
          </div>
        </div>



        {showTabs && (
          <div className={`flex items-center justify-between mb-4 ${inactiveTabColor} rounded-lg p-0.5 w-full`}>
            {tabsConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`text-xs md:text-sm w-[100px] md:w-[133px] font-medium px-2 md:px-4 py-1.5 rounded-lg transition-all duration-200 ${
                  selectedTab === tab.key ? `${activeTabColor} ${activeTabTextColor}` : `${tabTextColor}`
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {(featuresToDisplay ?? []).map((feature: { id: string; label: string }, index: number) => (
            <li key={index} className={`flex items-start text-xs md:text-sm ${textColor} ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}>
              <CheckCircle
                className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 min-w-4 md:min-w-5 ${isArabic ? 'ml-2' : 'mr-2'} ${textColor === 'text-white' ? 'text-white' : 'text-green-500'}`}
              />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>

        {children ? (
          children
        ) : (
          <button className={`w-full ${buttonColor} ${buttonTextColor} py-2 md:py-3 rounded-md font-semibold text-sm md:text-base`}>
            {buttonText ?? getTranslation('general.buttonText')}
          </button>
        )}
      </div>
    </div>
  );
}