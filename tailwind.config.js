/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        app_primary: '#58AFAF',
        app_primary_dark: '#428585',
        app_text1: '#777C7C',
        app_text2: '#4B4B4B',
        app_bg1: '#F5F9FA',
        app_bg2: '#EBF2F3',
        app_notification: '#ED6363',
      },
      fontFamily: {
        body: ['INTER', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {},
      },
    ],
  },
  plugins: [require('daisyui')],
};
