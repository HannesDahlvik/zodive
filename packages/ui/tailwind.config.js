/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['../../apps/**/*.{ts,tsx}', '../../packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                border: {
                    light: '#cbd5e1',
                    dark: '#333333'
                },
                primary: {
                    50: '#F2F2F2',
                    100: '#EEEEEE',
                    200: '#CCCCCC',
                    300: '#B3B3B3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4D4D4D',
                    800: '#333333',
                    900: '#1A1A1A',
                    950: '#0D0D0D'
                },
                surface: {
                    50: '#EBEBEB',
                    100: '#D6D6D6',
                    200: '#ADADAD',
                    300: '#858585',
                    400: '#5C5C5C',
                    500: '#333333',
                    600: '#2B2B2B',
                    700: '#242424',
                    800: '#1C1C1C',
                    900: '#161616',
                    950: '#121212'
                }
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
