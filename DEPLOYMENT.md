# Deployment & Customization Guide

## 🚀 Quick Start Deployment

### Deploy to Vercel (Easiest - 2 minutes)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel Dashboard → Settings → Domains
   - Add your domain (example.com)
   - Follow DNS instructions

### Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Production deployment
vercel --prod
```

## 📝 Environment Configuration

### Create `.env.local`

```env
# Contact Form (if using email service)
SENDGRID_API_KEY=your_api_key_here
SENDER_EMAIL=info@prabhatassociates.in

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API Endpoints
NEXT_PUBLIC_API_URL=https://yourdomain.com

# Form Submission (Optional)
CONTACT_FORM_WEBHOOK=https://your-webhook-url.com/contact
```

## ✏️ Customization Guide

### 1. Update Company Information

**File**: `components/header.tsx`, `components/hero.tsx`, `components/contact-footer.tsx`

Replace placeholder text:
```typescript
// Before
<p>+91 98765 43210</p>
<a href="mailto:info@prabhatassociates.in">

// After
<p>+91 YOUR ACTUAL NUMBER</p>
<a href="mailto:your@email.com">
```

### 2. Update Logo

1. Replace `/public/logo.png` with your logo
2. Adjust logo size in `components/header.tsx`:
```typescript
<div className="relative w-12 h-12"> {/* Adjust width/height */}
  <Image
    src="/logo.png"
    alt="Your Company"
    // ...
  />
</div>
```

### 3. Update Colors

Edit `/app/globals.css`:

```css
:root {
  /* Change primary color */
  --primary: oklch(0.35 0.15 30); /* Deep brown - change this */
  
  /* Change accent color */
  --accent: oklch(0.60 0.15 40);  /* Golden - change this */
  
  /* Change background */
  --background: oklch(0.985 0 0); /* Off-white - change this */
  
  /* Change text color */
  --foreground: oklch(0.15 0 0);  /* Dark gray - change this */
}
```

**Using color picker tools:**
- [OKLch Color Picker](https://oklch.com/)
- Convert your hex colors to OKLch format

### 4. Update Leadership Team

**File**: `components/leadership.tsx`

Replace the leaders array:
```typescript
const leaders = [
  {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio here...',
    icon: '👨‍💼', // Change to relevant emoji
  },
  // Add more leaders
];
```

### 5. Update Services

**File**: `components/services.tsx`

Update the services array:
```typescript
const services = [
  {
    icon: '📊', // Change emoji
    title: 'Your Service',
    description: 'Service description...',
  },
  // Add/remove services
];
```

### 6. Update Industries

**File**: `components/industries.tsx`

Update the industries array:
```typescript
const industries = [
  { name: 'Your Industry', icon: '🏭' }, // Change as needed
  // More industries
];
```

### 7. Enable Contact Form

**Option A: Using Vercel KV + SendGrid**

1. Add Vercel KV integration in dashboard
2. Install package:
```bash
pnpm add @vercel/kv nodemailer
```

3. Update `components/contact-footer.tsx`:
```typescript
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

4. Create API route `/app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

**Option B: Using Zapier**

1. Connect form to Zapier webhook
2. Set up Zap to email you
3. No coding required!

**Option C: Using Firebase**

```bash
pnpm add firebase
```

Store submissions in Firebase database.

### 8. Add Analytics

**Google Analytics:**

1. Create Google Analytics 4 property
2. Get measurement ID
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXXXX
```

4. Update `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 9. Add Testimonials Section (New)

Create `/components/testimonials.tsx`:

```typescript
'use client'

import { useInView } from '@/lib/hooks'

const testimonials = [
  {
    text: 'Prabhat Associates transformed our operations.',
    author: 'Client Name',
    company: 'Company Name',
  },
  // Add more
]

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center">Success Stories</h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white/10 p-8 rounded-xl">
              <p className="text-lg mb-4">"{t.text}"</p>
              <p className="font-bold">{t.author}</p>
              <p className="text-sm opacity-90">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

Add to `app/page.tsx`:
```typescript
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <main>
      {/* ... other components ... */}
      <Testimonials />
      {/* ... */}
    </main>
  )
}
```

## 🌍 Domain Setup

### For GoDaddy/Namecheap

1. Get nameservers from Vercel
2. Update domain registrar's nameservers
3. Add DNS records in Vercel dashboard
4. Wait 24-48 hours for propagation

### DNS Records Needed

```
Type: A
Value: 76.76.19.0 (example)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔐 Security Setup

### Add robots.txt

Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml

Create `/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

### Add Security Headers

Create `next.config.mjs`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

## 📊 Performance Optimization

### Image Optimization

Replace static images with Next.js Image:
```typescript
import Image from 'next/image'

// Optimizes image size and format automatically
<Image 
  src="/your-image.png"
  alt="Description"
  width={800}
  height={600}
  priority // Only for above-the-fold images
/>
```

### Code Splitting

Next.js automatically splits code per page. For manual optimization:
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  loading: () => <p>Loading...</p>,
})
```

## 🧪 Testing

### Run Tests Locally
```bash
pnpm run build  # Build for production
pnpm run start  # Run production build
```

### Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile devices (iOS, Android)
- Responsive design (dev tools)

## 📚 Additional Features

### Newsletter Signup
Add newsletter section with email capture

### Blog Section
Create `/app/blog/` for blog posts

### Case Studies
Create `/app/case-studies/` for detailed projects

### Pricing Page
Add `/app/pricing/` with service packages

## 🚀 Production Checklist

- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Enable contact form
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Add SSL certificate (automatic on Vercel)
- [ ] Test all forms
- [ ] Test mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Add privacy policy
- [ ] Add terms of service
- [ ] Set up error monitoring
- [ ] Enable backups
- [ ] Set up CDN (optional)
- [ ] Monitor performance

## 📞 Support & Troubleshooting

### Website not loading?
- Check Vercel deployment status
- Verify domain DNS is configured
- Clear browser cache (Ctrl+Shift+Delete)

### Form not submitting?
- Check browser console for errors
- Verify API route is deployed
- Check environment variables

### Slow loading?
- Use Vercel Analytics to identify bottlenecks
- Optimize images
- Check Network tab in DevTools

---

**Version**: 1.0.0
**Last Updated**: 2025
