'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield, Cpu, Activity, Globe, Database, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[160px] pb-24 overflow-hidden bg-[#FBFBFC] flex items-center">
      {/* Background Layer - Ultra Professional */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[60%] h-[80%] bg-black/[0.012] blur-[160px] rounded-full" />
        <div className="absolute inset-0 [background-image:radial-gradient(#00000004_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="noise-overlay opacity-[0.008]" />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-8 lg:px-16 xl:px-24 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 items-center"
        >
          {/* Left Column: Focused Text Content */}
          <div className="max-w-4xl space-y-10">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="px-5 py-2 border-black/5 bg-white shadow-sm text-black/40 gap-3 font-black tracking-[0.3em] uppercase text-[8px] rounded-full">
                <div className="h-1 w-1 rounded-full bg-black/30 animate-pulse" />
                STRATEGIC GENAI SYSTEMS
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-[950] leading-[0.85] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] uppercase"
            >
              REIMAGINING <br />
              TRANSFORMATIONS <br />
              <span className="text-black/30 italic font-black">WITH AI</span> <br />
              STRATEGY
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-black/40 leading-[1.6] font-medium max-w-lg tracking-tight"
            >
              Optylize helps growth-stage companies move from GenAI strategy to production outcomes with hands-on execution, secure architecture, and measurable business value.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 sm:flex-row pt-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto bg-black text-white hover:opacity-90 gap-4 text-[10px] h-16 px-12 rounded-none font-black uppercase tracking-[0.2em] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  BOOK A STRATEGIC CONSULTATION
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto h-16 px-12 border-[3px] border-black bg-transparent text-black font-black uppercase tracking-[0.2em] hover:bg-black/5 rounded-none text-[10px] transition-all">
                  GET A FREE AI AUDIT
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Balanced Visual Column */}
          <motion.div
            variants={itemVariants}
            className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] h-full flex items-center">
              {/* Main Visual Container - Refined Shadows and Corners */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-[480px] rounded-[2rem] border-[4px] border-black overflow-hidden bg-white shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                {/* Tech Header Detail */}
                <div className="h-12 border-b-[3px] border-black flex items-center px-6 justify-between bg-white z-10">
                  <div className="flex gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-black/5" />
                    <div className="h-1.5 w-1.5 rounded-full bg-black/5" />
                    <div className="h-1.5 w-1.5 rounded-full bg-black/5" />
                  </div>
                  <span className="text-[6px] font-black uppercase tracking-[0.6em] text-black/15">SYSTEM_ORCHESTRATOR // ALPHA_V1</span>
                </div>

                {/* Content Area: AI Grid / Nodes */}
                <div className="flex-1 relative bg-[#FCFCFD] overflow-hidden p-6">
                  {/* Internal Grid */}
                  <div className="absolute inset-0 [background-image:linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Sophisticated UI Elements */}
                  <div className="relative h-full w-full flex flex-col gap-4">
                    {/* Top Stats */}
                    <div className="flex gap-4">
                      <div className="flex-1 brutal-card bg-white p-4 border-[3px] border-black flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">Efficiency</span>
                          <span className="text-base font-black tracking-tighter">98.4 GB/S</span>
                        </div>
                        <Activity className="h-5 w-5 text-black/10" />
                      </div>
                      <div className="h-14 w-14 brutal-card bg-black border-[3px] border-black flex items-center justify-center shrink-0">
                        <Globe className="h-5 w-5 text-white animate-spin-slow" />
                      </div>
                    </div>

                    {/* Middle Dashboard */}
                    <div className="flex-1 brutal-card bg-white/40 border-[3px] border-black backdrop-blur-sm relative overflow-hidden flex flex-col p-5">
                      <div className="flex items-center justify-between mb-auto">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-black" />
                          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Neural Engine</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[6px] font-black text-black/20 tracking-wider">ACTIVE</span>
                        </div>
                      </div>

                      {/* AI abstraction */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
                        <Network className="h-40 w-40" />
                      </div>

                      <div className="mt-auto flex flex-col gap-2">
                        <div className="h-1 w-full bg-black/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-black"
                            initial={{ width: "30%" }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                          />
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[6px] font-black text-black/20 uppercase tracking-widest">System Load</span>
                          <span className="text-[9px] font-black text-black">90.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Log Stream */}
                    <div className="h-16 bg-black p-3 font-mono text-[7px] text-white/20 overflow-hidden rounded-xl leading-relaxed whitespace-nowrap">
                      <p>{'>'} AUTH_KEY VALIDATED // SECURE_HANDSHAKE</p>
                      <p className="opacity-60">{'>'} MAPPING_VECTOR_SPACE_EXECUTION...</p>
                      <p className="opacity-30">{'>'} NODE_SYNC_COMPLETE // STATUS: OK</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Area */}
                <div className="h-16 bg-white border-t-[3px] border-black flex items-center px-6 gap-4">
                  <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform shadow-md">
                    <Play className="h-3 w-3 text-white fill-white ml-0.5" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-black">Case Study Demo</p>
                    <p className="text-[6px] font-bold text-black/30 uppercase tracking-widest">Automation Flow // 03:15</p>
                  </div>
                </div>
              </div>

              {/* Refined Floating Badges - Absolute Positioning to prevent overlap */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 right-0 lg:-right-8 bg-black p-4 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] z-20 w-40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[7px] font-bold text-white/30 uppercase tracking-[0.2em] mb-0.5">DB Sync</p>
                    <p className="text-xs font-black text-white tracking-widest">SECURE</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 left-0 lg:-left-8 bg-white p-4 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] z-20 w-40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-black/5 rounded-lg">
                    <Zap className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <p className="text-[7px] font-bold text-black/30 uppercase tracking-[0.2em] mb-0.5">Uptime</p>
                    <p className="text-xs font-black text-black tracking-widest">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
