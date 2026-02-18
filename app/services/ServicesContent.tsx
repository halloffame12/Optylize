'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Settings, Code2, Database, Zap, Search, LineChart,
    ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const services = [
    {
        icon: Settings,
        title: 'GenAI Strategy & Roadmap',
        desc: 'Define a clear path to GenAI adoption aligned with your business goals.',
        details: [
            'Use case identification & prioritization',
            'Technology stack assessment',
            'Phased implementation plan',
            'ROI projection modeling',
            'Stakeholder alignment workshops',
        ],
    },
    {
        icon: Code2,
        title: 'LLM Implementation',
        desc: 'End-to-end development of production GenAI solutions.',
        details: [
            'RAG pipeline development',
            'Fine-tuning & RLHF',
            'API integration & orchestration',
            'Evaluation & monitoring',
            'Deployment & scaling',
        ],
    },
    {
        icon: Zap,
        title: 'Process Automation',
        desc: 'Reengineer workflows for the GenAI era.',
        details: [
            'Workflow analysis & mapping',
            'Agentic AI implementation',
            'Human-in-the-loop design',
            'Cost-benefit analysis',
            'Change management support',
        ],
    },
    {
        icon: Search,
        title: 'Market Intelligence',
        desc: 'Leverage agentic AI for real-time competitive analysis.',
        details: [
            'Automated data collection',
            'Sentiment analysis pipelines',
            'Competitor monitoring',
            'Trend prediction models',
            'Custom dashboard development',
        ],
    },
    {
        icon: LineChart,
        title: 'Predictive Analytics',
        desc: 'Turn historical data into actionable future insights.',
        details: [
            'Demand forecasting models',
            'Risk assessment systems',
            'Resource optimization',
            'Customer churn prediction',
            'Revenue forecasting',
        ],
    },
]

const timeline = [
    { week: 'WEEK 1-2', title: 'DISCOVERY', desc: 'Deep-dive into your business, data, and objectives.' },
    { week: 'WEEK 3-4', title: 'STRATEGY', desc: 'Roadmap finalization and architecture design.' },
    { week: 'WEEK 5-8', title: 'BUILD', desc: 'Agile development with weekly demos and checkpoints.' },
    { week: 'WEEK 9-10', title: 'DEPLOY', desc: 'Production deployment with monitoring and optimization.' },
    { week: 'ONGOING', title: 'SUPPORT', desc: 'Post-launch optimization, monitoring, and iteration.' },
]

const faqs = [
    {
        q: 'How long does a typical engagement take?',
        a: 'Most engagements run 8-12 weeks from kickoff to production deployment. Strategy-only engagements can be completed in 2-4 weeks.',
    },
    {
        q: 'What industries do you specialize in?',
        a: 'We specialize in regulated industries: financial services, healthcare, manufacturing, logistics, retail, and enterprise SaaS.',
    },
    {
        q: 'Do you offer ongoing support?',
        a: 'Yes. All engagements include 30 days of post-launch support. We also offer retainer packages for ongoing optimization and feature development.',
    },
    {
        q: 'How do you handle data security?',
        a: 'We follow SOC 2 practices, use zero-data-retention LLM providers, and can work within your VPC. All data stays under your control.',
    },
    {
        q: "What's your pricing model?",
        a: 'We offer fixed-scope project pricing with clear milestones. No hourly billing surprises. Contact us for a custom quote.',
    },
]

export default function ServicesContent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const timelineRef = useRef(null)
    const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-background to-black/5" />
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-black/5 border-[1px] border-black/10 px-3 py-1 mb-6 rounded-full">
                            <Sparkles className="h-3 w-3 text-black" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">OUR CAPABILITIES</span>
                        </div>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl lg:max-w-4xl">
                            <span className="text-foreground">END-TO-END </span>
                            <span className="text-black/40 italic">GENAI </span>
                            <span className="text-foreground">SOLUTIONS</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                            From strategic advisory to production-grade engineering, we deliver
                            measurable GenAI outcomes for enterprise-scale transformation.
                        </p>
                    </motion.div>

                    {/* Decorative Background Element */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
                        <Settings className="h-[600px] w-[600px] rotate-12" />
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section ref={ref} className="relative py-20 bg-card/30">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, i) => {
                            const Icon = service.icon
                            const isStrategy = service.title.includes('Strategy')
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className={cn(
                                        "skeu-card-elevated group rounded-2xl p-8 relative overflow-hidden transition-all duration-300",
                                        isStrategy ? "md:scale-105 z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]" : ""
                                    )}
                                >
                                    {isStrategy && (
                                        <div className="absolute top-0 right-0 lg:right-4 p-4">
                                            <div className="bg-white/10 text-[10px] font-bold text-white uppercase px-2 py-0.5 rounded border border-white/20">
                                                Core Offering
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">{service.title}</h3>
                                    <p className="text-sm text-white/50 mb-8 leading-relaxed font-medium">{service.desc}</p>
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Key Deliverables</p>
                                        <ul className="space-y-3">
                                            {service.details.map((detail) => (
                                                <li key={detail} className="flex items-center gap-3 list-none">
                                                    <div className="h-1 w-1 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                                                    <span className="text-xs text-white/60 font-medium tracking-tight truncate">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section ref={timelineRef} className="relative py-24 bg-background">
                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            OUR PROCESS
                        </p>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                            <span className="text-foreground">HOW WE </span>
                            <span className="text-black/60">DELIVER</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[23px] top-0 bottom-0 w-[4px] bg-black/5" />

                        <div className="space-y-12">
                            {timeline.map((step, i) => (
                                <motion.div
                                    key={step.week}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                    className="relative flex gap-10 pl-2 lg:pl-0"
                                >
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-[4px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <span className="text-sm font-black text-black">{i + 1}</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            {/* Badge-style week title */}
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white px-2 py-0.5">
                                                {step.week}
                                            </span>
                                            <div className="h-px w-8 bg-black/10" />
                                        </div>
                                        <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">{step.title}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-24 bg-card/30">
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            FAQ
                        </p>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight">
                            <span className="text-foreground">COMMON </span>
                            <span className="text-black/60">QUESTIONS</span>
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="skeu-card rounded-xl px-6 border-none">
                                <AccordionTrigger className="text-left font-bold text-white hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/60 leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative py-20 bg-black">
                <div className="noise-overlay opacity-[0.06]" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                        READY TO GET STARTED?
                    </h2>
                    <p className="mt-4 text-white/70">
                        Schedule a free consultation and get a personalized GenAI roadmap.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact">
                            <Button size="xl" className="brutal-btn bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] gap-2 text-base">
                                BOOK A CALL <ArrowRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
