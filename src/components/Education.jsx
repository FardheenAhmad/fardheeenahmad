import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education, certifications } from '../data/portfolioData'
import { techIcons } from '../data/techIcons'
import { Award, Bot, Brain, GraduationCap, Rocket, Star, ZoomIn } from 'lucide-react'
import CertificatePage from './CertificatePage'

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const coreTechs = ['React.js','React Native','Spring Boot','Java','MongoDB','MySQL','Redux Toolkit','Tailwind CSS','Git & GitHub','WebSockets','Postman','Node.js']

function EducationBg() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: '#F0F8FF' }} />
      {/* Sky-blue SVG blob — top-right corner */}
      <svg className="absolute top-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-96 lg:h-96 pointer-events-none opacity-50" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
        <path fill="#BAE6FD" d="M360,0 L360,360 L260,360 C202,358,148,322,124,268 C100,214,146,162,118,110 C90,58,28,46,24,4 C20,-38,78,-10,170,-4 C252,-6,306,-3,360,0 Z"/>
      </svg>
      <div className="absolute inset-0 bg-dots-sm opacity-35 pointer-events-none" />
    </>
  )
}

export default function Education() {
  const [openCert, setOpenCert] = useState(null)

  return (
    <section id="education" className="py-28 px-6 relative overflow-hidden">
      <EducationBg />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }} className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest mb-3 text-gray-400">05 / Education</p>
          <h2 className="section-title mb-4">
            Education &amp;{' '}
            <span style={{ background:'linear-gradient(135deg,#0ea5e9,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree card */}
          <motion.div variants={itemVariants} whileHover={{ y:-8 }}
            className="glass-card border border-sky-100 hover:border-sky-300 p-8 relative overflow-hidden transition-all duration-300"
            style={{ boxShadow:'0 4px 30px rgba(16,185,129,0.07)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-600/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background:'linear-gradient(135deg,#10b981,#14b8a6)', boxShadow:'0 4px 16px rgba(16,185,129,0.35)' }}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Education</p>
                <h3 className="font-bold text-gray-900">Academic Degree</h3>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{education.degree}</h4>
            <p className="text-sky-600 font-medium mb-6">{education.institute}</p>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: education.cgpa, label:'CGPA' }, { val: education.year, label:'Graduated' }].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center border border-sky-100">
                  <div className="text-2xl font-black mb-1"
                    style={{ background:'linear-gradient(135deg,#10b981,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    {s.val}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400">B.Tech Computer Science · BIHER</span>
            </div>
          </motion.div>

          {/* Cert card */}
          <motion.div variants={itemVariants} whileHover={{ y:-8 }}
            className="glass-card border border-teal-100 hover:border-teal-300 p-8 relative overflow-hidden transition-all duration-300"
            style={{ boxShadow:'0 4px 30px rgba(20,184,166,0.07)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-600/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background:'linear-gradient(135deg,#14b8a6,#06b6d4)', boxShadow:'0 4px 16px rgba(20,184,166,0.35)' }}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-mono text-teal-400 uppercase tracking-wider">Certifications</p>
                <h3 className="font-bold text-gray-900">Achievements</h3>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {certifications.map((cert, i) => (
                <motion.div key={i} initial={{ opacity:0, x:-15 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  whileHover={{ x:4, scale:1.01 }}
                  onClick={() => setOpenCert(cert)}
                  className="flex items-center gap-3 p-4 rounded-xl border border-teal-500/15 hover:border-teal-400/60 bg-teal-500/5 hover:bg-teal-50 transition-all cursor-pointer group"
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(20,184,166,0.15)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}>
                  <Star className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span className="text-gray-700 font-medium flex-1">{cert}</span>
                  <div className="flex items-center gap-1.5 text-xs text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span className="font-mono">View</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-slate-600 uppercase tracking-wider font-mono mb-3">Core Technologies Learned</p>
            <div className="flex flex-wrap gap-2">
              {coreTechs.map((t, i) => {
                const icon = techIcons[t]
                return (
                  <motion.span key={t} initial={{ opacity:0, scale:0.7 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}
                    whileHover={{ scale:1.1, y:-2 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border border-sky-200 bg-sky-50 text-sky-700 cursor-default">
                    {icon && <img src={icon} alt={t} width={13} height={13} className="object-contain" onError={(e) => { e.currentTarget.style.display='none' }} />}
                    {t}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { Icon:Rocket, title:'Scalable Apps', desc:'Strong focus on building scalable full-stack applications', color:'#10b981' },
            { Icon:Brain,  title:'Continuous Learner', desc:'Passionate about new technologies and development tools', color:'#14b8a6' },
            { Icon:Bot,    title:'AI-Enhanced Dev', desc:'Leverages AI tools for productivity and code quality', color:'#06b6d4' },
          ].map((card) => (
            <motion.div key={card.title} whileHover={{ y:-4, scale:1.02 }}
              className="glass-card p-5 text-center border transition-all duration-200"
              style={{ borderColor:`${card.color}20` }}>
              <div className="mb-3 flex justify-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor:`${card.color}18`, border:`1px solid ${card.color}35` }}>
                  <card.Icon className="w-5 h-5" style={{ color:card.color }} />
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {openCert && <CertificatePage cert={openCert} onClose={() => setOpenCert(null)} />}
      </AnimatePresence>
    </section>
  )
}
