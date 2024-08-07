/** @type {import('tailwindcss').Config} */
export default {
    content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "320px",
            md: "640px",
            lg: "1145px",
        },
        fontFamily: {
            sans: ["Montserrat", "Arial", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "hero-image": 'url("/assets/img/Hero-Image.jpeg")',
            },
        },
    },
    plugins: [],
};
