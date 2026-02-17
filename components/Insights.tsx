'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const articles = [
  {
    title: 'Building Production RAG Pipelines: A Technical Deep Dive',
    excerpt: 'Learn how to move from prototype to production with retrieval-augmented generation, including chunking strategies and evaluation frameworks.',
    category: 'Engineering',
    readTime: '12 min',
    featured: true,
  },
  {
    title: 'GenAI Governance for Regulated Industries',
    excerpt: 'A comprehensive framework for implementing GenAI governance in healthcare, finance, and government sectors.',
    category: 'Strategy',
    readTime: '8 min',
    featured: false,
  },
  {
    title: 'The ROI of Enterprise LLM Deployment',
    excerpt: 'How to measure and maximize the return on investment for your GenAI initiatives.',
    category: 'Business',
    readTime: '6 min',
    featured: false,
  },
]

export default function Insights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-card/30">
      <div className="noise-overlay" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brutal-cyan">
              INSIGHTS & RESEARCH
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-display-md">
              <span className="text-foreground">LATEST FROM THE </span>
              <span className="text-brutal-cyan">LAB</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brutal-cyan hover:text-brutal-cyan/80 transition-colors"
          >
            VIEW ALL <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group skeu-card-elevated rounded-xl overflow-hidden cursor-pointer ${article.featured ? 'lg:row-span-2' : ''
                }`}
            >
              {/* Simulated image/texture area */}
              <div className={`relative ${article.featured ? 'h-48' : 'h-32'} bg-gradient-to-br from-brutal-cyan/10 via-card to-brutal-pink/10`}>
                <div className="absolute inset-0 bg-skeu-metal" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`font-bold text-foreground mb-3 group-hover:text-brutal-cyan transition-colors ${article.featured ? 'text-xl' : 'text-base'
                  }`}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brutal-cyan"
          >
            VIEW ALL INSIGHTS <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
