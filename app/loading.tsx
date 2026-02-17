import { Loader2 } from 'lucide-react'

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-brutal-cyan" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brutal-cyan animate-pulse">
                    LOADING...
                </p>
            </div>
        </div>
    )
}
