import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { fileURLToPath } from 'url'; // <-- Add this import
import path from 'path'; // <-- Add this import

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
  // Add this entire 'vite' section
  vite: {
    resolve: {
      alias: {
        '@discretize': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './discretize-ui'
        ),
      },
    },
  },
});
