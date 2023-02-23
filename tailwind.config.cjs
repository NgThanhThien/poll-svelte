/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      minHeight: {
        '50-screen': '50vh',
        '80-screen': '80vh',
      },
    },

  },
  plugins: [],
}