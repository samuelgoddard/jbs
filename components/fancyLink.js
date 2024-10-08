import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a scroll={false} aria-label={a11yText} className={`underline hover:text-gray-500 focus:text-gray-500 ${extraClasses}`}>
        {label}
      </a>
    </Link>
  )
}