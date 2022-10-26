import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // config the vitest
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
