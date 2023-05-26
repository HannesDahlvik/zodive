/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['../../apps/**/*.{ts,tsx}', '../../packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'rgba(var(--background))',
                foreground: 'rgba(var(--foreground))',
                border: {
                    DEFAULT: 'rgba(var(--border))',
                    accent: 'rgba(var(--border-accent))'
                },
                primary: {
                    DEFAULT: 'rgba(var(--primary))',
                    foreground: 'rgba(var(--primary-foreground))',
                    hover: 'rgba(var(--primary-hover))'
                },
                accent: {
                    DEFAULT: 'rgba(var(--accent))',
                    foreground: 'rgba(var(--accent-foreground))'
                },
                muted: {
                    DEFAULT: 'rgba(var(--muted))',
                    foreground: 'rgba(var(--muted-foreground))'
                },
                card: {
                    DEFAULT: 'rgba(var(--card))',
                    foreground: 'rgba(var(--card-foreground))'
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
