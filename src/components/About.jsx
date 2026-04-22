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
  { icon: techIcons['React.js'],          label: 'React.js & React Native',  color: '#61DAFB' },
  { icon: techIcons['Spring Boot'],       label: 'REST API & Spring Boot',    color: '#6DB33F' },
  { icon: techIcons['JavaScript (ES6+)'], label: 'Modern JavaScript ES6+',   color: '#F7DF1E' },
  { icon: techIcons['MongoDB'],           label: 'MongoDB & MySQL',           color: '#47A248' },
  { icon: techIcons['Redux Toolkit'],     label: 'Redux State Management',    color: '#764ABC' },
  { icon: techIcons['AI Dev Tools'],      label: 'AI-Assisted Development',   color: '#a78bfa' },
]

const codeSymbols = ['</>', '{}', '()', '=>', '[]', '&&', '||', '++']

function AboutBg() {
  return (
    <>
      {/* Section tint */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #04040a 0%, #06081a 50%, #04040a 100%)' }} />
      {/* Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      {/* Floating code symbols */}
      {codeSymbols.map((sym, i) => (
        <motion.span
          key={sym}
          className="absolute font-mono font-black select-none pointer-events-none"
          style={{
            left: `${8 + i * 12}%`,
            top: `${15 + (i % 4) * 22}%`,
            fontSize: `${28 + (i % 3) * 14}px`,
            color: i % 2 === 0 ? 'rgba(99,102,241,0.07)' : 'rgba(56,189,248,0.06)',
          }}
          animate={{ y: [0, -(12 + i * 3), 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        >
          {sym}
        </motion.span>
      ))}
      {/* Diagonal grid lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
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
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">01 / About Me</p>
          <h2 className="section-title text-white mb-4">
            Who I{' '}
            <span style={{ background: 'linear-gradient(135deg,#6366f1,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full" />
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
                <h3 className="text-white font-bold text-lg truncate">{personal.name}</h3>
                <p className="text-indigo-300 text-sm font-medium">{personal.title}</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-500">
                  <MapPin className="w-3 h-3" /><span>{personal.location}</span>
                  <span className="mx-1">·</span>
                  <Briefcase className="w-3 h-3" /><span>2+ yrs</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                Available
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
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
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">{stat.label}</div>
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
                  <span className="text-sm text-slate-300 font-medium leading-tight">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed">
              {personal.summary}
            </motion.p>
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" /><span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <motion.span key={lang.name} whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-xs font-medium glass border border-indigo-500/20 text-indigo-300">
                    {lang.name}<span className="text-slate-500 ml-1">· {lang.level}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${personal.email}`}
                onClick={handleLink(`mailto:${personal.email}`)}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" /><span>{personal.email}</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Link2 className="w-4 h-4" /><span>LinkedIn Profile</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
