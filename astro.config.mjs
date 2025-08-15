import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { fileURLToPath } from 'url';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        '@discretize': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './discretize-ui'
        ),
        // Add this new alias
        '@gw2-ui': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './discretize-ui/gw2-ui/src'
        ),
      },
    },
  },
});
