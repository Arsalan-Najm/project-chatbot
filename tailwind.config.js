/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#1a232e',
          200: '#031320',
        },
        sub: {
          100: '#fbfbfb',
          200: '#c7c7c7',
        },
      },
    },
  },
  plugins: [],
};
