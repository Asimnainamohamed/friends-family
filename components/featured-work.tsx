'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function FeaturedWork() {
  return (
    <section className="section-block pt-0" id="work">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            description="Selected engagements across product, identity, and immersive digital experiences."
            eyebrow="Featured work"
            title="A few recent systems built to perform and persuade."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal
              className={index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
              delay={index * 0.08}
              key={project.title}
            >
              <motion.article
                className="glass-panel group overflow-hidden rounded-[2rem]"
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    alt=""
                    className="object-cover transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    src={project.image}
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-sm text-white/48">{project.category}</p>
                    <h3 className="display-font mt-2 text-2xl text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-electric">{project.year}</span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
