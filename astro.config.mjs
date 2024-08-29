import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({
    compat: true
  })],
  output: "hybrid",
  image: {
    service: passthroughImageService()
  },
  adapter: vercel()
});