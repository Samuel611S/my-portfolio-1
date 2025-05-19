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
    id: "glasses-store",
    title: "Glasses Store Data Entry System",
    description:
      "A Python-based data entry application for a local glasses store to streamline their inventory management.",
    image: "/project0.jpg?height=224&width=400",
    technologies: ["Python", "Tkinter", "SQLite"],
    demoUrl: "https://drive.google.com/file/d/1WsjbIB0P5RpNjzJc5uPEGVvJA0hXhw-r/view?usp=sharing",
    sourceUrl: "https://github.com/Samuel611S/san-mark-app.git",
  },
  {
    id: "syncadia",
    title: "Syncadia",
    description:
      "A task management app designed for both companies and personal use to organize, prioritize, and track tasks efficiently.",
    image: "/project1.jpg?height=224&width=400",
    technologies: ["Flutter", "Firebase", "Dart"],
    demoUrl: "https://drive.google.com/file/d/1vE0K-_xidfC02uncOUjYK2rIvdFmBRD1/view?usp=sharing",
    sourceUrl: "https://github.com/Samuel611S/syncadia-sam.git",
  },
  {
    id: "image-processing",
    title: "Image Processing Application",
    description:
      "A web-based image processing app that allows users to apply real-time filters to live video feeds and capture snapshots.",
    image: "/project2.jpg?height=224&width=400",
    technologies: ["JavaScript", "HTML/CSS", "Canvas API"],
    sourceUrl: "https://github.com/Samuel611S/graphics-final.git",
  },
  {
    id: "matbakhna-ai",
    title: "Matbakhna AI - Recipe Generator",
    description:
      "An AI-powered recipe recommendation platform that transforms available ingredients into personalized meal suggestions using Google's Gemini API.",
    image: "/project3.jpg?height=224&width=400",
    technologies: ["JavaScript", "React", "Google Gemini API"],
    demoUrl: "https://matbakhna.netlify.app/",
    sourceUrl: "https://github.com/Samuel611S/matbakhna.git",
  },
  {
    id: "game-checker",
    title: "Game Checker.io",
    description:
      "A Python desktop app that lets you search for PC game prices using live data from the IsThereAnyDeal API with real-time currency conversion.",
    image: "/project4.jpg?height=224&width=400",
    technologies: ["Python", "Tkinter", "API Integration"],
    demoUrl: "https://basardav.itch.io/game-checker",
    sourceUrl: "https://github.com/Samuel611S/game_checker.io.git",
  },
  {
    id: "stream-saver",
    title: "StreamSaver",
    description:
      "A desktop app that lets you download YouTube videos or audio in just a few clicks with quality selection and download progress tracking.",
    image: "/project5.jpg?height=224&width=400",
    technologies: ["Python", "PyTube", "Tkinter"],
    demoUrl: "https://basardav.itch.io/stream-saver",
    sourceUrl: "https://github.com/Samuel611S/stream-saver",
  },
]

export const getProjectsByCategory = (category: string): Project[] => {
  switch (category) {
    case "mobile":
      return projects.filter((project) => project.technologies.includes("Flutter"))
    case "web":
      return projects.filter(
        (project) => project.technologies.includes("JavaScript") || project.technologies.includes("React"),
      )
    case "data":
      return projects.filter(
        (project) =>
          project.technologies.includes("Python") &&
          (project.technologies.includes("Pandas") ||
            project.technologies.includes("NumPy") ||
            project.technologies.includes("Scikit-learn") ||
            project.technologies.includes("TensorFlow")),
      )
    case "design":
      return projects.filter((project) => project.technologies.includes("HTML/CSS"))
    case "tools":
      return projects.filter(
        (project) => project.technologies.includes("Python") && project.technologies.includes("Tkinter"),
      )
    default:
      return []
  }
}
