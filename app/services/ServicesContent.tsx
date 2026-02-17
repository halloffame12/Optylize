'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Settings, Code2, Database, Zap, Search, LineChart,
    ArrowRight, CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
        icon: Database,
        title: 'Data Readiness Assessment',
        desc: 'Ensure your data infrastructure is GenAI-ready.',
        details: [
            'Data quality audit',
            'Governance framework setup',
            'Data pipeline optimization',
            'Vector DB architecture',
            'Embedding strategy design',
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
                <div className="absolute inset-0 bg-gradient-to-br from-brutal-cyan/5 via-background to-brutal-pink/5" />
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brutal-cyan">
                            OUR SERVICES
                        </p>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl">
                            <span className="text-foreground">END-TO-END </span>
                            <span className="gradient-text">GENAI </span>
                            <span className="text-foreground">SOLUTIONS</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                            From strategy to production deployment, we deliver measurable GenAI outcomes
                            for growth-stage companies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Cards */}
            <section ref={ref} className="relative py-20 bg-card/30">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, i) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="skeu-card-elevated rounded-xl p-8"
                                >
                                    <Icon className="h-10 w-10 text-brutal-cyan mb-6" />
                                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.details.map((detail) => (
                                            <li key={detail} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-brutal-cyan mt-0.5 shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section ref={timelineRef} className="relative py-24">
                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brutal-pink">
                            OUR PROCESS
                        </p>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                            <span className="text-foreground">HOW WE </span>
                            <span className="text-brutal-pink">DELIVER</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-border" />

                        <div className="space-y-8">
                            {timeline.map((step, i) => (
                                <motion.div
                                    key={step.week}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                    className="relative flex gap-6 pl-16"
                                >
                                    <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center border-[3px] border-brutal-cyan bg-background">
                                        <span className="text-xs font-extrabold text-brutal-cyan">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-brutal-cyan mb-1">{step.week}</p>
                                        <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.desc}</p>
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
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brutal-yellow">
                            FAQ
                        </p>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight">
                            <span className="text-foreground">COMMON </span>
                            <span className="text-brutal-yellow">QUESTIONS</span>
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="skeu-card rounded-xl px-6 border-none">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative py-20 bg-brutal-cyan">
                <div className="noise-overlay opacity-[0.06]" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
                        READY TO GET STARTED?
                    </h2>
                    <p className="mt-4 text-lg text-black/70">
                        Schedule a free consultation and get a personalized GenAI roadmap.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact">
                            <Button size="xl" className="brutal-btn bg-black text-brutal-cyan border-black shadow-[4px_4px_0px_0px_#FFE600] gap-2 text-base">
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
