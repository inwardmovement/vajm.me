// prettier-ignore
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: false
  },
  plugins: [],
  theme: {
    screens: {
      "xs": "0",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px"
    },
    extend: {}
  }
}
