import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: import.meta.env.CONTEXT,
  integrations: [tailwind()]
})
