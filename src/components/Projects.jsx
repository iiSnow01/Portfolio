import { useApp } from '../context/AppContext'

const github = 'https://github.com/iiSnow01/'
const publicAssets = import.meta.env.BASE_URL

const projects = [
    {
        id: 'Resume-Parser',
        title: 'Resume Parser',
        category: { en: 'AI / DOCUMENTS', fr: 'IA / DOCUMENTS' },
        tags: ['Python', 'Gemini', 'Docker', 'Jupyter'],
        description: {
            en: 'I built a Python command-line tool that turns résumé PDFs into structured JSON with Gemini. The bundled example runs offline with synthetic data.',
            fr: 'J’ai créé un outil Python qui extrait des données JSON de CV PDF avec Gemini. L’exemple fourni fonctionne hors ligne avec des données fictives.'
        },
        motif: ['resume.pdf', '→ structured JSON', '{ name, skills,', '  experience }'],
        evidence: [
            { href: github + 'Resume-Parser/blob/main/examples/sample-resume.pdf', en: 'Sample PDF', fr: 'Exemple PDF' },
            { href: github + 'Resume-Parser/blob/main/examples/expected.json', en: 'Sample JSON', fr: 'Exemple JSON' }
        ]
    },
    {
        id: 'Cloud',
        title: 'Cloudgram',
        category: { en: 'DESKTOP / PYTHON', fr: 'BUREAU / PYTHON' },
        tags: ['Python', 'PyQt6', 'SQLite', 'Telethon'],
        description: {
            en: 'I built a desktop file manager for Telegram storage with asynchronous transfers and a searchable SQLite index.',
            fr: 'J’ai créé un gestionnaire de fichiers de bureau pour le stockage Telegram, avec transferts asynchrones et recherche dans un index SQLite.'
        },
        image: publicAssets + 'cloudgram-search.png',
        alt: { en: 'Cloudgram showing two sample files matching the search “report”', fr: 'Cloudgram affiche deux fichiers fictifs correspondant à la recherche « report »' },
        motif: ['Cloudgram', 'Search: report', 'report-q1.pdf', 'report-q2.pdf'],
        evidence: [{ href: github + 'Cloud#offline-search-example', en: 'Offline search example', fr: 'Exemple de recherche hors ligne' }]
    },
    {
        id: 'CvGenius-',
        title: 'CV Genius',
        category: { en: 'WEB / REACT', fr: 'WEB / REACT' },
        tags: ['React', 'Vite', 'CSS', 'Framer Motion'],
        description: {
            en: 'I built a React résumé editor with live preview, two templates, and browser-based PDF export. The LinkedIn import is simulated.',
            fr: 'J’ai créé un éditeur de CV React avec aperçu en direct, deux modèles et export PDF via le navigateur. L’import LinkedIn est simulé.'
        },
        image: publicAssets + 'cv-genius-editor.jpg',
        alt: { en: 'CV Genius editor with its form and a sample résumé preview', fr: 'Éditeur CV Genius avec son formulaire et l’aperçu d’un CV fictif' },
        motif: ['CV Editor', 'Live preview', 'Modern / Creative', 'Print / Save as PDF'],
        evidence: [{ href: publicAssets + 'cv-genius-editor.jpg', en: 'View editor screenshot', fr: 'Voir la capture de l’éditeur' }]
    }
]

const archive = [
    {
        id: 'se7ti', title: 'Se7ti',
        status: { en: 'Multilingual site', fr: 'Site multilingue' },
        description: {
            en: 'I built the multilingual navigation and searchable directory for a static site in Darija, Arabic, and French.',
            fr: 'J’ai développé la navigation multilingue et la recherche pour un site statique en darija, arabe et français.'
        }
    },
    {
        id: 'gtchicken-', title: 'GT Chicken',
        status: { en: 'Static demo', fr: 'Démo statique' },
        description: {
            en: 'I built a Darija product catalogue with a right-to-left layout and a contact form that can be tried locally.',
            fr: 'J’ai développé un catalogue en darija avec une interface de droite à gauche et un formulaire de contact de démonstration.'
        }
    }
]

export default function Projects() {
    const { lang } = useApp()
    const fr = lang === 'fr'
    const codeLabel = fr ? 'Voir le code' : 'View source'

    return (
        <section className="section-padding container" id="projects">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">{fr ? 'SÉLECTION' : 'SELECTED WORK'}</p>
                    <h2>{fr ? 'Du code, du concret.' : 'Code into practice.'}</h2>
                </div>
                <a className="text-link" href="https://github.com/iiSnow01?tab=repositories" target="_blank" rel="noopener noreferrer">
                    {fr ? 'Tous les dépôts' : 'All repositories'}
                </a>
            </div>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <article className="project-card" key={project.id}>
                        <div className={'project-art art-' + index}>
                            <pre aria-hidden="true">{project.motif.join('\n')}</pre>
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.alt[lang]}
                                    loading="lazy"
                                    onError={event => { event.currentTarget.hidden = true }}
                                />
                            )}
                        </div>
                        <div className="project-content">
                            <p className="eyebrow">{project.category[lang]}</p>
                            <h3>{project.title}</h3>
                            <p>{project.description[lang]}</p>
                            <ul className="tags" aria-label={fr ? 'Technologies utilisées' : 'Technologies used'}>
                                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                            <div className="project-actions">
                                <a
                                    href={github + project.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={codeLabel + ' · ' + project.title}
                                >
                                    {codeLabel}
                                </a>
                                {project.evidence.map(link => (
                                    <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link[lang]}</a>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <section className="project-archive" id="project-archive" aria-labelledby="archive-title">
                <h2 id="archive-title">{fr ? 'Autres projets' : 'Other projects'}</h2>
                <ul className="archive-grid">
                    {archive.map(project => (
                        <li key={project.id}>
                            <p className="eyebrow">{project.status[lang]}</p>
                            <h3>{project.title}</h3>
                            <p>{project.description[lang]}</p>
                            <a
                                href={github + project.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={codeLabel + ' · ' + project.title}
                            >
                                {codeLabel}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
