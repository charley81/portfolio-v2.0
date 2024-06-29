'use client'

import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      className="shadow-lg py-8 px-4 rounded-lg lg:flex lg:flex-row"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <div
        className="basis-1/2
      "
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="py-8 text-muted-foreground leading-8">{description}</p>
        <ul className="text-sm font-semibold flex justify-between text-muted-foreground pr-4">
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
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        height={100}
        width={800}
        className="hidden lg:block basis-1/2 object-cover"
      />
    </motion.div>
  )
}
