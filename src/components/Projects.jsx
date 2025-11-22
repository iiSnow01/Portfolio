import { motion } from 'framer-motion'

const Projects = () => {
    const projects = [
        {
            title: "NLP Pipeline Architecture",
            category: "Machine Learning",
            description: "Designed and implemented text processing pipelines using BERT and SentenceTransformers to generate high-quality embeddings for large datasets.",
            tags: ["BERT", "Python", "NLP", "Transformers"]
        },
        {
            title: "Vector Search Integration",
            category: "Backend Engineering",
            description: "Integrated and optimized vector stores (FAISS, ChromaDB) to enable real-time semantic search capabilities within existing applications.",
            tags: ["FAISS", "ChromaDB", "Search Algorithms", "Performance Optimization"]
        },
        {
            title: "Intelligent Chatbot System",
            category: "AI Application",
            description: "Collaborated on the development of a smart chatbot by integrating vector search and LLMs, significantly improving user query resolution.",
            tags: ["LLM", "RAG", "Chatbot", "AI"]
        }
    ]

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
                    Key Projects
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-tertiary)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ padding: '2rem', flex: 1 }}>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-secondary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'bold'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.75rem', margin: '1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-tertiary)',
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '4px'
                                        }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
