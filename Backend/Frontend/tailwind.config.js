/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'dm-sans': ['"DM Sans"', 'sans-serif'],
                'barlow': ['"Barlow"', 'sans-serif'],
            },
        },
    },
    plugins: [require("daisyui")],
};