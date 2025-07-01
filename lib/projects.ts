export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
}

export const projects: Project[] = [
  {
    id: "nextkey-global",
    title: "NextKey Global Solutions",
    description:
      "A comprehensive NYC housing partner website for tenant placement services. Features voucher coordination, document support, and Fair Housing compliance tools. Built with modern web technologies and professional booking system.",
    image: "/Screenshot 2025-06-30 032251.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Booking System"],
    demoUrl: "https://www.nextkeyglobal.com/",
  },
  {
    id: "nextkey-app",
    title: "NextKey App Platform",
    description:
      "A modern technology platform for investors and partners with waitlist system and multi-role registration. Features investor interest forms, FAQ sections, and community building tools.",
    image: "/Screenshot 2025-06-30 032307.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Form Handling"],
    demoUrl: "https://www.nextkeyapp.com/",
  },
  {
    id: "nextkey-foundation",
    title: "NextKey Housing Access Foundation",
    description:
      "A Black-founded nonprofit website dedicated to breaking down barriers to housing access. Features donation systems, volunteer registration, and equity-first design principles.",
    image: "/Screenshot 2025-06-30 032315.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Payment Integration"],
    demoUrl: "https://www.nextkeyhousingaccess.org/",
  },
  {
    id: "glasses-store",
    title: "Glasses Store Data Entry System",
    description:
      "A Python-based data entry application for a local glasses store to streamline their inventory management.",
    image: "/sanmarkapp.jpg",
    technologies: ["Python", "Tkinter", "SQLite"],
    demoUrl: "https://drive.google.com/file/d/1WsjbIB0P5RpNjzJc5uPEGVvJA0hXhw-r/view?usp=sharing",
    sourceUrl: "https://github.com/Samuel611S/san-mark-app.git",
  },
  {
    id: "syncadia",
    title: "Syncadia",
    description:
      "A task management app designed for both companies and personal use to organize, prioritize, and track tasks efficiently.",
    image: "/syncadia.jpg",
    technologies: ["Flutter", "Firebase", "Dart"],
    demoUrl: "https://drive.google.com/file/d/1vE0K-_xidfC02uncOUjYK2rIvdFmBRD1/view?usp=sharing",
    sourceUrl: "https://github.com/Samuel611S/syncadia-sam.git",
  },
  {
    id: "image-processing",
    title: "Image Processing Application",
    description:
      "A web-based image processing app that allows users to apply real-time filters to live video feeds and capture snapshots.",
    image: "/imageprocessingapp.jpg",
    technologies: ["JavaScript", "HTML/CSS", "Canvas API"],
    sourceUrl: "https://github.com/Samuel611S/graphics-final.git",
  },
  {
    id: "matbakhna-ai",
    title: "Matbakhna AI - Recipe Generator",
    description:
      "An AI-powered recipe recommendation platform that transforms available ingredients into personalized meal suggestions using Google's Gemini API.",
    image: "/matbakhna.jpg",
    technologies: ["JavaScript", "React", "Google Gemini API"],
    demoUrl: "https://matbakhna.netlify.app/",
    sourceUrl: "https://github.com/Samuel611S/matbakhna.git",
  },
  {
    id: "game-checker",
    title: "Game Checker.io",
    description:
      "A Python desktop app that lets you search for PC game prices using live data from the IsThereAnyDeal API with real-time currency conversion.",
    image: "/gametracker.jpg",
    technologies: ["Python", "Tkinter", "API Integration"],
    demoUrl: "https://basardav.itch.io/game-checker",
    sourceUrl: "https://github.com/Samuel611S/game_checker.io.git",
  },
  {
    id: "stream-saver",
    title: "StreamSaver",
    description:
      "A desktop app that lets you download YouTube videos or audio in just a few clicks with quality selection and download progress tracking.",
    image: "/streamsaver.jpg",
    technologies: ["Python", "PyTube", "Tkinter"],
    demoUrl: "https://basardav.itch.io/stream-saver",
    sourceUrl: "https://github.com/Samuel611S/stream-saver",
  },
]

export const getProjectsByCategory = (category: string): Project[] => {
  switch (category) {
    case "web":
      return projects.filter((project) => 
        project.technologies.includes("React") || 
        project.technologies.includes("Next.js") ||
        project.technologies.includes("JavaScript")
      )
    case "mobile":
      return projects.filter((project) => project.technologies.includes("Flutter"))
    case "python":
      return projects.filter((project) => project.technologies.includes("Python"))
    case "ai":
      return projects.filter((project) => 
        project.technologies.includes("AI") || 
        project.technologies.includes("Gemini")
      )
    case "desktop":
      return projects.filter((project) => 
        project.technologies.includes("Tkinter") || 
        project.technologies.includes("PyTube")
      )
    default:
      return []
  }
}
