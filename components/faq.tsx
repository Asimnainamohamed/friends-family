'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { faqs } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-block pt-0">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Useful answers before we get started."
          />
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex

            return (
              <Reveal delay={index * 0.04} key={faq.question}>
                <div className="glass-panel overflow-hidden rounded-3xl">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-base font-medium text-white">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-electric">{isOpen ? '-' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-white/[0.58] sm:px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
