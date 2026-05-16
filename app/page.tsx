import { BrandMarquee } from '@/components/brand-marquee'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
