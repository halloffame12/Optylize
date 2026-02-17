import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
            <div className="noise-overlay" />

            <div className="relative">
                <h1 className="text-[150px] font-extrabold leading-none tracking-tighter text-brutal-cyan sm:text-[200px] md:text-[300px]">
                    404
                </h1>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transform bg-brutal-pink px-4 py-2 text-2xl font-bold uppercase text-black shadow-brutal border-2 border-black sm:text-4xl">
                    Page Not Found
                </div>
            </div>

            <p className="mt-8 max-w-lg text-lg text-muted-foreground uppercase tracking-wider">
                The page you are looking for has been moved, deleted, or possibly never existed.
            </p>

            <div className="mt-10">
                <Link href="/">
                    <Button variant="brutal" size="xl" className="gap-2">
                        RETURN HOME
                    </Button>
                </Link>
            </div>
        </div>
    )
}
