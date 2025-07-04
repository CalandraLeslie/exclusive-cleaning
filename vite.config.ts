// Vite configuration for the Exclusive Cleaning React application
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration file
 * Configures the build tool and development server for the React application
 * 
 * Vite provides:
 * - Fast development server with hot module replacement (HMR)
 * - Optimized production builds
 * - TypeScript support out of the box
 * - Modern ES modules support
 * 
 * @see https://vite.dev/config/ for configuration options
 */
export default defineConfig({
  // Plugins array - React plugin enables JSX transformation and fast refresh
  plugins: [react()],
})
