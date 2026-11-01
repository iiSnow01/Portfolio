import { Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Layout() {
    const { lang, theme, toggleLang, toggleTheme } = useApp()
    const fr = lang === 'fr'
    return <div className="layout">
        <a className="skip-link" href="#main">{fr ? 'Aller au contenu' : 'Skip to content'}</a>
        <header className="site-header"><nav className="container nav-shell" aria-label={fr ? 'Navigation principale' : 'Main navigation'}>
            <a className="wordmark" href="#home" aria-label="Amine Aguilal">amine<span>.</span></a>
            <div className="nav-links">
                <a href="#projects">{fr ? 'Projets' : 'Projects'}</a>
                <a href="#experience">{fr ? 'Parcours' : 'Experience'}</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="nav-controls">
                <button onClick={toggleLang} aria-label={fr ? 'Switch to English' : 'Passer en français'}>{lang === 'fr' ? 'EN' : 'FR'}</button>
                <button onClick={toggleTheme} aria-label={theme === 'dark' ? (fr ? 'Mode clair' : 'Light theme') : (fr ? 'Mode sombre' : 'Dark theme')}>{theme === 'dark' ? '☀' : '☾'}</button>
            </div>
        </nav></header>
        <main id="main"><Outlet /></main>
        <footer className="container site-footer"><a className="wordmark" href="#home">amine<span>.</span></a><p>© {new Date().getFullYear()} Amine Aguilal</p><a href="https://github.com/iiSnow01" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer>
    </div>
}
