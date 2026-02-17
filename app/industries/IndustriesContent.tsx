'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    ShoppingCart, Factory, Building2, Shield,
    Landmark, Globe, Zap, HeartPulse, ArrowRight
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const industries = [
    {
        name: 'Ecommerce',
        icon: ShoppingCart,
        desc: 'Addressing fragmented data and conversion leakages through agentic automation.',
        challenge: 'Low operational efficiency and fragmented data systems.',
        approach: 'Implemented structured AI strategy, KPI mapping, predictive analytics layer.',
        impact: '40% ROI improvement and 2x faster decision cycles.',
        metrics: ['40% ROI', '12+ Deployments', 'Custom Agentic Workflows']
    },
    {
        name: 'Manufacturing & Metals',
        icon: Factory,
        desc: 'Optimizing supply chains and predictive maintenance for global industrial leaders.',
        challenge: 'Manual forecasting and inventory misalignment.',
        approach: 'Built AI-driven demand prediction system integrated with ERP.',
        impact: 'Reduced waste by 28%, improved planning accuracy by 35%.',
        metrics: ['2x Efficiency', 'Reduced Downtime', 'Predictive Supply Chain']
    },
    {
        name: 'SaaS & Services',
        icon: Building2,
        desc: 'Embedding AI into platform workflows to accelerate developer productivity and customer success.',
        challenge: 'Poor customer segmentation and conversion leakages.',
        approach: 'Deployed agentic analytics workflows and automation systems.',
        impact: 'Increased retention by 22% and reduced churn within 6 weeks.',
        metrics: ['AI-Native features', '6-Week Turnaround', 'Scalable Agents']
    },
    {
        name: 'Cyber Security',
        icon: Shield,
        desc: 'Leveraging GenAI for threat detection and automated incident response scripts.',
        challenge: 'Evolving threat landscapes and slow manual response times.',
        approach: 'AI-driven security orchestration and automated threat hunting.',
        impact: 'Reduced mean time to response (MTTR) by 60%.',
        metrics: ['Real-time Analysis', 'Automated Remediation', 'Zero-Trust AI']
    },
    {
        name: 'Ed-Tech',
        icon: Landmark,
        desc: 'Transforming learner outcomes with personalized AI tutors and automated grading systems.',
        challenge: 'Inconsistent learning paths and high teacher workload.',
        approach: 'LLM-powered tutoring agents and automated feedback loops.',
        impact: '30% increase in student engagement scores.',
        metrics: ['Personalized Learning', 'Adaptive Curriculum', 'AI Tutors']
    },
    {
        name: 'Public Sector',
        icon: Globe,
        desc: 'Structured AI adoption for public services, focusing on efficiency and citizen engagement.',
        challenge: 'Legacy bureaucratic processes and data silos.',
        approach: 'Compliant AI integration for document processing and public interaction.',
        impact: 'Improved service delivery speed by 45%.',
        metrics: ['Process Automation', 'Regulated Compliance', 'Citizen-First AI']
    },
    {
        name: 'Energy Sector',
        icon: Zap,
        desc: 'Smart grid management and predictive modeling for renewable energy production.',
        challenge: 'Unpredictable renewable yields and grid instability.',
        approach: 'Machine learning for demand response and grid optimization.',
        impact: '15% reduction in grid management overhead.',
        metrics: ['Grid Optimization', 'Predictive Modeling', 'Sustainability AI']
    },
    {
        name: 'Hospitality',
        icon: HeartPulse,
        desc: 'Enhancing guest experiences through hyper-personalized concierge agents and optimized booking.',
        challenge: 'Fragmented guest data and high volume of inquiries.',
        approach: 'Voice and chat AI for handling booking and guest services.',
        impact: 'Reduced booking drop-offs by 25%.',
        metrics: ['Guest GenAI', 'Automated Bookings', 'Personalized Stay']
    }
]

export default function IndustriesContent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-background">
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            STRATEGIC VERTICALS
                        </p>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl lg:max-w-4xl">
                            INDUSTRIES WE <span className="text-black/40 italic">TRANSFORM</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                            We focus on industries where AI can drive measurable, high-impact business outcomes. Our boutique approach ensures vertical-specific expertise in every engagement.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section ref={ref} className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="brutal-card bg-card p-10 h-full flex flex-col hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 bg-black/5 group-hover:bg-white/10 border-2 border-black">
                                        <industry.icon className="h-8 w-8 text-black" aria-hidden="true" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-black uppercase mb-4 tracking-tighter">
                                    {industry.name}
                                </h2>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                                    {industry.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/5">
                                    {industry.metrics.map(metric => (
                                        <div key={metric} className="flex items-center gap-2">
                                            <div className="h-1 w-1 rounded-full bg-black/20" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-extrabold uppercase mb-8 leading-tight">
                        NOT SURE IF YOUR INDUSTRY IS READY?
                    </h2>
                    <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                        Book a Free Strategic Audit Consultation Call and let's map out your organizational roadmap.
                    </p>
                    <Link href="/contact">
                        <Button size="xl" className="bg-white text-black hover:bg-white/90 font-black px-12 h-20 rounded-none text-lg">
                            BOOK A STRATEGIC AUDIT
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
