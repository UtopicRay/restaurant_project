import {defineConfig, passthroughImageService} from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
        applyBaseStyles: false,
      }
  ), preact({
    compat: true,
  })],
  output: "static",
  image: {
    service: passthroughImageService()
  },
  adapter: vercel()
});

