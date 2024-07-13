/** @type {import('tailwindcss').Config} */
import tailwindForms from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFont: ["Poppins", "sans-serif"],
        fira: ["Fira Code", "monospace"],
        myPoppins: ["Poppins", "sans-serif"],
        myWorkSans: ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    tailwindForms
  ]
}

