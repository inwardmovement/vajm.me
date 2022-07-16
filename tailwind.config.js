module.exports = {
  content: ["./src/**/*.{html,js,jsx,md,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss")
  ],
  theme: {
    extend: {}
  }
}
