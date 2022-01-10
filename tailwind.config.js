module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flexGrow: { 1.5: 1.5, 2: 2 },
      flexShrink: { 1.5: 1.5, 2: 2 },
    },
  },
  plugins: [],
}
