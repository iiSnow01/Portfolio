import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Experience = () => {
    const { t } = useApp()
    const experiences = t.experience.jobs

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -50, rotateX: -15 },
        visible: {
            opacity: 1,
            x: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.5 }
        },
        hover: {
            scale: 1.5,
            boxShadow: "0px 0px 15px var(--accent-primary)",
            transition: { duration: 0.3, yoyo: Infinity }
        }
    }

    return (
        <section className="section-padding" id="experience" style={{ overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="gradient-text" style={{ fontSize: '3rem', display: 'inline-block' }}>
                        {t.experience.title}
                    </h2>
                </motion.div>

                <motion.div
                    style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    {/* Animated side line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '2px',
                            background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
                            zIndex: 0
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                translateX: 10,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            style={{
                                marginBottom: '3rem',
                                padding: '1.5rem 1.5rem 1.5rem 2.5rem',
                                position: 'relative',
                                cursor: 'pointer',
                                zIndex: 1
                            }}
                        >
                            <motion.div
                                variants={dotVariants}
                                whileHover="hover"
                                style={{
                                    position: 'absolute',
                                    left: '-7px',
                                    top: '24px',
                                    width: '16px',
                                    height: '16px',
                                    background: 'var(--accent-primary)',
                                    borderRadius: '50%',
                                    zIndex: 2
                                }}
                            />

                            <motion.h3
                                style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}
                                whileHover={{ color: 'var(--accent-primary)' }}
                                transition={{ duration: 0.2 }}
                            >
                                {exp.role}
                            </motion.h3>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-tertiary)', flexWrap: 'wrap', gap: '10px' }}>
                                <motion.span
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1, fontWeight: 'bold' }}
                                >
                                    {exp.company}
                                </motion.span>
                                <motion.span
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--border-color)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem'
                                    }}
                                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: '#fff', borderColor: 'var(--accent-primary)' }}
                                >
                                    {exp.period}
                                </motion.span>
                            </div>

                            <motion.p
                                style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {exp.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
