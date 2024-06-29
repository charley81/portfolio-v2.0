'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../shared/section-heading'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function About() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.75
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('About')
    }
  }, [inView, setActiveSection])

  return (
    <motion.section
      ref={ref}
      className="mt-40 p-4 mx-auto  max-w-4xl scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <div
        className="mt-8 text-muted-foreground flex flex-col 
      gap-8 md:text-center mx-auto lg:max-w-[728px] leading-8"
      >
        <p>
          Chris Harley is a skilled UX engineer with over five years of
          experience in designing user-centered digital solutions. He
          specializes in user research, wire framing, prototyping, and creating
          seamless user experiences with technologies like HTML, CSS,
          JavaScript, Typescript, React, and Tailwind CSS. Chris has a strong
          background in both freelance work and corporate projects, including
          Progressive Leasing.
        </p>
        <p>
          Holding multiple software engineering and UX design certifications and
          a degree from Berklee College of Music, Chris is passionate about
          mentoring and team collaboration. He consistently enhances user
          engagement and satisfaction through innovative design and development,
          leveraging his comprehensive expertise to deliver high-quality digital
          solutions.
        </p>
      </div>
    </motion.section>
  )
}
