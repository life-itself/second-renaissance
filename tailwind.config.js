const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        accent:'#F0CA5E',
        secondary:'#d17846',
        darkgray:'#4D4D4D',
        semiblack:'#313131',
        offwhite:'#FEFDFD',
        beige:'#F6F0EE'
      },
      fontFamily: {
        sans: [
          'Nunito Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Restora',
          ...defaultTheme.fontFamily.serif,
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
