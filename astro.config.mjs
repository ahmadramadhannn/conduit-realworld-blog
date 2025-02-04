import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import alpinejs from "@astrojs/alpinejs";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs({
      include: ["**/solid/*", "**/node_modules/@suid/material/**"],
    }),
    react({
      include: ["**/react/*"],
    }),
    preact({
      compat: true,
      include: ["**/preact/*"],
    }),
    svelte(),
    alpinejs(),
    vue(),
  ],
  output: "server",
  prefetch: true,
});
