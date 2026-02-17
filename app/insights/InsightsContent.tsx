'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Clock, Tag, ArrowUpRight, Search, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = ['ALL', 'ENGINEERING', 'STRATEGY', 'BUSINESS', 'RESEARCH']

const articles = [
    {
        title: 'Building Production RAG Pipelines: A Technical Deep Dive',
        excerpt: 'Learn how to move from prototype to production with retrieval-augmented generation, including chunking strategies, embedding selection, and evaluation frameworks.',
        category: 'ENGINEERING',
        readTime: '12 min',
        date: 'Feb 10, 2026',
    },
    {
        title: 'GenAI Governance for Regulated Industries',
        excerpt: 'A comprehensive framework for implementing GenAI governance in healthcare, finance, and government sectors.',
        category: 'STRATEGY',
        readTime: '8 min',
        date: 'Feb 5, 2026',
    },
    {
        title: 'The ROI of Enterprise LLM Deployment',
        excerpt: 'How to measure and maximize the return on investment for your GenAI initiatives with practical frameworks.',
        category: 'BUSINESS',
        readTime: '6 min',
        date: 'Jan 28, 2026',
    },
    {
        title: 'Fine-Tuning vs RAG: When to Use What',
        excerpt: 'A decision framework for choosing between fine-tuning and retrieval-augmented generation for your use case.',
        category: 'ENGINEERING',
        readTime: '10 min',
        date: 'Jan 20, 2026',
    },
    {
        title: 'Agentic AI: Beyond Chatbots',
        excerpt: 'The next evolution of enterprise AI — autonomous agents that can reason, plan, and execute multi-step tasks.',
        category: 'RESEARCH',
        readTime: '15 min',
        date: 'Jan 15, 2026',
    },
    {
        title: 'Data Strategy for GenAI Success',
        excerpt: 'Why your data infrastructure will make or break your GenAI initiatives, and how to get it right.',
        category: 'STRATEGY',
        readTime: '7 min',
        date: 'Jan 8, 2026',
    },
]

export default function InsightsContent() {
    const [filter, setFilter] = useState('ALL')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const filtered = filter === 'ALL' ? articles : articles.filter(a => a.category === filter)

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-brutal-cyan/5 via-background to-brutal-pink/5" />
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brutal-cyan">
                            INSIGHTS & RESEARCH
                        </p>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl">
                            <span className="text-foreground">FROM THE </span>
                            <span className="gradient-text">LAB</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                            Technical deep dives, strategy frameworks, and cutting-edge research
                            from the Optylize team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="relative border-b border-border bg-card/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border-[2px] ${filter === cat
                                    ? 'bg-brutal-cyan text-black border-black shadow-brutal'
                                    : 'bg-transparent text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section ref={ref} className="relative py-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((article, i) => (
                                <motion.article
                                    key={article.title}
                                    layout
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="group skeu-card-elevated rounded-xl overflow-hidden cursor-pointer"
                                >
                                    <div className="h-40 bg-gradient-to-br from-brutal-cyan/10 via-card to-brutal-pink/10 relative">
                                        <div className="absolute inset-0 bg-skeu-metal" />
                                        <div className="absolute bottom-4 left-4">
                                            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brutal-cyan transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {article.readTime}
                                            </span>
                                            <span>{article.date}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="relative py-20 bg-card/50 border-t border-border">
                <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
                    <Mail className="h-10 w-10 text-brutal-cyan mx-auto mb-4" />
                    <h2 className="text-2xl font-extrabold uppercase tracking-tight">
                        STAY IN THE LOOP
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Get the latest insights, research, and GenAI strategies delivered weekly.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Input
                            placeholder="your@email.com"
                            className="skeu-input flex-1"
                        />
                        <Button variant="brutal" className="shrink-0">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
