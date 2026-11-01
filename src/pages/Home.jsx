import { motion, useReducedMotion } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Credentials from '../components/Credentials'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useApp } from '../context/AppContext'

export default function Home() {
    const { lang, t } = useApp()
    const fr = lang === 'fr'
    const reduced = useReducedMotion()
    return <>
        <section className="hero container" id="home">
            <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="availability"><span />{fr ? 'Ouvert aux opportunités' : 'Open to opportunities'}</p>
                <p className="eyebrow">{t.home.subtitle}</p>
                <h1>Amine<br /><span>Aguilal.</span></h1>
                <p className="hero-description">{fr ? 'Du code aux applications. Je développe avec Python et React, avec un intérêt pour les outils utiles et la data.' : 'From code to applications. I build with Python and React, with a focus on useful tools and data.'}</p>
                <div className="hero-actions"><a className="button primary" href="#projects">{fr ? 'Voir mes projets' : 'Explore projects'} <span>↗</span></a><a className="button" href="#contact">{fr ? 'Me contacter' : 'Get in touch'} <span>↗</span></a></div>
                <p className="hero-location">Casablanca, {fr ? 'Maroc' : 'Morocco'} <span>·</span> Python / React.js / PHP / MySQL</p>
            </motion.div>
            <motion.div className="hero-visual" aria-hidden="true" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="code-window"><div className="window-bar"><span className="window-dots">● ● ●</span><span>developer.py</span><span>PY</span></div>
                <div className="code-body"><p><i>01</i> <em>class</em> <b>Developer</b>:</p><p><i>02</i> &nbsp; name = <q>Amine Aguilal</q></p><p><i>03</i> &nbsp; based_in = <q>Casablanca</q></p><p><i>04</i> &nbsp; stack = [</p><p><i>05</i> &nbsp; &nbsp; <q>Python</q>, <q>React.js</q>,</p><p><i>06</i> &nbsp; &nbsp; <q>PHP</q>, <q>MySQL</q></p><p><i>07</i> &nbsp; ]</p><p><i>08</i> &nbsp; <span className="code-comment"># Build. Learn. Improve.</span></p></div>
                <div className="window-status"><span>●</span> {fr ? 'Toujours en apprentissage' : 'Always learning'}<span>UTF-8</span></div></div>
                <div className="visual-caption"><span>01 — WEB</span><span>02 — PYTHON</span><span>03 — DATA</span></div>
            </motion.div>
        </section>
        <div className="stack-strip"><div className="container"><span>PYTHON</span><span>REACT.JS</span><span>PHP / MYSQL</span><span>FLASK</span><span>GIT</span></div></div>
        <Projects /><About /><Experience /><Credentials /><Contact />
    </>
}
