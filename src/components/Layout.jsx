import { Outlet } from 'react-router-dom'

const Layout = () => {
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
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
                    </a>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#suggestions">Roadmap</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout
