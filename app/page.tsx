import { Button } from '@/components/ui/button'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <main className="p-8">
      <h1 className="text-base font-thin tracking-wide md:text-2xl lg:text-4xl">
        portfolio V2.0 by: chrisharley.io &copy; {currentYear}
      </h1>
      <Button>Fake Button</Button>
    </main>
  )
}
