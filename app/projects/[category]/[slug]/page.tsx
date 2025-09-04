import { getProject } from "@/lib/projects"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}): Promise<Metadata> {
  const { category, slug } = await params
  const project = getProject(category, slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    }
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.summary,
      images: [project.og || project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.summary,
      images: [project.og || project.image],
    },
  }
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category, slug } = await params
  const project = getProject(category, slug)

  if (!project) {
    notFound()
  }

  return (
    <main id="main-content" className="min-h-screen bg-black text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {project.summary}
              </p>
              
              {/* Project Meta */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <User className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Link>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button variant="outline" asChild>
                    <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Problem */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.problem}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>

            {/* Outcome */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-emerald-900/30 text-emerald-400 border-emerald-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.techStack.frontend.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.frontend.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.backend.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.backend.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.tools.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.tools.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400">Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm text-gray-400">Category</span>
                  <p className="text-gray-200 capitalize">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Year</span>
                  <p className="text-gray-200">{project.year}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Duration</span>
                  <p className="text-gray-200">{project.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Role</span>
                  <p className="text-gray-200">{project.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
