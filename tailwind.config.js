/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          mid:     '#2563EB',
          light:   '#DBEAFE',
        },
        secondary: {
          DEFAULT: '#10B981',
          light:   '#D1FAE5',
        },
        accent: {
          DEFAULT: '#F97316',
          light:   '#FFF7ED',
        },
        section: '#F8FAFC',
        dark:    '#0F172A',
        muted:   '#6B7280',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card:   '0 4px 12px rgba(0,0,0,0.08)',
        hover:  '0 8px 24px rgba(0,0,0,0.12)',
        glow:   '0 0 0 3px #DBEAFE',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'count-up':   'countUp 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        countUp:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
