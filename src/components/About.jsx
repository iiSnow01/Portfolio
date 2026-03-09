import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const About = () => {
    const { t } = useApp()

    return (
        <section className="section-padding" id="about">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '3rem' }}
                >
                    {t.about.title}
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            {t.about.p1}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            {t.about.p2}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t.about.skillsTitle}</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>{t.about.technical}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['NLP (BERT)', 'Vector Stores (FAISS, ChromaDB)', 'Data Pipelines', 'Python', 'Project Management'].map((skill, index) => (
                                    <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>{t.about.languages}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {t.about.langsList.map((lang, index) => (
                                    <span key={index} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
