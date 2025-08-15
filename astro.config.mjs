// astro.config.mjs
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
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
  // This is the correct configuration to avoid the sharp error.
  image: {
    service: {
      entrypoint: 'astro/assets/services/passthrough',
    },
  },
  vite: {
    server: {
      allowedHosts: ['augmentations.arcsolutions.tech'],
    },
    resolve: {
      alias: [
        {
          find: '@discretize',
          replacement: path.resolve(process.cwd(), 'discretize-ui')
        },
        {
          find: '@gw2-ui',
          replacement: path.resolve(process.cwd(), 'discretize-ui/gw2-ui/src')
        },
      ],
    },
  },
});
