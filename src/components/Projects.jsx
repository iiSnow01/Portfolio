import { useApp } from '../context/AppContext'

const projects = [
    { id: 'Cloud', title: 'Cloudgram', category: 'DESKTOP / PYTHON', tags: ['Python', 'PyQt6', 'SQLite', 'Telethon'],
      en: 'A desktop file manager built around Telegram storage, with asynchronous transfers and a searchable local file index.',
      fr: 'Un gestionnaire de fichiers desktop utilisant le stockage Telegram, avec transferts asynchrones et index local consultable.',
      motif: ['cloudgram/', '├── ui/', '├── core/', '└── db/'], image: 'https://raw.githubusercontent.com/iiSnow01/Cloud/main/screenshot.png' },
    { id: 'Resume-Parser', title: 'Resume Parser', category: 'AI / DOCUMENTS', tags: ['Python', 'Gemini', 'Docker', 'Jupyter'],
      en: 'A Python command-line tool that extracts structured JSON from résumé PDFs with Gemini. It includes an offline example with synthetic data.',
      fr: 'Un outil Python en ligne de commande qui extrait des données JSON structurées de CV PDF avec Gemini. Un exemple hors ligne utilise des données fictives.',
      motif: ['resume.pdf', '↓ language model', '{ name, skills,', '  experience }'],
      example: 'https://github.com/iiSnow01/Resume-Parser/blob/main/examples/expected.json' },
    { id: 'CvGenius-', title: 'CV Genius', category: 'WEB / REACT', tags: ['React', 'Vite', 'CSS', 'Framer Motion'],
      en: 'A CV editor with real-time preview, multiple templates, and a browser print dialog for saving as PDF. Includes a simulated LinkedIn import workflow.',
      fr: 'Un éditeur de CV avec aperçu en temps réel, plusieurs modèles et enregistrement en PDF via la boîte de dialogue d’impression du navigateur. Inclut un import LinkedIn simulé.',
      motif: ['<CVEditor />', '  ↳ live preview', '  ↳ templates', '  ↳ PDF export'], image: 'https://raw.githubusercontent.com/iiSnow01/CvGenius-/master/preview.png' }
]

export default function Projects() {
    const { lang } = useApp()
    const fr = lang === 'fr'
    return <section className="section-padding container" id="projects">
        <div className="section-heading"><div><p className="eyebrow">01 / {fr ? 'SÉLECTION' : 'SELECTED WORK'}</p><h2>{fr ? 'Du code, du concret.' : 'Code into practice.'}</h2></div><a className="text-link" href="https://github.com/iiSnow01?tab=repositories" target="_blank" rel="noopener noreferrer">{fr ? 'Tous les dépôts' : 'All repositories'} ↗</a></div>
        <div className="project-grid">{projects.map((p, index) => <article className="project-card" key={p.id}>
            <div className={`project-art art-${index}`}>
                <pre aria-hidden="true">{p.motif.join('\n')}</pre>
                {p.image && <img src={p.image} alt={fr ? `Interface de ${p.title}` : `${p.title} interface`} loading="lazy" onError={e => { e.currentTarget.hidden = true }} />}
                <span className="project-number">0{index + 1}</span>
            </div>
            <div className="project-content"><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p>{p[lang]}</p><ul className="tags" aria-label={fr ? 'Technologies utilisées' : 'Technologies used'}>{p.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a className="project-link" href={`https://github.com/iiSnow01/${p.id}`} target="_blank" rel="noopener noreferrer" aria-label={`${fr ? 'Voir le code de' : 'View code for'} ${p.title}`}>{fr ? 'Explorer le code' : 'Explore the code'} <span>↗</span></a>{p.example && <a className="project-link" href={p.example} target="_blank" rel="noopener noreferrer">{fr ? 'Voir un exemple JSON' : 'View sample JSON'} <span aria-hidden="true">↗</span></a>}</div>
        </article>)}</div>
    </section>
}
