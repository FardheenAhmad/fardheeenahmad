import { motion } from 'framer-motion'
import { personal, languages } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'
import { Globe, Link2, Mail, MapPin, Briefcase } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const highlights = [
  { icon: techIcons['React.js'],          label: 'React.js & React Native',   color: '#61DAFB' },
  { icon: techIcons['Spring Boot'],       label: 'Spring Boot & REST APIs',   color: '#6DB33F' },
  { icon: techIcons['JavaScript (ES6+)'], label: 'JavaScript ES6+',           color: '#F7DF1E' },
  { icon: techIcons['Tailwind CSS'],      label: 'Tailwind CSS',              color: '#06B6D4' },
  { icon: techIcons['Redux Toolkit'],     label: 'Redux Toolkit',             color: '#764ABC' },
  { icon: techIcons['GitHub Copilot'],    label: 'Claude AI & Copilot',       color: '#a78bfa' },
]

const codeSymbols = ['</>', '{}', '()', '=>', '[]', '&&', '||', '++']

function AboutBg() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: '#F8F8FF' }} />
      {/* Lavender SVG blob — top-right corner, inside section */}
      <svg className="absolute top-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-96 lg:h-96 pointer-events-none opacity-50" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
        <path fill="#C4B5FD" d="M360,0 L360,360 L228,360 C170,356,118,320,100,268 C82,216,128,162,96,112 C64,62,8,50,12,10 C16,-30,78,-8,168,-2 C248,-6,302,-3,360,0 Z"/>
      </svg>
      {/* Floating code symbols */}
      {codeSymbols.map((sym, i) => (
        <motion.span key={sym} className="absolute font-mono font-black select-none pointer-events-none"
          style={{ left: `${8 + i * 12}%`, top: `${15 + (i % 4) * 22}%`, fontSize: `${28 + (i % 3) * 14}px`,
            color: i % 2 === 0 ? 'rgba(124,58,237,0.07)' : 'rgba(239,68,68,0.05)' }}
          animate={{ y: [0, -(12 + i * 3), 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}>
          {sym}
        </motion.span>
      ))}
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots-sm opacity-50 pointer-events-none" />
    </>
  )
}

export default function About() {
  const handleLink = (href) => (e) => {
    if (!href) return
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      e.preventDefault()
      window.location.href = href
    }
  }

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <AboutBg />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest mb-3 text-gray-400">01 / About Me</p>
          <h2 className="section-title mb-4">
            Who I{' '}
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#E53935)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="glass-card border border-indigo-500/20 p-6 flex items-center gap-5"
              style={{ boxShadow: '0 4px 30px rgba(99,102,241,0.1)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shrink-0"
                style={{ background: 'linear-gradient(135deg,#6366f1,#38bdf8)', boxShadow: '0 6px 20px rgba(99,102,241,0.4)' }}>
                FA
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-bold text-lg truncate">{personal.name}</h3>
                <p className="text-violet-600 text-sm font-medium">{personal.title}</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
                  <MapPin className="w-3 h-3" /><span>{personal.location}</span>
                  <span className="mx-1">·</span>
                  <Briefcase className="w-3 h-3" /><span>2+ yrs</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personal.stats.map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, type: 'spring' }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="glass-card p-3 text-center border border-indigo-500/15"
                >
                  <div className="text-xl font-black mb-0.5"
                    style={{ background: 'linear-gradient(135deg,#6366f1,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="flex items-center gap-3 px-4 py-3 glass-card border border-indigo-500/12 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${h.color}18`, border: `1px solid ${h.color}30` }}>
                    {h.icon
                      ? <img src={h.icon} alt={h.label} width={17} height={17} className="object-contain" />
                      : <div className="w-3 h-3 rounded-full" style={{ backgroundColor: h.color }} />}
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-tight truncate min-w-0">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
              {personal.summary}
            </motion.p>
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-violet-500" /><span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <motion.span key={lang.name} whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-xs font-medium glass border border-violet-200 text-violet-700">
                    {lang.name}<span className="text-gray-400 ml-1">· {lang.level}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${personal.email}`}
                onClick={handleLink(`mailto:${personal.email}`)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                <Mail className="w-4 h-4" /><span>{personal.email}</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <Link2 className="w-4 h-4" /><span>LinkedIn Profile</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
