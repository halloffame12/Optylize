'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Globe, Award, Zap } from 'lucide-react'

const stats = [
    { icon: TrendingUp, value: 40, suffix: '%', label: 'Average ROI', color: 'text-black' },
    { icon: Zap, value: 12, suffix: '+', label: 'Agentic Deployments', color: 'text-black' },
    { icon: Globe, value: 4, suffix: '+', label: 'Industries Served', color: 'text-black' },
    { icon: Award, value: 2, suffix: 'x', label: 'Faster Than Firms', color: 'text-black' },
    { icon: Users, value: 6, suffix: ' WKS', label: 'Avg Turnaround', color: 'text-black', subLabel: '4-6 Weeks' },
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="brutal-card bg-card p-6 text-center"
                            >
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border-[3px] border-current bg-card">
                                    <Icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                                <div className={`text-3xl font-extrabold ${stat.color}`}>
                                    {stat.label === 'Avg Turnaround' ? (
                                        <span>4-6<span className="text-sm ml-1 uppercase">wks</span></span>
                                    ) : (
                                        <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                                    )}
                                </div>
                                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-tight">
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
