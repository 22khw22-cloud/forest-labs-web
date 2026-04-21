/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0D1F16',
          900: '#1A3526',
          800: '#234A34',
          700: '#2D5E42',
          600: '#3A7554',
          500: '#4A9068',
          400: '#6AAF87',
          100: '#E4F0E9',
          50:  '#F0F7F3',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          dark:    '#EDE7D8',
        },
        brown: {
          DEFAULT: '#8B7355',
          light:   '#B09A7A',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Noto Serif KR', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
