'use client'

import { motion } from 'framer-motion'
import { Box, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ProductLibraryPage() {
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
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-black/5 border-[2px] border-black px-4 py-1.5 mb-8">
                            <Box className="h-4 w-4 text-black" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">PRODUCT LIBRARY</span>
                        </div>
                        <h1 className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl md:text-display-xl">
                            <span className="text-foreground">PRE-BUILT </span>
                            <span className="text-black/40">AI </span>
                            <span className="text-foreground">ASSETS</span>
                        </h1>
                        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Accelerate your time-to-market with our library of production-ready GenAI modules,
                            from high-performance search to advanced rag pipelines.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon / Intro */}
            <section className="relative py-24 bg-card/30">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="brutal-card bg-white p-12 max-w-3xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center text-white">
                                <Sparkles className="h-10 w-10 animate-pulse" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black uppercase mb-6">Coming Soon</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We are currently curating our most successful internal modules for public release.
                            Register for early access to our proprietary LLMOps suite.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/contact">
                                <Button size="xl" className="brutal-btn bg-black text-white gap-3">
                                    Get Early Access <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="relative py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: 'LLM Orchestration', icon: Zap, desc: 'Advanced prompt chaining and routing modules.' },
                            { title: 'Security & Guardrails', icon: Shield, desc: 'Production-grade safety and compliance layers.' },
                            { title: 'Vector & RAG', icon: Box, desc: 'Optimized retrieval and embedding management.' }
                        ].map((cat, i) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="clay-card p-8 border-black/5"
                            >
                                <cat.icon className="h-10 w-10 mb-6 text-black" />
                                <h3 className="text-lg font-bold uppercase mb-3">{cat.title}</h3>
                                <p className="text-sm text-muted-foreground">{cat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
