import { brands } from '@/lib/site-data'

export function BrandMarquee() {
  const repeatedBrands = [...brands, ...brands]

  return (
    <section
      aria-label="Friends"
      className="w-full overflow-hidden border-y border-white/10 py-6"
    >
      <div className="marquee-mask relative h-10 overflow-hidden sm:h-12">
        <div className="absolute left-0 top-0 flex min-w-max animate-marquee items-center gap-12 pr-12">
          {repeatedBrands.map((brand, index) => (
            <span
              className="display-font text-2xl text-white/[0.38] sm:text-3xl"
              key={`${brand}-${index}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
