/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        slider_infinite: {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-100%)'},
        },
        fade_to_left: {
          '0%': { transform: 'translateX(0)', opacity: '100%'},
          '100%': { transform: 'translateX(-100%)', opacity: '0%'},
        },
        fade_to_right:{ 
          '0%': { transform: 'translateX(-100%)', opacity: '0%'},
          '100%': { transform: 'translateX(0%)'}, opacity: '100%'}
      },
      animation: {
        'carousel': 'slider_infinite 15s linear infinite',
        'fade_left': 'fade_to_left 0.5s ease-in-out forwards',
        'fade_right': 'fade_to_right 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
