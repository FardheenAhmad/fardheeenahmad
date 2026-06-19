import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'

const roles = [
  'Full Stack Developer',
  'React.js Expert',
  'React Native Developer',
  'API Architect',
  'UI/UX Enthusiast',
]

function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  )
}

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '139,92,246' : '14,165,233',
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

function BorderFloatIcon({ name, color, style, delay = 0, size = 38, float = 8, dur = 3.6 }) {
  const icon = techIcons[name]
  if (!icon) return null

  return (
    <motion.div
      className="absolute pointer-events-none z-40"
      style={style}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -float, 0] }}
      transition={{ opacity: { delay, duration: 0.35 }, scale: { delay, duration: 0.35 }, y: { delay, duration: dur, repeat: Infinity, ease: 'easeInOut' } }}
      aria-hidden="true"
    >
      <div
        className="rounded-2xl glass border-2 flex items-center justify-center bg-slate-950/35"
        style={{
          width: size,
          height: size,
          borderColor: `${color}66`,
          boxShadow: `0 0 18px ${color}22`,
        }}
      >
        <img
          src={icon}
          alt=""
          width={Math.round(size * 0.55)}
          height={Math.round(size * 0.55)}
          className="object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
    </motion.div>
  )
}

function BorderFloatIcons() {
  const items = [
    { name: 'React.js', color: '#61DAFB', style: { top: -14, left: '18%', transform: 'translate(-50%, -50%)' }, delay: 0.2, float: 7, dur: 3.4 },
    { name: 'Spring Boot', color: '#6DB33F', style: { top: -14, left: '72%', transform: 'translate(-50%, -50%)' }, delay: 0.28, float: 8, dur: 3.8 },
    { name: 'MongoDB', color: '#47A248', style: { top: '50%', left: -14, transform: 'translate(-50%, -50%)' }, delay: 0.36, float: 7, dur: 3.6 },
    { name: 'MySQL', color: '#00758F', style: { top: '50%', right: -14, transform: 'translate(50%, -50%)' }, delay: 0.44, float: 8, dur: 4.1 },
    { name: 'Java', color: '#f89820', style: { bottom: -14, left: '35%', transform: 'translate(-50%, 50%)' }, delay: 0.52, float: 7, dur: 3.9 },
    { name: 'React Native', color: '#38bdf8', style: { bottom: -14, left: '78%', transform: 'translate(-50%, 50%)' }, delay: 0.6, float: 8, dur: 3.5 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {items.map((it) => (
        <BorderFloatIcon
          key={it.name}
          name={it.name}
          color={it.color}
          style={it.style}
          delay={it.delay}
          float={it.float}
          dur={it.dur}
        />
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const handleStatClick = (label) => {
    const targetByLabel = {
      'Years Experience': '#experience',
      'Projects Shipped': '#projects',
      'Tech Stack': '#skills',
      CGPA: '#education',
    }
    const target = targetByLabel[label]
    if (!target) return

    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })

    if (target === '#skills') {
      window.setTimeout(() => {
        window.dispatchEvent(new Event('skills:drop'))
      }, 600)
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: '3s' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
      >
        <div className="grid md:grid-cols-[1fr_0.9fr] gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left relative z-20">
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-purple-300 border border-purple-500/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">{personal.shortName}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light text-slate-400 mb-3"
            >
              {personal.name}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold h-12 mb-8"
            >
              <Typewriter words={roles} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl md:max-w-none text-slate-400 text-base md:text-lg leading-relaxed mb-10"
            >
              Building scalable web &amp; mobile applications with clean architecture and real-time
              experiences. Passionate about React.js, React Native, and AI-assisted development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-white cursor-pointer"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline cursor-pointer"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div variants={itemVariants} className="relative max-w-md md:max-w-lg mx-auto w-full z-30">
            <BorderFloatIcons />
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-600/15 via-blue-600/10 to-transparent blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 p-[2px]">
              <div className="rounded-3xl bg-slate-950/70 p-2 glass-card">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={personal.avatar}
                    alt={`${personal.name} profile photo`}
                    className="w-full h-[340px] md:h-[420px] object-cover object-[center_20%]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10"
        >
          {personal.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -4 }}
              role="button"
              tabIndex={0}
              onClick={() => handleStatClick(stat.label)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleStatClick(stat.label)
              }}
              className="glass-card p-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500/40 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
