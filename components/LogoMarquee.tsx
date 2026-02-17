'use client'

import { motion } from 'framer-motion'

const companies = [
    'MICROSOFT', 'GOOGLE', 'AMAZON', 'META', 'NVIDIA',
    'OPENAI', 'ANTHROPIC', 'STRIPE', 'SHOPIFY', 'SLACK',
    'NOTION', 'FIGMA', 'VERCEL', 'DATADOG', 'SNOWFLAKE',
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                className="flex shrink-0 gap-8 pr-8"
                animate={{ x: reverse ? '0%' : '-100%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {[...companies, ...companies].map((company, i) => (
                    <div
                        key={`${company}-${i}`}
                        className="flex h-16 items-center justify-center whitespace-nowrap px-8 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
                    >
                        {company}
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex shrink-0 gap-8 pr-8"
                animate={{ x: reverse ? '0%' : '-100%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {[...companies, ...companies].map((company, i) => (
                    <div
                        key={`dup-${company}-${i}`}
                        className="flex h-16 items-center justify-center whitespace-nowrap px-8 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
                    >
                        {company}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default function LogoMarquee() {
    return (
        <section className="relative border-y border-border bg-card/50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    TRUSTED BY INDUSTRY LEADERS
                </p>
            </div>
            <MarqueeRow />
        </section>
    )
}
