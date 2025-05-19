import Link from "next/link"
import { Github, Linkedin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/+201284333155"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-gray-800 p-3 transition-all duration-300 hover:bg-emerald-900/50"
            >
              <Phone className="h-5 w-5 text-gray-400 transition-colors group-hover:text-emerald-400" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-sameh-423b15239/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-gray-800 p-3 transition-all duration-300 hover:bg-emerald-900/50"
            >
              <Linkedin className="h-5 w-5 text-gray-400 transition-colors group-hover:text-emerald-400" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Samuel611S"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-gray-800 p-3 transition-all duration-300 hover:bg-emerald-900/50"
            >
              <Github className="h-5 w-5 text-gray-400 transition-colors group-hover:text-emerald-400" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} - Designed & Built by{" "}
              <Link
                href="https://github.com/Samuel611S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400"
              >
                Samuel Sameh
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
