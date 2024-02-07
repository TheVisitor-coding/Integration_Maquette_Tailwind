/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/fond.jpg')",
        'mail': "url('./images/camp-bg.png')",
      },
      fontFamily: {
        'archivo-dark': 'var(--font-archivo-dark)',
        'archivo-bold': 'var(--font-archivo-bold)',
        'archivo-regular': 'var(--font-archivo-regular)',
        'archivo-medium': 'var(--font-archivo-medium)',
        'archivo-semibold': 'var(--font-archivo-semibold)',

      },
      colors: {
        'primary': '#e76f51',
        'secondary': '#f8e1db',
      }
    },
  },
  plugins: [],
}

