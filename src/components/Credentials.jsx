import { useApp } from '../context/AppContext'

const cardStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '1rem',
    padding: 'clamp(1.25rem, 4vw, 2rem)',
    lineHeight: 1.7
}

const Credentials = () => {
    const { t } = useApp()

    return (
        <section className="section-padding" id="education">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>{t.education.title}</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {t.education.items.map((item) => (
                        <article key={item.school} style={cardStyle}>
                            <h3 style={{ fontSize: '1.25rem' }}>{item.school}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.qualification}</p>
                            {item.period && <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{item.period}</p>}
                        </article>
                    ))}
                </div>
                <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '3rem 0 2rem' }}>{t.certifications.title}</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {t.certifications.items.map((item) => (
                        <article key={item.credential} style={cardStyle}>
                            <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.issuer}</p>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{item.period}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', overflowWrap: 'anywhere' }}>{t.certifications.credentialLabel}: {item.credential}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Credentials
