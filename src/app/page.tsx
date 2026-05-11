'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const menuItems = [
  { name: 'Classic Vanilla Dream', cat: 'Cakes', price: '$65', img: 'https://images.unsplash.com/photo-1578985545062-9f2d92dc5e54?w=600&q=80', tags: ['Custom', 'Signature'] },
  { name: 'Strawberry Cloud Cupcakes', cat: 'Cupcakes', price: '$28/dz', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80', tags: ['Popular'] },
  { name: 'Lavender Honey Cake', cat: 'Cakes', price: '$75', img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80', tags: ['Seasonal'] },
  { name: 'Cherry Blossom Pie', cat: 'Pies', price: '$28', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80', tags: ['Fresh'] },
  { name: 'Dream Wedding Cake', cat: 'Cakes', price: 'From $150', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80', tags: ['Custom', 'Wedding'] },
  { name: 'Rose Cheesecake', cat: 'Seasonal', price: '$38', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80', tags: ['Fan Favorite'] },
]

const tabs = ['All', 'Cakes', 'Cupcakes', 'Pies']

const testimonials = [
  { name: 'Emma R.', text: 'The Sugar Cloud made my wedding cake absolutely magical. Every guest was in awe — it tasted even better than it looked!', rating: 5 },
  { name: 'Sarah M.', text: "My daughter's birthday cake brought her to tears of joy. The attention to detail is incredible. We'll never order anywhere else.", rating: 5 },
  { name: 'Jessica L.', text: 'Ordered custom cupcakes for our office party. Gone in minutes! Everyone kept asking where they came from.', rating: 5 },
]

function SparkleParticle({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, repeatDelay: Math.random() * 3 }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blush" fill="currentColor">
        <path d="M12 0l1.5 9.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5z"/>
      </svg>
    </motion.div>
  )
}

function CloudSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" className={className}>
      <ellipse cx="100" cy="70" rx="80" ry="40" fill="white" opacity="0.5"/>
      <circle cx="70" cy="55" r="35" fill="white" opacity="0.6"/>
      <circle cx="130" cy="55" r="35" fill="white" opacity="0.6"/>
      <circle cx="100" cy="45" r="45" fill="white" opacity="0.7"/>
    </svg>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('All')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const t = setInterval(() => setCurrentTestimonial(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const filtered = activeTab === 'All' ? menuItems : menuItems.filter(i => i.cat === activeTab)

  return (
    <main className="overflow-x-hidden bg-cream">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-9f2d92dc5e54?w=1920&q=80"
            alt="Luxury cake"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50/60 via-cream/80 to-cream" />
        </div>

        {/* Floating clouds */}
        {[
          { x: '-5%', y: '10%', w: 300, delay: 0 },
          { x: '70%', y: '5%', w: 250, delay: 1.5 },
          { x: '85%', y: '60%', w: 200, delay: 0.8 },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none z-[1] opacity-60"
            style={{ left: cloud.x, top: cloud.y, width: cloud.w }}
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 8 + i * 2, delay: cloud.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CloudSVG className="w-full h-auto" />
          </motion.div>
        ))}

        {/* Sparkles */}
        {[
          { x: '20%', y: '30%', delay: 0 },
          { x: '75%', y: '25%', delay: 0.7 },
          { x: '60%', y: '70%', delay: 1.2 },
          { x: '15%', y: '65%', delay: 0.4 },
          { x: '40%', y: '20%', delay: 1.8 },
        ].map((s, i) => (
          <SparkleParticle key={i} {...s} />
        ))}

        {/* Content */}
        <div className="relative z-[2] container mx-auto px-6 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blush/20 border border-blush px-5 py-2 rounded-full mb-8"
          >
            <span className="text-xs">☁️</span>
            <span className="font-body text-rose-baker text-xs tracking-widest uppercase font-semibold">Artisan Home Bakery</span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={loaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display text-6xl sm:text-7xl md:text-9xl text-chocolate italic font-semibold leading-none"
            >
              The Sugar Cloud
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-display text-2xl md:text-3xl text-blush-dark italic mb-10"
          >
            Heavenly Desserts You Dream Of
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/custom-orders"
              className="inline-flex items-center justify-center px-8 py-4 bg-blush-dark hover:bg-rose-baker text-white font-body font-semibold rounded-full transition-all shadow-pink-glow hover:shadow-dreamy hover:-translate-y-1"
            >
              Order Your Dream Dessert ✨
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blush text-rose-baker hover:bg-blush/20 font-body font-semibold rounded-full transition-all"
            >
              View Full Menu
            </Link>
          </motion.div>

          {/* Floating cake preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={loaded ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 relative inline-block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-80 h-80 mx-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80"
                alt="Featured cake"
                fill
                className="object-cover rounded-full shadow-dreamy"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-blush/30" />
            </motion.div>
            {/* Price badge */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-lavender rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-dreamy"
            >
              <span className="font-display text-xs text-chocolate font-bold italic">From</span>
              <span className="font-display text-chocolate font-bold text-sm">$45</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-blush rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blush-dark rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Our Sweet Creations</span>
            <h2 className="font-display text-5xl md:text-6xl text-chocolate italic font-semibold mb-8">Signature Treats</h2>
            {/* Tabs */}
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-blush-dark text-white shadow-pink-glow'
                      : 'bg-blush/20 text-rose-baker hover:bg-blush/40'
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="dessert-card group cursor-pointer"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/90 rounded-full text-xs text-rose-baker font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-blush-dark text-xs font-semibold tracking-wider uppercase">{item.cat}</span>
                        <h3 className="font-display text-xl text-chocolate italic font-semibold mt-1">{item.name}</h3>
                      </div>
                      <span className="font-display text-lg text-rose-baker font-bold ml-4">{item.price}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 w-full py-2.5 bg-blush/20 hover:bg-blush-dark hover:text-white text-rose-baker font-body text-sm font-semibold rounded-xl transition-all"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-12">
            <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blush text-rose-baker rounded-full font-body font-semibold hover:bg-blush/20 transition-all">
              View Full Menu
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="py-24 bg-blush-light/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-4">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-chocolate italic font-semibold leading-tight mb-6">
                Made with Love,<br />Baked from the Heart
              </h2>
              <p className="text-chocolate/60 leading-relaxed mb-5">
                The Sugar Cloud started in a cozy kitchen with a simple dream — to create desserts so beautiful and delicious they'd make every celebration unforgettable. Every cake, every cupcake, every pie is crafted with the finest ingredients and genuine love.
              </p>
              <p className="text-chocolate/60 leading-relaxed mb-8">
                We believe the perfect dessert isn't just about taste — it's about the moment it creates. From intimate birthdays to grand weddings, we pour our hearts into every single order.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-rose-baker font-body font-semibold hover:text-chocolate transition-colors">
                Our Full Story
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5"/></svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-dreamy">
                <Image
                  src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&q=80"
                  alt="Baker at work"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blush/30 to-transparent" />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: [0, 10, -5, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-lavender-light rounded-2xl flex items-center justify-center shadow-dreamy"
              >
                <span className="text-4xl">🎂</span>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -8, 5, 0], y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-peach rounded-2xl flex items-center justify-center shadow-soft"
              >
                <span className="text-3xl">🧁</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-chocolate italic font-semibold">Sweet Words</h2>
            <p className="text-chocolate/50 mt-2">What our customers are saying</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-soft text-center"
              >
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-peach-dark text-xl">★</span>
                  ))}
                </div>
                <p className="font-display text-xl text-chocolate/80 italic leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <span className="font-body font-semibold text-rose-baker">{testimonials[currentTestimonial].name}</span>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-blush-dark w-6' : 'bg-blush/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM ORDERS CTA */}
      <section className="py-24 bg-gradient-to-br from-blush-light via-lavender-light to-peach">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-5xl mb-4">✨</div>
            <h2 className="font-display text-4xl md:text-6xl text-chocolate italic font-semibold mb-4">
              Dream It. We'll Bake It.
            </h2>
            <p className="text-chocolate/60 text-lg mb-10 max-w-xl mx-auto">
              Custom orders available for weddings, birthdays, and every special occasion. Let us create your perfect dessert.
            </p>
            <Link
              href="/custom-orders"
              className="inline-flex items-center gap-2 px-10 py-5 bg-blush-dark hover:bg-rose-baker text-white font-body font-bold text-lg rounded-full shadow-pink-glow hover:-translate-y-1 transition-all"
            >
              Start Your Custom Order
              <span>🎂</span>
            </Link>
            <p className="text-chocolate/40 text-sm mt-4">48-hour advance notice required • We respond within 24 hours</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
