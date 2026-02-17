'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
            <div className="noise-overlay" />

            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 border-[3px] border-destructive">
                <AlertCircle className="h-10 w-10 text-destructive" />
            </div>

            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl text-foreground">
                SOMETHING WENT WRONG!
            </h2>

            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                We encountered an unexpected error while processing your request.
            </p>

            {error.digest && (
                <code className="mt-4 block rounded bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
                    Error ID: {error.digest}
                </code>
            )}

            <div className="mt-8 flex gap-4">
                <Button variant="brutal" onClick={() => reset()}>
                    TRY AGAIN
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/'}>
                    RETURN HOME
                </Button>
            </div>
        </div>
    )
}
