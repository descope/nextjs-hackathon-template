/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    require('flowbite/plugin')
  ], 
  theme: {
    extend: {
      animation: {
        // ANIMATIONS
      },
      keyframes: {
        // KEYFRAMES
      },
    },
  },
  plugins: [],
}
