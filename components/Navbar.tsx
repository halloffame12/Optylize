'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/industries', label: 'INDUSTRIES' },
  { href: '/about', label: 'ABOUT' },
  { href: '/insights', label: 'INSIGHTS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      if (!hidden) setHidden(true)
    } else {
      if (hidden) setHidden(false)
    }

    if (latest > 50 && !scrolled) {
      setScrolled(true)
    } else if (latest <= 50 && scrolled) {
      setScrolled(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b-[3px] border-brutal-cyan'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center bg-brutal-cyan border-[3px] border-black shadow-brutal">
              <Zap className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-extrabold uppercase tracking-tight text-foreground">
              OPTY<span className="text-brutal-cyan">LIZE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200',
                    isActive
                      ? 'text-brutal-cyan'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-brutal-cyan"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="brutal" size="lg" className="gap-2">
                GET STARTED
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-background border-l-[3px] border-brutal-cyan">
              <SheetHeader>
                <SheetTitle className="text-left font-extrabold uppercase tracking-tight">
                  OPTY<span className="text-brutal-cyan">LIZE</span>
                </SheetTitle>
                <div className="sr-only">
                  <SheetDescription>
                    Navigation menu for mobile devices. Access pages and contact information.
                  </SheetDescription>
                </div>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block px-4 py-3 text-lg font-bold uppercase tracking-wider transition-all border-l-[3px]',
                        isActive
                          ? 'text-brutal-cyan border-brutal-cyan bg-brutal-cyan/5'
                          : 'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="mt-6 px-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="brutal" size="xl" className="w-full gap-2">
                      GET STARTED
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
