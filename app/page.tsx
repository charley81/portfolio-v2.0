import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <h1>Home</h1>
      <Button>
        <Link href="/about">About</Link>
      </Button>
    </div>
  )
}
