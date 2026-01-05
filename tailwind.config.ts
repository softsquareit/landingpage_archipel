// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}', // Make sure to include your sections directory if it's not already
  ],
  theme: {
    keyframes: {
        colorCycle: {
          '0%, 100%': { backgroundColor: '#DB133C' }, // red
          '50%': { backgroundColor: '#2F2F2F' },      // dark gray
        },
      },
      animation: {
        colorCycle: 'colorCycle 2s infinite',
      },
    extend: {
      fontFamily: {
  // This creates a 'font-bricolage' utility class
  // that uses the --font-bricolage CSS variable.
  title: ['var(--font-bricolage)', 'sans-serif'],
  // This ensures that 'font-sans' (Tailwind's default) uses Lexend Deca.
  // Since you apply lexendDeca.className to <body>, this reinforces it.
  sans: ['Lexend Deca', 'sans-serif'],
  // Add Arabic font family utility
  arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};