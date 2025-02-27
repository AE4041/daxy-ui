/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    extend: {},
  },
  plugins: [],
}

