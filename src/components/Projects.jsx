import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Projects = () => {
    const { t } = useApp()
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Scroll container ref for horizontal parallax
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]) // Stop before the end so the last item is visible

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/iiSnow01/repos?sort=updated&per_page=6');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setProjects(data.slice(0, 6));
                setLoading(false);
            } catch (err) {
                console.error("Error fetching GitHub projects:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" ref={targetRef} style={{ position: 'relative', height: '300vh', background: 'var(--bg-primary)' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 'var(--space-lg) 0' }}>
                <div className="container" style={{ marginBottom: '2rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="gradient-text"
                        style={{ fontSize: '3.5rem', textAlign: 'right', display: 'inline-block', float: 'right' }}
                    >
                        {t.projects.title}
                    </motion.h2>
                    <div style={{ clear: 'both' }}></div>
                </div>

                <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center', flex: 1 }}>
                    <AnimatePresence mode="wait">
                        {loading && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    style={{ width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', marginBottom: '1rem' }}
                                />
                                <p style={{ fontSize: '1.1rem' }}>{t.projects.loading}</p>
                            </motion.div>
                        )}

                        {error && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', color: '#ef4444' }}
                            >
                                <p style={{ fontSize: '1.1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem 2rem', borderRadius: '8px' }}>
                                    {t.projects.error}
                                </p>
                            </motion.div>
                        )}

                        {!loading && !error && (
                            <motion.div
                                key="content"
                                style={{ x, display: 'flex', gap: '4rem', padding: '0 5vw' }}
                            >
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        whileHover={{ y: -15, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                        style={{
                                            background: 'var(--bg-secondary)',
                                            borderRadius: '2rem',
                                            overflow: 'hidden',
                                            border: '1px solid var(--border-color)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '450px',
                                            height: '500px',
                                            flexShrink: 0, /* Prevent shrinking in flex container */
                                            position: 'relative',
                                            transition: 'var(--transition-normal)'
                                        }}
                                    >
                                        <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: 'var(--accent-primary)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1.5px',
                                                    fontWeight: 'bold',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.75rem'
                                                }}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                                    {project.language || 'Code'}
                                                </span>
                                                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-tertiary)', fontSize: '1rem' }}>
                                                    <span title={t.projects.stars || "Stars"} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        {project.stargazers_count}
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', wordBreak: 'break-word', lineHeight: 1.2 }}>
                                                {project.name.replace(/-/g, ' ')}
                                            </h3>

                                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                                                {project.description || "Aucune description fournie / No description provided."}
                                            </p>

                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '1rem 2rem',
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-primary)',
                                                    textDecoration: 'none',
                                                    borderRadius: '12px',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 'bold',
                                                    border: '1px solid var(--border-color)',
                                                    transition: 'all 0.3s ease',
                                                    marginTop: 'auto'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = 'var(--accent-gradient)';
                                                    e.currentTarget.style.color = '#fff';
                                                    e.currentTarget.style.border = '1px solid transparent';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                                                    e.currentTarget.style.color = 'var(--text-primary)';
                                                    e.currentTarget.style.border = '1px solid var(--border-color)';
                                                }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                {t.projects.viewProject}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Projects
