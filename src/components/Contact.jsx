import { useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolioData'
import { createContact } from '../lib/mockapi'
import { ArrowRight, ArrowUpRight, Link2, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import SectionBackdrop from './SectionBackdrop'
import { sectionThemes } from '../theme/sectionThemes'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const contactMethods = [
  {
    Icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#ec4899',
    bg: 'from-rose-600 to-pink-600',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^\d+]/g, '')}`,
    color: '#f43f5e',
    bg: 'from-rose-500 to-red-500',
  },
  {
    Icon: Link2,
    label: 'LinkedIn',
    value: 'fardheenahmadsayyd',
    href: personal.linkedin,
    color: '#a78bfa',
    bg: 'from-violet-600 to-purple-600',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
    color: '#fb7185',
    bg: 'from-rose-500 to-fuchsia-500',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleLink = (href) => (e) => {
    if (!href) return
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      e.preventDefault()
      window.location.href = href
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await createContact({
        createdAt: new Date().toISOString(),
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <SectionBackdrop theme={sectionThemes.contact} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-rose-400 font-mono text-sm uppercase tracking-widest mb-3">06 / Contact</p>
          <h2 className="section-title text-white mb-4">
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg,#ec4899,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Connect
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Open to new opportunities, collaborations, and interesting projects. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact methods */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-6">Get in touch</h3>
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="glass-card p-5 flex items-center gap-4 border transition-all duration-300"
                style={{ borderColor: `${method.color}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${method.color}40`; e.currentTarget.style.boxShadow = `0 4px 20px ${method.color}15` }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${method.color}20`; e.currentTarget.style.boxShadow = '' }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.bg} flex items-center justify-center text-xl shrink-0`}
                  style={{ boxShadow: `0 4px 14px ${method.color}35` }}
                >
                  <method.Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-0.5">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      onClick={handleLink(method.href)}
                      className="text-slate-200 font-medium truncate block transition-colors duration-200"
                      style={{ color: '#e2e8f0' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = method.color }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#e2e8f0' }}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 font-medium">{method.value}</p>
                  )}
                </div>
                {method.href && <ArrowUpRight className="w-4 h-4 opacity-50" style={{ color: method.color }} />}
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="glass-card p-6 mt-4 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for hire</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently looking for full-stack development roles. Excited about React.js, React Native, and full-stack opportunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="glass-card border border-rose-500/15 p-8 space-y-5">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-rose-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/60 focus:bg-rose-500/5 transition-all text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-rose-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/60 focus:bg-rose-500/5 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full text-white font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #f97316)',
                  boxShadow: '0 8px 24px rgba(236,72,153,0.3)',
                }}
              >
                {status === 'sent' ? (
                  <><CheckCircle2 className="w-4 h-4" /><span>Message sent!</span></>
                ) : status === 'error' ? (
                  <span>Something went wrong — try again</span>
                ) : status === 'sending' ? (
                  <span>Sending…</span>
                ) : (
                  <><span>Send Message</span><ArrowRight className="w-4 h-4" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
