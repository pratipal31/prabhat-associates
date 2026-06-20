# Prabhat Associates - Corporate Website

A modern, elegant, and fully responsive corporate website for Prabhat Associates built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions and scroll animations throughout
- **Professional Branding**: Custom color palette with deep brown/maroon primary and golden accents
- **Comprehensive Sections**:
  - Hero section with compelling messaging
  - About Us with company history and values
  - Services showcase (6 key services)
  - Industries served (8+ industry verticals)
  - Leadership team profiles
  - Contact form with validation
  - Detailed footer with links and contact info
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **SEO Friendly**: Proper metadata and structured content

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Image Optimization**: Next.js Image component
- **Animations**: Custom CSS animations with smooth transitions
- **No External Dependencies**: Minimal third-party packages

## 📁 Project Structure

```
/app
  ├── layout.tsx           # Root layout with metadata
  ├── page.tsx            # Main page
  ├── globals.css         # Global styles and custom utilities
  └── favicon.ico

/components
  ├── header.tsx          # Navigation header with mobile menu
  ├── hero.tsx           # Hero section with CTA buttons
  ├── about.tsx          # About Us section
  ├── services.tsx       # Services showcase
  ├── industries.tsx     # Industries served
  ├── leadership.tsx     # Leadership team profiles
  └── contact-footer.tsx # Contact form and footer

/lib
  └── hooks.ts           # Custom React hooks (useInView)

/public
  └── logo.png          # Prabhat Associates logo
```

## 🎨 Design System

### Color Palette

- **Primary**: Deep Brown/Maroon (`#772617` / `oklch(0.35 0.15 30)`)
- **Accent**: Golden (`#D4A574` / `oklch(0.60 0.15 40)`)
- **Background**: Off-white (`#FCFBF7` / `oklch(0.985 0 0)`)
- **Foreground**: Dark Gray (`#262626` / `oklch(0.15 0 0)`)
- **Text**: Professional grays and blacks

### Typography

- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Monospace**: Geist Mono (for code)

### Animation

Custom animations include:
- Fade in
- Slide up
- Slide down
- Scale in
- Smooth transitions (0.3s - 0.5s)

## 📱 Responsive Breakpoints

- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1920px and up

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd prabhat-associates
```

2. Install dependencies
```bash
pnpm install
# or npm install / yarn install
```

3. Run the development server
```bash
pnpm dev
# or npm run dev / yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Development

### Adding New Sections

1. Create a new component in `/components`
2. Use the `useInView` hook for scroll animations
3. Import and add to `/app/page.tsx`
4. Use consistent styling with Tailwind classes

### Customizing Colors

Edit the CSS variables in `/app/globals.css`:
- Primary color: `--primary: oklch(...)`
- Accent color: `--accent: oklch(...)`
- Other theme colors under `:root`

### Contact Form

The contact form is currently a client-side form that displays a success message. To make it functional:

1. **With Next.js Server Actions** (Recommended):
```typescript
// In components/contact-footer.tsx
async function handleSubmit(formData: FormData) {
  'use server'
  // Save to database or send email
}
```

2. **With an API Route**:
```typescript
// Create app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Process the contact request
  return Response.json({ success: true })
}
```

3. **With Email Service** (SendGrid, Nodemailer, etc.):
```typescript
// Install email library
// pnpm add nodemailer
// Configure and use in server action
```

## 📧 Contact Form Integration

To enable email notifications for contact form submissions:

1. Choose your email provider:
   - SendGrid
   - AWS SES
   - Nodemailer (SMTP)
   - Resend.com

2. Update the `handleSubmit` function in `contact-footer.tsx`

3. Set environment variables in `.env.local`:
```
SENDGRID_API_KEY=your_key
SENDER_EMAIL=info@prabhatassociates.in
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Create a new project and connect your repository
4. Environment variables are automatically configured
5. Deploy with a single click

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Traditional Server (Docker):**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎯 SEO Optimization

The website includes:
- Proper meta tags and descriptions
- Open Graph support
- Semantic HTML structure
- Mobile-friendly viewport
- Fast loading times with Next.js optimization

## ✅ Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Customization Checklist

- [ ] Update company information in text sections
- [ ] Add real leadership photos
- [ ] Configure contact form to send emails
- [ ] Update phone number and email addresses
- [ ] Add social media links (LinkedIn, etc.)
- [ ] Configure Google Analytics/tracking
- [ ] Update privacy policy and terms of service
- [ ] Set up SSL certificate
- [ ] Configure custom domain
- [ ] Add robots.txt and sitemap.xml

## 📞 Contact Information

**Current Placeholder Details** (Update these):
- Email: info@prabhatassociates.in
- Phone: +91 98765 43210
- Location: New Delhi, India

## 📄 License

© 2025 Prabhat Associates. All rights reserved.

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review Next.js documentation
3. Contact your development team

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Last Updated**: 2025
**Version**: 1.0.0
**Status**: Production Ready
