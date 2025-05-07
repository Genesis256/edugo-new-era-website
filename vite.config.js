// vite.config.js
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // or .ts if you switch later
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      // You can add include/exclude patterns here if needed
      // include: ['src/**/*.{js,jsx}'],
      // exclude: ['src/main.jsx', 'src/**/index.js', 'src/**/*.config.js', 'src/setupTests.js'],
    },
  },
});
