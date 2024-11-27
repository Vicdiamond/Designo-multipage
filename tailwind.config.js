/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryPeach: '#E7816B',
        primaryBlack: '#1D1C1E',
        primaryWhite: '#FFFFFF',
        secondaryPeach: '#FFAD9B',
        secondaryBlack: '#333136',
        secondaryWhite: '#F1F3F5'
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif']
      },
      fontSize: {
        h1: ['48px', { lineHeight: '48px', fontWeight: '500' }],
        h2: [
          '40px',
          { lineHeight: '48px', fontWeight: '500', letterSpacing: '0.125em' }
        ],
        h3: [
          '20px',
          { lineHeight: '26px', fontWeight: '500', letterSpacing: '0.3125em' }
        ],
        body: ['16px', { lineHeight: '26px', fontWeight: '400' }]
      }
    }
  },
  plugins: []
}
