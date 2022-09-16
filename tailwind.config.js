/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '@/components/**/*.{js,vue,ts}',
    '@/layouts/**/*.vue',
    '@/pages/**/*.vue'
    // '@/plugins/**/*.{js,ts}',
    // '@/nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat, sans-serif'],
        roboto: ['Roboto, sans-serif']
      },
      colors: {
        'primary-main-900': '#030D23',
        'primary-main-800': '#071B45',
        'primary-main-700': '#0A2868',
        'primary-main-600': '#0E368A',
        'primary-main-500': '#1143AD',
        'primary-main-400': '#4169BD',
        'primary-main-300': '#708ECE',
        'primary-main-200': '#A0B4DE',
        'primary-main-100': '#CFD9EF',
        'primary-main-50': '#D9E1F2',
        'primary-main-normal': '#0E368A',
        'primary-main-hover': '#0A2868',

        'secondary-main-900': '#2D1400',
        'secondary-main-800': '#5A2900',
        'secondary-main-700': '#863D00',
        'secondary-main-600': '#B35200',
        'secondary-main-500': '#E06600',
        'secondary-main-400': '#E68533',
        'secondary-main-300': '#ECA366',
        'secondary-main-200': '#F3C299',
        'secondary-main-100': '#F9E0CC',
        'secondary-main-50': '#FAE7D6',
        'secondary-main-normal': '#E06600',
        'secondary-main-hover': '#B35200',

        'green-main-900': '#022303',
        'green-main-800': '#044506',
        'green-main-700': '#056809',
        'green-main-600': '#078A0C',
        'green-main-500': '#09AD0F',
        'green-main-400': '#3ABD3F',
        'green-main-300': '#6BCE6F',
        'green-main-200': '#9DDE9F',
        'green-main-100': '#CEEFCF',
        'green-main-50': '#D8F2D9',
        'green-main-normal': '#078A0C',
        'green-main-hover': '#056809',

        'dark-main-900': '#07090C',
        'dark-main-800': '#0E1319',
        'dark-main-700': '#151C25',
        'dark-main-600': '#1C2632',
        'dark-main-500': '#232F3E',
        'dark-main-400': '#4C5561',
        'dark-main-300': '#7B828B',
        'dark-main-200': '#A7ACB2',
        'dark-main-100': '#D3D5D8',
        'dark-main-50': '#DCDEE0',
        'dark-main-normal': '#151C25',
        'dark-main-hover': '#232F3E',

        'gray-main-900': '#2A2B2C',
        'gray-main-800': '#545558',
        'gray-main-700': '#7D8083',
        'gray-main-600': '#A7AAAF',
        'gray-main-500': '#D1D5DB',
        'gray-main-400': '#DADDE2',
        'gray-main-300': '#E3E6E9',
        'gray-main-200': '#EDEEF1',
        'gray-main-100': '#F6F7F8',
        'gray-main-50': '#FDFEFF',

        'yellow-main-900': '#FF8C00',
        'yellow-main-800': '#FBB800',
        'yellow-main-700': '#F8D100',
        'yellow-main-600': '#F5EB00',
        'yellow-main-500': '#F2FF00',
        'yellow-main-400': '#E7F437',
        'yellow-main-300': '#EDF864',
        'yellow-main-200': '#F3FB94',
        'yellow-main-100': '#F8FDC0',
        'yellow-main-50': '#FDFFE7',

        'red-main-900': '#DA0000',
        'red-main-800': '#F10000',
        'red-main-700': '#FF0D00',
        'red-main-600': '#FF1D07',
        'red-main-500': '#FF260C',
        'red-main-400': '#FF5736',
        'red-main-300': '#FF7B5B',
        'red-main-200': '#FFA38A',
        'red-main-100': '#FFC8B8',
        'red-main-50': '#FFE7E6',

        'alert-info': '#D9E1F2',
        'alert-success': '#9DDE9F',
        'alert-warning': '#FDFFE7',
        'alert-error': '#FFA38A',
        'alert-secondary': '#A7ACB2',

        primary: '#232F3E',
        secondary: '#4C5561',
        link: '#2563EB',
        'secondary-button': '#CC4700',
        'secondary-button-hover': '#B23E00',

        facebook: '#3B5998',
        google: '#DE5246',
        whatsapp: '#25D366',
        twitter: '#1DA1F2'
      }
    },
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1194px',
        '2xl': '1194px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
