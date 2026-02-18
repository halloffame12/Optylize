'use client'

import { motion } from 'framer-motion'

const companies = [
    { name: 'EY', logo: '/assets/ey.jpg.jpeg' },
    { name: 'Deloitte', logo: '/assets/finops-deloitte-438high.png' },
    { name: 'IIT Madras', logo: '/assets/png-clipart-indian-institute-of-technology-madras-department-of-management-studies-iit-madras-doctor-of-philosophy-student-indian-institutes-of-technology-student-people-logo.png' },
    { name: 'IRIS', logo: '/assets/iris-removebg-preview.png' },
    { name: 'JIIT', logo: '/assets/Logo-jiit-removebg-preview.png' },
    { name: 'Other', logo: '/assets/images__2_-removebg-preview.png' },
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
                        key={`${company.name}-${i}`}
                        className="flex h-16 items-center justify-center whitespace-nowrap px-8"
                        title={company.name}
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            style={{ maxWidth: 120 }}
                        />
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
                        key={`dup-${company.name}-${i}`}
                        className="flex h-16 items-center justify-center whitespace-nowrap px-8"
                        title={company.name}
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            style={{ maxWidth: 120 }}
                        />
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
