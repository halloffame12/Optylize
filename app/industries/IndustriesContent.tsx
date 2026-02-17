'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Building2, HeartPulse, Landmark, ShoppingCart, Factory, Truck,
    Shield, TrendingUp, CheckCircle2
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const industries = [
    {
        icon: Landmark,
        name: 'Financial Services',
        desc: 'Risk modeling, fraud detection, automated compliance, and intelligent document processing for banks, insurers, and fintechs.',
        metrics: ['60% faster claim processing', '99.2% fraud detection rate', 'SOC 2 + PCI compliant'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
    {
        icon: HeartPulse,
        name: 'Healthcare',
        desc: 'Clinical decision support, patient engagement AI, medical document analysis, and HIPAA-compliant data pipelines.',
        metrics: ['40% reduction in admin time', 'HIPAA compliant', '10x faster medical coding'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
    {
        icon: ShoppingCart,
        name: 'Retail & Ecommerce',
        desc: 'Personalization engines, demand forecasting, dynamic pricing, and AI-powered customer experience optimization.',
        metrics: ['34% more conversions', '28% higher AOV', 'Real-time personalization'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
    {
        icon: Factory,
        name: 'Manufacturing',
        desc: 'Predictive maintenance, quality control AI, supply chain optimization, and intelligent process automation.',
        metrics: ['45% fewer defects', '30% less downtime', 'Real-time quality monitoring'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
    {
        icon: Truck,
        name: 'Logistics',
        desc: 'Route optimization, warehouse automation, fleet intelligence, and predictive demand analysis.',
        metrics: ['28% cost reduction', '15% faster delivery', 'Autonomous dispatching'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
    {
        icon: Building2,
        name: 'Enterprise SaaS',
        desc: 'AI feature embedding, intelligent automation, platform scalability, and user behavior prediction.',
        metrics: ['3x faster feature delivery', '50% support deflection', 'AI-native architecture'],
        color: 'border-white/10',
        iconColor: 'text-white',
    },
]

export default function IndustriesContent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-brutal-yellow/5 via-background to-brutal-cyan/5" />
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            INDUSTRY VERTICALS
                        </p>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl">
                            <span className="text-foreground">GENAI FOR </span>
                            <span className="text-black/60">EVERY </span>
                            <span className="text-foreground">SECTOR</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                            Vertical-ready frameworks designed for regulated industries with
                            compliance-first architecture and domain-specific expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industry Grid */}
            <section ref={ref} className="relative py-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {industries.map((ind, i) => {
                            const Icon = ind.icon
                            return (
                                <motion.div
                                    key={ind.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className={`group clay-card clay-float p-8 border ${ind.color} cursor-pointer`}
                                >
                                    <Icon className={`h-12 w-12 ${ind.iconColor} mb-6 transition-transform group-hover:scale-110`} />
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                                        {ind.name}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed mb-6">{ind.desc}</p>

                                    {/* Metrics */}
                                    <div className="space-y-2 pt-4 border-t border-white/10">
                                        {ind.metrics.map((metric) => (
                                            <div key={metric} className="flex items-center gap-2 text-xs">
                                                <CheckCircle2 className={`h-3.5 w-3.5 ${ind.iconColor} shrink-0`} />
                                                <span className="text-white/40">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Compliance Bar */}
            <section className="relative py-16 bg-card/50 border-y border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                            COMPLIANCE & SECURITY
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {['SOC 2', 'HIPAA', 'GDPR', 'PCI DSS', 'ISO 27001'].map((badge) => (
                            <div
                                key={badge}
                                className="brutal-card bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider border-black shadow-brutal"
                            >
                                <Shield className="inline h-4 w-4 mr-2" />
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
