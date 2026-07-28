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
          ? 'bg-white/95 border-b border-black/8 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'bg-white/70 border-b border-black/5 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <motion.a
          href="#home"
          onClick={() => handleNav('#home')}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="relative w-10 h-10 rounded-xl p-[2px] shrink-0" style={{ background: 'linear-gradient(135deg, #E53935, #b71c1c)' }}>
            <span className="block w-full h-full rounded-[10px] bg-white p-1">
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
            <span className="block text-gray-900 font-bold tracking-tight">{personal.shortName}</span>
            <span className="hidden sm:block text-xs text-gray-400 font-mono">{personal.title}</span>
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
                  ? 'text-red-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {active === link.href.replace('#', '') && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-red-50 border border-red-200 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}

          {/* Hire Me button */}
          <motion.button
            onClick={() => handleNav('#contact')}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="ml-3 px-5 py-2 text-sm font-bold text-white rounded-full"
            style={{ background: '#E53935' }}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 shrink-0 cursor-pointer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gray-700 block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 block"
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
            className="lg:hidden bg-white border-t border-black/8 shadow-xl shadow-black/8 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
