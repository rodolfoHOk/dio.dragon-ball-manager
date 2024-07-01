/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'toggle-inset':
          'inset 0px 2px 5px rgba(0, 0, 0, 0.4), inset 0px -2px 5px rgba(255, 255, 255, 0.4)',
        'toggle-peer': '0px 2px 4px rgba(0, 0, 0, 0.2);',
      },
    },
  },
  plugins: [],
};
