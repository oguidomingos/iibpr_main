/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        verde: "#5FB33E",
        verdeclaro: "#CFE9C6",
        cinzaescuro: '#212121'
      },
      backgroundImage: {
        'sobre': "url('../imgs/bg-padrao-verde.webp')",
        'criancas': "url('../imgs/bg-criancas.webp')",
        'completo': "url('../imgs/bg-padrao-completo.webp')",
        
      }
    }
  },
  plugins: [require('flowbite/plugin')],
  safelist: [],
};
