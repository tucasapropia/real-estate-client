/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      
    },
    colors: {
     background: '#FBFBFB',
     surface: '#FFFFFF',
     footer: '#D9D9D9',
     onBackground: '#000000',
     grey: '#D8D8D8',
    },
    borderRadius : {
      'small': '5px',
      'medium' : '16px',
      'large': '50px'
    },
    fontFamily: {
      'josefin' : ['Josefin Sans']
    },
    fontWeight: {
      thin: '100',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  plugins: [],
}
