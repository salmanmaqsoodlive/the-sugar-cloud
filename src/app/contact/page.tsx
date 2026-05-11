'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', eventDate: '', eventType: '', guests: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Get In Touch</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold">Say Hello ✨</h1>
          <p className="text-chocolate/50 mt-3 text-lg max-w-lg mx-auto">
            Have a sweet occasion coming up? We'd love to create something magical for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Event Date</label>
                      <input type="date" value={form.eventDate} onChange={e => setForm({...form, eventDate: e.target.value})}
                        className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft" />
                    </div>
                    <div>
                      <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Guests</label>
                      <input type="number" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                        className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft"
                        placeholder="# of guests" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Event Type</label>
                    <select value={form.eventType} onChange={e => setForm({...form, eventType: e.target.value})}
                      className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft">
                      <option value="">Select occasion</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Baby Shower</option>
                      <option>Anniversary</option>
                      <option>Corporate Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-rose-baker text-xs font-semibold tracking-widest uppercase block mb-2">Your Vision *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-white border border-blush focus:border-blush-dark text-chocolate px-4 py-3 rounded-xl outline-none transition-colors text-sm shadow-soft resize-none"
                      placeholder="Tell us about your dream dessert..." />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    type="submit" className="w-full py-4 bg-blush-dark hover:bg-rose-baker text-white rounded-full font-body font-bold text-sm transition-all shadow-pink-glow">
                    Send My Order Inquiry ✨
                  </motion.button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-dreamy p-12 text-center">
                  <div className="text-6xl mb-4">🎂</div>
                  <h3 className="font-display text-2xl text-chocolate italic font-semibold mb-3">Sweet! We Got It!</h3>
                  <p className="text-chocolate/50">We'll reach out within 24 hours to discuss your perfect dessert.</p>
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="text-2xl mb-3">⏰</div>
                <h3 className="font-display text-lg text-chocolate italic font-semibold mb-2">Order Timeline</h3>
                <p className="text-chocolate/60 text-sm">Orders require a minimum of 48 hours advance notice. For custom wedding cakes, please allow 2-4 weeks.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="text-2xl mb-3">📧</div>
                <h3 className="font-display text-lg text-chocolate italic font-semibold mb-2">Email Us</h3>
                <a href="mailto:hello@thesugarcloud.com" className="text-rose-baker hover:text-chocolate transition-colors text-sm">hello@thesugarcloud.com</a>
              </div>
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="text-2xl mb-3">🕐</div>
                <h3 className="font-display text-lg text-chocolate italic font-semibold mb-2">Hours</h3>
                <p className="text-chocolate/60 text-sm">Monday – Saturday: 9am – 6pm<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
