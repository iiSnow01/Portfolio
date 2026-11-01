import { useApp } from '../context/AppContext'
const skills = ['Python', 'React.js', 'PHP', 'MySQL', 'Flask', 'Tkinter', 'NumPy', 'C', 'VB.NET', 'Packet Tracer', 'Git', 'NLP (BERT)', 'FAISS / ChromaDB', 'Data Pipelines']
export default function About() {
    const { lang, t } = useApp()
    const fr = lang === 'fr'
    return <section className="section-padding about-section" id="about"><div className="container about-grid">
        <div><p className="eyebrow">02 / {fr ? 'À PROPOS' : 'ABOUT'}</p><h2>{fr ? 'Curieux par nature.\nDéveloppeur par choix.' : 'Curious by nature.\nDeveloper by choice.'}</h2><p className="body-copy">{t.about.p1}</p><p className="body-copy">{t.about.p2}</p><a className="button" href={`mailto:${t.contact.email}?subject=${encodeURIComponent(fr ? "Demande de CV" : "CV request")}`}>{fr ? 'Demander mon CV' : 'Request my CV'} ↗</a></div>
        <div className="skills-panel"><h3>{t.about.skillsTitle}</h3><p className="eyebrow">{t.about.technical}</p><ul className="tags skill-tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul><p className="eyebrow language-label">{t.about.languages}</p><div className="language-list">{t.about.langsList.map(l => <span key={l}>{l}</span>)}</div></div>
    </div></section>
}
