'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, ArrowRight, Zap, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Capabilities',
    href: '/capabilities',
    subLinks: [
      { href: '/product-library', label: 'Product Library' },
      { href: '/agent-store', label: 'Agent Store' },
    ]
  },
  { href: '/industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#FDFDFD]/90 backdrop-blur-xl border-b border-black/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="mx-auto max-w-[1920px] px-6 lg:px-12 xl:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Optylize Home">
            <div className="flex h-10 w-10 items-center justify-center bg-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <Zap className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-black tracking-tighter text-black">
              OPTYLIZE
            </span>
          </Link>


          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href
                ? (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))
                : link.subLinks?.some(sub => pathname === sub.href)

              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.subLinks && setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href || '#'}
                    className={cn(
                      'relative flex items-center gap-1 px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-200',
                      isActive
                        ? 'text-black'
                        : 'text-black/40 hover:text-black'
                    )}
                  >
                    {link.label}
                    {link.subLinks && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-[-4px] left-4 right-4 h-1 bg-black"
                        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.subLinks && hoveredLink === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full pt-4 w-52"
                      >
                        <div className="brutal-card bg-white p-2">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                'flex items-center gap-2 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider transition-colors hover:bg-black/5',
                                pathname === sub.href ? 'text-black' : 'text-black/40'
                              )}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button size="lg" className="gap-3 bg-black text-white hover:bg-black/90 rounded-none h-11 px-8 font-black uppercase tracking-widest text-xs">
                BOOK A STRATEGIC CONSULTATION
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-background border-l-[3px] border-black">
              <SheetHeader>
                <SheetTitle className="text-left font-extrabold tracking-tighter">
                  OPTY<span className="text-black">LIZE</span>
                </SheetTitle>
                <div className="sr-only">
                  <SheetDescription>
                    Navigation menu for mobile devices. Access pages and contact information.
                  </SheetDescription>
                </div>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = link.href
                    ? (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))
                    : link.subLinks?.some(sub => pathname === sub.href)

                  return (
                    <div key={link.label}>
                      <Link
                        href={link.href || '#'}
                        onClick={() => !link.subLinks && setIsOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-lg font-bold tracking-wider transition-all border-l-[3px]',
                          isActive
                            ? 'text-black border-black bg-black/5'
                            : 'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground'
                        )}
                      >
                        <div className="flex items-center justify-between">
                          {link.label}
                          {link.subLinks && <ChevronDown className="h-5 w-5" />}
                        </div>
                      </Link>

                      {link.subLinks && (
                        <div className="ml-4 mt-2 space-y-1 border-l-[3px] border-black/10">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                'block px-8 py-2 text-sm font-bold uppercase tracking-wider transition-colors',
                                pathname === sub.href ? 'text-black' : 'text-muted-foreground hover:text-foreground'
                              )}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
                <div className="mt-6 px-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="brutal" size="xl" className="w-full gap-2 font-black uppercase tracking-widest text-xs">
                      BOOK A STRATEGIC CONSULTATION
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
