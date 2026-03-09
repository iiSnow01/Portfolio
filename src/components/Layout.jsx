import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Layout = () => {
    const { lang, theme, toggleLang, toggleTheme, t } = useApp()

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' }
    ]

    return (
        <div className="layout">
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                zIndex: 100,
                backdropFilter: 'blur(10px)',
                background: theme === 'dark' ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <motion.button
                            onClick={toggleLang}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            {lang.toUpperCase()}
                        </motion.button>
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '1.1rem'
                            }}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </motion.button>
                    </div>

                    <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 150, damping: 12 }}
                            >
                                <motion.a
                                    href={link.href}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'var(--accent-primary)',
                                        color: '#fff',
                                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1.2rem',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        fontWeight: '500',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-secondary)',
                                        transition: 'background-color 0.3s'
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                <p>&copy; {new Date().getFullYear()} Amine Aguilal. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout
