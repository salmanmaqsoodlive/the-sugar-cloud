'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  { cat: 'Ordering', q: 'How far in advance should I order?', a: 'For custom cakes, we recommend placing your order at least 2 weeks in advance. For special events like weddings, 4–6 weeks is ideal. We do our best to accommodate rush orders but availability is limited.' },
  { cat: 'Ordering', q: 'Can I get a custom cake for any occasion?', a: 'Absolutely! We create custom cakes and desserts for birthdays, weddings, baby showers, anniversaries, graduations, and any other celebration. If you can dream it, we can bake it.' },
  { cat: 'Ordering', q: 'How do I place a custom order?', a: 'Use our custom order form to walk through your options — base, flavors, design, and details. Once submitted, we\'ll reach out within 24 hours to confirm pricing and finalize your order.' },
  { cat: 'Flavors', q: 'What flavors do you offer?', a: 'Our standard menu includes Vanilla Dream, Chocolate Delight, Strawberry Cloud, Lemon Zest, Red Velvet, and Lavender Honey. We also create seasonal specials and fully custom flavor combinations for special orders.' },
  { cat: 'Flavors', q: 'Do you accommodate dietary restrictions?', a: 'Yes! We offer gluten-free, dairy-free, and nut-free options for most items. Please let us know about any allergies or dietary needs when placing your order. Note that our kitchen does handle common allergens.' },
  { cat: 'Pickup & Delivery', q: 'Do you offer delivery?', a: 'Yes — we offer local delivery within a 25-mile radius of our kitchen. Delivery fees depend on distance. Curbside pickup is always available at no charge.' },
  { cat: 'Pickup & Delivery', q: 'How should I store my order?', a: 'Most cakes and cupcakes should be stored in the refrigerator and brought to room temperature 1–2 hours before serving. We\'ll include storage instructions specific to your order.' },
  { cat: 'Pricing', q: 'How is pricing determined for custom cakes?', a: 'Pricing depends on size (number of servings), design complexity, and flavors. Custom cakes typically start at $75. We provide a detailed quote before confirming your order — no surprises.' },
  { cat: 'Pricing', q: 'Do you require a deposit?', a: 'Yes, custom orders require a 50% deposit at time of booking, with the remaining balance due at pickup or delivery. We accept all major credit/debit cards and Venmo.' },
]

const cats = ['All', ...Array.from(new Set(faqs.map(f => f.cat)))]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [activeCat, setActiveCat] = useState('All')

  const filtered = activeCat === 'All' ? faqs : faqs.filter(f => f.cat === activeCat)

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Got Questions?</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold mb-3">
            FAQ ✨
          </h1>
          <p className="text-chocolate/50 text-lg max-w-xl mx-auto">
            Everything you need to know about ordering, flavors, pickup, and more.
          </p>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {cats.map(c => (
              <button key={c} onClick={() => setActiveCat(c)}
                className={`px-5 py-2 rounded-full font-body text-sm font-semibold transition-all ${
                  activeCat === c ? 'bg-blush-dark text-white shadow-pink-glow' : 'bg-white text-rose-baker border border-blush hover:bg-blush/20'
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-3 mb-16">
            {filtered.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button className="w-full text-left p-5 flex justify-between items-center" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  <div>
                    <span className="text-rose-baker text-xs font-body font-semibold uppercase tracking-widest block mb-1">{faq.cat}</span>
                    <span className="font-display text-chocolate italic font-semibold">{faq.q}</span>
                  </div>
                  <span className="text-blush-dark text-2xl ml-4 flex-shrink-0">{openIdx === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                      className="overflow-hidden">
                      <div className="px-5 pb-5 border-t border-blush/30 pt-4">
                        <p className="text-chocolate/60 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-dreamy p-10 text-center">
            <div className="text-4xl mb-3">💌</div>
            <h3 className="font-display text-2xl text-chocolate italic font-semibold mb-2">Still have questions?</h3>
            <p className="text-chocolate/60 mb-6">We're happy to help. Reach out and we'll get back to you within a few hours.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-blush-dark text-white rounded-full font-body font-semibold text-sm hover:bg-rose-baker transition-all shadow-pink-glow">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
