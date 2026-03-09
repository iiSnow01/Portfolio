import { motion, useScroll, useTransform } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useApp } from '../context/AppContext'
import { useRef } from 'react'

const Home = () => {
    const { t } = useApp()
    const fullName = t.home.title

    // Creative Scroll Animation: Parallax Effect for Hero
    const { scrollY } = useScroll()
    const yHero = useTransform(scrollY, [0, 800], [0, 400]) // As you scroll down 800px, move text down by 400px (slower perceived scrolling)
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]) // Fade out based on scroll

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
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '80px',
                overflow: 'hidden'
            }}>
                <motion.div
                    className="container"
                    style={{ y: yHero, opacity: opacityHero, zIndex: 1 }}
                >
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
                </motion.div>

                {/* Scroll Indicator Arrow Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        x: '-50%',
                        zIndex: 2,
                        opacity: opacityHero
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{
                            width: '30px',
                            height: '50px',
                            border: '2px solid var(--text-secondary)',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '8px'
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 15], opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            style={{
                                width: '4px',
                                height: '8px',
                                background: 'var(--accent-primary)',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.div>
                </motion.div>
            </section>

            <div style={{ position: 'relative', zIndex: 10 }}>
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home
