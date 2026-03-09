import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Default to French as requested
    const [lang, setLang] = useState('fr');
    // Default to strict dark mode because that's our initial root design
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const t = translations[lang];

    return (
        <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
