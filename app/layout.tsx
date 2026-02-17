import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL('https://optylize.com'),
    title: {
        default: 'Optylize — Enterprise GenAI Consulting',
        template: '%s | Optylize'
    },
    description: 'Transform your enterprise with production-grade GenAI systems. Strategy, implementation, and governance for growth-stage companies.',
    keywords: ['GenAI', 'consulting', 'enterprise AI', 'LLM', 'artificial intelligence', 'machine learning', 'AI strategy'],
    authors: [{ name: 'Optylize Team' }],
    creator: 'Optylize',
    publisher: 'Optylize',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Optylize — Enterprise GenAI Consulting',
        description: 'Transform your enterprise with production-grade GenAI systems.',
        url: 'https://optylize.com',
        siteName: 'Optylize',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Optylize — Enterprise GenAI Consulting',
        description: 'Transform your enterprise with production-grade GenAI systems.',
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
