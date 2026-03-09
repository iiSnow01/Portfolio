import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Contact = () => {
    const { t } = useApp()

    return (
        <section className="section-padding" id="contact" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ width: '100%' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    {t.contact.title}
                </motion.h2>

                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '3rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            {t.contact.description}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            <a
                                href={`mailto:${t.contact.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '1rem 2rem',
                                    background: 'var(--accent-primary)',
                                    color: 'white',
                                    borderRadius: '50px',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}
                            >
                                {t.contact.email}
                            </a>

                            <div style={{ color: 'var(--text-tertiary)' }}>
                                <p>{t.contact.phone}</p>
                                <p>{t.contact.address}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
