/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        'fade-in-out': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'fade-in-out': 'fade-in-out 2500ms ease-in-out infinite'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
