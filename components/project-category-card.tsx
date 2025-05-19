import Link from "next/link"
import { BarChart, Globe, Palette, Smartphone, PenToolIcon as Tool, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type IconName = "Tool" | "Globe" | "BarChart" | "Palette" | "Smartphone"

interface ProjectCategoryCardProps {
  title: string
  description: string
  icon: IconName
  href: string
}

const iconComponents: Record<IconName, LucideIcon> = {
  Tool,
  Globe,
  BarChart,
  Palette,
  Smartphone,
}

export default function ProjectCategoryCard({ title, description, icon, href }: ProjectCategoryCardProps) {
  const Icon = iconComponents[icon]

  return (
    <Link href={href} className="block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-500 hover:scale-105">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
