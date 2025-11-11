import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="text-white font-semibold tracking-wide text-lg">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Senior Engineer</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
