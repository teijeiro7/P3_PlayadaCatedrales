import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://p3-playa-catedrales.vercel.app',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  },
  server: {
    port: 4321,
    host: true
  },
  devServer: {
    port: 4321,
    host: true
  }
});