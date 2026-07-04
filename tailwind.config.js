/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B1014',
        surface: '#141B22',
        'surface-light': '#1C252E',
        ink: '#ECE8E1',
        muted: '#8B95A1',
        amber: '#E9C46A',
        coral: '#EF6F6C',
        teal: '#5FB8B0',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}