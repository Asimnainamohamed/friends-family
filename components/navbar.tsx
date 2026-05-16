import { Menu } from 'lucide-react'

export function Navbar() {
  return (
    <header className="border-b border-black/10 bg-[#f8f7f4]">
      <div className="mx-auto flex h-[5.25rem] w-full max-w-[1840px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a aria-label="Precious Days home" className="block" href="#home">
          <span className="relative block h-10 w-10 rounded-full bg-[#ff5b19]">
            <span className="absolute inset-y-0 right-0 w-1/2 rounded-r-full bg-[#f8f7f4]" />
          </span>
        </a>

        <button
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-black transition hover:bg-black/5"
          type="button"
        >
          <Menu className="h-5 w-5" strokeWidth={2.3} />
        </button>
      </div>
    </header>
  )
}
