// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation'; // Ensure this is imported correctly
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../globals.css';
import { getMessages } from 'next-intl/server'; 
import ContactBubble from '@/components/ContactBubble';
import { Bricolage_Grotesque } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';


// Define your supported locales. It's good practice to keep this consistent
// with what's in your `i18n.ts` and `middleware.ts`
const locales = ['fr', 'ar']; // Define supported locales here
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage', // This CSS variable will be used for titles
  weight: ['400', '700'], // Load only the weights you need
});

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['latin'],
    weight: ['400', '700'],
 });

export const metadata: Metadata = {
  title: 'Archipel',
  description: 'E-learning platform',
};

// `generateStaticParams` is correct for defining which locales Next.js should pre-render.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Correctly destructure `locale` directly from `params` in the function signature
export default async function RootLayout({
  children,
  params: { locale }, // <--- CORRECTED LINE: Destructure `locale` directly
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate the locale against your defined supported locales
  if (!locales.includes(locale)) {
    notFound(); // Redirects to a 404 page if the locale is not supported
  }

  // getMessages will automatically load the messages for the current `locale`
  // based on your `next-intl` configuration.
  let messages;
  try {
    messages = await getMessages({ locale }); // Pass locale explicitly to getMessages
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound(); // Or handle the error differently, e.g., show a default language
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${lexendDeca.className} ${bricolageGrotesque.variable} ${ibmPlexSansArabic.className} flex flex-col min-h-screen bg-[#F9FAFB]`}>
          <Navbar />
          <main className="flex-grow mt-24">{children}</main>
          <ContactBubble />
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}