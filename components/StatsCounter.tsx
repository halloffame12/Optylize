'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'

const stats = [
    { icon: TrendingUp, value: 340, suffix: '%', label: 'Average ROI', color: 'text-brutal-cyan' },
    { icon: Users, value: 50, suffix: '+', label: 'Enterprise Deployments', color: 'text-brutal-pink' },
    { icon: Globe, value: 12, suffix: '+', label: 'Industries Served', color: 'text-brutal-yellow' },
    { icon: Award, value: 96, suffix: '%', label: 'Client Retention', color: 'text-brutal-cyan' },
]

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 2000
        const step = Math.ceil(value / (duration / 16))
        const timer = setInterval(() => {
            start += step
            if (start >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(start)
            }
        }, 16)
        return () => clearInterval(timer)
    }, [inView, value])

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    )
}

export default function StatsCounter() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="relative py-24 bg-background">
            <div className="noise-overlay" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="brutal-card bg-card p-8 text-center"
                            >
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-[3px] border-current bg-card">
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                                <div className={`text-4xl font-extrabold ${stat.color}`}>
                                    <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                                </div>
                                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    {stat.label}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
