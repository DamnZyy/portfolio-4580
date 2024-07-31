/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xm: '0.7rem',
        big: '2.25rem'
      },
      colors: {
        primary: '#0D6EFD',
        secondary: '#ADB5BD',
        success: '#198754',
        danger: '#DC3545',
        warning: '#FFC107',
        info: '#0DCAF0',
        light: '#fff',
        dark: '#000',
        idk: '#fff',
        default: '#F0F8FF',
        choco: '#252525'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      screens: {
        small: '450px',
        medium: '840px'
      },
      boxShadow: {
        block: '0 8px 32px 0 rgba(19,48,125,0.35)',
        darks: '0 5px 15px rgba(0, 0, 0, .2)',
        dangers: '0 5px 15px rgba(220, 53, 69, .4)',
        primarys: '0 5px 15px rgba(13, 110, 253 , .4)',
        mdw: '0 5px 15px rgba(255, 255, 255, .3);'
      },
    },
  },
  plugins: [],
};
