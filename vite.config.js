import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia 'lumen-demo' por el nombre exacto de tu repositorio
export default defineConfig({ plugins: [react()], base: '/lumen-demo/' })
