import { useEffect } from 'react'
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

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 px-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent max-w-7xl mx-auto" />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    document.title = 'Fardheen Ahmad Sayyad | Full Stack Developer'
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
