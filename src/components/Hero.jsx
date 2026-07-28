import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolioData'

const roles = [
  'Full Stack Developer',
  'React.js & React Native Dev',
  'Spring Boot API Engineer',
  'Real-Time App Builder',
  'AI-Powered Developer',
]

/* ─── Typewriter ─────────────────────────────────────────────────── */
function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let t
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    else { setDeleting(false); setIndex(i => i + 1) }
    return () => clearTimeout(t)
  }, [displayed, deleting, index, words])

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

/* ─── Decorative Components ──────────────────────────────────────── */
function ConcentricRings({ color = '#E53935', size = 180 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[85, 70, 55, 40, 26].map((r, i) => (
        <circle key={r} cx="90" cy="90" r={r}
          stroke={color} strokeWidth="1.5" strokeOpacity={0.12 + i * 0.05} fill="none" />
      ))}
    </svg>
  )
}

function Zigzag({ color = '#F59E0B', width = 90 }) {
  return (
    <svg width={width} height="20" viewBox="0 0 90 20" fill="none">
      <polyline points="0,15 12,5 24,15 36,5 48,15 60,5 72,15 84,5"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Plus({ color = '#E53935', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function Chevrons({ color = '#111827' }) {
  return (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
      {[0, 18, 36].map((offset) => (
        <polyline key={offset} points={`5,${offset + 5} 20,${offset + 18} 35,${offset + 5}`}
          stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.4" />
      ))}
    </svg>
  )
}

function BlobSVG({ color, className, style }) {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
      className={className} style={style} aria-hidden="true">
      <path fill={color}
        d="M314.7,273.1C291.3,321.4,249.9,354.1,201.2,360.9C152.5,367.6,96.6,348.3,62.1,309.5C27.6,270.6,14.6,212.2,27.8,162.6C41,113,80.4,72.3,127.4,53.3C174.4,34.3,229,37,268.4,62.3C307.9,87.7,332.3,135.6,341.2,183.2C350.1,230.8,338.1,224.8,314.7,273.1Z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fardheenahmadsayyd/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:fardheenahmadsayyad@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const handleStatClick = (label) => {
    const map = { 'Years Experience': '#experience', 'Projects Shipped': '#projects', 'Tech Stack': '#skills', CGPA: '#education' }
    document.querySelector(map[label])?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      {/* Coral corner blob — top right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] pointer-events-none">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FFADB5" fillOpacity="0.72"
            d="M500,0 L500,500 L338,500 C272,498,210,456,180,396 C150,336,200,272,164,210 C128,148,52,130,28,68 C4,6,72,-10,180,-4 C278,-10,398,-5,500,0 Z"/>
        </svg>
      </motion.div>

      {/* Lavender corner blob — bottom left */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
        className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[480px] lg:h-[480px] pointer-events-none">
        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#C4B5FD" fillOpacity="0.62"
            d="M0,480 L0,0 L162,0 C228,-8,306,30,346,92 C386,154,326,222,360,284 C394,346,470,360,468,416 C466,472,390,480,296,476 C202,472,100,482,0,480 Z"/>
        </svg>
      </motion.div>

      {/* Concentric circles — top left */}
      <div className="absolute top-16 left-12 pointer-events-none hidden md:block">
        <ConcentricRings color="#E53935" size={160} />
      </div>

      {/* Chevrons — top right */}
      <div className="absolute top-20 right-20 pointer-events-none hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
        <Chevrons color="#1a1a1a" />
      </div>

      {/* Zigzags */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <Zigzag color="#F59E0B" width={100} />
      </div>
      <div className="absolute top-1/3 right-1/4 pointer-events-none opacity-50 hidden xl:block">
        <Zigzag color="#FFADB5" width={70} />
      </div>

      {/* Plus marks */}
      <div className="absolute top-28 left-1/3 pointer-events-none hidden lg:block"><Plus color="#E53935" size={22} /></div>
      <div className="absolute bottom-44 right-20 pointer-events-none"><Plus color="#C4B5FD" size={18} /></div>
      <div className="absolute top-1/2 left-10 pointer-events-none hidden md:block"><Plus color="#F59E0B" size={16} /></div>

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center min-h-screen pt-28 pb-16">

          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: '#FFF3F3', color: '#E53935', border: '1px solid #FFCDD2' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Hi, I'm label */}
          <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.3em] mb-3 text-gray-400">
            Hi, I'm
          </motion.p>

          {/* HUGE display name */}
          <motion.div variants={item} className="mb-4 leading-none select-none">
            <h1 className="font-black text-gray-900 leading-none"
              style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
              FARDHEEN
            </h1>
            <p className="font-black leading-none mt-2"
              style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)', letterSpacing: '-0.02em', color: '#E53935' }}>
              Ahmad Sayyad
            </p>
          </motion.div>

          {/* Role typewriter */}
          <motion.div variants={item} className="text-xl md:text-2xl font-semibold mb-6 h-10 text-gray-700">
            <Typewriter words={roles} />
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-base md:text-lg leading-relaxed mb-8 max-w-md text-gray-500">
            Building scalable web &amp; mobile apps with React, Node.js and
            Spring Boot. 2+ years turning ideas into fast, real-world products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-8 justify-center">
            <motion.a href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn-primary cursor-pointer">
              View My Work
            </motion.a>
            <motion.a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn-outline cursor-pointer">
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            {socialLinks.map((s, i) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all"
                style={{ background: '#F3F4F6', border: '1px solid #E5E7EB' }}>
                {s.icon}
              </motion.a>
            ))}
            <span className="ml-1 text-xs uppercase tracking-widest text-gray-400">Connect</span>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {personal.stats.map((stat, i) => (
              <motion.div key={stat.label}
                whileHover={{ scale: 1.06, y: -3 }}
                role="button" tabIndex={0}
                onClick={() => handleStatClick(stat.label)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleStatClick(stat.label) }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.09, duration: 0.4 }}
                className="rounded-2xl p-4 cursor-pointer text-center glass-card">
                <div className="text-2xl font-black mb-0.5 gradient-text">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
          style={{ border: '2px solid rgba(0,0,0,0.18)' }}>
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
