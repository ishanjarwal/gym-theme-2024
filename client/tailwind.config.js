/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Orbitron'],
        'display': ['Poppins']
      },
      colors: {
        'pri': 'var(--pri)',
        'text-muted': 'var(--text-muted)',
      },
      maxWidth: {
        '8xl': '1600px',
      }
    },
  },
  plugins: [],
}