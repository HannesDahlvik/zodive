'use client'

import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

export type Themes = 'light' | 'dark'

export type ThemeContextType = {
    theme: Themes
    setTheme: Dispatch<SetStateAction<Themes>>
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
    const ctx = useContext(ThemeContext)
    return { ...ctx }
}

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Themes>('dark')

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
