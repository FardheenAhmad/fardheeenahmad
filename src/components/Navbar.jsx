import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/portfolioData'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
const handleNav = (href) => {
  setActive(href.replace('#', ''))
  setMenuOpen(false)

  const element = document.querySelector(href)
  const offset = 80

  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/95 border-b border-purple-500/20 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'bg-slate-950/25 border-b border-white/5 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <motion.a
          href="#home"
          onClick={() => handleNav('#home')}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] shrink-0">
            <span className="block w-full h-full rounded-[10px] bg-slate-950/80 p-1">
              <img
                src={personal.avatar}
                alt={`${personal.name} profile photo`}
                className="w-full h-full rounded-[8px] object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </span>
          </span>
          <span className="leading-tight">
            <span className="block text-white font-bold tracking-tight">{personal.shortName}</span>
            <span className="hidden sm:block text-xs text-slate-500 font-mono">{personal.title}</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              whileHover={{ y: -2 }}
              className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                active === link.href.replace('#', '')
                  ? 'text-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === link.href.replace('#', '') && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-purple-500/10 border border-purple-500/30 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 shrink-0"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-purple-400 block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-purple-400 block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-purple-400 block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-950/98 border-t border-purple-500/20 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
