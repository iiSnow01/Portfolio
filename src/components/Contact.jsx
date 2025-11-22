import { motion } from 'framer-motion'

const Contact = () => {
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
                    Get In Touch
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
                            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=aguilalamine0@gmail.com"
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
                                aguilalamine0@gmail.com
                            </a>

                            <div style={{ color: 'var(--text-tertiary)' }}>
                                <p>418-575-9959</p>
                                <p>7947 avenue Hoffman, Quebec, Canada</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
