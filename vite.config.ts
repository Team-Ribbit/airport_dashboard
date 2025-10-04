import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import the path module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [".gpes.cdpad.io"]
  },
  resolve: { // Add resolve configuration
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'), 
      'types': path.resolve(__dirname, 'src/types'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'data': path.resolve(__dirname, 'src/data'),
      // Add other top-level directories in src as needed
    },
  }
})
