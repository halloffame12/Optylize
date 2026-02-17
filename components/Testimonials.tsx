'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Ecommerce',
    challenge: 'Low operational efficiency and fragmented data systems.',
    approach: 'Implemented structured AI strategy, KPI mapping, predictive analytics layer.',
    impact: '40% ROI improvement and 2x faster decision cycles.',
    icon: Target,
  },
  {
    industry: 'Manufacturing & Metals',
    challenge: 'Manual forecasting and inventory misalignment.',
    approach: 'Built AI-driven demand prediction system integrated with ERP.',
    impact: 'Reduced waste by 28%, improved planning accuracy by 35%.',
    icon: Zap,
  },
  {
    industry: 'SaaS & Services',
    challenge: 'Poor customer segmentation and conversion leakages.',
    approach: 'Deployed agentic analytics workflows and automation systems.',
    impact: 'Increased retention by 22% and reduced churn within 6 weeks.',
    icon: BarChart3,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-[#FBFBFC] overflow-hidden scroll-mt-24" id="case-studies">
      <div className="noise-overlay opacity-[0.02]" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-black/40">
            CASE STUDIES
          </p>
          <h2 className="text-4xl font-[950] uppercase tracking-tight sm:text-5xl md:text-6xl">
            STRATEGIC EXECUTION. <br />
            <span className="text-black/30 italic font-black">TANGIBLE IMPACT.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white border-[4px] border-black p-10 flex flex-col h-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="h-14 w-14 bg-black flex items-center justify-center">
                  <study.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/20">CASE_{i + 1}</span>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Industry</h3>
                  <p className="text-xl font-black uppercase tracking-tighter">{study.industry}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Challenge</h3>
                  <p className="text-sm font-medium leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Approach</h3>
                  <p className="text-sm font-medium leading-relaxed">{study.approach}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t-[3px] border-black/5">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Impact</h3>
                <p className="text-lg font-black text-black">{study.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
