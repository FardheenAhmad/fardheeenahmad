import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const expTechs = ['React.js','React Native','Spring Boot','Java','WebSockets','REST APIs','Redux Toolkit','Tailwind CSS','MongoDB','MySQL','Claude AI','GitHub Copilot','Postman']

function TechChip({ name }) {
  const icon = techIcons[name]
  return (
    <motion.span whileHover={{ scale: 1.1, y: -2 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-200 hover:border-cyan-400 cursor-default transition-all duration-200">
      {icon && <img src={icon} alt={name} width={14} height={14} className="object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display='none' }} />}
      {name}
    </motion.span>
  )
}

function ExperienceBg() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: '#F0FAFA' }} />
      {/* Teal SVG blob — top-right corner */}
      <svg className="absolute top-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-96 lg:h-96 pointer-events-none opacity-50" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
        <path fill="#A7F3D0" d="M360,0 L360,360 L242,360 C184,357,132,320,112,268 C92,216,138,162,110,110 C82,58,22,44,20,2 C18,-40,76,-8,166,-4 C248,-6,304,-4,360,0 Z"/>
      </svg>
      <div className="absolute inset-0 bg-dots-sm opacity-35 pointer-events-none" />
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <ExperienceBg />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest mb-3 text-gray-400">03 / Experience</p>
          <h2 className="section-title mb-4">
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
                className="glass-card border border-cyan-100 hover:border-cyan-300 p-5 sm:p-8 transition-all duration-300"
                style={{ boxShadow:'0 4px 30px rgba(6,182,212,0.07)' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                      style={{ background:'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow:'0 4px 16px rgba(6,182,212,0.35)' }}>G</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                      <span className="text-cyan-400 font-semibold">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">{job.period}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">{job.type}</span>
                    <span className="text-xs text-gray-400">{job.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {job.responsibilities.map((item, ri) => (
                    <motion.div key={ri} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:ri*0.07 }} className="flex items-start gap-3 group">
                      <motion.div whileHover={{ scale:1.3 }} className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </motion.div>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-cyan-500/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono mb-3">Tech Stack</p>
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
