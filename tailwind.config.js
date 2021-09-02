module.exports = {
    purge: {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                '2xs': ['0.65rem', '0.8rem'],
            },
        },
    },
    variants: {
        extend: {
            scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
            backgroundColor: ['active'],
            backgroundOpacity: ['active'],
        },
    },
    plugins: [],
}

