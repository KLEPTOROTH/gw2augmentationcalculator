import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon'; // <-- Add this line

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), // <-- Add this line
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
