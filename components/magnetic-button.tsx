'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 })

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const variantClasses =
    variant === 'primary'
      ? 'border-white/10 bg-white text-black hover:bg-electric'
      : 'border-white/15 bg-white/[0.04] text-white hover:border-electric/60 hover:bg-white/[0.08]'

  return (
    <motion.a
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition ${variantClasses} ${className}`}
      href={href}
      onMouseLeave={reset}
      onMouseMove={handleMove}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  )
}
