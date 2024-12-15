/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'title-active': '#14142B',
        'body': '#4E4B66',
        'label': '#6E7191',
        'placeholder': '#A0A3BD',
        'line': '#D9DBE9',
        'input-bg': '#EFF0F6',
        'background': '#F7F7FC',
      },
      screens: {
        'xsm': '370px',
        'msm': '450px',
      },
    },
  },
  plugins: [],
}

