import { notFound } from "next/navigation"
import ProjectCard from "@/components/project-card"
import { getProjectsByCategory } from "@/lib/projects"

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryTitles: Record<string, string> = {
  mobile: "Mobile App Projects",
  web: "Web Development Projects",
  data: "Data Science Projects",
  design: "UI/UX Design Projects",
  tools: "Tools & Utilities",
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  if (!Object.keys(categoryTitles).includes(category)) {
    notFound()
  }

  const projects = getProjectsByCategory(category)
  const title = categoryTitles[category]

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my {category} projects showcasing my skills and expertise in this area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
