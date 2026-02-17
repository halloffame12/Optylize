'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight, Cpu, Zap, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AgentStorePage() {
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
                            <ShoppingBag className="h-4 w-4 text-black" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">AGENT STORE</span>
                        </div>
                        <h1 className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl md:text-display-xl">
                            <span className="text-foreground">AUTONOMOUS </span>
                            <span className="text-black/40">AI </span>
                            <span className="text-foreground">AGENTS</span>
                        </h1>
                        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Marketplace for specialized, autonomous AI agents designed to solve complex
                            business workflows across engineering, marketing, and operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Status */}
            <section className="relative py-24 bg-card/30">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase leading-tight">
                                Specialized Agents <br />
                                <span className="text-black/40">For specialized teams</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Code Auditor Agent', desc: 'Real-time security and performance analysis for LLM-generated code.', icon: Code2 },
                                    { title: 'Content Architect', desc: 'Autonomous multichannel content strategy and generation engine.', icon: Zap },
                                    { title: 'Logistics Optimizer', desc: 'Proactive supply chain anomaly detection and workflow correction.', icon: Cpu },
                                ].map((item, i) => (
                                    <div key={item.title} className="flex gap-4 items-start p-4 brutal-card bg-white">
                                        <div className="h-10 w-10 flex items-center justify-center bg-black/5 border-[2px] border-black shrink-0">
                                            <item.icon className="h-5 w-5 text-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="clay-card-pastel bg-white p-12 text-center border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-black uppercase mb-4">Curated Marketplace</h3>
                                <p className="text-muted-foreground mb-8">
                                    We are currently beta-testing our first wave of autonomous agents.
                                    Request an invite to join the early access program.
                                </p>
                                <Link href="/contact">
                                    <Button size="xl" className="w-full brutal-btn bg-black text-white hover:bg-black/90">
                                        Request Beta Invite
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
