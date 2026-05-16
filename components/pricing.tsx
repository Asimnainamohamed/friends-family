import { pricing } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Pricing() {
  return (
    <section className="section-block pt-0">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="Clear starting points for different scopes. Every engagement is still tailored after discovery."
            eyebrow="Pricing"
            title="Flexible enough for launches, complete enough for scale."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <Reveal delay={index * 0.06} key={plan.name}>
              <article
                className={`pricing-glow glass-panel h-full rounded-3xl p-6 sm:p-7 ${
                  plan.featured ? 'shadow-glow-violet' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="display-font text-3xl text-white">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full border border-electric/35 bg-electric/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-electric">
                      Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-8 display-font text-5xl text-white">
                  {plan.price}
                </div>
                <p className="mt-4 min-h-14 text-sm leading-7 text-white/56">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-4 text-sm text-white/72">
                  {plan.features.map((feature) => (
                    <li className="flex items-center gap-3" key={feature}>
                      <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
