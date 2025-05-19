"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, technologies, demoUrl, sourceUrl } = project

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      className="group overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-emerald-900 hover:bg-gray-800/80 cursor-pointer"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=224&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {demoUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-emerald-700 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 mb-2 cursor-pointer"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          )}
          {sourceUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-800 mb-2 cursor-pointer"
            >
              <Link href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
