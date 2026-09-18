// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://about.vfe01.xyz',
  integrations: [react()],
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()]
  }
});