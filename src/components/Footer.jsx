import { motion } from 'framer-motion'
import { personal } from '../data/portfolioData'
import { Link2, Mail, MapPin, Phone, Sparkles } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const handleLink = (href) => (e) => {
    if (!href) return
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      e.preventDefault()
      window.location.href = href
    }
  }

  return (
    <footer className="relative border-t border-purple-500/10 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="font-mono text-lg font-bold gradient-text mb-1">{'<FA />'}</div>
            <p className="text-slate-500 text-sm">{personal.name}</p>
            <p className="text-slate-600 text-xs mt-1">{personal.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            {[
              { label: 'Email', href: `mailto:${personal.email}`, Icon: Mail },
              { label: 'LinkedIn', href: personal.linkedin, Icon: Link2 },
              { label: 'Phone', href: `tel:${personal.phone.replace(/[^\d+]/g, '')}`, Icon: Phone },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                onClick={handleLink(link.href)}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 glass-card flex items-center justify-center hover:border-purple-500/40 transition-all"
                title={link.label}
              >
                <link.Icon className="w-5 h-5 text-slate-200" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          className="text-center text-slate-600 text-xs"
        >
            <p>© {year} {personal.name}</p>
            <p className="mt-1 inline-flex items-center gap-1.5">
              <span>Built with React &amp; Framer Motion</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300/80" aria-hidden="true" />
            </p>
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/5 text-center">
          <p className="text-slate-700 text-xs inline-flex items-center gap-1.5">
            <span>Made with passion · Full Stack Developer · {personal.location}</span>
            <MapPin className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}
