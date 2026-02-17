'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import StatsCounter from '@/components/StatsCounter'
import Capabilities from '@/components/Capabilities'
import Industries from '@/components/Industries'
import Testimonials from '@/components/Testimonials'
import Insights from '@/components/Insights'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhyOptylize from '@/components/WhyOptylize'

export default function Home() {
    return (
        <main className="relative min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <Hero />
            <LogoMarquee />
            <WhyOptylize />
            <StatsCounter />
            <section id="capabilities" className="scroll-mt-24">
                <Capabilities />
            </section>
            <Industries />
            <Testimonials />
            <Insights />
            <CTA />
            <Footer />
        </main>
    )
}
