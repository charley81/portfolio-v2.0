import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const marginTop = 64 + 5 * 16
  return (
    <div
      className="mx-auto md:max-w-[768px] lg:max-w-[1024px]"
      style={{ marginTop: `${marginTop}px` }}
    >
      <h1 className="text-4xl ">Home Page</h1>
    </div>
  )
}
