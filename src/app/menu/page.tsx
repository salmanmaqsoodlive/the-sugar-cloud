'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = ['All', 'Cakes', 'Cupcakes', 'Pies', 'Seasonal']

const menuItems = [
  { name: 'Classic Vanilla Dream', cat: 'Cakes', price: '$65', serves: '8-10', img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80', desc: 'Moist vanilla layers with silky buttercream frosting.' },
  { name: 'Chocolate Decadence', cat: 'Cakes', price: '$70', serves: '8-10', img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80', desc: 'Rich triple chocolate cake with ganache drip.' },
  { name: 'Lavender Honey Wedding', cat: 'Cakes', price: 'From $150', serves: '20+', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80', desc: 'Elegant tiered wedding cake with lavender and honey.' },
  { name: 'Lemon Cloud Cake', cat: 'Cakes', price: '$68', serves: '8-10', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80', desc: 'Zesty lemon sponge with dreamy cream cheese frosting.' },
  { name: 'Birthday Bliss Cupcakes', cat: 'Cupcakes', price: '$28/dz', serves: '12', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80', desc: 'Fluffy vanilla cupcakes with rainbow sprinkle buttercream.' },
  { name: 'Red Velvet Cupcakes', cat: 'Cupcakes', price: '$30/dz', serves: '12', img: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80', desc: 'Classic red velvet with cream cheese frosting rosettes.' },
  { name: 'Cherry Blossom Pie', cat: 'Pies', price: '$28', serves: '8', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80', desc: 'Sweet cherries in a buttery flaky crust.' },
  { name: 'Brown Sugar Peach Pie', cat: 'Pies', price: '$30', serves: '8', img: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600&q=80', desc: 'Fresh peaches with warm brown sugar spices.' },
  { name: 'Rose Cheesecake', cat: 'Seasonal', price: '$38', serves: '10-12', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80', desc: 'New York style cheesecake with rose and lychee.' },
  { name: 'Pumpkin Spice Cake', cat: 'Seasonal', price: '$65', serves: '8-10', img: 'https://images.unsplash.com/photo-1574085730049-04e47c9c6040?w=600&q=80', desc: 'Autumn spiced pumpkin cake with maple cream cheese.' },
]

export default function Menu() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? menuItems : menuItems.filter(i => i.cat === active)

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blush-light/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Our Treats</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold">Sweet Dreams Menu</h1>
          <p className="text-chocolate/50 mt-3 text-lg">Everything is made fresh to order with love</p>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="container mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all ${
                  active === cat ? 'bg-blush-dark text-white shadow-pink-glow' : 'bg-blush/20 text-rose-baker hover:bg-blush/40'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="dessert-card group"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-blush-dark text-xs font-semibold uppercase tracking-wide">{item.cat}</span>
                      <span className="font-display text-rose-baker font-bold text-sm ml-2">{item.price}</span>
                    </div>
                    <h3 className="font-display text-lg text-chocolate italic font-semibold leading-tight">{item.name}</h3>
                    <p className="text-chocolate/50 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    <p className="text-chocolate/30 text-xs mt-1">Serves {item.serves}</p>
                    <Link href="/custom-orders" className="mt-3 block w-full text-center py-2 border border-blush hover:bg-blush-dark hover:text-white hover:border-blush-dark text-rose-baker text-xs font-semibold rounded-xl transition-all">
                      Order
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 text-center bg-gradient-to-r from-blush-light via-lavender-light to-peach rounded-3xl p-12">
            <h3 className="font-display text-3xl text-chocolate italic font-semibold mb-3">Want Something Custom?</h3>
            <p className="text-chocolate/60 mb-6">We create bespoke desserts for any occasion — just tell us your dream!</p>
            <Link href="/custom-orders" className="inline-flex items-center gap-2 px-8 py-4 bg-blush-dark text-white rounded-full font-body font-semibold hover:bg-rose-baker transition-all shadow-pink-glow">
              Start Custom Order ✨
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
