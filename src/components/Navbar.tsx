'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/menu', label: 'Menu' },
  { href: '/custom-orders', label: 'Custom Orders' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

function CloudLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <ellipse cx="20" cy="22" rx="16" ry="10" fill="#f5c6dc" opacity="0.6"/>
          <ellipse cx="14" cy="20" rx="10" ry="8" fill="#fce4ef" opacity="0.7"/>
          <ellipse cx="26" cy="20" rx="10" ry="8" fill="#fce4ef" opacity="0.7"/>
          <ellipse cx="20" cy="17" rx="12" ry="9" fill="white"/>
          <circle cx="16" cy="12" r="7" fill="white"/>
          <circle cx="24" cy="12" r="7" fill="white"/>
          <circle cx="20" cy="10" r="8" fill="white"/>
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-xl text-chocolate italic font-semibold tracking-wide">The Sugar Cloud</div>
        <div className="font-body text-blush-dark text-xs tracking-widest uppercase mt-0.5">Heavenly Desserts</div>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <CloudLogo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-body text-sm tracking-wide transition-colors relative group ${
                  pathname === link.href ? 'text-rose-baker' : 'text-chocolate/60 hover:text-chocolate'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blush-dark transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/custom-orders"
              className="px-6 py-2.5 bg-blush-dark hover:bg-rose-baker text-white font-body text-sm font-semibold rounded-full transition-all duration-300 shadow-soft hover:shadow-pink-glow"
            >
              Order Now
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <motion.div className="flex flex-col gap-1.5">
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-blush-dark block" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-chocolate/40 block" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-blush-dark block" />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream-50/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl italic text-chocolate hover:text-rose-baker transition-colors block py-3 text-center"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
