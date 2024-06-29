'use client'

import ProjectCard from '../project-card'
import SectionHeading from '../shared/section-heading'
import { projectData } from '@/lib/project-data'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Home')

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
