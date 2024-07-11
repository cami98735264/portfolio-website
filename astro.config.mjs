import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://cami98735264.github.io/",
  integrations: [icon()],
  output: "server",
  adapter: netlify()
});