import { useApp } from '../context/AppContext'
export default function Credentials() {
    const { lang, t } = useApp()
    return <section className="section-padding container credentials-section" id="education"><p className="eyebrow">04 / {lang === 'fr' ? 'APPRENTISSAGE' : 'LEARNING'}</p><div className="credentials-grid">
        <div><h2>{t.education.title}</h2><div className="credential-list">{t.education.items.map(item => <article className="credential" key={item.school}><p className="credential-date">{item.period}</p><h3>{item.school}</h3><p>{item.qualification}</p></article>)}</div></div>
        <div><h2>{t.certifications.title}</h2><div className="credential-list">{t.certifications.items.map(item => <article className="credential" key={item.credential}><p className="credential-date">{item.period}</p><h3>{item.title}</h3><p>{item.issuer}</p><small>{t.certifications.credentialLabel}: {item.credential}</small></article>)}</div></div>
    </div></section>
}
