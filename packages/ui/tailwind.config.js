/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['../../apps/**/*.{ts,tsx}', '../../packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                border: {
                    DEFAULT: 'rgb(var(--border))',
                    accent: 'rgb(var(--border-accent))'
                },
                primary: {
                    DEFAULT: 'rgb(var(--primary))',
                    foreground: 'rgb(var(--primary-foreground))',
                    hover: 'rgb(var(--primary-hover))'
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent))',
                    foreground: 'rgb(var(--accent-foreground))'
                },
                muted: {
                    DEFAULT: 'rgb(var(--muted))',
                    foreground: 'rgb(var(--muted-foreground))'
                },
                card: {
                    DEFAULT: 'rgb(var(--card))',
                    foreground: 'rgb(var(--card-foreground))'
                }
            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'calc(var(--radius) + 2px)',
                md: 'var(--radius)',
                sm: 'calc(var(--radius) - 2px)',
                xs: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
