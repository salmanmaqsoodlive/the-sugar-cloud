import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream/70">
      {/* Cloud wave top */}
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"
            fill="#3d2c2c"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <ellipse cx="20" cy="22" rx="16" ry="10" fill="#f5c6dc" opacity="0.4"/>
                <circle cx="16" cy="12" r="7" fill="white" opacity="0.9"/>
                <circle cx="24" cy="12" r="7" fill="white" opacity="0.9"/>
                <circle cx="20" cy="10" r="8" fill="white"/>
              </svg>
              <div>
                <span className="font-display text-xl italic text-white font-semibold">The Sugar Cloud</span>
                <span className="font-body text-blush text-xs block tracking-widest uppercase mt-0.5">Heavenly Desserts You Dream Of</span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              Artisan home bakery crafting dream desserts for every occasion. Made with love, served with joy.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-blush/70">Mon–Sat: 9am–6pm</p>
              <p className="text-cream/40 text-xs">Orders require 48 hours advance notice</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-blush text-sm uppercase tracking-widest mb-5 italic">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home','Our Story','Menu','Custom Orders','Gallery','Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-').replace("'", '')}`} className="text-cream/50 text-sm hover:text-blush transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu highlights */}
          <div>
            <h4 className="font-display text-blush text-sm uppercase tracking-widest mb-5 italic">Our Treats</h4>
            <ul className="space-y-2.5">
              {['Custom Cakes','Cupcakes','Wedding Cakes','Seasonal Pies','Macarons','Cheesecakes'].map((item) => (
                <li key={item}>
                  <Link href="/menu" className="text-cream/50 text-sm hover:text-blush transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-blush text-sm uppercase tracking-widest mb-5 italic">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:hello@thesugarcloud.com" className="text-cream/50 text-sm hover:text-blush transition-colors block">
                hello@thesugarcloud.com
              </a>
              <div className="flex gap-3 mt-4">
                {['IG','FB','PIN'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 border border-blush/20 rounded-full flex items-center justify-center text-xs text-cream/50 hover:border-blush hover:text-blush transition-colors">
                    {social}
                  </a>
                ))}
              </div>
              <Link
                href="/custom-orders"
                className="inline-block mt-4 px-5 py-2.5 bg-blush-dark text-white text-xs font-semibold rounded-full hover:bg-rose-baker transition-colors"
              >
                Place an Order
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} The Sugar Cloud. Made with ♥ and a pinch of magic.
          </p>
        </div>
      </div>
    </footer>
  )
}
