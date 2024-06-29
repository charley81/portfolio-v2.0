import About from '@/components/sections/about'
import Intro from '@/components/sections/intro'
import Projects from '@/components/sections/projects'
import Footer from '@/components/shared/footer'

export default function Home() {
  const marginTop = 64 + 5 * 16

  return (
    <div
      className="mx-auto sm:max-w-[628px] md:max-w-[728px] lg:max-w-[900px]"
      style={{ marginTop: `${marginTop}px` }}
    >
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
