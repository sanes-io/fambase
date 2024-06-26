/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      varela: ['Varela Round', 'sans-serif'],
    },
  },
  plugins: [],
};
