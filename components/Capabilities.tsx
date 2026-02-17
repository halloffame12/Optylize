'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Settings, LineChart,
  ArrowUpRight, Store, Library
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const capabilities = [
  {
    title: 'Gen AI Strategy',
    description: 'Bespoke AI roadmaps aligned with business objectives, ROI targets, and scalable architecture.',
    icon: Settings,
    color: 'text-black',
    bgAccent: 'bg-black/5',
  },
  {
    title: 'Predictive Analytics',
    description: 'Advanced forecasting and data intelligence models that transform historical data into future foresight.',
    icon: LineChart,
    color: 'text-black',
    bgAccent: 'bg-black/5',
  },
  {
    title: 'Product Library',
    description: 'A curated collection of production-ready AI tools and components designed for rapid enterprise integration.',
    icon: Library,
    color: 'text-black',
    bgAccent: 'bg-black/5',
  },
  {
    title: 'Agent Store',
    description: 'Deployment-ready autonomous agents customized for specific industry workflows and operational excellence.',
    icon: Store,
    color: 'text-black',
    bgAccent: 'bg-black/5',
  },
]

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-background" id="capabilities">
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
                CORE CAPABILITIES
              </p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-display-md">
                ENGINEERING SUSTAINABLE AI OUTCOMES
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Boutique execution tailored for enterprise growth-stage companies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => {
            const Icon = item.icon
            return (
              <Link key={item.title} href="/capabilities" className="group block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="brutal-card bg-card p-8 h-full flex flex-col transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className={cn('rounded-[12px] p-3 border-2 border-black bg-white group-hover:bg-white transition-colors', item.bgAccent)}>
                      <Icon className={cn('h-6 w-6 text-black')} aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-black/20 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-8 flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20 group-hover:text-white/40">Technical Execution</span>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
