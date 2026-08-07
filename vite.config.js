import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/**
 * Vite configuration.
 *
 * - Enables React support.
 * - Configures the '@' alias to resolve the 'src' directory.
 * - Uses 'import.meta.dirname' for future Vite compatibility.
 */
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, './src'),
    },
  },
})
