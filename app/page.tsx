"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-[#0a0a0a]"></div>
          <div className="absolute inset-0 opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Hi, my name is <span className="text-emerald-400">Samuel</span>
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
                className="bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center justify-center h-12"
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
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 inline-flex items-center justify-center h-12"
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-4 inline-block text-4xl font-bold text-white"
            >
              About Me
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="flex justify-center items-center"
>
  <motion.div
    whileHover={{ scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="relative w-[400px] h-[400px] rounded-2xl shadow-xl overflow-hidden border border-gray-1200"
  >
    <Image
      src="/profile.jpg?height=600&width=600"
      alt="Samuel's Profile"
      fill
      className="object-cover rounded-2xl object-center"
    />
  </motion.div>
</motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section
        className="bg-gradient-to-b from-[#0a0a0a] via-gray-900/50 to-[#0a0a0a] py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-4 inline-block text-4xl font-bold text-white"
            >
              My Skills
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <SkillCard icon="💻" title="Python" delay={0.1} />
            <SkillCard icon="🌐" title="JavaScript" delay={0.2} />
            <SkillCard icon="📱" title="Flutter" delay={0.3} />
            <SkillCard icon="⚛️" title="React" delay={0.4} />
            <SkillCard icon="🔥" title="Firebase" delay={0.5} />
            <SkillCard icon="🗄️" title="SQL" delay={0.6} />
            <SkillCard icon="🧠" title="Machine Learning" delay={0.7} />
            <SkillCard icon="🔧" title="Git" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-4 inline-block text-4xl font-bold text-white"
            >
              My Projects
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </motion.h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Here are some of the projects I've worked on. Each project represents my skills and passion for creating
              innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative overflow-hidden py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-[#0a0a0a]"></div>
          <div className="absolute inset-0 opacity-5"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
              Get In Touch
              <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
              Want to work together? I'm always open to discussing new projects and opportunities.
            </p>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2">
                <ContactCard
                  icon={<Mail className="h-8 w-8 text-emerald-400" />}
                  title="Email"
                  content="samuels.sameh@gmail.com"
                />
                <ContactCard
                  icon={<Phone className="h-8 w-8 text-emerald-400" />}
                  title="Phone"
                  content="+201284333155"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center justify-center h-12"
                asChild
              >
                <Link href="mailto:samuels.sameh@gmail.com">
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span>Send Message</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

function SkillCard({ icon, title, delay = 0 }: { icon: string; title: string; delay?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      className="group flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all duration-300 hover:border-emerald-900 hover:bg-gray-800 cursor-pointer"
    >
      <span className="mb-4 text-4xl">{icon}</span>
      <h3 className="text-lg font-medium text-white group-hover:text-emerald-400">{title}</h3>
    </motion.div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-emerald-900/50 cursor-pointer"
    >
      <span className="text-gray-400 transition-colors group-hover:text-emerald-400">{icon}</span>
      <span className="sr-only">{label}</span>
    </Link>
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
