import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import { hmrPatch } from './src/utility';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';

const config = defineConfig(args => {
  const { mode } = args;
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    define: { 'process.env': env },
    build: { chunkSizeWarningLimit: 1600, sourcemap: true },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: [ './tests/setupTests.jsx' ],
    },
    plugins: [
      react(),
      jsconfigPaths(),
      eslint(),
      hmrPatch(),
    ],
  };
});

export default config;