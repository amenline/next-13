/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {},
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
