# 🚀 Getting Started with Your Prabhat Associates Website

Welcome! Your professional corporate website is ready. Follow this guide to get up and running in minutes.

## 📦 What You Have

A complete Next.js website with:
- ✅ Professional design with animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ 7 major sections ready to customize
- ✅ Contact form ready to integrate
- ✅ SEO optimized
- ✅ Production-ready code

## 🎯 5-Minute Quick Start

### Step 1: Install Dependencies (1 minute)
```bash
cd /vercel/share/v0-project
pnpm install
```

### Step 2: Run Locally (30 seconds)
```bash
pnpm dev
# Opens http://localhost:3000
```

### Step 3: View Your Website
- Hero section with company message
- About section with company values
- Services showcase (6 services)
- Industries served (8 industries)
- Leadership team profiles
- Contact form
- Footer with all links

### Step 4: Make Your First Change
Edit `/components/header.tsx` and change line 24:
```typescript
// Before
{ label: 'Home', href: '#home' },

// After
{ label: 'Home', href: '#home' }, // Your comment here
```
The site auto-reloads! ✨

### Step 5: Deploy (2 minutes)
```bash
# Option A: Push to GitHub + Vercel
git push origin main

# Option B: Use Vercel CLI
vercel --prod
```

## 📝 Essential Customization (Before Launch)

### 1. Update Company Info (5 minutes)

**File**: `components/contact-footer.tsx` (Line 77-100)

Find this:
```typescript
<a href="mailto:info@prabhatassociates.in">
  info@prabhatassociates.in
</a>
```

Change to:
```typescript
<a href="mailto:your-actual-email@domain.com">
  your-actual-email@domain.com
</a>
```

Also update:
- Phone number: `+91 98765 43210` → `Your actual phone`
- Office address: `New Delhi, India` → `Your actual address`

### 2. Change Your Logo (2 minutes)

1. Save your logo as `logo.png` (square format, transparent background)
2. Replace `/public/logo.png`
3. Done! Logo appears automatically

### 3. Customize Colors (3 minutes)

Edit `/app/globals.css` (Lines 52-76):

```css
:root {
  --primary: oklch(0.35 0.15 30);  /* Change this for brand color */
  --accent: oklch(0.60 0.15 40);   /* Change this for accent color */
  --background: oklch(0.985 0 0);  /* Page background */
  --foreground: oklch(0.15 0 0);   /* Text color */
}
```

**How to find your colors:**
1. Go to https://oklch.com/
2. Paste your hex color (e.g., #FF6B6B)
3. Copy the oklch value
4. Paste into globals.css

### 4. Update Leadership Team (3 minutes)

**File**: `components/leadership.tsx`

```typescript
const leaders = [
  {
    name: 'Sujit Kumar Ojha',  // ← Change to your name
    title: 'Founder & CEO',      // ← Change title
    bio: 'Your biography here...', // ← Update bio
    icon: '👨‍💼',
  },
  // ... more leaders
];
```

### 5. Update Services (3 minutes)

**File**: `components/services.tsx`

```typescript
const services = [
  {
    icon: '📊',              // Change emoji
    title: 'Strategic Planning',  // Change title
    description: 'Your description...', // Update description
  },
  // ... more services
];
```

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest - Recommended)

1. **Go to**: https://vercel.com
2. **Click**: "New Project"
3. **Connect**: Your GitHub repository
4. **Click**: "Deploy"
5. **Add domain**: In Settings → Domains

**Time**: 2 minutes | **Cost**: Free tier available

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Add domain when prompted
```

### Option 3: Traditional Server

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Server will run on port 3000
```

## 📱 Test Your Website

### Desktop
1. Open http://localhost:3000
2. Check all sections load
3. Click all links
4. Test all buttons

### Mobile (in browser)
1. Open DevTools (F12)
2. Click device icon (top left)
3. Select "iPhone SE"
4. Check hamburger menu works
5. Scroll through all sections

### Real Mobile Device
1. Get your local IP: `ipconfig getifaddr en0` (Mac) or `hostname -I` (Linux)
2. On mobile: Open `http://YOUR_IP:3000`
3. Test everything works

## 📧 Enable Contact Form

### Quick Option: Formspree (No coding)

1. Go to https://formspree.io/
2. Sign up for free
3. Create new form
4. Get your endpoint (e.g., `https://formspree.io/f/XXXXX`)

