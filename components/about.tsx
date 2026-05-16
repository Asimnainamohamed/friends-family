import { stats } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section className="section-block" id="about">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <Reveal>
          <SectionHeading
            description="Northstar began as a small design practice and grew into a cross-functional studio for companies that care about detail, velocity, and commercial clarity."
            eyebrow="About"
            title="A studio built for brands that want taste and traction."
          />
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
            We work in compact teams, stay close to the strategy, and prototype
            early. That keeps the final work elegant without making the process
            precious or slow.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Reveal delay={index * 0.06} key={stat.label}>
              <div className="glass-panel rounded-3xl p-5 sm:p-6">
                <div className="display-font text-4xl text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.24em] text-white/42">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
