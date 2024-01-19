import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: false,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')]
    }
  }
});
