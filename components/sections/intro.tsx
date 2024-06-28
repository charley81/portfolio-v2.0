'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="mx-auto sm:max-w-[628px] md:max-w-[728px] lg:max-w-[1024px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Image
          src="https://utfs.io/f/2ffde9f0-d2b4-42d4-bd4b-32342983bc80-rbakq.png"
          alt="Chris Harley Portrait"
          width={192}
          height={192}
          quality={95}
          priority
          className="h-24 w-24 rounded-full border-[0.35rem] border-muted-foreground shadow-xl object-cover mx-auto"
        />
      </motion.div>

      <motion.p
        className="text-center mt-4 text-muted-foreground leading-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hey, I’m Chris. I’m a UX Engineer with over 5 years experience focused
        on building beautiful interfaces & experiences My focus is Figma &
        React.
      </motion.p>

      <motion.div
        className="lg:flex lg:justify-between lg:gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col gap-2 mt-8 md:flex-row md:justify-between md:gap-4 lg:w-full lg:gap-2">
          <Button className="w-full">
            <Link
              href="#contact"
              className="p-16"
              aria-label="Go to contact section"
            >
              Contact
            </Link>
          </Button>
          <Button className="w-full" variant="outline">
            <a
              href="/chris-harley.pdf"
              target="_blank"
              className="p-16"
              aria-label="View and download resume"
            >
              Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8 ">
          <div className="p-2 border-2 border-primary inline-block rounded-full cursor-pointer hover:scale-x-105 hover:text-primary-foreground">
            <a
              href="https://www.linkedin.com/in/charley81/"
              download
              aria-label="Go to Chris Harley's LinkedIn page"
            >
              <Linkedin className="text-muted-foreground" />
            </a>
          </div>
          <div className="p-2 border-2 border-primary inline-block rounded-full ml-2 cursor-pointer hover:scale-x-105 hover:text-primary-foreground">
            <a
              href="https://github.com/charley81"
              target="_blank"
              aria-label="Go to Chris Harley's Github profile"
            >
              <Github className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

{
}
