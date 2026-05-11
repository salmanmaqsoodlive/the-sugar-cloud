'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  price: string
  serves?: string
  img: string
  tag?: string
  onOrder?: () => void
}

export default function DessertCard({ title, description, price, serves, img, tag, onOrder }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(236,72,153,0.15)' }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl overflow-hidden group"
    >
      <div className="relative overflow-hidden h-52">
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        {tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-blush-dark text-white text-xs font-body font-semibold px-3 py-1 rounded-full">{tag}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-chocolate italic font-semibold text-lg">{title}</h3>
          <span className="text-rose-baker font-body font-bold text-sm ml-2">{price}</span>
        </div>
        {serves && <p className="text-chocolate/40 text-xs font-body mb-1">Serves {serves}</p>}
        <p className="text-chocolate/60 text-sm leading-relaxed mb-4">{description}</p>
        {onOrder && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOrder}
            className="w-full py-2.5 bg-blush text-rose-baker rounded-2xl font-body text-sm font-semibold hover:bg-blush-dark hover:text-white transition-all"
          >
            Order This
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
