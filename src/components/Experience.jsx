import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            role: "Assistant Optométriste et Vendeur",
            company: "LAVUE.CA (Québec, Canada)",
            period: "Oct 2024 – Aujourd’hui",
            description: "Gestion des dossiers patients, assistance aux examens visuels, conseil client, et gestion des ventes et encaissements. Développement de compétences en communication et service client."
        },
        {
            role: "Chargé de Projets TI",
            company: "TROUVE TA VOIE (Paris, France)",
            period: "Sept 2023 – Juil 2024",
            description: "Conception et implémentation de pipelines NLP (BERT), intégration de bases vectorielles (FAISS, ChromaDB), optimisation de la recherche sémantique et collaboration technique pour l'intégration de solutions IA."
        }
    ]

    return (
        <section className="section-padding" id="experience" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                marginBottom: '3rem',
                                paddingLeft: '2rem',
                                borderLeft: '2px solid var(--accent-primary)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: '0',
                                width: '16px',
                                height: '16px',
                                background: 'var(--accent-primary)',
                                borderRadius: '50%'
                            }} />

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-tertiary)' }}>
                                <span>{exp.company}</span>
                                <span>{exp.period}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
