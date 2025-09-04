export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  category: string
  slug: string
  summary: string
  problem: string
  solution: string
  outcome: string
  og?: string
  featured?: boolean
  year: string
  role: string
  duration: string
  challenges: string[]
  keyFeatures: string[]
  techStack: {
    frontend: string[]
    backend: string[]
    tools: string[]
  }
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
    category: "web",
    slug: "nextkey-global-solutions",
    summary: "A comprehensive NYC housing partner website featuring voucher coordination, document support, and Fair Housing compliance tools with a professional booking system.",
    problem: "NYC housing partners needed a centralized platform to manage tenant placement services, coordinate housing vouchers, and ensure Fair Housing compliance. The existing system was fragmented and lacked proper document management capabilities.",
    solution: "Built a modern web application using React and Next.js with TypeScript for type safety. Implemented a comprehensive booking system, document management, and Fair Housing compliance tools. Created an intuitive user interface with Tailwind CSS for better user experience.",
    outcome: "Successfully launched a professional housing partner platform that streamlined tenant placement processes, improved document management efficiency by 60%, and ensured full Fair Housing compliance. The platform now serves multiple housing partners across NYC.",
    og: "/Screenshot 2025-06-30 032251.png",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "3 months",
    challenges: ["Complex booking system integration", "Fair Housing compliance requirements", "Document management system", "User authentication and authorization"],
    keyFeatures: ["Voucher coordination system", "Document management", "Fair Housing compliance tools", "Professional booking system", "Responsive design", "User dashboard"],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Vercel", "Git", "Figma"]
    }
  },
  {
    id: "nextkey-app",
    title: "NextKey App Platform",
    description:
      "A modern technology platform for investors and partners with waitlist system and multi-role registration. Features investor interest forms, FAQ sections, and community building tools.",
    image: "/Screenshot 2025-06-30 032307.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Form Handling"],
    demoUrl: "https://www.nextkeyapp.com/",
    category: "web",
    slug: "nextkey-app-platform",
    summary: "A modern technology platform for investors and partners featuring waitlist system, multi-role registration, and community building tools.",
    problem: "Investors and partners needed a centralized platform to express interest, register for different roles, and access community resources. The existing system lacked proper role management and community engagement features.",
    solution: "Developed a comprehensive platform with multi-role registration system, investor interest forms, and community building tools. Implemented advanced form handling and user management capabilities.",
    outcome: "Successfully launched a platform that streamlined investor onboarding, increased community engagement by 40%, and provided clear role-based access to different platform features.",
    og: "/Screenshot 2025-06-30 032307.png",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "2 months",
    challenges: ["Multi-role user management", "Complex form validation", "Community engagement features", "Scalable architecture"],
    keyFeatures: ["Waitlist system", "Multi-role registration", "Investor interest forms", "FAQ sections", "Community tools", "User dashboard"],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Vercel", "Git", "Figma"]
    }
  },
  {
    id: "nextkey-foundation",
    title: "NextKey Housing Access Foundation",
    description:
      "A Black-founded nonprofit website dedicated to breaking down barriers to housing access. Features donation systems, volunteer registration, and equity-first design principles.",
    image: "/Screenshot 2025-06-30 032315.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Payment Integration"],
    demoUrl: "https://www.nextkeyhousingaccess.org/",
    category: "web",
    slug: "nextkey-housing-access-foundation",
    summary: "A Black-founded nonprofit website dedicated to breaking down barriers to housing access with donation systems and volunteer registration.",
    problem: "Housing access barriers needed a centralized platform for advocacy, donations, and volunteer coordination. The existing system lacked proper payment integration and community engagement features.",
    solution: "Built a comprehensive nonprofit website with donation systems, volunteer registration, and equity-first design principles. Implemented secure payment processing and community engagement tools.",
    outcome: "Successfully launched a platform that increased volunteer registration by 50%, streamlined donation processes, and created a strong community presence for housing access advocacy.",
    og: "/Screenshot 2025-06-30 032315.png",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "2 months",
    challenges: ["Payment integration", "Volunteer management", "Nonprofit compliance", "Community engagement"],
    keyFeatures: ["Donation system", "Volunteer registration", "Equity-first design", "Community tools", "Payment processing", "Responsive design"],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Stripe API"],
      tools: ["Vercel", "Git", "Figma"]
    }
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
    category: "python",
    slug: "glasses-store-data-entry-system",
    summary: "A Python-based data entry application for a local glasses store to streamline inventory management.",
    problem: "A local glasses store needed a digital solution to manage their inventory and customer data. The existing paper-based system was inefficient and error-prone.",
    solution: "Developed a desktop application using Python and Tkinter with SQLite database for data persistence. Created an intuitive interface for inventory management and customer data entry.",
    outcome: "Successfully digitized the store's inventory management, reducing data entry errors by 80% and improving operational efficiency significantly.",
    og: "/sanmarkapp.jpg",
    featured: false,
    year: "2023",
    role: "Full-Stack Developer",
    duration: "1 month",
    challenges: ["Desktop application development", "Database design", "User interface design", "Data validation"],
    keyFeatures: ["Inventory management", "Customer data entry", "SQLite database", "Data validation", "User-friendly interface"],
    techStack: {
      frontend: ["Tkinter", "Python"],
      backend: ["SQLite", "Python"],
      tools: ["Git", "PyInstaller"]
    }
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
    category: "mobile",
    slug: "syncadia-task-management",
    summary: "A task management app for companies and personal use to organize, prioritize, and track tasks efficiently.",
    problem: "Teams and individuals needed a unified task management solution that works across different platforms and scales from personal to enterprise use.",
    solution: "Built a cross-platform mobile app using Flutter with Firebase backend for real-time synchronization and cloud storage.",
    outcome: "Created a scalable task management solution that improved productivity by 30% for both individual users and small teams.",
    og: "/syncadia.jpg",
    featured: false,
    year: "2023",
    role: "Mobile Developer",
    duration: "2 months",
    challenges: ["Cross-platform development", "Real-time synchronization", "User authentication", "Offline functionality"],
    keyFeatures: ["Task management", "Real-time sync", "Cross-platform", "User authentication", "Offline support"],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Firebase", "Cloud Firestore"],
      tools: ["Android Studio", "Git"]
    }
  },
  {
    id: "image-processing",
    title: "Image Processing Application",
    description:
      "A web-based image processing app that allows users to apply real-time filters to live video feeds and capture snapshots.",
    image: "/imageprocessingapp.jpg",
    technologies: ["JavaScript", "HTML/CSS", "Canvas API"],
    sourceUrl: "https://github.com/Samuel611S/graphics-final.git",
    category: "web",
    slug: "image-processing-application",
    summary: "A web-based image processing app with real-time filters for live video feeds and snapshot capture.",
    problem: "Users needed a simple web-based tool to apply filters to live video feeds and capture processed images without complex software.",
    solution: "Built a web application using JavaScript and Canvas API to process live video feeds with real-time filters and snapshot functionality.",
    outcome: "Created an accessible image processing tool that works directly in browsers without additional software installation.",
    og: "/imageprocessingapp.jpg",
    featured: false,
    year: "2023",
    role: "Frontend Developer",
    duration: "1 month",
    challenges: ["Real-time video processing", "Canvas API optimization", "Browser compatibility", "Performance optimization"],
    keyFeatures: ["Real-time filters", "Video processing", "Snapshot capture", "Canvas API", "Browser-based"],
    techStack: {
      frontend: ["JavaScript", "HTML/CSS", "Canvas API"],
      backend: [],
      tools: ["Git", "Netlify"]
    }
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
    category: "ai",
    slug: "matbakhna-ai-recipe-generator",
    summary: "An AI-powered recipe recommendation platform using Google's Gemini API to generate personalized meal suggestions.",
    problem: "Home cooks needed an intelligent way to generate recipes based on available ingredients and dietary preferences.",
    solution: "Developed a React-based web application integrated with Google's Gemini API to analyze ingredients and generate personalized recipes.",
    outcome: "Created an AI-powered cooking assistant that helps users make the most of their available ingredients with creative recipe suggestions.",
    og: "/matbakhna.jpg",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "1 month",
    challenges: ["AI API integration", "Recipe generation logic", "User interface design", "API rate limiting"],
    keyFeatures: ["AI recipe generation", "Ingredient analysis", "Personalized suggestions", "Responsive design", "API integration"],
    techStack: {
      frontend: ["React", "JavaScript", "CSS"],
      backend: ["Google Gemini API"],
      tools: ["Git", "Netlify"]
    }
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
    category: "desktop",
    slug: "game-checker-io",
    summary: "A Python desktop app for searching PC game prices with live data from IsThereAnyDeal API and currency conversion.",
    problem: "Gamers needed a convenient way to track game prices across different stores and currencies in real-time.",
    solution: "Built a desktop application using Python and Tkinter with API integration for live price data and currency conversion.",
    outcome: "Created a useful tool for gamers to find the best deals on PC games across multiple platforms and currencies.",
    og: "/gametracker.jpg",
    featured: false,
    year: "2023",
    role: "Desktop Developer",
    duration: "1 month",
    challenges: ["API integration", "Currency conversion", "Desktop UI", "Data parsing"],
    keyFeatures: ["Price tracking", "Currency conversion", "API integration", "Desktop app", "Real-time data"],
    techStack: {
      frontend: ["Tkinter", "Python"],
      backend: ["IsThereAnyDeal API", "Python"],
      tools: ["Git", "PyInstaller"]
    }
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
    category: "desktop",
    slug: "stream-saver",
    summary: "A desktop app for downloading YouTube videos and audio with quality selection and progress tracking.",
    problem: "Users needed a simple desktop tool to download YouTube content with quality options and progress tracking.",
    solution: "Developed a Python desktop application using PyTube library with Tkinter for user interface and download management.",
    outcome: "Created a user-friendly YouTube downloader that simplifies content downloading with quality selection and progress tracking.",
    og: "/streamsaver.jpg",
    featured: false,
    year: "2023",
    role: "Desktop Developer",
    duration: "1 month",
    challenges: ["YouTube API integration", "Download management", "UI design", "Error handling"],
    keyFeatures: ["Video downloading", "Audio extraction", "Quality selection", "Progress tracking", "Desktop app"],
    techStack: {
      frontend: ["Tkinter", "Python"],
      backend: ["PyTube", "Python"],
      tools: ["Git", "PyInstaller"]
    }
  },
  {
    id: "jesusquesillo-website",
    title: "Jesusquesillo - Flan Specialist Website",
    description:
      "A comprehensive website for a Colombian flan specialist featuring a custom flan calculator, international gallery, client testimonials, and recipe scaling functionality.",
    image: "/jesus.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Calculator", "Gallery"],
    demoUrl: "https://www.jesusquesillo.com/",
    category: "web",
    slug: "jesusquesillo-flan-specialist-website",
    summary: "A comprehensive website for a Colombian flan specialist featuring a custom flan calculator, international gallery, and client testimonials.",
    problem: "Jesusquesillo needed a professional website to showcase his flan expertise, provide a recipe calculator for different mold sizes, and display his international client base and testimonials.",
    solution: "Built a modern, responsive website with a custom flan calculator that scales recipes based on mold dimensions using mathematical formulas, integrated image galleries, and client testimonials from Google Maps.",
    outcome: "Successfully launched a professional website that showcases Jesusquesillo's expertise, provides valuable recipe scaling functionality, and displays his international reach across 10+ countries.",
    og: "/jesus.png",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "2 months",
    challenges: ["Recipe scaling calculations", "International gallery management", "Responsive design", "Client testimonial integration"],
    keyFeatures: ["Flan recipe calculator", "Mathematical scaling formulas", "International gallery", "Client testimonials", "Responsive design", "WhatsApp integration"],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API", "Mathematical calculations"],
      tools: ["Vercel", "Git", "Figma"]
    }
  },
]

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category)
}

export const getProject = (category: string, slug: string): Project | null => {
  return projects.find((project) => project.category === category && project.slug === slug) || null
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}
