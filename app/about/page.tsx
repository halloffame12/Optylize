'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Lightbulb, Target, Heart, Rocket, Users,
  ArrowRight, Globe, Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const team = [
  { name: 'Alex Rivera', role: 'Co-Founder & CEO', initials: 'AR', color: 'bg-black/5' },
  { name: 'Priya Sharma', role: 'Co-Founder & CTO', initials: 'PS', color: 'bg-black/10' },
  { name: 'Rohan Singh', role: 'Director of Strategic Execution', initials: 'RS', color: 'bg-black/5' },
]

const values = [
  { icon: Target, title: 'OUTCOMES OVER OUTPUT', desc: 'We measure success by business impact, not deliverables shipped.' },
  { icon: Heart, title: 'RADICAL TRANSPARENCY', desc: 'No black boxes. You own the architecture, the code, and the decisions.' },
  { icon: Rocket, title: 'SPEED WITH RIGOR', desc: 'Move fast, but never at the expense of quality or security.' },
  { icon: Lightbulb, title: 'CONTINUOUS LEARNING', desc: 'We stay at the frontier so you don\'t have to.' },
]

const milestones = [
  { year: '2022', title: 'FOUNDED', desc: 'Started as a 3-person team consulting for Fortune 500s.' },
  { year: '2023', title: 'SCALE', desc: 'Expanded to 15 people. Launched regulated industry practice.' },
  { year: '2024', title: '50+ DEPLOYMENTS', desc: 'Crossed 50 production GenAI deployments.' },
  { year: '2025', title: 'GLOBAL REACH', desc: 'Clients across 12 industries in 8 countries.' },
]

export default function AboutPage() {
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-background to-black/5" />
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              ABOUT OPTYLIZE
            </p>
            <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl">
              <span className="text-foreground">STRATEGIC AI </span>
              <span className="text-black italic">EXECUTION.</span> <br />
              <span className="text-foreground">BEYOND CONSULTING.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-medium leading-[1.6]">
              Optylize is a boutique team of senior practitioners and strategists who have shipped GenAI
              at scale. We focus on business economics first, ensuring every deployment delivers tangible, measurable value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={teamRef} className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              OUR TEAM
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">
              <span className="text-foreground">THE </span>
              <span className="text-black/60">HUMANS </span>
              <span className="text-foreground">BEHIND THE AI</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
                animate={teamInView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
                className="clay-card clay-float p-8 text-center cursor-default"
              >
                <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${member.color} text-2xl font-bold text-black`}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="relative py-24 bg-card/30">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">
              <span className="text-foreground">COMPANY </span>
              <span className="text-black/60">TIMELINE</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="brutal-card bg-card p-6 text-center"
              >
                <span className="text-3xl font-extrabold text-black/60">{m.year}</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">{m.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="relative py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              OUR VALUES
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">
              <span className="text-foreground">WHAT WE </span>
              <span className="text-black/60">STAND FOR</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="brutal-card bg-card p-8 flex gap-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-black/5 border-[3px] border-black">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-black">
        <div className="noise-overlay opacity-[0.06]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            JOIN OUR TEAM
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We&apos;re always looking for exceptional practitioners to join our crew.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="xl" className="brutal-btn bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] gap-2 text-base">
                GET IN TOUCH <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
