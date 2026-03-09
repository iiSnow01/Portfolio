import { motion } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useApp } from '../context/AppContext'

const Home = () => {
    const { t } = useApp()
    const fullName = t.home.title

    const nameContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: -80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 150
            }
        }
    }

    return (
        <div className="page home">
            <section className="hero" id="home" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '80px',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <motion.div
                        key={fullName} // re-render on translation change
                        variants={nameContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="gradient-text"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 'bold' }}
                    >
                        {fullName.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                style={{
                                    display: 'inline-block',
                                    whiteSpace: char === " " ? "pre" : "normal"
                                }}
                                whileHover={{
                                    y: -10,
                                    color: 'var(--accent-primary)',
                                    textShadow: '0 0 15px var(--accent-primary)',
                                    transition: { type: 'spring', stiffness: 300 }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}
                    >
                        {t.home.subtitle}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
                    >
                        {t.home.description}
                    </motion.p>
                </div>
            </section>

            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
