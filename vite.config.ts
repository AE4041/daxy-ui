import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import tailwindcss from "tailwindcss";
import { peerDependencies, dependencies } from './package.json'

export default defineConfig({
  plugins: [
    react({ 'jsxRuntime': 'classic' }),
    dts({ include: ['src/**/*'], })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: (ext) => `index.${ext}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies), "tailwindcss"],
      output: { preserveModules: true, exports: 'named' }
    },
    target: 'esnext',
    sourcemap: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})