import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Projects = () => {
    const { t } = useApp()
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetching pinned or latest repos from GitHub (using repos endpoint sorted by update)
                const response = await fetch('https://api.github.com/users/iiSnow01/repos?sort=updated&per_page=6');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();

                // Optional: filter out forks if needed 
                // data = data.filter(repo => !repo.fork);

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section className="section-padding" id="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'right' }}
                >
                    {t.projects.title}
                </motion.h2>

                <div style={{ minHeight: '300px', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        {loading && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
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
                                style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}
                            >
                                <p style={{ fontSize: '1.1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem 2rem', borderRadius: '8px' }}>
                                    {t.projects.error}
                                </p>
                            </motion.div>
                        )}

                        {!loading && !error && (
                            <motion.div
                                key="content"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
                            >
                                {projects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            borderRadius: '1rem',
                                            overflow: 'hidden',
                                            border: '1px solid var(--border-color)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            transition: 'var(--transition-normal)'
                                        }}
                                    >
                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: 'var(--accent-primary)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    fontWeight: 'bold',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                                    {project.language || 'Code'}
                                                </span>
                                                <div style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                                                    <span title={t.projects.stars || "Stars"} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        {project.stargazers_count}
                                                    </span>
                                                    <span title={t.projects.forks || "Forks"} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>
                                                        {project.forks_count}
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', wordBreak: 'break-word', lineHeight: 1.3 }}>
                                                {project.name.replace(/-/g, ' ')}
                                            </h3>

                                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                                                {project.description || "Aucune description fournie / No description provided."}
                                            </p>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                                {project.topics && project.topics.length > 0 && project.topics.slice(0, 4).map((topic, i) => (
                                                    <span key={i} style={{
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-tertiary)',
                                                        background: 'var(--bg-secondary)',
                                                        border: '1px solid var(--border-color)',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '4px'
                                                    }}>
                                                        #{topic}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.8rem 1.5rem',
                                                    background: 'var(--bg-secondary)',
                                                    color: 'var(--text-primary)',
                                                    textDecoration: 'none',
                                                    borderRadius: '8px',
                                                    fontWeight: 'bold',
                                                    border: '1px solid var(--border-color)',
                                                    transition: 'all 0.2s ease',
                                                    marginTop: 'auto'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = 'var(--text-primary)';
                                                    e.currentTarget.style.color = 'var(--bg-primary)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'var(--bg-secondary)';
                                                    e.currentTarget.style.color = 'var(--text-primary)';
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
