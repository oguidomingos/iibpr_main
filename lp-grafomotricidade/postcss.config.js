const cssnano = require('cssnano')

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production'
            ? cssnano({ preset: 'default' })
            : null,
    ].filter(Boolean) // Isso remove qualquer entrada falsa/null do array de plugins
}
