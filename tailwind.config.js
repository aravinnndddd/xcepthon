/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goku: {
          dark: '#100b20',
          navy: '#1a1040',
          orange: '#ff5e00',
          'orange-light': '#ff7a00',
          yellow: '#ffcc00',
          'yellow-light': '#ffea00',
          cyan: '#00f0ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'goku-aura': 'radial-gradient(circle at 50% 50%, rgba(255, 94, 0, 0.2), #100b20 70%)'
      }
    },
  },
  plugins: [],
}
