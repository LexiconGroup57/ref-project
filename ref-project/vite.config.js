import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    //base: '/ref-project/',
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:5287',
    //             changeOrigin: true
    //         }
    //     }
    // }
})
