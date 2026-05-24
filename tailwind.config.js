/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#08080B',
          900: '#0B0B10',
          800: '#101018',
          700: '#15151F',
          600: '#1C1C28',
          500: '#2A2A38',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
          deep: '#6D28D9',
          glow: '#7C3AED',
        },
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(80% 60% at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(8,8,11,0) 70%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(8,8,11,0) 0%, rgba(8,8,11,1) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
