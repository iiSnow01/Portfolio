import { motion } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div className="page home">
            <section className="hero" id="home" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '80px'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="gradient-text"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1rem' }}
                    >
                        Amine Aguilal
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}
                    >
                        IT Project Manager & Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Specializing in NLP, Data Pipelines, and Digital Solutions.
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
