import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Samuel's Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Samuel Sameh</h2>
              <h3 className="text-xl text-emerald-600 mb-4">Computer Science Student & Developer</h3>

              <p className="text-gray-700 mb-4">
                I'm a Computer Science student at the University of London with a passion for building web and mobile
                applications. I have experience in full-stack development, data science, and customer service.
              </p>

              <p className="text-gray-700 mb-6">
                My journey in software development began during my studies, where I discovered my passion for creating
                digital solutions. I've worked on various projects including mobile apps with Flutter, web applications
                with JavaScript, and data analysis with Python.
              </p>

              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">My Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCard title="Programming Languages" skills={["Python", "JavaScript", "Dart", "SQL"]} />
              <SkillCard title="Web Development" skills={["HTML/CSS", "React", "Node.js", "Express.js"]} />
              <SkillCard title="Mobile Development" skills={["Flutter", "Firebase"]} />
              <SkillCard title="Database" skills={["MySQL", "Firebase", "SQLite"]} />
              <SkillCard title="Tools & Frameworks" skills={["Git", "Docker", "OpenCV", "p5.js", "SAP"]} />
              <SkillCard title="Data Science & AI" skills={["Pandas", "NumPy", "Scikit-learn", "TensorFlow"]} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Education & Experience</h2>

            <div className="space-y-6">
              <TimelineItem
                title="BSc in Computer Science"
                organization="University of London"
                period="2022 - 2026"
                description="Currently pursuing a degree in Computer Science with a 3.1 GPA. Coursework includes Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Database Systems, and Software Engineering."
              />

              <TimelineItem
                title="IGCSE"
                organization="New Ramses College"
                period="Graduated 2021"
                description="Completed IGCSE education with a focus on mathematics and sciences."
              />

              <TimelineItem
                title="Call Center Agent"
                organization="A/B Businesses"
                period="Jan 2024 - May 2024"
                description="Provided customer support for Medicare inquiries and executed cold calling for roofing services, increasing leads by 15%."
              />

              <TimelineItem
                title="Loan Specialist"
                organization="ICALL OUTSOURCING"
                period="October 2024 - November 2024"
                description="Managed outbound and inbound calls for a Canadian loan services campaign, achieving a 25% increase in successful loan approvals."
              />

              <TimelineItem
                title="Event Usher"
                organization="GIPFEL"
                period="Freelance"
                description="Provided ushering and event support services at high-profile events, including a conference in Sharm El Sheikh and the Intra-African Trade Fair in Cairo."
              />

              <TimelineItem
                title="SAP Training"
                organization="Marcyrl Pharmaceutical Industries"
                period="September 2023 - October 2023"
                description="Completed training in SAP software, gaining knowledge in ERP systems and business process integration."
              />

              <TimelineItem
                title="Data Science Internship"
                organization="Prodigy InfoTech"
                period="August 2024 - November 2024"
                description="Gained hands-on experience in data science, working on practical projects and building skills in data analysis and visualization."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>
        <ul className="space-y-1">
          {skills.map((skill) => (
            <li key={skill} className="text-gray-700">
              • {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function TimelineItem({
  title,
  organization,
  period,
  description,
}: {
  title: string
  organization: string
  period: string
  description: string
}) {
  return (
    <div className="relative pl-8 border-l-2 border-emerald-600 pb-2">
      <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <p className="text-emerald-600 font-medium">{organization}</p>
        <p className="text-gray-500 text-sm">{period}</p>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
