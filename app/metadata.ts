import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Samuel Sameh | Full-Stack Developer & Computer Science Student",
  description: "Computer Science student at University of London specializing in Python development, full-stack web technologies, and machine learning. View my portfolio of projects including web apps, mobile apps, and AI solutions.",
  keywords: ["Samuel Sameh", "Full-Stack Developer", "Python Developer", "React Developer", "Computer Science", "University of London", "Web Development", "Mobile Development", "Machine Learning"],
  authors: [{ name: "Samuel Sameh" }],
  creator: "Samuel Sameh",
  publisher: "Samuel Sameh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Samuel Sameh | Full-Stack Developer & Computer Science Student",
    description: "Computer Science student at University of London specializing in Python development, full-stack web technologies, and machine learning.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Samuel Sameh Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Samuel Sameh - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Samuel Sameh | Full-Stack Developer & Computer Science Student",
    description: "Computer Science student at University of London specializing in Python development, full-stack web technologies, and machine learning.",
    images: ['/profile.jpg'],
    creator: '@your-twitter-handle', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
} 