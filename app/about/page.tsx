import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  )
}
