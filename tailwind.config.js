/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    screens: {
    sm: '0px',
    md: '770px',
    lg: '1096px',
    xl: '1440px',
  },
  
    extend: {
      fontFamily: {
        iran: ['iransans'],
      },
    },
  },
  plugins: [],
}

