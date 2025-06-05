/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gemenos-green': {
          DEFAULT: '#2e7d32',
          dark: '#1b5e20',
          light: '#4caf50',
        },
        'gemenos-text-dark': '#4a5568',
        'gemenos-text-light': '#666',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'slideInRight': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

