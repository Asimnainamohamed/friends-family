import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Contact() {
  return (
    <section className="section-block pt-0" id="contact">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            description="If these moments made you smile, leave a small message. Kind words about our memories will mean a lot."
            eyebrow="Contact"
            title="Saw our memories? Leave a little note."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <form className="glass-panel rounded-[2rem] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-white/[0.55]">Name</span>
                <input className="field" placeholder="Your name" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/[0.55]">Email</span>
                <input className="field" placeholder="your@email.com" type="email" />
              </label>
            </div>
            <label className="mt-4 block space-y-2">
              <span className="text-sm text-white/[0.55]">Message</span>
              <textarea
                className="field min-h-40 resize-none"
                placeholder="You have such beautiful memories..."
              />
            </label>
            <button
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-electric"
              type="submit"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
