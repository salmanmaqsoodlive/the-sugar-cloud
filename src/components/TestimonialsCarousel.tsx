'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { quote: "The wedding cake was a dream. Everyone kept asking who made it. Absolute perfection.", name: 'Emma & James', event: 'Wedding · June 2025' },
  { quote: "Ordered a custom birthday cake — my daughter cried happy tears. The taste matched the beauty.", name: 'Priya M.', event: 'Birthday · March 2025' },
  { quote: "The lavender honey cupcakes were otherworldly. Ordered for a baby shower and they disappeared in minutes.", name: 'Rachel T.', event: 'Baby Shower · May 2025' },
  { quote: "I've tasted a lot of custom cakes. The Sugar Cloud is genuinely on another level.", name: 'Daniel K.', event: 'Anniversary · February 2025' },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-display text-2xl text-chocolate italic font-semibold leading-relaxed mb-6">
            "{testimonials[current].quote}"
          </p>
          <div className="font-body text-rose-baker font-semibold text-sm">{testimonials[current].name}</div>
          <div className="text-chocolate/40 text-xs mt-1">{testimonials[current].event}</div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-blush-dark w-5' : 'bg-blush'}`}
          />
        ))}
      </div>
    </div>
  )
}
