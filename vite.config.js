import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js', 'resources/sass/app.scss'],
      refresh: true,
    }),
  ],
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      input: {
        app: '/resources/js/app.js',
        style: '/resources/sass/app.scss',
      },
    },
  },
});

