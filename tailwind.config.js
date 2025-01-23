/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        task: {
          blue: '#2E3A59',
          purple: '#9C2CF3',
          darkpurple: '#3A49F9'
        }
      }
    },
  },
  plugins: [],
}

