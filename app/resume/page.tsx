import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Resume</h1>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Samuel Sameh</h1>
              <h2 className="text-xl text-emerald-600 mb-2">Computer Science Student & Developer</h2>
              <div className="text-gray-700">
                <p>Email: samuels.sameh@gmail.com</p>
                <p>Phone: 01284333155</p>
                <p>Location: Heliopolis, Cairo, Egypt</p>
                <p>Website: samuelsportfolio1.netlify.app</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">Education</h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">BSc in Computer Science</h3>
                  <span className="text-gray-500">2022 - 2026</span>
                </div>
                <p className="text-emerald-600 mb-2">University of London, Cairo, Egypt</p>
                <p className="text-gray-700 mb-2">Classification: Grade Achieved 3.1 GPA</p>
                <p className="text-gray-700">
                  Relevant Coursework: Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Database
                  Systems, Software Engineering
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">IGCSE</h3>
                  <span className="text-gray-500">Graduated 2021</span>
                </div>
                <p className="text-emerald-600 mb-2">New Ramses College, Cairo, Egypt</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">Work Experience</h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Call Center Agent</h3>
                  <span className="text-gray-500">Jan 2024 - May 2024</span>
                </div>
                <p className="text-emerald-600 mb-2">A/B Businesses, Remote for USA, Egypt</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Provided customer support for Medicare inquiries, achieving a 90% customer satisfaction rate</li>
                  <li>
                    Executed cold calling for roofing services, effectively increasing leads by 15% by implementing a
                    customized communication strategy
                  </li>
                  <li>
                    Designed agent training programs to improve cold calling success rates, enhancing both customer
                    engagement and satisfaction
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Loan Specialist</h3>
                  <span className="text-gray-500">October 2024 - November 2024</span>
                </div>
                <p className="text-emerald-600 mb-2">ICALL OUTSOURCING, Remote for Canada, Egypt</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Managed outbound and inbound calls for a Canadian loan services campaign, guiding clients through
                    loan applications and eligibility requirements
                  </li>
                  <li>
                    Achieved a 25% increase in successful loan approvals by implementing a personalized approach and
                    ensuring clients completed applications accurately
                  </li>
                  <li>
                    Consistently exceeded monthly targets by 20% through proactive follow-ups and cross-functional
                    teamwork
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Event Usher</h3>
                  <span className="text-gray-500">Freelance</span>
                </div>
                <p className="text-emerald-600 mb-2">GIPFEL, Cairo, Egypt</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Provided ushering and event support services at high-profile events, including a 10-day conference
                    in Sharm El Sheikh and the Intra-African Trade Fair (IATF) in Cairo
                  </li>
                  <li>
                    Assisted in organizing and directing guests, managing VIP sections, and supporting security
                    protocols during events, including one attended by the President of Egypt
                  </li>
                  <li>
                    Contributed to seamless event operations, earning recognition for professionalism and guest
                    engagement
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">
                Training and Certifications
              </h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">SAP Training</h3>
                  <span className="text-gray-500">September 2023 - October 2023</span>
                </div>
                <p className="text-emerald-600 mb-2">Marcyrl Pharmaceutical Industries, Cairo, Egypt</p>
                <p className="text-gray-700">
                  Completed training in SAP software, gaining knowledge in ERP systems and understanding the integration
                  of business processes across finance, inventory, and operations.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Data Science Internship</h3>
                  <span className="text-gray-500">August 2024 - November 2024</span>
                </div>
                <p className="text-emerald-600 mb-2">Prodigy InfoTech, Remote, Egypt</p>
                <p className="text-gray-700">
                  Gained hands-on experience in data science, working on practical projects and building skills in data
                  analysis and visualization. Shared project outcomes on LinkedIn as part of professional networking
                  requirements.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">Technical Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Technical Skills</h3>
                  <p className="text-gray-700">
                    Microsoft Office Suite (Word, Excel, PowerPoint), Communication, Leadership
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Languages</h3>
                  <p className="text-gray-700">Fluent in Arabic and English</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Programming Languages</h3>
                  <p className="text-gray-700">Python, SQL, Dart, JavaScript</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Web Development</h3>
                  <p className="text-gray-700">HTML/CSS, React, Node.js, Express.js</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Mobile Development</h3>
                  <p className="text-gray-700">Flutter, Firebase</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Database Management</h3>
                  <p className="text-gray-700">MySQL</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Tools & Frameworks</h3>
                  <p className="text-gray-700">Git, Docker, OpenCV, p5.js, SAP</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Data Science & AI</h3>
                  <p className="text-gray-700">Pandas, NumPy, Scikit-learn, TensorFlow</p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-bold mb-2 text-gray-900">Other Skills</h3>
                  <p className="text-gray-700">Full-Stack Development, REST APIs, Agile Methodology</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">Projects</h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Syncadia - Notion-like Task Management App</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Developed a full-featured task management application inspired by Notion, with features like task
                    creation, categorization, reminders, and collaboration.
                  </li>
                  <li>
                    Built using Flutter for the frontend and Firebase for real-time data synchronization and user
                    authentication.
                  </li>
                  <li>Implemented a responsive design for seamless use across mobile and web platforms.</li>
                  <li>
                    Added advanced features like drag-and-drop task organization, due date tracking, and priority
                    settings.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Entry App for Glasses Store</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Created a custom data entry application for my father's glasses store to manage inventory, customer
                    data, and sales records.
                  </li>
                  <li>Used Flutter for the frontend and SQLite for local database management.</li>
                  <li>
                    Designed an intuitive user interface to streamline data entry and retrieval processes, reducing
                    manual errors by 30%.
                  </li>
                  <li>Added features like barcode scanning for inventory management and sales reporting.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">JavaScript Image Processing Apps</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Developed multiple image processing applications using JavaScript and p5.js for real-time image
                    manipulation.
                  </li>
                  <li>Implemented features like image filtering, edge detection, and color adjustment.</li>
                  <li>
                    Integrated these apps with a web interface, allowing users to upload and process images directly in
                    their browsers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
