import { useApp } from '../context/AppContext'
export default function Contact() {
    const { lang, t } = useApp()
    const fr = lang === 'fr'
    return <section className="contact-section section-padding" id="contact"><div className="container">
        <p className="eyebrow">05 / CONTACT</p><div className="contact-grid"><div><h2>{fr ? 'Un projet ?\nParlons-en.' : 'Have something\nin mind?'}</h2><p className="body-copy">{fr ? 'Une opportunité, une collaboration ou une question : je serais ravi d’échanger avec vous.' : 'An opportunity, a collaboration, or a question — I would be happy to hear from you.'}</p><a className="contact-email" href={`mailto:${t.contact.email}`}>{t.contact.email} ↗</a></div><div className="contact-links"><p className="availability"><span />{fr ? 'Ouvert aux opportunités' : 'Open to opportunities'}</p><a href="tel:+212772132833">{t.contact.phone} ↗</a><p>{t.contact.address}</p><a href="https://www.linkedin.com/in/amine-aguilal-7b758425a/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/iiSnow01" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`mailto:${t.contact.email}?subject=${encodeURIComponent(fr ? "Demande de CV" : "CV request")}`}>{fr ? 'Demander mon CV' : 'Request my CV'} ↗</a></div></div>
    </div></section>
}
