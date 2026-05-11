'use client'

import { motion } from 'framer-motion'

function CloudShape({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="currentColor" className={className}>
      <path d="M100 40 C100 51 91 58 80 58 L30 58 C18 58 8 50 8 40 C8 32 13 26 20 24 C19 21 18 18 18 15 C18 6 25 0 34 0 C40 0 45 3 48 8 C52 4 58 2 65 2 C78 2 88 11 88 23 C88 24 88 25 87 27 C94 29 100 34 100 40 Z" />
    </svg>
  )
}

export default function FloatingClouds() {
  const clouds = [
    { x: '5%', y: '15%', scale: 0.6, opacity: 0.15, duration: 7 },
    { x: '75%', y: '8%', scale: 0.9, opacity: 0.1, duration: 9 },
    { x: '45%', y: '20%', scale: 0.4, opacity: 0.12, duration: 6 },
    { x: '88%', y: '35%', scale: 0.7, opacity: 0.08, duration: 11 },
    { x: '15%', y: '55%', scale: 0.5, opacity: 0.1, duration: 8 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute text-blush"
          style={{ left: c.x, top: c.y, scale: c.scale, opacity: c.opacity }}
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        >
          <CloudShape className="w-32 h-16" />
        </motion.div>
      ))}
    </div>
  )
}
