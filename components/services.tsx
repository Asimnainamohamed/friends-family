'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { services } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Service = (typeof services)[number]

function VideoCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const playVideo = () => {
    void videoRef.current?.play()
  }

  const pauseVideo = () => {
    if (!videoRef.current) {
      return
    }

    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <motion.article
      className="glass-panel group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-3xl p-6"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      whileHover={{ y: -8 }}
    >
      {'video' in service && service.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loop
          muted
          playsInline
          preload="metadata"
          ref={videoRef}
          src={service.video}
        />
      ) : null}
      <span className="relative z-10 text-sm text-white/35">0{index + 1}</span>
    </motion.article>
  )
}

export function Services() {
  return (
    <section className="section-block" id="services">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            description="Little clips of laughter, birthdays, college days, and the moments we never want to forget."
            eyebrow="Videos"
            title="The memories that still move with us."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 0.06} key={service.title}>
              <VideoCard index={index} service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
