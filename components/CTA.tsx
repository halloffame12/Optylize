'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
      <div className="noise-overlay opacity-[0.06]" />

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 h-20 w-20 border-[4px] border-white/5 rotate-12" />
      <div className="absolute bottom-12 right-16 h-16 w-16 border-[4px] border-white/5 -rotate-6" />
      <div className="absolute top-1/2 right-1/4 h-12 w-12 bg-white/5 border-[3px] border-white/10 rotate-45" />

      <div ref={ref} className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 mb-8 border-2 border-white">
            <Zap className="h-4 w-4 fill-black" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">TRANSFORM YOUR ENTERPRISE</span>
          </div>

          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to transform today?
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Book a Free Strategic Audit Consultation Call and discover how structured AI implementation drives measurable business outcomes.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6">
            <Link href="/contact">
              <Button size="xl" className="brutal-btn bg-white text-black border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] gap-2 text-base">
                BOOK A FREE STRATEGIC AUDIT CALL <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:contact@optylize.com" className="text-sm font-bold text-white/40 hover:text-white transition-colors tracking-widest uppercase">
              contact@optylize.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
