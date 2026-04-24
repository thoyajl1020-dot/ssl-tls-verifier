/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bgDark: '#020C1B',
          bgLight: '#0A192F',
          card: '#112240',
          accent: '#64FFDA',
          textPrimary: '#CCD6F6',
          textSecondary: '#8892B0',
          success: '#00C853',
          error: '#FF5252',
          warning: '#FFD600',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
