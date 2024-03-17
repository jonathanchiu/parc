import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react(), tailwind()],
  // This is a workaround for a bug in WSL that prevents hot module reloading from working on Windows
  // See: https://github.com/withastro/astro/issues/6043#issuecomment-1409498718
  // Not sure how this will interact with other OSes
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});