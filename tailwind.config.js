/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'rgb(91, 146, 121)',
        'd':'rgb(18, 19, 15)',
      },
      
      fontFamily: {
        'mono': ['YourCustomMonoFont', 'monospace'],
      }
    },
  },
  plugins: [],
}