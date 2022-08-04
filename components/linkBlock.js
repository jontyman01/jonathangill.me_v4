import Link from 'next/link'

export default function LinkBlock({ destination, a11yText, title, textColorClasses, num }) {
    return (
        <Link href={destination}>
            <a aria-label={a11yText} className="block content mb-4 p-2 dark:bg-gray-800 bg-gray-200 rounded-md">
                <p>{num}</p>
                <h2 className={`text-transparent bg-clip-text bg-gradient-to-r ${textColorClasses}`}>{title}</h2>
            </a>
        </Link>
    )
}