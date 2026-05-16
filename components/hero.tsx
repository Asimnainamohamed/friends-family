import Image from 'next/image'
import { ArrowRight, Camera, Heart, PlayCircle, UsersRound } from 'lucide-react'

const avatars = [
  '/akash.jpeg',
  '/sam.jpeg',
  '/ardra.jpeg',
  '/sona.jpeg',
  '/kumar.jpeg',
]

const members = [
  {
    name: 'Asim',
    role: 'The Entertainer',
    image: '/memories/IMG_8450.jpg',
  },
  {
    name: 'Akash',
    role: 'The Manager',
    image: '/akash.jpeg',
  },
  {
    name: 'Samuel',
    role: 'The Don',
    image: '/sam.jpeg',
  },
  {
    name: 'Ardra',
    role: 'The Studious One',
    image: '/ardra.jpeg',
  },
  {
    name: 'Sona',
    role: 'The Joyful One',
    image: '/sona.jpeg',
  },
  {
    name: 'Mathesh',
    role: 'The Secret Agent',
    image: '/kumar.jpeg',
  },
]

const quickLinks = [
  { label: 'Gallery', href: '#work', icon: Camera },
  { label: 'Videos', href: '#contact', icon: PlayCircle },
  { label: 'Squad', href: '#about', icon: UsersRound },
  { label: 'Memories', href: '#home', icon: Heart },
]

export function Hero() {
  return (
    <section className="bg-[#f8f7f4] pb-5 text-[#111111]" id="home">
      <div className="mx-auto w-full max-w-[1840px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 pb-4 pt-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <h1 className="text-balance text-[clamp(2.75rem,9.8vw,9.75rem)] font-medium leading-[0.86] tracking-[-0.065em]">
            Precious-Days
          </h1>

          <div className="justify-self-start rounded-2xl border border-black/10 bg-white p-2 shadow-sm lg:justify-self-end">
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  alt="Vera Level Group"
                  className="object-cover"
                  fill
                  sizes="80px"
                  src="/friends.jpeg"
                />
              </div>
              <div>
                <p className="text-base font-semibold">Vera Level Group</p>
                <p className="text-sm text-black/[0.55]">Since 2022</p>
                <a
                  className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#4a4a4a] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-black"
                  href="#work"
                >
                  Relive moments
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#ff5b19]">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate min-h-[34rem] overflow-hidden rounded-[1.6rem] shadow-[0_28px_70px_rgba(32,42,78,0.22)] sm:min-h-[38rem] lg:min-h-[39rem]">
          <Image
            alt=""
            className="object-cover object-center opacity-25 mix-blend-soft-light"
            fill
            priority
            sizes="100vw"
            src="/friends.jpeg"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#0b2465_0%,#1547a2_26%,#6ab4e8_47%,#dccad5_67%,#d18b2f_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_18%,rgba(255,255,255,0.42),transparent_34%),linear-gradient(180deg,rgba(9,27,78,0.08),rgba(12,24,57,0.2))]" />

          <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 sm:flex lg:right-8">
            {quickLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-md bg-white/80 text-[#111] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                  href={link.href}
                  key={link.label}
                  title={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          <div className="relative flex min-h-[34rem] flex-col p-5 sm:min-h-[38rem] sm:p-7 lg:min-h-[39rem] lg:p-8">
            <div className="flex items-center">
              {avatars.map((avatar, index) => (
                <div
                  className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white"
                  key={avatar}
                  style={{ marginLeft: index === 0 ? 0 : -10 }}
                >
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="44px"
                    src={avatar}
                  />
                </div>
              ))}
              <span className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-semibold text-[#111]">
                +1
              </span>
            </div>

            <div className="mt-auto pb-8 pr-0 sm:pr-24 lg:max-w-3xl lg:pb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-white/[0.76]">
                Precious Days
              </p>
              <h2 className="max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                Six souls. Countless memories. One forever family.
              </h2>
            </div>

            <div className="grid gap-3 overflow-x-auto pb-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {members.map((member, index) => (
                <article
                  className="grid min-w-[15rem] grid-cols-[4.5rem_1fr] items-center gap-3 rounded-xl bg-white/[0.84] p-2.5 backdrop-blur sm:min-w-0"
                  key={member.name}
                >
                  <div className="relative h-14 overflow-hidden rounded-lg">
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      sizes="72px"
                      src={member.image}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black/70">
                      ({String(index + 1).padStart(2, '0')})
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-[#111]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-black/[0.58]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
