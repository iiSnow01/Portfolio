import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const AppContext = createContext()
const savedPreference = (key, allowed, fallback) => {
    try {
        const value = localStorage.getItem(key)
        return allowed.includes(value) ? value : fallback
    } catch { return fallback }
}

export const AppProvider = ({ children }) => {
    const [lang, setLang] = useState(() => savedPreference('portfolio-language', ['en', 'fr'], 'fr'))
    const [theme, setTheme] = useState(() => savedPreference('portfolio-theme', ['dark', 'light'], 'dark'))
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        try { localStorage.setItem('portfolio-theme', theme) } catch { /* Private browsing may disable storage. */ }
    }, [theme])
    useEffect(() => {
        document.documentElement.lang = lang
        try { localStorage.setItem('portfolio-language', lang) } catch { /* Keep the current selection in memory. */ }
    }, [lang])
    const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en')
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    return <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t: translations[lang] }}>{children}</AppContext.Provider>
}
export const useApp = () => useContext(AppContext)
