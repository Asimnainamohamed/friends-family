import { testimonials } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  return (
    <section className="section-block pt-0">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Memories"
            title="Six friends, one story we keep returning to."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={index * 0.06} key={testimonial.name}>
              <article className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6">
                <p className="text-base leading-8 text-white/72">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8">
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="mt-1 text-sm text-white/45">{testimonial.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
