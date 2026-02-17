import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Optylize — Enterprise GenAI Consulting',
  description: 'Transform your enterprise with production-grade GenAI systems. Strategy, implementation, and governance for growth-stage companies.',
  keywords: ['GenAI', 'consulting', 'enterprise AI', 'LLM', 'artificial intelligence', 'machine learning'],
  openGraph: {
    title: 'Optylize — Enterprise GenAI Consulting',
    description: 'Transform your enterprise with production-grade GenAI systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
