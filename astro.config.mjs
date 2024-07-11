import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://cami98735264.github.io/",
    base: "portfolio-website",
    integrations: [icon()],
    output: "server",
    adapter: node({
        mode: "standalone"
    })
});