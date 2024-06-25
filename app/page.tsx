import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
    </div>
  )
}
