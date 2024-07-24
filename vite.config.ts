import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 1236,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      /*'/socket.io': {
        target: 'http://localhost:8080/',
        changeOrigin: true, // Required for cross-origin requests
        ws: true, // Enable WebSocket proxying
        rewrite: (path) => path.replace(/^\/socket.io/, '/socket.io'),
      },*/
    },
  },
})
