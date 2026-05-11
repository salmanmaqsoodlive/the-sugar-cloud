import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Sugar Cloud | Heavenly Desserts You Dream Of',
  description: 'Artisan home bakery offering custom cakes, cupcakes, pies, and dream desserts. Handcrafted with love for every occasion.',
  keywords: 'custom cakes, cupcakes, artisan bakery, wedding cakes, birthday cakes, desserts, home bakery, pies',
  openGraph: {
    title: 'The Sugar Cloud | Heavenly Desserts You Dream Of',
    description: 'Heavenly desserts handcrafted with love — cakes, cupcakes, pies and more.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="bg-cream font-body antialiased">
        {children}
      </body>
    </html>
  )
}
