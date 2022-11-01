/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      'sky' : {
        '700': '#0369a1',
        '800': '#075985',
        '900': '#0c4a6e',
      },
      'gray': {
        '300': '#cbd5e1',
        '400': '#9ca3af',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
      }
    }
  },
  plugins: [],
}
