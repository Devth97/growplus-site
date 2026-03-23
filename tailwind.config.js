/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Syne', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            colors: {
                background: '#f7f4ef',
                foreground: '#0d0d0d',
                primary: {
                    DEFAULT: '#5cb832',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#1a1a1a',
                    foreground: '#f7f4ef',
                },
                accent: {
                    DEFAULT: '#5cb832',
                    foreground: '#ffffff',
                },
                card: {
                    DEFAULT: '#eeebe4',
                    foreground: '#0d0d0d',
                },
                border: 'rgba(13,13,13,0.12)',
                muted: {
                    DEFAULT: '#e8e4dc',
                    foreground: '#6b6b6b',
                },
                gp: {
                    bg:    '#f7f4ef',
                    bg2:   '#eeebe4',
                    bg3:   '#e8e4dc',
                    black: '#0d0d0d',
                    black2:'#1a1a1a',
                    grey:  '#6b6b6b',
                    grey2: '#999999',
                    green: '#5cb832',
                    green2:'#6fd438',
                }
            },
            backgroundImage: {
                'gradient-cta': 'linear-gradient(to right, #5cb832, #6fd438)',
            },
        },
    },
    plugins: [],
}
