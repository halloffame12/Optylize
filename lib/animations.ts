import { Variants } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export const viewport = { once: true, margin: '-80px' }
export const viewportLarge = { once: true, margin: '-120px', amount: 0.3 }
export const motionSafeViewport = { once: true, margin: '-60px', amount: 0.2 }

export const reducedMotionProps = {
  initial: { opacity: 1, y: 0, scale: 1 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

export const fadeReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
}

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease },
  },
}

export const staggerItemFast: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease },
  },
}

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease },
  },
}

export const buttonHover = {
  scale: 1.02,
  y: -2,
  boxShadow: '0 20px 48px -20px rgba(8, 131, 149, 0.55)',
  transition: { duration: 0.2 },
}

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.15 },
}

export const cardHover = {
  y: -10,
  scale: 1.01,
  boxShadow: '0 30px 60px -18px rgba(8, 131, 149, 0.42)',
  transition: { duration: 0.25, ease },
}

/** Scroll reveal with subtle scale-in effect */
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
}

export const parallaxY = (distance = 80) => ({
  hidden: { y: distance, opacity: 0.2 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
})

export const ctaPulse = {
  boxShadow: [
    '0 0 0 0 rgba(122, 178, 178, 0.5)',
    '0 0 0 12px rgba(122, 178, 178, 0)',
    '0 0 0 0 rgba(122, 178, 178, 0)',
  ],
  transition: {
    duration: 2.4,
    repeat: Infinity,
    repeatDelay: 0.2,
    ease: [0.42, 0, 0.58, 1] as const,
  },
}

/** Enhanced stagger with longer delays */
export const staggerContainerRich: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease },
  },
}
