import Image from 'next/image'

export default function Intro() {
  return (
    <section className="mx-auto max-w-xl p-4">
      <Image
        src="https://utfs.io/f/2ffde9f0-d2b4-42d4-bd4b-32342983bc80-rbakq.png"
        alt="Chris Harley Portrait"
        width={192}
        height={192}
        quality={95}
        priority
        className="h-24 w-24 rounded-full border-[0.35rem] border-muted-foreground shadow-xl object-cover mx-auto"
      />
      <p className="text-center mt-4 text-muted-foreground">
        Hey, I’m Chris. I’m a UX Engineer with over 5 years experience focused
        on building beautiful interfaces & experiences My focus is Figma &
        React.
      </p>
    </section>
  )
}

{
}
