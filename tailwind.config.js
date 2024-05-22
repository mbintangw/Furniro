/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#B88E2F',
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        '.card-arrival': {
          width: '643px',
          height: '443px',
          position: 'absolute',
          top: '30%',
          left: '60%',
          background: '#FFF3E3',
          borderRadius: '12px',
          padding: '44px',
        },
      };
      addUtilities(newUtilities,['responsive']);
    }
  ],
}

