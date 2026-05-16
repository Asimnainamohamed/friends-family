import { navigation } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="page-shell">
        <div className="display-font text-balance text-4xl text-white sm:text-5xl">
          Asim Naina Mohamed
        </div>
        <div className="soft-divider my-8 h-px w-full" />
        <div className="flex flex-col gap-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>Design, development, and automation.</div>
          <div className="flex flex-wrap gap-5">
            {navigation.map((item) => (
              <a className="transition hover:text-white" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <a className="transition hover:text-white" href="#">
              Instagram
            </a>
            <a className="transition hover:text-white" href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
