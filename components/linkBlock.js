import Link from 'next/link'

export default function LinkBlock({ destination, a11yText, title, textColorClasses, bgColorClasses, num, company, skill_1 }) {
    return (
        <Link href={destination}>
            <a aria-label={a11yText} className={`block content mb-4 p-4 rounded-md ${bgColorClasses}`}>
                <p>{num}</p>
                <h2 className={`text-transparent bg-clip-text bg-gradient-to-r ${textColorClasses}`}>{title}</h2>
                <p>{company}</p>
                <span class='rounded-full bg-gray-600 p-1'>{skill_1}</span>
            </a>
        </Link>
    )
}