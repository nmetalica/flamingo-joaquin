/** @type {import('tailwindcss').Config} */
const primary = require('./src/styles/colors/primary.json');
const purple = require('./src/styles/colors/purple.json');
const green = require('./src/styles/colors/green.json');
const yellow = require('./src/styles/colors/yellow.json');
const blue = require('./src/styles/colors/blue.json');
const black = require('./src/styles/colors/black.json');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary,
        green,
        blue,
        yellow,
        purple,
        black,
      },
    },
  },
  plugins: [],
};
