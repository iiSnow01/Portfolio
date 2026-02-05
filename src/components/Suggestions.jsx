import { motion } from 'framer-motion'

const Suggestions = () => {
    const roadmap = [
        {
            title: 'Add a downloadable CV',
            why: 'Recruiters can save and share your profile quickly.',
            impact: 'High impact',
            effort: 'Low effort'
        },
        {
            title: 'Turn each project into a case study',
            why: 'Explain the problem, your role, architecture, and measurable outcome.',
            impact: 'High impact',
            effort: 'Medium effort'
        },
        {
            title: 'Publish 1-2 live demos',
            why: 'Hands-on links increase trust and reduce evaluation friction.',
            impact: 'High impact',
            effort: 'Medium effort'
        },
        {
            title: 'Add GitHub proof links',
            why: 'Point to key repos, READMEs, and specific commits/features you own.',
            impact: 'Medium impact',
            effort: 'Low effort'
        },
        {
            title: 'Include 2-3 testimonials',
            why: 'Short recommendations validate collaboration and delivery skills.',
            impact: 'Medium impact',
            effort: 'Low effort'
        },
        {
            title: 'Show certifications and learning plan',
            why: 'Demonstrates continuous growth and direction in AI/data topics.',
            impact: 'Medium impact',
            effort: 'Low effort'
        }
    ]

    return (
        <section className="section-padding" id="suggestions" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}
                >
                    What to Add Next
                </motion.h2>

                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Prioritized improvements to make your portfolio stronger for recruiters and hiring managers.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {roadmap.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            style={{
                                border: '1px solid var(--border-color)',
                                borderRadius: '0.9rem',
                                padding: '1.5rem',
                                background: 'var(--bg-tertiary)'
                            }}
                        >
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>{item.why}</p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ padding: '0.25rem 0.6rem', borderRadius: '999px', border: '1px solid rgba(59, 130, 246, 0.35)', color: 'var(--accent-primary)', fontSize: '0.8rem' }}>{item.impact}</span>
                                <span style={{ padding: '0.25rem 0.6rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{item.effort}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Suggestions
