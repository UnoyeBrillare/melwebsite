/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from Milky Express logo
        primary: {
          DEFAULT: '#FFB6C1',  // Soft pink
          50: '#FFF5F7',
          100: '#FFE8ED',
          200: '#FFD1DB',
          300: '#FFBAC9',
          400: '#FFA3B7',
          500: '#FFB6C1',      // Main pink
          600: '#FF8FA3',
          700: '#FF6885',
          800: '#FF4167',
          900: '#FF1A49',
        },
        secondary: {
          DEFAULT: '#B5E7F0',  // Baby blue
          50: '#F0FBFD',
          100: '#E1F7FB',
          200: '#D2F3F9',
          300: '#C3EFF7',
          400: '#B5E7F0',      // Main blue
          500: '#9ADEF0',
          600: '#7FD5F0',
          700: '#64CCF0',
          800: '#49C3F0',
          900: '#2EBAF0',
        },
        accent: {
          DEFAULT: '#FFC0CB',  // Light pink accent
          50: '#FFF7F8',
          100: '#FFEEF1',
          200: '#FFE0E6',
          300: '#FFD0D8',
          400: '#FFC0CB',
          500: '#FFB0BE',
          600: '#FFA0B1',
          700: '#FF90A4',
          800: '#FF8097',
          900: '#FF708A',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFB6C1 0%, #B5E7F0 100%)',
        'gradient-soft': 'linear-gradient(to right, #FFF5F7, #F0FBFD)',
      },
    },
  },
  plugins: [],
}
