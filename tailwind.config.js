/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sidebar:'rgba(var(--sidebar))',
        green:'rgba(var(--green))',
        sidebarItem:'rgba(var(--sidebarItem))',
      }
    },
  },
  plugins: [],
}

