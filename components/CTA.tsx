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

      <div ref={ref} className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-black text-brutal-cyan px-4 py-2 mb-8 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(255,230,0,1)]">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">READY TO TRANSFORM?</span>
          </div>

          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-display-xl">
            LET&apos;S BUILD YOUR GENAI FUTURE
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our founding team.
            Get a personalized GenAI roadmap — no commitment required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                className="brutal-btn bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base gap-2"
              >
                BOOK A CALL
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-black text-base h-16 px-8 border-[3px]"
              >
                EXPLORE SERVICES
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
