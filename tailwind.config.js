/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
       primary: '#14b8a6',
       dark : '#1e293b',
       abu: '#DCDCDC',
       stealblue:'#4682B4',
       secondary:'#475569',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};
