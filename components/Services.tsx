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
    color: 'text-white',
    bgAccent: 'bg-white/10',
    span: 'md:col-span-2',
  },
  {
    title: 'LLM Implementation',
    description: 'End-to-end development and deployment of GenAI solutions. From RAG pipelines to fine-tuned LLMs, we build secure and scalable applications.',
    icon: Code2,
    color: 'text-white',
    bgAccent: 'bg-white/5',
    span: 'md:col-span-1',
  },
  {
    title: 'Process Automation',
    description: 'Reengineer workflows for the GenAI era. Identify bottlenecks and automate routine tasks to free up your team.',
    icon: Zap,
    color: 'text-white',
    bgAccent: 'bg-white/10',
    span: 'md:col-span-1',
  },
  {
    title: 'Market Intelligence',
    description: 'Leverage agentic AI to gather and analyze real-time market data. Stay ahead with automated competitive analysis.',
    icon: Search,
    color: 'text-white',
    bgAccent: 'bg-white/5',
    span: 'md:col-span-1',
  },
  {
    title: 'Predictive Analytics',
    description: 'Turn historical data into future insights. Forecast demand, manage risk, and optimize resources with predictive models.',
    icon: LineChart,
    color: 'text-white',
    bgAccent: 'bg-white/10',
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                SERVICE ARCHITECTURE
              </p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-display-md">
                FROM GENAI STRATEGY TO PRODUCTION
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Each engagement combines advisory, engineering, and measurable delivery checkpoints.
              </p>
            </div>
            <div className="hidden lg:block pb-2">
              <div className="h-px w-32 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          </div>
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
                <div className="flex items-center justify-between mb-8">
                  <div className={cn('rounded-[20px] p-4 brutal-border bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]', service.bgAccent)}>
                    <Icon className={cn('h-8 w-8 transition-transform duration-500 group-hover:rotate-12', service.color)} />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-base text-white/50 leading-relaxed font-medium">{service.description}</p>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Enterprise Grade</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
