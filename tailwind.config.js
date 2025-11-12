/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', { selector: '[data-theme="dark"]' }],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
