'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Building2, HeartPulse, Landmark, ShoppingCart, Factory, Truck,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    icon: Landmark,
    name: 'FINANCIAL SERVICES',
    desc: 'Risk modeling, fraud detection, and automated compliance for banks and fintechs.',
    color: 'from-brutal-cyan/20 to-brutal-cyan/5',
    borderColor: 'border-brutal-cyan/30',
  },
  {
    icon: HeartPulse,
    name: 'HEALTHCARE',
    desc: 'Clinical decision support, patient engagement AI, and HIPAA-compliant pipelines.',
    color: 'from-brutal-pink/20 to-brutal-pink/5',
    borderColor: 'border-brutal-pink/30',
  },
  {
    icon: ShoppingCart,
    name: 'RETAIL & ECOMMERCE',
    desc: 'Personalization engines, demand forecasting, and AI-powered customer experience.',
    color: 'from-brutal-yellow/20 to-brutal-yellow/5',
    borderColor: 'border-brutal-yellow/30',
  },
  {
    icon: Factory,
    name: 'MANUFACTURING',
    desc: 'Predictive maintenance, quality control, and supply chain optimization.',
    color: 'from-brutal-cyan/20 to-brutal-cyan/5',
    borderColor: 'border-brutal-cyan/30',
  },
  {
    icon: Truck,
    name: 'LOGISTICS',
    desc: 'Route optimization, warehouse automation, and real-time fleet intelligence.',
    color: 'from-brutal-pink/20 to-brutal-pink/5',
    borderColor: 'border-brutal-pink/30',
  },
  {
    icon: Building2,
    name: 'ENTERPRISE SaaS',
    desc: 'AI feature embedding, intelligent automation, and platform scalability.',
    color: 'from-brutal-yellow/20 to-brutal-yellow/5',
    borderColor: 'border-brutal-yellow/30',
  },
]

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section ref={scrollRef} className="relative py-24 bg-card/30 overflow-hidden">
      <div className="noise-overlay" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brutal-yellow">
              INDUSTRY VERTICALS
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-display-md">
              <span className="text-foreground">BUILT FOR </span>
              <span className="text-brutal-yellow">REGULATED </span>
              <span className="text-foreground">INDUSTRIES</span>
            </h2>
          </div>
          <Link
            href="/industries"
            className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brutal-cyan hover:text-brutal-cyan/80 transition-colors"
          >
            VIEW ALL
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll cards */}
      <motion.div style={{ x }} className="flex gap-6 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 w-[calc((100vw-1280px)/2+1rem)] max-w-[10rem]" />
        {industries.map((industry, i) => {
          const Icon = industry.icon
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group shrink-0 w-[320px] rounded-xl border ${industry.borderColor} bg-gradient-to-br ${industry.color} p-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
            >
              <Icon className="h-10 w-10 text-foreground mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brutal-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                LEARN MORE <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brutal-cyan"
        >
          VIEW ALL INDUSTRIES
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
