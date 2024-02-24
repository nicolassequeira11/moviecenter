/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkpink: "#ff006c",
        lightpink: "#f7267d",
        gray1: "#111111",
        gray2: "#232323",
        gray3: "#272727",
        gray4: "#808078",
        gray5: "#686868"
      },
      fontFamily:{
        roboto:["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

