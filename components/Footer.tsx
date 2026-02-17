import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Zap, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  capabilities: [
    { label: 'GenAI Strategy', href: '/capabilities' },
    { label: 'Predictive Analytics', href: '/capabilities' },
    { label: 'Product Library', href: '/capabilities' },
    { label: 'Agent Store', href: '/capabilities' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Insights', href: '/insights' },
    { label: 'Careers', href: '/about' },
  ],
  resources: [
    { label: 'Case Studies', href: '/insights' },
    { label: 'Whitepapers', href: '/insights' },
    { label: 'Blog', href: '/insights' },
    { label: 'FAQ', href: '/capabilities' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Optylize Home">
              <div className="flex h-10 w-10 items-center justify-center bg-black border-[3px] border-black shadow-brutal">
                <Zap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-extrabold uppercase tracking-tight">
                OPTY<span className="text-black">LIZE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Enterprise GenAI consulting for growth-stage companies. From strategy to production
              outcomes with measurable business value.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:contact@optylize.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-black transition-colors" aria-label="Email contact@optylize.com">
                <Mail className="h-4 w-4" aria-hidden="true" />
                contact@optylize.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Noida, India
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black">Capabilities</h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Optylize. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
