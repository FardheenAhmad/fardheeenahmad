import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const expTechs = ['React.js','React Native','Java','Spring Boot','WebSockets','REST APIs','Redux','MongoDB','Postman']

function TechChip({ name }) {
  const icon = techIcons[name]
  return (
    <motion.span whileHover={{ scale: 1.1, y: -2 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/8 border border-cyan-500/25 hover:border-cyan-400/50 cursor-default transition-all duration-200">
      {icon && <img src={icon} alt={name} width={14} height={14} className="object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display='none' }} />}
      {name}
    </motion.span>
  )
}

function ExperienceBg() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#04040a 0%,#03090d 50%,#04040a 100%)' }} />
      {/* Cyan orbs */}
      <motion.div animate={{ x:[0,60,0], y:[0,-50,0], scale:[1,1.2,1] }} transition={{ duration:16, repeat:Infinity, ease:'easeInOut' }}
        className="absolute top-[8%] right-[3%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 70%)', filter:'blur(50px)' }} />
      <motion.div animate={{ x:[0,-40,0], y:[0,35,0], scale:[1,1.15,1] }} transition={{ duration:20, repeat:Infinity, ease:'easeInOut', delay:4 }}
        className="absolute bottom-[8%] left-[3%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(20,184,166,0.08) 0%,transparent 70%)', filter:'blur(50px)' }} />
      {/* Animated horizontal scan lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div key={i}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ top: `${18 + i * 17}%`, background: `linear-gradient(90deg,transparent,rgba(6,182,212,${0.04 + i*0.01}),transparent)` }}
          animate={{ scaleX:[0.2,1,0.2], opacity:[0.3,0.7,0.3] }}
          transition={{ duration:6+i*1.5, repeat:Infinity, ease:'easeInOut', delay:i*1.2 }}
        />
      ))}
      {/* Circuit dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: 4, height: 4, left:`${12+i*11}%`, top:`${30+(i%3)*20}%`, backgroundColor:'rgba(6,182,212,0.15)' }}
          animate={{ scale:[1,2,1], opacity:[0.3,0.8,0.3] }}
          transition={{ duration:3+i*0.5, repeat:Infinity, ease:'easeInOut', delay:i*0.4 }}
        />
      ))}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <ExperienceBg />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">03 / Experience</p>
          <h2 className="section-title text-white mb-4">
            Work{' '}
            <span style={{ background:'linear-gradient(135deg,#06b6d4,#0891b2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {experience.map((job, ji) => (
          <motion.div key={ji} variants={itemVariants} className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/60 via-teal-500/40 to-transparent" />
            <div className="md:pl-24 relative">
              <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ delay:0.3, type:'spring', stiffness:200 }}
                className="hidden md:flex absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 items-center justify-center"
                style={{ boxShadow:'0 0 20px rgba(6,182,212,0.5)' }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>

              <motion.div whileHover={{ y:-4 }} transition={{ duration:0.3 }}
                className="glass-card border border-cyan-500/20 hover:border-cyan-500/35 p-8 transition-all duration-300"
                style={{ boxShadow:'0 4px 30px rgba(6,182,212,0.07)' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                      style={{ background:'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow:'0 4px 16px rgba(6,182,212,0.35)' }}>G</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                      <span className="text-cyan-400 font-semibold">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">{job.period}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">{job.type}</span>
                    <span className="text-xs text-slate-500">{job.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {job.responsibilities.map((item, ri) => (
                    <motion.div key={ri} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:ri*0.07 }} className="flex items-start gap-3 group">
                      <motion.div whileHover={{ scale:1.3 }} className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </motion.div>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-cyan-500/10">
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-mono mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {expTechs.map((tech, i) => (
                      <motion.div key={tech} initial={{ opacity:0, scale:0.7 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}>
                        <TechChip name={tech} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
