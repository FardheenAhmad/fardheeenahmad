import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'
import { ArrowUpRight, Check, Sparkles, Car, Hotel, Laptop } from 'lucide-react'

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } }

const projectColors = [
  { primary: '#f97316', secondary: '#ec4899', accent: '#fb923c' },
  { primary: '#8b5cf6', secondary: '#f97316', accent: '#a78bfa' },
]

function TechPill({ tech, color }) {
  const icon = techIcons[tech]
  return (
    <motion.span whileHover={{ scale:1.1, y:-2 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium cursor-default transition-all duration-200 border"
      style={{ backgroundColor:`${color}12`, borderColor:`${color}30`, color:`${color}dd` }}>
      {icon && <img src={icon} alt={tech} width={14} height={14} className="object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display='none' }} />}
      {tech}
    </motion.span>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const colors = projectColors[index % projectColors.length]
  const Icon = project.icon === 'hotel' ? Hotel : project.icon === 'car' ? Car : Laptop
  return (
    <motion.div variants={itemVariants} onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      whileHover={{ y:-12 }} transition={{ duration:0.35, ease:'easeOut' }}
      className="glass-card overflow-hidden relative group cursor-default"
      style={{ border:`1px solid ${colors.primary}25`, ...(hovered ? { borderColor:`${colors.primary}45`, boxShadow:`0 0 40px ${colors.primary}20,0 20px 60px rgba(0,0,0,0.3)` } : {}) }}>
      <div className="h-1.5" style={{ background:`linear-gradient(90deg,${colors.primary},${colors.secondary})` }} />
      <motion.div animate={{ opacity: hovered ? 0.04 : 0 }} transition={{ duration:0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background:`linear-gradient(135deg,${colors.primary},${colors.secondary})` }} />
      <div className="p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <motion.div animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }} transition={{ duration:0.3 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background:`linear-gradient(135deg,${colors.primary}22,${colors.secondary}22)`, border:`1px solid ${colors.primary}35`, boxShadow: hovered ? `0 8px 24px ${colors.primary}30` : 'none' }}>
              <Icon className="w-7 h-7" style={{ color: colors.accent }} aria-hidden="true" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{project.category}</span>
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="text-sm font-medium mt-0.5" style={{ color:colors.accent }}>{project.tagline}</p>
            </div>
          </div>
          <motion.div animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration:0.3 }}
            className="w-8 h-8 flex items-center justify-center rounded-full border"
            style={{ borderColor:`${colors.primary}40`, color:colors.accent }}>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
        <div className="space-y-2 mb-6">
          {project.highlights.map((h, hi) => (
            <motion.div key={hi} initial={{ opacity:0, x:-15 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:index*0.1+hi*0.06 }} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color:colors.primary }} />
              <span className="text-slate-300 text-sm">{h}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-5 border-t" style={{ borderColor:`${colors.primary}15` }}>
          {project.tech.map((tech) => <TechPill key={tech} tech={tech} color={colors.primary} />)}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsBg() {
  return (
    <>
      <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,#04040a 0%,#0d0603 50%,#04040a 100%)' }} />
      {/* Orange + fuchsia orbs */}
      <motion.div animate={{ x:[0,70,0], y:[0,-60,0], scale:[1,1.25,1] }} transition={{ duration:14, repeat:Infinity, ease:'easeInOut' }}
        className="absolute top-[5%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(249,115,22,0.1) 0%,transparent 70%)', filter:'blur(55px)' }} />
      <motion.div animate={{ x:[0,-50,0], y:[0,40,0], scale:[1,1.15,1] }} transition={{ duration:18, repeat:Infinity, ease:'easeInOut', delay:2 }}
        className="absolute bottom-[5%] left-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(236,72,153,0.08) 0%,transparent 70%)', filter:'blur(55px)' }} />
      {/* Floating window/card shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div key={i}
          className="absolute pointer-events-none rounded-xl"
          style={{ width: 80+i*20, height: 60+i*15, left:`${8+i*18}%`, top:`${15+(i%3)*25}%`,
            border:`1px solid rgba(249,115,22,0.05)`, background:`rgba(249,115,22,0.02)` }}
          animate={{ y:[0,-(8+i*5),0], rotate:[0, i%2===0?3:-3, 0], opacity:[0.4,0.7,0.4] }}
          transition={{ duration:7+i*1.5, repeat:Infinity, ease:'easeInOut', delay:i*0.9 }}
        />
      ))}
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <ProjectsBg />
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }} className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-3">04 / Projects</p>
          <h2 className="section-title text-white mb-4">
            Featured{' '}
            <span style={{ background:'linear-gradient(135deg,#f97316,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-fuchsia-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Real-world applications built with full-stack technologies, real-time data, and polished UX.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-slate-500 text-sm inline-flex items-center gap-1.5">
            <span>More projects available on request. Currently building more exciting things</span>
            <Sparkles className="w-4 h-4 text-orange-300/80" />
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
