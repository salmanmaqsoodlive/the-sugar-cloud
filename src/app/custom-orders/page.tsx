'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const steps = [
  { title: 'Choose Your Base', emoji: '🎂', options: ['Custom Cake', 'Cupcakes (dozen)', 'Pie', 'Mixed Dessert Box'] },
  { title: 'Select Flavors', emoji: '✨', options: ['Vanilla Dream', 'Chocolate Delight', 'Strawberry Cloud', 'Lemon Zest', 'Red Velvet', 'Lavender Honey'] },
  { title: 'Pick Your Design', emoji: '🌸', options: ['Classic Elegant', 'Rustic Floral', 'Modern Geometric', 'Whimsical Fun', 'Custom Theme'] },
  { title: 'Add the Details', emoji: '💌', options: [] },
  { title: 'Submit Your Dream', emoji: '🚀', options: [] },
]

export default function CustomOrders() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Record<number, string>>({})
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (option: string) => {
    setSelections({ ...selections, [currentStep]: option })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Custom Orders</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold mb-3">
            Dream It. We'll Bake It. ✨
          </h1>
          <p className="text-chocolate/50 text-lg max-w-xl mx-auto">
            Create your perfect custom dessert for any occasion. We bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {!submitted ? (
            <>
              {/* Step indicators */}
              <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      onClick={() => i <= currentStep && setCurrentStep(i)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        i === currentStep ? 'bg-blush-dark text-white shadow-pink-glow scale-110'
                        : i < currentStep ? 'bg-lavender text-white' : 'bg-blush/30 text-rose-baker'
                      }`}
                    >
                      {i < currentStep ? '✓' : i + 1}
                    </button>
                    {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < currentStep ? 'bg-lavender' : 'bg-blush/30'}`} />}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-dreamy p-8"
                >
                  <div className="text-5xl mb-4 text-center">{steps[currentStep].emoji}</div>
                  <h2 className="font-display text-3xl text-chocolate italic font-semibold text-center mb-8">{steps[currentStep].title}</h2>

                  {steps[currentStep].options.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                      {steps[currentStep].options.map((opt) => (
                        <motion.button
                          key={opt}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleSelect(opt)}
                          className={`p-4 rounded-2xl border-2 font-body text-sm font-semibold transition-all ${
                            selections[currentStep] === opt
                              ? 'border-blush-dark bg-blush/10 text-chocolate'
                              : 'border-blush/30 text-chocolate/60 hover:border-blush hover:bg-blush/5'
                          }`}
                        >
                          {selections[currentStep] === opt && <span className="mr-2">✓</span>}
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  ) : currentStep === 3 ? (
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-rose-baker text-xs font-semibold uppercase tracking-widest block mb-2">Your Name *</label>
                          <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                            className="w-full bg-cream border border-blush rounded-xl px-4 py-3 text-chocolate outline-none focus:border-blush-dark text-sm" placeholder="Name" />
                        </div>
                        <div>
                          <label className="font-body text-rose-baker text-xs font-semibold uppercase tracking-widest block mb-2">Email *</label>
                          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                            className="w-full bg-cream border border-blush rounded-xl px-4 py-3 text-chocolate outline-none focus:border-blush-dark text-sm" placeholder="Email" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-rose-baker text-xs font-semibold uppercase tracking-widest block mb-2">Event Date</label>
                          <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                            className="w-full bg-cream border border-blush rounded-xl px-4 py-3 text-chocolate outline-none focus:border-blush-dark text-sm" />
                        </div>
                        <div>
                          <label className="font-body text-rose-baker text-xs font-semibold uppercase tracking-widest block mb-2">Guests</label>
                          <input type="number" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                            className="w-full bg-cream border border-blush rounded-xl px-4 py-3 text-chocolate outline-none focus:border-blush-dark text-sm" placeholder="# guests" />
                        </div>
                      </div>
                      <div>
                        <label className="font-body text-rose-baker text-xs font-semibold uppercase tracking-widest block mb-2">Special Notes</label>
                        <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                          className="w-full bg-cream border border-blush rounded-xl px-4 py-3 text-chocolate outline-none focus:border-blush-dark text-sm resize-none"
                          placeholder="Allergies, special requests, inscription text..." />
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="font-display text-xl text-chocolate italic font-semibold text-center mb-4">Your Order Summary</h3>
                      {Object.entries(selections).map(([step, sel]) => (
                        <div key={step} className="flex justify-between items-center bg-blush/10 rounded-xl px-5 py-3">
                          <span className="text-chocolate/60 text-sm">{steps[parseInt(step)].title}</span>
                          <span className="text-rose-baker font-semibold text-sm">{sel}</span>
                        </div>
                      ))}
                      {form.name && (
                        <div className="flex justify-between items-center bg-blush/10 rounded-xl px-5 py-3">
                          <span className="text-chocolate/60 text-sm">Name</span>
                          <span className="text-rose-baker font-semibold text-sm">{form.name}</span>
                        </div>
                      )}
                      <p className="text-chocolate/50 text-xs text-center mt-4">We'll contact you within 24 hours to confirm pricing and details.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 justify-between mt-6">
                {currentStep > 0 && (
                  <motion.button whileHover={{ scale: 1.02 }} onClick={() => setCurrentStep(s => s - 1)}
                    className="px-6 py-3 border-2 border-blush text-rose-baker rounded-full font-body font-semibold text-sm hover:bg-blush/10 transition-all">
                    ← Back
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={currentStep === steps.length - 1 ? handleSubmit : () => setCurrentStep(s => s + 1)}
                  className="ml-auto px-8 py-3 bg-blush-dark text-white rounded-full font-body font-semibold text-sm shadow-pink-glow hover:bg-rose-baker transition-all"
                >
                  {currentStep === steps.length - 1 ? 'Submit My Order ✨' : 'Next →'}
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-dreamy p-12 text-center">
              <div className="text-7xl mb-4">🎂✨</div>
              <h3 className="font-display text-3xl text-chocolate italic font-semibold mb-3">Your Dream Order is In!</h3>
              <p className="text-chocolate/50 mb-6">We'll reach out within 24 hours to confirm your custom order details and pricing.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-blush-dark text-white rounded-full font-body font-semibold hover:bg-rose-baker transition-all shadow-pink-glow">
                Back to Home
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
