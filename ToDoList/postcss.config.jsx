const { default: tailwindcss } = require("@tailwindcss/vite");
const autoprefixer = require("autoprefixer");
const { plugin } = require("postcss");

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer:{},
    },
};