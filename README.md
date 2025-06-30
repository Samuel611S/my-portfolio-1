# Samuel Sameh - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features smooth animations, SEO optimization, and a professional design.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Image optimization, lazy loading, code splitting
- **Accessibility**: ARIA labels, keyboard navigation, focus management

### Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal information with animated profile image
- **Skills Section**: Categorized skills with proficiency levels
- **Projects Section**: Showcase of work with interactive cards
- **Testimonials**: Social proof from colleagues and clients
- **Contact Section**: Multiple contact methods and functional form

### Technical Features
- **Form Validation**: React Hook Form with Zod validation
- **Error Handling**: Error boundaries and graceful error states
- **Loading States**: Skeleton loaders and loading indicators
- **Toast Notifications**: User feedback for form submissions
- **Active Navigation**: Scroll-based active section highlighting

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom components
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samuel611S/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables:
   - `NEXT_PUBLIC_SITE_URL`: Your website URL
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics ID (optional)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Customization

1. **Personal Information**: Update `app/layout.tsx` with your details
2. **Projects**: Modify `lib/projects.ts` to add your projects
3. **Skills**: Update the skills section in `app/page.tsx`
4. **Testimonials**: Edit `components/testimonials.tsx`
5. **Styling**: Customize colors in `tailwind.config.ts`

### SEO Configuration

1. **Update metadata** in `app/layout.tsx`:
   - Replace `your-domain.com` with your actual domain
   - Update social media handles
   - Add Google Search Console verification code

2. **Update sitemap** in `app/sitemap.ts`:
   - Replace the base URL with your domain

3. **Update robots.txt** in `public/robots.txt`:
   - Replace the sitemap URL

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect Next.js

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Set environment variables** in Netlify dashboard

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Heroku

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized bundle size

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag optimization
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🎨 Design System

### Colors
- **Primary**: Emerald (#10b981)
- **Background**: Dark (#0a0a0a)
- **Text**: Light gray (#e5e7eb)
- **Accent**: Emerald variants

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights
- **Body**: Regular weight

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Multiple variants with smooth transitions
- **Forms**: Accessible form components with validation
- **Navigation**: Sticky navigation with active states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- **Lucide** for beautiful icons

## 📞 Contact

- **Email**: samuels.sameh@gmail.com
- **LinkedIn**: [Samuel Sameh](https://www.linkedin.com/in/samuel-sameh-423b15239/)
- **GitHub**: [Samuel611S](https://github.com/Samuel611S)

---

Made with ❤️ by Samuel Sameh 