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
      <div className="absolute inset-0 bg-brutal-cyan" />
      <div className="absolute inset-0 bg-gradient-to-br from-brutal-cyan via-brutal-cyan to-brutal-pink/30" />
      <div className="noise-overlay opacity-[0.06]" />

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 h-20 w-20 border-[4px] border-black rotate-12 opacity-20" />
      <div className="absolute bottom-12 right-16 h-16 w-16 border-[4px] border-black -rotate-6 opacity-20" />
      <div className="absolute top-1/2 right-1/4 h-12 w-12 bg-brutal-yellow border-[3px] border-black rotate-45 opacity-30" />

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

          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl md:text-5xl lg:text-display-xl">
            LET&apos;S BUILD YOUR GENAI FUTURE
          </h2>
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our founding team.
            Get a personalized GenAI roadmap — no commitment required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                className="brutal-btn bg-black text-brutal-cyan border-black shadow-[4px_4px_0px_0px_#FFE600] hover:shadow-[6px_6px_0px_0px_#FFE600] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base gap-2"
              >
                BOOK A CALL
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="brutal-outline"
                size="xl"
                className="border-black text-black hover:bg-black hover:text-brutal-cyan text-base"
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
