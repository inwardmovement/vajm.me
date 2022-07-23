module.exports = {
  content: ["./src/**/*.{html,js,jsx,md,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
  theme: {
    extend: {}
  }
}
