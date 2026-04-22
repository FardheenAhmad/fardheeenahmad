import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import { skills } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'
import { Server, Wrench, Zap, Database } from 'lucide-react'

const iconMap = { zap: Zap, server: Server, wrench: Wrench, database: Database }

const categoryTheme = {
  Frontend:        { barCss: 'linear-gradient(90deg,#8b5cf6,#a855f7)', glow: 'rgba(139,92,246,0.4)',  border: 'border-violet-500/40',  tabActive: 'bg-violet-500/15 border-violet-500/50 text-violet-200',  percent: 'text-violet-400',  badge: 'bg-violet-500/10 border-violet-500/30 text-violet-300',  dot: '#8b5cf6', orbColor: 'rgba(139,92,246,' },
  Backend:         { barCss: 'linear-gradient(90deg,#3b82f6,#06b6d4)', glow: 'rgba(59,130,246,0.4)',  border: 'border-blue-500/40',    tabActive: 'bg-blue-500/15 border-blue-500/50 text-blue-200',        percent: 'text-blue-400',    badge: 'bg-blue-500/10 border-blue-500/30 text-blue-300',        dot: '#3b82f6', orbColor: 'rgba(59,130,246,' },
  Database:        { barCss: 'linear-gradient(90deg,#10b981,#14b8a6)', glow: 'rgba(16,185,129,0.4)', border: 'border-emerald-500/40', tabActive: 'bg-emerald-500/15 border-emerald-500/50 text-emerald-200', percent: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300', dot: '#10b981', orbColor: 'rgba(16,185,129,' },
  'Tools & DevOps':{ barCss: 'linear-gradient(90deg,#f59e0b,#f97316)', glow: 'rgba(245,158,11,0.4)', border: 'border-amber-500/40',   tabActive: 'bg-amber-500/15 border-amber-500/50 text-amber-200',    percent: 'text-amber-400',   badge: 'bg-amber-500/10 border-amber-500/30 text-amber-300',     dot: '#f59e0b', orbColor: 'rgba(245,158,11,' },
}

const flyVariants = {
  enter: (dir) => ({ x: dir * 440, opacity: 0, scale: 0.88 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:  (dir) => ({ x: dir * -440, opacity: 0, scale: 0.88, transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] } }),
}

const floatingTags = ['HTML5','CSS3','Redux Thunk','Axios','JSON APIs','OpenAI Codex','GitHub Copilot','Claude AI','ES6+','React Hooks','MVC','WebSockets']

function TechImg({ name, size = 18 }) {
  const url = techIcons[name]
  if (!url) return null
  return <img src={url} alt={name} width={size} height={size} className="object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display='none' }} />
}

function SkillBar({ name, level, index, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: index * 0.07 + 0.1, duration: 0.45, ease: 'easeOut' }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <TechImg name={name} size={18} />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className={`text-xs font-mono font-bold ${theme.percent}`}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: index * 0.07 + 0.25, duration: 0.9, ease: 'easeOut' }}
          className="skill-fill"
          style={{ background: theme.barCss }}
        />
      </div>
    </motion.div>
  )
}

function SkillsBg({ activeTheme }) {
  const oc = activeTheme.orbColor
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#04040a 0%,#06060f 50%,#04040a 100%)' }} />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[5%] right-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${oc}0.1) 0%, transparent 70%)`, filter: 'blur(50px)', transition: 'background 0.6s ease' }}
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${oc}0.07) 0%, transparent 70%)`, filter: 'blur(50px)', transition: 'background 0.6s ease' }}
      />
      {/* Floating tech icon silhouettes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 28}%`, opacity: 0.04 }}
          animate={{ y: [0, -(10 + i * 4), 0], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        >
          <div className="w-10 h-10 rounded-xl border-2 border-white/30" />
        </motion.div>
      ))}
    </>
  )
}

const stackShowcase = ['React.js', 'React Native', 'JavaScript (ES6+)', 'Redux Toolkit', 'Spring Boot', 'MongoDB', 'MySQL', 'Node.js']

const dropContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
}

