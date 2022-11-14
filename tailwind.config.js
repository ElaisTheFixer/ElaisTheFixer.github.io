/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                syne: ['Syne', 'sans-serif'],
            },
            maxWidth: {
                '8xl': '1364px',
            },
            colors: {
                'primary-800': '#FF381E',
            },
        },
    },
    plugins: [],
}