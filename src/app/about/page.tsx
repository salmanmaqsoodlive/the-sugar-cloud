import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | The Sugar Cloud',
  description: 'Meet the baker behind The Sugar Cloud — a home bakery crafting heavenly custom desserts.',
}

const values = [
  { emoji: '🥚', title: 'Scratch-Made Always', desc: 'Every cake, cupcake, and pie is made from scratch using quality ingredients. No mixes, no shortcuts.' },
  { emoji: '🌸', title: 'Made with Love', desc: 'Baking is personal to us. Each order gets the same care and attention we\'d give to baking for our own family.' },
  { emoji: '🌿', title: 'Fresh & Seasonal', desc: 'We work with seasonal flavors and fresh produce whenever possible. Strawberries in summer, warm spices in fall.' },
  { emoji: '✨', title: 'Your Vision', desc: 'Custom orders are a collaboration. We listen to your ideas and bring them to life with artisan skill.' },
]

export default function About() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Our Story</span>
          <h1 className="font-display text-6xl md:text-7xl text-chocolate italic font-semibold mb-3">
            Behind the Cloud ☁️
          </h1>
          <p className="text-chocolate/50 text-lg max-w-xl mx-auto">
            A home bakery born from a love of desserts and a belief that every celebration deserves something truly special.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80" alt="Baker at work" width={500} height={600} className="rounded-3xl object-cover w-full shadow-dreamy" />
              <div className="absolute -bottom-4 -right-4 bg-blush rounded-2xl p-4 shadow-pink-glow">
                <p className="font-display text-rose-baker italic text-sm">"Every bite tells a story" ✨</p>
              </div>
            </div>
            <div>
              <span className="font-body text-rose-baker text-xs tracking-widest uppercase block mb-3">Hi, I'm Claire</span>
              <h2 className="font-display text-4xl text-chocolate italic font-semibold mb-5">From Hobby to Heart</h2>
              <p className="text-chocolate/70 leading-relaxed mb-4">
                The Sugar Cloud started the way most great things do — in a home kitchen, on a lazy Sunday afternoon, with flour everywhere and a dream taking shape.
              </p>
              <p className="text-chocolate/70 leading-relaxed mb-4">
                I've been baking since I was eight years old, learning alongside my grandmother whose kitchen always smelled of vanilla and brown butter. What started as a hobby became a calling after I made my first custom wedding cake and watched the couple's faces light up.
              </p>
              <p className="text-chocolate/70 leading-relaxed mb-6">
                Today, The Sugar Cloud serves celebrations of every size — from intimate birthdays to grand weddings — with the same care and attention that's been in every batch since the beginning.
              </p>
              <Link href="/custom-orders" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-dark text-white rounded-full font-body font-semibold text-sm hover:bg-rose-baker transition-all shadow-pink-glow">
                Order Something Custom
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-3xl shadow-dreamy p-6 text-center hover:shadow-pink-glow transition-all">
                <div className="text-4xl mb-3">{v.emoji}</div>
                <h3 className="font-display text-chocolate italic font-semibold mb-2">{v.title}</h3>
                <p className="text-chocolate/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-dreamy p-12 text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="font-display text-3xl text-chocolate italic font-semibold mb-3">A Home Bakery with Heart</h3>
            <p className="text-chocolate/60 max-w-lg mx-auto mb-4">
              Operating from a licensed home kitchen, every order is made in small batches for maximum freshness and quality. Orders are available for local pickup or delivery within a 25-mile radius.
            </p>
            <p className="text-chocolate/50 text-sm">📍 Serving the greater metro area · Local pickup available</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
