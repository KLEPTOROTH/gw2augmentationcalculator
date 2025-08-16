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
  // Correctly configure the image service using its entrypoint.
  image: {
    service: {
      entrypoint: 'astro/assets/services/squoosh',
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

