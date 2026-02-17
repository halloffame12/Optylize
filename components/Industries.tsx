'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Building2, HeartPulse, Landmark, ShoppingCart, Factory, Truck,
  ArrowRight, Shield, Globe, Zap
} from 'lucide-react'
import Link from 'next/link'

const industries = [
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'Manufacturing & Metals', icon: Factory },
  { name: 'SaaS & Services', icon: Building2 },
  { name: 'Cyber Security', icon: Shield },
  { name: 'Ed-Tech', icon: Landmark },
  { name: 'Public Sector', icon: Globe },
  { name: 'Energy Sector', icon: Zap },
  { name: 'Hospitality', icon: HeartPulse },
]


export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-background scroll-mt-24" id="industries">
      <div className="noise-overlay" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              STRATEGIC VERTICALS
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
              INDUSTRIES WE SERVE
            </h2>
          </div>
          <Link
            href="/industries"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black hover:text-black/70 transition-colors"
          >
            EXPLORE ALL INDUSTRIES
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <Link key={industry.name} href="/industries" className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="brutal-card bg-card p-8 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <div className="mb-6 p-4 rounded-full border-2 border-black bg-white group-hover:bg-white transition-colors">
                    <Icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    {industry.name}
                  </h3>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
