import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ─── Cinematic Video Intro ─────────────────────────────────────── */
function IntroSplash({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter → name → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('name'), 800)
    const t2 = setTimeout(() => setPhase('exit'), 3400)
    const t3 = setTimeout(() => onDone(), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-[999] overflow-hidden flex items-center justify-center"
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={
        phase === 'exit'
          ? { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
    >
      {/* Landscape video */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://assets.mixkit.co/videos/16610/16610-thumb-360-0.jpg"
      >
        <source src="https://assets.mixkit.co/videos/16610/16610-360.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/11/11-360.mp4" type="video/mp4" />
      </video>

      {/* Dark + red gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(183,28,28,0.72) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center px-6 select-none">
        <motion.p
          className="text-sm md:text-base font-semibold tracking-[0.35em] uppercase mb-4"
          style={{ color: 'rgba(255,200,200,0.85)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={phase !== 'enter' ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={
            phase === 'name' || phase === 'exit'
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 40, filter: 'blur(12px)' }
          }
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Fardheen
        </motion.h1>

        <motion.h2
          className="font-black leading-none"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
            color: 'rgba(255,150,150,0.9)',
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={
            phase === 'name' || phase === 'exit'
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -30 }
          }
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
        >
          Ahmad Sayyad
        </motion.h2>

        {/* Bottom line */}
        <motion.div
          className="mt-6 mx-auto h-px"
          style={{ background: 'rgba(255,100,100,0.5)' }}
          initial={{ width: 0 }}
          animate={phase === 'name' || phase === 'exit' ? { width: '80px' } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      {/* Corner vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </motion.div>
  )
}

/* ─── Scroll Reveal Wrapper ─────────────────────────────────────── */
function RevealSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ─── App ───────────────────────────────────────────────────────── */
export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.title = 'Fardheen Ahmad Sayyad | Full Stack Developer'
  }, [])

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroSplash key="intro" onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen overflow-x-hidden" style={{ background: '#fafafa' }}>
        <Navbar />

        <main>
          <Hero />
          <RevealSection><About /></RevealSection>
          <RevealSection delay={0.04}><Skills /></RevealSection>
          <RevealSection delay={0.04}><Experience /></RevealSection>
          <RevealSection delay={0.04}><Projects /></RevealSection>
          <RevealSection delay={0.04}><Education /></RevealSection>
          <RevealSection delay={0.04}><Contact /></RevealSection>
        </main>

        <Footer />
      </div>
    </>
  )
}
