/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                background: '#050505',
                foreground: '#ffffff',
                primary: {
                    DEFAULT: '#f59e0b', // Warm Amber
                    foreground: '#000000',
                },
                secondary: {
                    DEFAULT: '#78350f', // Coffee Brown
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#f59e0b',
                    foreground: '#000000',
                },
                card: {
                    DEFAULT: 'rgba(255, 255, 255, 0.03)',
                    foreground: '#ffffff',
                },
                border: 'rgba(255, 255, 255, 0.1)',
                muted: {
                    DEFAULT: 'rgba(255, 255, 255, 0.4)',
                    foreground: '#a3a3a3',
                },
                sector: {
                    fb: '#f59e0b',
                    realestate: '#3b82f6',
                    jewellery: '#fbbf24',
                }
            },
            backgroundImage: {
                'gradient-cta': 'linear-gradient(to right, #f59e0b, #ea580c)', // Amber -> Orange
            },
        },
    },
    plugins: [],
}
