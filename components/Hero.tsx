'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as any
    }
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden bg-[#F5F5F7] flex items-center">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-black/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-black/5 blur-[120px] rounded-full" />
        <div className="noise-overlay opacity-[0.02]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 px-4 py-1.5 border-black/10 bg-white/50 backdrop-blur-sm text-black/60 gap-2 font-medium tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-black" />
                ADVANCED GENAI ARCHITECTURE
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl xl:text-8xl"
            >
              ENGINEERING <br />
              <span className="text-black/40">INTELLIGENT</span> <br />
              OUTCOMES.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-black/60 leading-relaxed font-medium"
            >
              Optylize is a boutique GenAI engineering firm for growth-stage enterprises. We ship production-grade AI systems that deliver measurable business value.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto brutal-btn bg-black text-white hover:bg-black/90 gap-3 text-base h-16 px-8">
                  Book a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto h-16 px-8 border-[3px] border-black bg-transparent text-black font-bold uppercase tracking-wider hover:bg-black/5 gap-3">
                  Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trusted By / Feature tags */}
            <motion.div variants={itemVariants} className="mt-12 pt-12 border-t border-black/5 flex flex-wrap gap-8 items-center text-black/40">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">SOC 2 TYPE II</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">PROPRIETARY LLM OPS</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">99.9% RELIABILITY</span>
              </div>
            </motion.div>
          </div>

          {/* Video Section / Advanced Visual */}
          <motion.div
            variants={itemVariants}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Video Container */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full aspect-video lg:aspect-square max-w-[500px] group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-black/10 via-white to-black/5 blur-2xl opacity-20 rounded-3xl" />

              <div className="relative w-full h-full rounded-2xl border-[3px] border-black overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-white leading-[0]">
                {/* Placeholder Video - Replaced with a real aesthetic video link */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-form-of-blue-and-white-smoke-25337-large.mp4" type="video/mp4" />
                </video>

                {/* Overlay details */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="clay-card-pastel bg-white/40 backdrop-blur-xl p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
                      <Play className="h-5 w-5 text-white fill-white ml-1" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Watch Our Approach</p>
                      <p className="text-sm font-bold text-black">Technical Deep Dive</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements for "Advanced" look */}
              <motion.div
                className="absolute -top-10 -right-10 brutal-card bg-black p-4 hidden md:block"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/60">System Health</p>
                    <p className="text-lg font-black text-white">OPTIMIZED</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 brutal-card bg-white p-4 hidden md:block border-black"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/60">Efficiency Gain</p>
                    <p className="text-lg font-black text-black">+140%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background visual detail */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
