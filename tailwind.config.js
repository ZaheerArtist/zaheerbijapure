/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#1E1E1E',
        secondary: '#2A2A2A',
        accent1: '#7B68EE', // Main accent - vibrant purple
        accent2: '#00CCFF', // Secondary accent - bright cyan
        textPrimary: '#FFFFFF',
        textSecondary: '#AAAAAA',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        heading: ['Raleway', 'Arial', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slide-up': 'slide-up 0.9s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}; 