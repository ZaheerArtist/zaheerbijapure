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
        background: '#06090a', // cinema black
        primary: '#0c1a1c',    // teal shadow (cards)
        secondary: '#1f3336',  // rules, chips
        accent1: '#ff7a2f',    // ember
        accent2: '#ffb07a',    // warm highlight
        textPrimary: '#f2e8d5',
        textSecondary: '#9aaaa9',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['Cinzel', 'Trajan Pro', 'Georgia', 'serif'],
        mono: ['Courier Prime', 'Courier New', 'monospace'],
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