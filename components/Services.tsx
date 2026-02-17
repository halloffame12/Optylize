'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Settings, Code2, Database, Zap, Search, LineChart,
  ArrowUpRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'GenAI Strategy & Roadmap',
    description: 'Define a clear path to GenAI adoption aligned with your business goals. Identify high-impact use cases and build a phased implementation plan.',
    icon: Settings,
    color: 'text-brutal-cyan',
    bgAccent: 'bg-brutal-cyan/10',
    span: 'md:col-span-2',
  },
  {
    title: 'LLM Implementation',
    description: 'End-to-end development and deployment of GenAI solutions. From RAG pipelines to fine-tuned LLMs, we build secure and scalable applications.',
    icon: Code2,
    color: 'text-brutal-pink',
    bgAccent: 'bg-brutal-pink/10',
    span: 'md:col-span-1',
  },
  {
    title: 'Data Readiness',
    description: 'Ensure your data infrastructure is GenAI-ready. We audit data quality, governance, and architecture.',
    icon: Database,
    color: 'text-brutal-yellow',
    bgAccent: 'bg-brutal-yellow/10',
    span: 'md:col-span-1',
  },
  {
    title: 'Process Automation',
    description: 'Reengineer workflows for the GenAI era. Identify bottlenecks and automate routine tasks to free up your team.',
    icon: Zap,
    color: 'text-brutal-cyan',
    bgAccent: 'bg-brutal-cyan/10',
    span: 'md:col-span-1',
  },
  {
    title: 'Market Intelligence',
    description: 'Leverage agentic AI to gather and analyze real-time market data. Stay ahead with automated competitive analysis.',
    icon: Search,
    color: 'text-brutal-pink',
    bgAccent: 'bg-brutal-pink/10',
    span: 'md:col-span-1',
  },
  {
    title: 'Predictive Analytics',
    description: 'Turn historical data into future insights. Forecast demand, manage risk, and optimize resources with predictive models.',
    icon: LineChart,
    color: 'text-brutal-yellow',
    bgAccent: 'bg-brutal-yellow/10',
    span: 'md:col-span-2',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-background" id="services">
      <div className="noise-overlay" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brutal-cyan">
            SERVICE ARCHITECTURE
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-display-md">
            FROM GENAI STRATEGY TO PRODUCTION
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each engagement combines advisory, engineering, and measurable delivery checkpoints.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'clay-card clay-float group cursor-pointer p-8',
                  service.span
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={cn('rounded-2xl p-3', service.bgAccent)}>
                    <Icon className={cn('h-7 w-7 transition-transform duration-300 group-hover:scale-110', service.color)} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
