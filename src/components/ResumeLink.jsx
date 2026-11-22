import { useApp } from '../context/AppContext'

const resumes = {
    en: 'Amine-Aguilal-Resume-EN.pdf',
    fr: 'Amine-Aguilal-CV-FR.pdf'
}

export default function ResumeLink({ className }) {
    const { lang, t } = useApp()
    const file = resumes[lang]

    return <a className={className} href={import.meta.env.BASE_URL + file} download>
        {t.home.downloadResume}
    </a>
}
