import Intro from '@/components/sections/intro'

export default function Home() {
  const marginTop = 64 + 5 * 16
  return (
    <div
      className="mx-auto md:max-w-[768px] lg:max-w-[1024px]"
      style={{ marginTop: `${marginTop}px` }}
    >
      <Intro />
    </div>
  )
}