Then update `components/contact-footer.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Add this
  const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  }
};
```

### With Email Service: SendGrid (Free up to 100/day)

1. Sign up at https://sendgrid.com/
2. Get API key
3. Create `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: process.env.CONTACT_EMAIL }],
            replyTo: { email },
          },
        ],
        from: { email: process.env.SENDER_EMAIL },
        subject: `New Contact: ${name}`,
        content: [
          {
            type: 'text/html',
            value: `
              <h2>New Contact Form Submission</h2>
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Message:</b></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          },
        ],
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return NextResponse.json({ success: false }, { status: 500 });
}
```

Then add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=your@email.com
SENDER_EMAIL=noreply@yourdomain.com
```

## 🎨 Customize Color Scheme

### Brand Color Changes

**File**: `/app/globals.css`

```css
/* Change these three lines for a new color scheme */
--primary: oklch(0.35 0.15 30);    /* Main brand color */
--accent: oklch(0.60 0.15 40);     /* Highlight/accent */
--background: oklch(0.985 0 0);    /* Page background */
```

**Popular color palettes:**

**Blue & Gold:**
```css
--primary: oklch(0.35 0.15 250);   /* Blue */
--accent: oklch(0.65 0.15 50);     /* Gold */
```

**Green & Teal:**
```css
--primary: oklch(0.35 0.15 150);   /* Green */
--accent: oklch(0.60 0.15 200);    /* Teal */
```

**Purple & Pink:**
```css
--primary: oklch(0.40 0.15 300);   /* Purple */
--accent: oklch(0.65 0.15 320);    /* Pink */
```

## 📊 Analytics Setup

### Google Analytics (Free)

1. Go to https://analytics.google.com/
2. Create account
3. Get measurement ID (G-XXXXX)
4. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXX
```

5. Install ga4:
```bash
pnpm add @next/third-parties
```

6. Update `/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: any) {
  return (
    <html>
      {/* ... */}
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  )
}
```

## ✅ Pre-Launch Checklist

- [ ] Update all company information
- [ ] Change logo
- [ ] Update colors to match branding
- [ ] Update leadership team bios
- [ ] Set up contact form
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Set up custom domain
- [ ] Enable HTTPS/SSL
- [ ] Add Google Analytics
- [ ] Create privacy policy
- [ ] Create terms of service
- [ ] Deploy to production
- [ ] Test on live domain
- [ ] Set up monitoring

## 🐛 Troubleshooting

### Website won't load
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Try again
pnpm dev
```

### Styling looks wrong
```bash
# Rebuild Tailwind
pnpm install

# Restart dev server
pnpm dev
```

### Form not submitting
1. Check browser console (F12)
2. Check Network tab for API errors
3. Verify environment variables are set
4. Check API endpoint is correct

### Mobile menu not working
- Clear browser cache
- Try different browser
- Check JavaScript is enabled
- Verify component imported in page.tsx

## 📚 File Guide

### Most Important Files

| File | Purpose | Edit For |
|------|---------|----------|
| `/app/page.tsx` | Main page layout | Add/remove sections |
| `/app/globals.css` | Colors & animations | Brand colors, fonts |
| `/components/header.tsx` | Navigation | Company name, logo |
| `/components/hero.tsx` | Main message | Headline, tagline |
| `/components/contact-footer.tsx` | Contact info | Email, phone, address |
| `/app/layout.tsx` | Site metadata | Title, description |

### Don't Touch (Unless you know what you're doing)

- `/next.config.mjs` - Build configuration
- `/tailwind.config.ts` - Tailwind setup
- `/tsconfig.json` - TypeScript config
- `package.json` - Dependencies

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 💬 Getting Help

1. **Check docs**: README.md, IMPLEMENTATION.md, DEPLOYMENT.md
2. **Search error**: Google the error message
3. **Community**: Stack Overflow, GitHub Discussions
4. **Developer**: Contact your web developer

## 🎉 You're Ready!

Your professional Prabhat Associates website is ready to launch. Follow these steps and you'll be live in less than an hour.

**Questions?** Check the other documentation files:
- `README.md` - Full overview
- `IMPLEMENTATION.md` - Technical details  
- `DEPLOYMENT.md` - Deployment guide
- `PROJECT_SUMMARY.md` - What's included

---

**Happy launching! 🚀**