const dropItem = {
  hidden: { opacity: 0, y: -160, scale: 0.85 },
  show: {
    opacity: 1,
    y: [ -160, 0, -14, 0, -6, 0 ],
    scaleX: [ 1, 1.14, 0.96, 1.04, 1 ],
    scaleY: [ 1, 0.9, 1.06, 0.98, 1 ],
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  const [[activeIdx, direction], setTab] = useState([0, 0])
  const group = skills[activeIdx]
  const theme = categoryTheme[group.category]
  const dropControls = useAnimationControls()

  const changeTab = (i) => { if (i !== activeIdx) setTab([i, i > activeIdx ? 1 : -1]) }

  useEffect(() => {
    const onDrop = () => {
      dropControls.set('hidden')
      dropControls.start('show')
    }
    window.addEventListener('skills:drop', onDrop)
    return () => window.removeEventListener('skills:drop', onDrop)
  }, [dropControls])

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <SkillsBg activeTheme={theme} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">02 / Skills</p>
          <h2 className="section-title text-white mb-4">Technical <span className="gradient-text">Expertise</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">A full-stack toolkit built over 2+ years across web and mobile platforms.</p>
        </motion.div>

        {/* Drop showcase (triggered from Hero Tech Stack click) */}
        <div className="relative mb-10">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[92%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <motion.div
            variants={dropContainer}
            initial="show"
            animate={dropControls}
            className="flex flex-wrap justify-center gap-3 pb-6"
          >
            {stackShowcase.map((name) => {
              const icon = techIcons[name]
              return (
                <motion.div
                  key={name}
                  variants={dropItem}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
                  style={{ boxShadow: '0 10px 24px rgba(0,0,0,0.35)' }}
                >
                  {icon && (
                    <img
                      src={icon}
                      alt={name}
                      width={18}
                      height={18}
                      className="object-contain flex-shrink-0"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  )}
                  <span className="text-sm text-slate-200 font-medium">{name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Tab nav */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.map((g, i) => {
            const Icon = iconMap[g.icon] ?? Zap
            const t = categoryTheme[g.category]
            const isActive = i === activeIdx
            return (
              <motion.button key={g.category} onClick={() => changeTab(i)} whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive ? t.tabActive : 'border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600/60'}`}>
                {isActive && <motion.div layoutId="tab-glow" className={`absolute inset-0 rounded-full bg-gradient-to-r ${g.color} opacity-10`} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${g.color}`}><Icon className="w-3.5 h-3.5 text-white" /></div>
                <span className="relative z-10">{g.category}</span>
                <span className="text-xs opacity-60 relative z-10">{g.items.length}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Flying panel */}
        <div className="relative overflow-hidden min-h-[320px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div key={activeIdx} custom={direction} variants={flyVariants} initial="enter" animate="center" exit="exit"
              className={`glass-card border ${theme.border} p-8`}
              style={{ boxShadow: `0 0 50px ${theme.glow}, 0 0 100px ${theme.glow.replace('0.4','0.1')}` }}>
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg`}
                      style={{ boxShadow: `0 8px 24px ${theme.glow}` }}>
                      {(() => { const Icon = iconMap[group.icon] ?? Zap; return <Icon className="w-7 h-7 text-white" /> })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{group.category}</h3>
                      <p className="text-sm text-slate-500">{group.items.length} core technologies</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <motion.span key={item.name}
                        initial={{ opacity: 0, scale: 0.65, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.06 + 0.15, duration: 0.38, ease: 'backOut' }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border cursor-default transition-all duration-200 ${theme.badge}`}>
                        <TechImg name={item.name} size={14} />{item.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  {group.items.map((skill, i) => (
                    <SkillBar key={`${activeIdx}-${skill.name}`} name={skill.name} level={skill.level} index={i} theme={theme} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-2 mt-6">
          {skills.map((_, i) => (
            <motion.button key={i} onClick={() => changeTab(i)}
              animate={{ width: i === activeIdx ? 28 : 8, backgroundColor: i === activeIdx ? categoryTheme[skills[i].category].dot : 'rgba(139,92,246,0.2)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="h-2 rounded-full cursor-pointer" />
          ))}
        </div>

        {/* Floating "also worked with" */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-5 uppercase tracking-wider font-mono">Also worked with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {floatingTags.map((tag, i) => (
              <motion.span key={tag}
                initial={{ opacity: 0, y: 20, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.045, duration: 0.38, ease: 'backOut' }}
                animate={{ y: [0, i % 2 === 0 ? -6 : -8, 0] }}
                whileHover={{ scale: 1.12, y: -4 }}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full glass border border-slate-700/50 text-slate-400 hover:text-white hover:border-purple-500/40 cursor-default transition-colors duration-200">
                <TechImg name={tag} size={15} />{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
