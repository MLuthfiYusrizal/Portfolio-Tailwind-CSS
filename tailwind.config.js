/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'cormorant': 'Cormorant SC, serif',
      'PTserif': 'PT Serif, serif'
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'dark': '#1e293b',
        'secondary+': '#64748b',
        'secondary': '#94a3b8',
        'grey': '#e2e8f0',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        'animasi1': {
          '0%': {
            left: '-100%',
          },
          '50%, 100%': {
            left: '100%'
          }
        },
        'animasi2': {
          '0%': {
            top: '-100%',
          },
          '50%, 100%': {
            top: '100%',
          }
        },
        'animasi3': {
          '0%': {
            right: '-100%',
          },
          '50%, 100%': {
            right: '100%'
          }
        },
        'animasi4': {
          '0%': {
            bottom: '-100%',
          },
          '50%, 100%': {
            bottom: '100%',
          }
        },
      },
      animation: {
        'animasi1': 'animasi1 1s linear infinite',
        'animasi2': 'animasi2 1s .25s linear infinite',
        'animasi3': 'animasi3 1s .5s linear infinite',
        'animasi4': 'animasi4 1s .75s linear infinite',
      },
    },
  },
  plugins: [],
}
