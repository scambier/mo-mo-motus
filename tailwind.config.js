module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flexGrow: { 1.5: 1.5, 2: 2 },
      flexShrink: { 1.5: 1.5, 2: 2 },
      colors: {
        'green-dimmed': '#198a42',
        'yellow-dimmed': '#c28e00',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui', 'apple-system'],
    },
  },
  plugins: [],
}
