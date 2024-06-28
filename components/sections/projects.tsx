import ProjectCard from '../project-card'
import SectionHeading from '../shared/section-heading'
import { projectData } from '@/lib/project-data'

export default function Projects() {
  return (
    <div className="mt-40 p-4">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-8 grid gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
