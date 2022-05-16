module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  daisyui: {
    themes: ['light', 'dark']
  }
};
