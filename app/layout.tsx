import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PBA',
  description: 'Prabhat Associates - Trusted business consulting firm since 1995. Providing strategic consultancy, business solutions, and professional services.',
  keywords: 'business consulting, strategic services, consultancy, professional services',
  generator: 'v0.app',
  authors: [{ name: 'Prabhat Associates' }],
  creator: 'Prabhat Associates',
  openGraph: {
    title: 'Prabhat Associates | Business Consulting & Strategic Services',
    description: 'Trusted business consulting firm since 1995',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
