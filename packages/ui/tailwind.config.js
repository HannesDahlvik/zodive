/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['../../apps/**/*.{ts,tsx}', '../../packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#E8F3FC',
                    100: '#D1E7FA',
                    200: '#A8D1F5',
                    300: '#7AB9F0',
                    400: '#4CA1EB',
                    500: '#228BE6',
                    600: '#1776CA',
                    700: '#1363AA',
                    800: '#105189',
                    900: '#0B3B65',
                    950: '#0A3357'
                },
                surface: {
                    50: '#B3B3B3',
                    100: '#A6A6A6',
                    200: '#8C8C8C',
                    300: '#707070',
                    400: '#575757',
                    500: '#3D3D3D',
                    600: '#333333',
                    700: '#292929',
                    800: '#1F1F1F',
                    900: '#141414',
                    950: '#0F0F0F'
                }
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
