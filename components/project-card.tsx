"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ImageOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/loading"
import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, technologies, demoUrl, sourceUrl } = project
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-emerald-900 hover:bg-gray-800/80 hover:scale-105 cursor-pointer">
      <div className="relative h-56 w-full overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <Skeleton className="h-full w-full" />
          </div>
        )}
        
        {!imageError ? (
          <Image
            src={image || "/placeholder.svg?height=224&width=400"}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-500",
              imageLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false)
              setImageError(true)
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3} // Prioritize first 3 images
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="text-center">
              <ImageOff className="h-12 w-12 text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Image not available</p>
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-gray-400 line-clamp-3">{description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              className="bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800 transition-colors"
            >
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
              className="border-emerald-700 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 transition-all duration-200 hover:scale-105"
            >
              <Link 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
                aria-label={`View ${title} demo`}
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          )}
          {sourceUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Link 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
                aria-label={`View ${title} source code`}
              >
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
