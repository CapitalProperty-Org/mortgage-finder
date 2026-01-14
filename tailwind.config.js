/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand': {
                    primary: '#EA3934', // User specified RGB(234, 57, 52)
                    secondary: '#3a307f', // User specified Hex
                    accent: '#3b97ba',

                    // Mappings
                    red: '#EA3934',
                    navy: '#3a307f',
                    violet: '#3a307f',

                    dark: '#0F172A',
                    gray: '#F7F7F7',
                    text: '#333333'
                },
                'whatsapp': '#25D366'
            },
            fontFamily: {
                sans: ['Open Sans', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
