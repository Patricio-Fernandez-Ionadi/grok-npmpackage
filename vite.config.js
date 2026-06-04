/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        components: path.resolve(__dirname, 'src/modules/components/index.js'),
        icons: path.resolve(__dirname, 'src/modules/icons/index.js'),
        date: path.resolve(__dirname, 'src/modules/date/index.js')
      },
      name: 'Groker',
      fileName: (format, entryName) => {
        if (entryName === 'index') return `${entryName}.${format}.js`;
        return `${entryName}/${entryName}.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      // Excluye React y ReactDOM del bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    workspace: [{
      extends: true,
      test: {
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.js'],
        globals: true
      }
    }, {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});