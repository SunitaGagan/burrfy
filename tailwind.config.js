/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "sans-serif"],
                alkatra: ["Alkatra", "system-ui"],
                beiruti: ["Beiruti", "sans-serif"], // lowercase key is best practice
            },
            colors: {
                brand: "#B7121F", // custom color
            },
            fontSize: {
                "heading-xl": "3.188rem",
            },
        },
    },

    plugins: [],
};