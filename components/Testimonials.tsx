'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, FinScale',
    quote: 'Optylize took us from a vague AI roadmap to a production GenAI system in 8 weeks. Their team felt like an extension of ours.',
    avatar: 'SC',
    color: 'bg-clay-pink',
  },
  {
    name: 'Marcus Williams',
    role: 'VP Engineering, MedCore',
    quote: 'The HIPAA-compliant pipeline they built handles 10x our initial projections. Truly enterprise-grade work.',
    avatar: 'MW',
    color: 'bg-clay-blue',
  },
  {
    name: 'Elena Rodriguez',
    role: 'CEO, RetailEdge',
    quote: 'Our recommendation engine now drives 34% more conversions. Optylize delivered exactly what they promised — and more.',
    avatar: 'ER',
    color: 'bg-clay-green',
  },
  {
    name: 'David Park',
    role: 'Head of Data, LogiFlow',
    quote: 'Finally, a consulting firm that ships code, not slide decks. The predictive routing model cut our costs by 28%.',
    avatar: 'DP',
    color: 'bg-clay-purple',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="noise-overlay" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-clay-purple">
            CLIENT VOICES
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-display-md">
            <span className="text-foreground">WHAT OUR </span>
            <span className="text-clay-purple">PARTNERS </span>
            <span className="text-foreground">SAY</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -1 : 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              className="clay-card clay-float p-8 cursor-default"
            >
              <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-sm font-bold text-black`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-brutal-yellow text-brutal-yellow" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
