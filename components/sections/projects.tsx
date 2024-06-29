'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import ProjectCard from '../project-card'
import SectionHeading from '../shared/section-heading'
import { projectData } from '@/lib/project-data'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection])
  return (
    <section ref={ref} className="mt-40 p-4 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-8 grid gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
