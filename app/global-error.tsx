'use client'

import './globals.css'
import { Button } from '@/components/ui/button'

// Simple fallback error page without complex dependencies
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en">
            <body className="font-sans antialiased min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                {/* Simple noise overlay using CSS if available, otherwise just black background */}
                <div className="fixed inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />

                <div className="z-10 text-center max-w-lg">
                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 border-[3px] border-red-500 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                    </div>

                    <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl mb-4">
                        CRITICAL SYSTEM ERROR
                    </h2>

                    <p className="text-lg text-white/70 mb-8">
                        A critical error occurred in the application root. Please reload the page.
                    </p>

                    <Button
                        className="bg-red-500 text-white hover:bg-red-600 font-bold uppercase tracking-wider px-8 py-6 text-lg border-2 border-transparent hover:border-white transition-all"
                        onClick={() => reset()}
                    >
                        RELOAD APPLICATION
                    </Button>
                </div>
            </body>
        </html>
    )
}
