import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  links: {
    live: string
    github: string
  }
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  links: { live, github }
}: ProjectCardProps) {
  return (
    <div className="shadow-lg py-8 px-4 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="py-8 text-muted-foreground leading-6">{description}</p>
      <Image
        src={imageUrl}
        alt={title}
        height={400}
        width={400}
        quality={95}
        className="hidden lg:block"
      />
      <ul className="text-sm font-semibold flex justify-between text-muted-foreground">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <footer className="flex items-center justify-between mt-8">
        <ul className="text-primary flex">
          <li>
            <a href={github}>
              <Github />
            </a>
          </li>
          <li>
            <a href={live}>
              <ExternalLink />
            </a>
          </li>
        </ul>

        <Button variant="ghost" asChild className="text-primary">
          <Link href={`/${title}`}>View Case Study</Link>
        </Button>
      </footer>
    </div>
  )
}
