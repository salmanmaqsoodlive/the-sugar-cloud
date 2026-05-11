'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = ['All', 'Cakes', 'Cupcakes', 'Pies', 'Seasonal']

const gallery = [
  { title: 'Lavender Honey Dream', cat: 'Cakes', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
  { title: 'Rose Petal Cupcakes', cat: 'Cupcakes', img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&q=80' },
  { title: 'Strawberry Cloud Cake', cat: 'Cakes', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80' },
  { title: 'Classic Apple Pie', cat: 'Pies', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=80' },
  { title: 'Vanilla Blush Cupcakes', cat: 'Cupcakes', img: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=700&q=80' },
  { title: 'Autumn Spice Cake', cat: 'Seasonal', img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=700&q=80' },
  { title: 'Chocolate Velvet Tower', cat: 'Cakes', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80' },
  { title: 'Lemon Meringue Pie', cat: 'Pies', img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&q=80' },
  { title: 'Holiday Shortbread', cat: 'Seasonal', img: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?w=700&q=80' },
  { title: 'Champagne Celebration Cake', cat: 'Cakes', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=80' },
  { title: 'Birthday Cupcake Box', cat: 'Cupcakes', img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=700&q=80' },
  { title: 'Salted Caramel Pie', cat: 'Pies', img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=700&q=80' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.cat === active)

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Sweet Gallery</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold mb-3">
            Our Creations 🌸
          </h1>
          <p className="text-chocolate/50 text-lg max-w-xl mx-auto">
            Every dessert is a little work of art. Browse our gallery for inspiration for your next order.
          </p>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full font-body text-sm font-semibold transition-all ${
                  active === c ? 'bg-blush-dark text-white shadow-pink-glow' : 'bg-white text-rose-baker border border-blush hover:bg-blush/20'
                }`}>
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="columns-2 md:columns-3 gap-4 space-y-4">
              {filtered.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl">
                  <Image src={item.img} alt={item.title} width={400} height={500} className="object-cover w-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                    <div className="text-rose-baker text-xs font-body font-semibold uppercase tracking-widest mb-0.5">{item.cat}</div>
                    <div className="text-white font-display italic text-lg">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-16">
            <p className="text-chocolate/60 mb-5">Love what you see? Let's create something just for you.</p>
            <Link href="/custom-orders" className="inline-flex items-center gap-2 px-8 py-4 bg-blush-dark text-white rounded-full font-body font-semibold hover:bg-rose-baker transition-all shadow-pink-glow">
              Start a Custom Order ✨
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
