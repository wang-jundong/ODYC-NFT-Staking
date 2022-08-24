module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            primary: 'Playfair Display',
            body: 'Work Sans',
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            content: {
                about: 'url("/src/assets/svgs/outline-text/about.svg")',
                portfolio: 'url("/src/assets/svgs/outline-text/portfolio.svg")',
                services: 'url("/src/assets/svgs/outline-text/services.svg")',
                testimonials:
                    'url("/src/assets/svgs/outline-text/testimonials.svg")',
                contact: 'url("/src/assets/svgs/outline-text/contact.svg")',
            },
            fontFamily: {
                // Poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#050402",
                secondary: "#1C1D24",
                tertiary: "#131419",
                accent: {
                    DEFAULT: "#ac6b34",
                    hover: "#925a2b",
                    stake: "#4d1e00",
                },
                paragraph: "#878e99",
            },
            width: {},
            height: {},
            aspectRatio: {
                "2/5": "2 / 5",
            },
            transitionProperty: {
                // height: "height",
            },
            backgroundImage: {
                shop_statistics_background: "url('/src/assets/svgs/shop-statistics-background.svg')",
            },
        },
    },
    plugins: [],
};
