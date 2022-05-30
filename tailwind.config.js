module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {}
  }
}
