'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import WhoWeAre from '@/components/WhoWeAre'
import StatsCounter from '@/components/StatsCounter'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Testimonials from '@/components/Testimonials'
import Insights from '@/components/Insights'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="relative min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <Hero />
            <LogoMarquee />
            <section className="py-24 border-y border-black/5 bg-background">
                <WhoWeAre />
            </section>
            <StatsCounter />
            <section id="capabilities">
                <Services />
            </section>
            <Industries />
            <Testimonials />
            <Insights />
            <CTA />
            <Footer />
        </main>
    )
}
