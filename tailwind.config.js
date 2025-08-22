/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
    },
  },
  plugins: [],
};

export default tailwindConfig;
