'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Cpu, Users, Clock, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'ENTERPRISE-GRADE SECURITY',
    desc: 'SOC 2 compliant, encrypted pipelines, and zero-data-retention LLM integrations.',
  },
  {
    icon: Cpu,
    title: 'PRODUCTION-FIRST MINDSET',
    desc: 'We don\'t build demos — we ship production-grade GenAI to real users.',
  },
  {
    icon: Users,
    title: 'BOUTIQUE ATTENTION',
    desc: 'Small, senior teams with direct principal access. No juniors, no handoffs.',
  },
  {
    icon: Clock,
    title: 'RAPID DELIVERY',
    desc: 'High-impact roadmap in 2 weeks. First production milestone in 6 weeks.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Parallax background accent */}
      <motion.div
        style={{ y }}
        className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-black/5 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-60, 60]) }}
        className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-black/5 blur-3xl"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              WHY OPTYLIZE
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-display-md">
              <span className="text-foreground">NOT ANOTHER </span>
              <span className="text-black">CONSULTING FIRM</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're a boutique GenAI consultancy built by practitioners. Every engagement
              is led by senior engineers and strategists who've shipped AI at scale.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {[
                'Direct access to founding team',
                'No vendor lock-in — open architectures',
                'Measurable outcomes, not PowerPoint decks',
                'Post-delivery support and optimization',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-black/40 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Reason Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="skeu-card-elevated rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{reason.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
