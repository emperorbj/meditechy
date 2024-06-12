/** @type {import('tailwindcss').Config} */
import reactGlow from '@codaworks/react-glow/tailwind';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    reactGlow
  ]
}

