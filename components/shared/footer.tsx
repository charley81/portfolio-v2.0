import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-center p-4 mt-40">
      Designed & Developed:{' '}
      <Link href="#home" className="text-primary">
        chrisharley.io
      </Link>
    </footer>
  )
}
