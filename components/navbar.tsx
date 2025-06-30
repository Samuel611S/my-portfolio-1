"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Star, Quote, Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const testimonials = [
  {
    id: "1",
    name: "Alfredo H.",
    role: "Repeat Client",
    company: "United States",
    content: "It was great working with sam, he is very responsive and is very knowledgeable on website design and implementation. Is because there are people like sam in fiverr that USA company like to contract with contractors in fiverr, very professional, polite and responsive.",
    rating: 5,
  },
  {
    id: "2",
    name: "Alfredo H.",
    role: "Repeat Client",
    company: "United States",
    content: "sam is awsome he goes above and beyond the requirements and is very respectful. I will hire him again. I addition he has very good sense of what a good looking website should look like.",
    rating: 5,
  },
  {
    id: "3",
    name: "M. Skirton",
    role: "Client",
    company: "United States",
    content: "Working with Sam was a fantastic experience from start to finish. He demonstrated deep understanding, professionalism, and excellent attention to detail while building out our website. Communication was clear, revisions were prompt, and he went above and beyond to make sure everything was just right.",
    rating: 5,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
    
    // Update active section based on scroll position
    const sections = ["hero", "about", "skills", "projects", "featured-work", "testimonials", "contact"]
    const scrollPosition = window.scrollY + 150
    
    let currentSection = "hero"
    
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = section
          break
        }
      }
    }
    
    setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    let ticking = false
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Call once on mount to set initial active section
    handleScroll()
    
    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [handleScroll])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    closeMenu()
  }

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Featured Work", href: "#featured-work", id: "featured-work" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                S.
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-6"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-emerald-400 block",
                  activeSection === link.id ? "text-emerald-400" : "text-gray-300"
                )}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                <span className="relative">
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-emerald-400"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: activeSection === link.id ? "100%" : "0%",
                      opacity: activeSection === link.id ? 1 : 0,
                    }}
                    transition={{ 
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </Link>
            ))}
            
            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-emerald-400 flex items-center gap-1",
                    activeSection === "contact" ? "text-emerald-400" : "text-gray-300"
                  )}
                >
                  Contact
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-80 bg-gray-900/95 backdrop-blur-md border-gray-800"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-800 pb-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-emerald-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-white">Email</p>
                          <p className="text-xs text-gray-400">samuels.sameh@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-800 pb-3">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-emerald-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-white">Phone</p>
                          <p className="text-xs text-gray-400">+201284333155</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-800 pb-3">
                      <div className="flex items-center">
                        <Linkedin className="h-4 w-4 text-emerald-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-white">LinkedIn</p>
                          <p className="text-xs text-gray-400">Samuel Sameh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-800">
                    <Link 
                      href="#contact" 
                      onClick={() => handleNavClick("contact")}
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      View Contact Section →
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              className="bg-emerald-600 text-white hover:bg-emerald-700 flex items-center transition-all duration-200 hover:scale-105" 
              asChild
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
          </motion.nav>

          {/* Medium Screen Navigation (Tablets) */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex lg:hidden items-center space-x-4"
          >
            {navLinks.slice(0, 4).map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-emerald-400 block",
                  activeSection === link.id ? "text-emerald-400" : "text-gray-300"
                )}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                <span className="relative">
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-emerald-400"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: activeSection === link.id ? "100%" : "0%",
                      opacity: activeSection === link.id ? 1 : 0,
                    }}
                    transition={{ 
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </Link>
            ))}
            
            <Button 
              className="bg-emerald-600 text-white hover:bg-emerald-700 flex items-center transition-all duration-200 hover:scale-105" 
              asChild
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
          </motion.nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "py-3 px-4 text-base font-medium transition-colors rounded-lg",
                      activeSection === link.id 
                        ? "text-emerald-400 bg-emerald-900/20" 
                        : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50"
                    )}
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Link */}
                <Link
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className="py-3 px-4 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-colors rounded-lg flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
                
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700 w-full flex items-center justify-center mt-4"
                  asChild
                >
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
