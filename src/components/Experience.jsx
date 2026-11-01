import { useApp } from '../context/AppContext'
export default function Experience() {
    const { lang, t } = useApp()
    return <section className="section-padding container" id="experience"><div className="section-heading"><div><p className="eyebrow">03 / {lang === 'fr' ? 'PARCOURS' : 'MY JOURNEY'}</p><h2>{t.experience.title}</h2></div><span className="section-aside">{lang === 'fr' ? 'Maroc · Canada · À distance' : 'Morocco · Canada · Remote'}</span></div>
        <ol className="timeline">{t.experience.jobs.map((job, index) => <li className="timeline-item" key={job.company}>
            <div className="timeline-period"><span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'} />{job.period}</div>
            <div className="timeline-content"><h3>{job.role}</h3><p className="company">{job.company}</p><p className="job-details">{job.details}</p>{job.description && <p className="job-description">{job.description}</p>}</div>
        </li>)}</ol>
    </section>
}
