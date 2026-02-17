'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, Zap } from 'lucide-react'

const features = [
    {
        title: "STRATEGY-LED AI IMPLEMENTATION",
        description: "We frame business problems before applying AI. Every solution is aligned to measurable ROI, operational targets, and performance benchmarks.",
        icon: Target
    },
    {
        title: "BUSINESS-FIRST, NOT MODEL-FIRST",
        description: "We begin with economics and value identification — tools follow strategy, not the other way around.",
        icon: Zap
    },
    {
        title: "BOUTIQUE, HIGH-OWNERSHIP ENGAGEMENT",
        description: "Founder-led execution. Small focused teams. Clear accountability from strategy to deployment.",
        icon: Users
    },
    {
        title: "ACCELERATED TIME-TO-VALUE",
        description: "2-week structured diagnostic. 4–6 week pilot. Fast execution without compromising strategic depth.",
        icon: Shield
    }
]

export default function WhyOptylize() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden scroll-mt-24" id="why-optylize">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl">
                        Why Optylize?
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/10 bg-white/5 flex flex-col h-full hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-6">
                                <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white/60 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
