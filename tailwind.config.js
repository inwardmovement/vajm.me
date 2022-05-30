module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {}
  }
}
