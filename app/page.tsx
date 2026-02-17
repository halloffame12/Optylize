import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import Services from '@/components/Services'
import StatsCounter from '@/components/StatsCounter'
import WhyUs from '@/components/WhoWeAre'
import Industries from '@/components/Industries'
import Testimonials from '@/components/Testimonials'
import Insights from '@/components/Insights'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <StatsCounter />
      <WhyUs />
      <Industries />
      <Testimonials />
      <Insights />
      <CTA />
      <Footer />
    </main>
  )
}
