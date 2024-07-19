import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import tailwindcss from "tailwindcss";
import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ 'jsxRuntime': 'classic' }),
    dts({ include: ['src/**/*'] })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`
    },
    // Do not include the deps and peerDeps in prod
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "tailwindcss"],
      output: {
        preserveModules: true,
        exports: 'named',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      }
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
