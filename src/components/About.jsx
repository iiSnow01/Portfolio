import { motion } from 'framer-motion'

const About = () => {
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
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Diplômé d’un BTS en développement informatique, je suis passionné par les nouvelles technologies et la résolution de problèmes.
                            Fort d’une expérience variée allant de la gestion de projets TI à l'assistance optométrique, j'ai développé une polyvalence unique.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Je souhaite intégrer une entreprise dynamique où je pourrai mettre à profit mes compétences techniques (NLP, Vector Stores, Pipeline de données),
                            ma rigueur et mon sens du relationnel pour contribuer au succès de projets informatiques ambitieux.
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
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Skills & Languages</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Technical</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['NLP (BERT)', 'Vector Stores (FAISS, ChromaDB)', 'Data Pipelines', 'Python', 'Project Management'].map((skill, index) => (
                                    <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Languages</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['Français', 'Anglais', 'Arabe'].map((lang, index) => (
                                    <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
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
