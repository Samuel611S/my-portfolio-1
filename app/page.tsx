"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import Testimonials from "@/components/testimonials"
import ProjectScreenshots from "@/components/project-screenshots"
import { projects } from "@/lib/projects"
import { motion, useReducedMotion } from "framer-motion"

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  
  // Animation variants that respect reduced motion
  const fadeInUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }
  }
  
  const fadeInUpDelay = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }
  }

  return (
    <div className="min-h-screen text-gray-200 relative bg-transparent">
      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden animated-section">
        <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Hi, my name is <span className="text-emerald-400 gradient-text">Samuel</span>
            </h1>
            <h2 className="mb-6 text-2xl font-medium text-emerald-300 md:text-3xl">
              Computer Science Student & Full-Stack Developer
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-gray-400">
              I'm a passionate Computer Science student at the University of London with expertise in Python development
              and full-stack web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center justify-center h-12 pulse-glow"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span>View Resume</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 inline-flex items-center justify-center h-12 hover-lift"
                asChild
              >
                <Link href="#about">
                  <span>Know More</span>
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <SocialLink
                href="https://www.linkedin.com/in/samuel-sameh-423b15239/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink href="https://github.com/Samuel611S" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="mailto:samuels.sameh@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
              <SocialLink href="https://wa.me/+201284333155" icon={<Phone className="h-5 w-5" />} label="WhatsApp" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-transparent"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
              About Me
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="relative w-[400px] h-[400px] rounded-2xl shadow-xl overflow-hidden border border-gray-1200 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Samuel's Profile"
                  fill
                  className="object-cover rounded-2xl object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  quality={85}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold text-emerald-400">Who I Am</h3>
              <p className="mb-6 text-gray-300">
                I'm a passionate Computer Science student at the University of London with expertise in Python
                development and full-stack web technologies. Currently exploring machine learning applications while
                building robust web solutions using Django and React.
              </p>
              <p className="mb-8 text-gray-300">
                When not coding, you'll find me contributing to open-source projects, running my business, or exploring
                the latest tech trends. My goal is to create impactful solutions that bridge technology and user needs.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Education</h4>
                  <p className="text-gray-400">University of London, BSc Computer Science</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Cairo, Egypt</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Email</h4>
                  <p className="text-gray-400 break-words">samuels.sameh@gmail.com</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+201284333155</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 relative bg-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
              My Skills
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </div>
          
          {/* Skill Categories */}
          <div className="space-y-12">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <SkillCard icon="🐍" title="Python" proficiency={90} />
                <SkillCard icon="⚡" title="JavaScript" proficiency={85} />
                <SkillCard icon="📱" title="Dart" proficiency={80} />
                <SkillCard icon="☕" title="Java" proficiency={75} />
              </div>
            </div>

            {/* Web Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Web Technologies</h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <SkillCard icon="⚛️" title="React" proficiency={85} />
                <SkillCard icon="🚀" title="Next.js" proficiency={80} />
                <SkillCard icon="🎨" title="Tailwind CSS" proficiency={90} />
                <SkillCard icon="🔥" title="Firebase" proficiency={85} />
              </div>
            </div>

            {/* Mobile Development */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Mobile Development</h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <SkillCard icon="📱" title="Flutter" proficiency={85} />
                <SkillCard icon="🔄" title="State Management" proficiency={80} />
                <SkillCard icon="📦" title="App Store Deployment" proficiency={75} />
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <SkillCard icon="🔧" title="Git" proficiency={90} />
                <SkillCard icon="🗄️" title="SQL" proficiency={80} />
                <SkillCard icon="🧠" title="Machine Learning" proficiency={70} />
                <SkillCard icon="☁️" title="Cloud Services" proficiency={75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
              My Projects
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my recent projects showcasing my skills in web development, mobile apps, and AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.id}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          
          {/* Debug: Show project count and names */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-emerald-400 mb-2">Debug Info:</h3>
            <p className="text-white">Total Projects: {projects.length}</p>
            <div className="text-sm text-gray-300">
              {projects.map((p, i) => (
                <div key={i}>{i + 1}. {p.title} (ID: {p.id})</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Client Work Screenshots */}
      <ProjectScreenshots />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
              Get In Touch
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start a project or just want to chat? Feel free to reach out!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              content="samuels.sameh@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              content="+201284333155"
            />
            <ContactCard
              icon={<Linkedin className="h-6 w-6" />}
              title="LinkedIn"
              content="Samuel Sameh"
            />
            <ContactCard
              icon={<Github className="h-6 w-6" />}
              title="GitHub"
              content="Samuel611S"
            />
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center justify-center h-12"
              asChild
            >
              <Link href="/contact">
                <span>Send Message</span>
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}

function SkillCard({ icon, title, proficiency }: { icon: string; title: string; proficiency: number }) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div 
      className={`group flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all duration-300 hover:border-emerald-900 hover:bg-gray-800 cursor-pointer ${
        prefersReducedMotion ? '' : 'hover:scale-105'
      }`}
    >
      <span className="mb-4 text-4xl">{icon}</span>
      <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 mb-2">{title}</h3>
      
      {/* Interactive Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <div 
          className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-emerald-400"
          style={{ width: `${proficiency}%` }}
        />
      </div>
      
      <p className="text-gray-400 text-sm font-medium">{proficiency}%</p>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-muted-foreground transition-all duration-300 hover:bg-emerald-900/50 hover:text-emerald-400 ${
        prefersReducedMotion ? '' : 'hover:scale-105'
      }`}
      aria-label={label}
    >
      <span className={`transition-transform duration-300 ${prefersReducedMotion ? '' : 'group-hover:scale-110'}`}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  )
}

function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center min-w-0 md:min-w-[280px] cursor-pointer hover:bg-gray-800 transition-all duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 break-words text-xs md:text-sm">{content}</p>
    </div>
  )
}
