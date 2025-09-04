"use client"

import { useState } from "react"

// Force dynamic rendering
export const dynamic = 'force-dynamic'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with your actual contact form handler
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log("Form data:", data)
      
      toast.success("Message sent successfully! I'll get back to you soon.")
      setIsSubmitted(true)
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="pt-12 pb-12">
                <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Message Sent Successfully!</h1>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out to me using the contact form or
              through any of the provided channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name *
                        </label>
                        <Input 
                          id="name" 
                          {...register("name")}
                          placeholder="John Doe" 
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email *
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          {...register("email")}
                          placeholder="john@example.com" 
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input 
                        id="subject" 
                        {...register("subject")}
                        placeholder="Project Inquiry" 
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>You can also reach me through these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">samuels.sameh@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+201284333155</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">Heliopolis, Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/samuel-sameh-423b15239/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5 text-gray-700" />
                      </a>
                      <a
                        href="https://github.com/Samuel611S"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github className="h-5 w-5 text-gray-700" />
                      </a>
                      <a
                        href="https://wa.me/+201284333155"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors"
                        aria-label="WhatsApp Chat"
                      >
                        <MessageSquare className="h-5 w-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
