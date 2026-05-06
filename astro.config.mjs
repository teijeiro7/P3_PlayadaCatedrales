import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://p3-playa-catedrales.vercel.app',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  server: {
    port: 4321,
    host: true
  },
  devServer: {
    port: 4321,
    host: true
  },
  integrations: [sitemap()]
});
