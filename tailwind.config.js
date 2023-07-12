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
        'typing-animation': 'typing 3s steps(40, end) forwards, blink .75s step-end infinite',
        'loading-animation': 'progress 2s steps(10, end) forwards'
      },
      keyframes: {
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
        progress: {
          '0%': { width: '0%' },
          '75%': { width: '75%' },
          '100%': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: "transparent" },
          '50%': { borderColor: '#f2f2f2' }
        }
      },
    },
  },
  plugins: [],
}
