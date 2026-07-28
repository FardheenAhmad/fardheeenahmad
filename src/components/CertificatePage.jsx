import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Award } from 'lucide-react'

/* ── per-cert metadata ─────────────────────────────────────── */
export const certDetails = {
  'Java Full Stack Development Certification': {
    image: 'https://picsum.photos/seed/cert/900/620',
    issuer: 'Java Full Stack Academy',
    recipient: 'Fardheen Ahmad Sayyad',
    date: 'November 2024',
    skills: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Hibernate'],
    color: '#B45309',
    gradient: 'linear-gradient(135deg,#F59E0B 0%,#B45309 100%)',
  },
}
const fallback = {
  image: 'https://picsum.photos/seed/cert/900/620',
  issuer: 'Certification Authority',
  recipient: 'Fardheen Ahmad Sayyad',
  date: '2024',
  skills: ['Full Stack', 'Development'],
  color: '#B45309',
  gradient: 'linear-gradient(135deg,#F59E0B,#B45309)',
}

/* ── decorative atoms ───────────────────────────────────────── */
function GoldStar({ size = 24, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <polygon
        points="12,1.5 15.09,8.26 22.5,9.27 17.25,14.14 18.54,21.5 12,18.27 5.46,21.5 6.75,14.14 1.5,9.27 8.91,8.26"
        fill="#F59E0B" stroke="#B45309" strokeWidth="0.4" strokeLinejoin="round"
      />
    </svg>
  )
}

function Sparkle({ size = 16, color = '#F59E0B', opacity = 0.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ opacity }}>
      <path d="M8 0 L9.1 6.9 L16 8 L9.1 9.1 L8 16 L6.9 9.1 L0 8 L6.9 6.9 Z" fill={color} />
    </svg>
  )
}

function CornerOrnament({ size = 58, flipX = false, flipY = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 58 58" fill="none"
      style={{ transform: `scale(${flipX ? -1 : 1},${flipY ? -1 : 1})`, transformOrigin: 'center' }}>
      <path d="M9,49 L9,17 Q9,9 17,9 L49,9" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M15,45 L15,19 Q15,15 19,15 L45,15" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.55"/>
      <circle cx="9" cy="9" r="4.5" fill="#F59E0B"/>
      <circle cx="9" cy="9" r="2.2" fill="#B45309"/>
      <circle cx="9" cy="29" r="2" fill="#F59E0B" opacity="0.45"/>
      <circle cx="29" cy="9" r="2" fill="#F59E0B" opacity="0.45"/>
      <path d="M9,38 L20,27" stroke="#B45309" strokeWidth="0.9" strokeLinecap="round" opacity="0.25"/>
    </svg>
  )
}

function CertSeal({ color = '#B45309' }) {
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
      {[...Array(18)].map((_, i) => {
        const a = (i * 360) / 18
        const r = (a * Math.PI) / 180
        return (
          <line key={i}
            x1={42 + 38 * Math.cos(r)} y1={42 + 38 * Math.sin(r)}
            x2={42 + 32 * Math.cos(r)} y2={42 + 32 * Math.sin(r)}
            stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        )
      })}
      <circle cx="42" cy="42" r="28" fill={color}/>
      <circle cx="42" cy="42" r="23" fill="none" stroke="#FEF3C7" strokeWidth="1.5"/>
      <path d="M30,42 L38,50 L54,34" stroke="#FEF3C7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

/* ── floating positions ─────────────────────────────────────── */
const STARS = [
  { x:'5%',  y:'9%',  size:34, opacity:0.70, delay:0.30 },
  { x:'91%', y:'7%',  size:26, opacity:0.55, delay:0.50 },
  { x:'3%',  y:'54%', size:22, opacity:0.40, delay:0.70 },
  { x:'94%', y:'52%', size:30, opacity:0.60, delay:0.40 },
  { x:'14%', y:'86%', size:20, opacity:0.35, delay:0.60 },
  { x:'80%', y:'88%', size:24, opacity:0.45, delay:0.80 },
  { x:'49%', y:'4%',  size:18, opacity:0.38, delay:0.90 },
]
const SPARKLES = [
  { x:'22%', y:'16%', size:13, delay:1.00 },
  { x:'74%', y:'21%', size:11, delay:1.10 },
  { x:'10%', y:'74%', size: 9, delay:1.20 },
  { x:'87%', y:'72%', size:15, delay:0.95 },
  { x:'42%', y:'93%', size:11, delay:1.30 },
  { x:'64%', y:'8%',  size: 9, delay:1.05 },
]

/* ── page ───────────────────────────────────────────────────── */
export default function CertificatePage({ cert, onClose }) {
  const data = certDetails[cert] ?? fallback

  useEffect(() => {
    // load elegant serif fonts
    if (!document.getElementById('cert-gfont')) {
      const l = document.createElement('link')
      l.id = 'cert-gfont'
      l.rel = 'stylesheet'
      l.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap'
      document.head.appendChild(l)
    }
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: '#FDFAF3' }}
    >
      {/* ambient golden radial glow */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 38%, rgba(245,158,11,0.13) 0%, transparent 70%)' }} />

      {/* dot grid */}
      <div className="fixed inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: 'radial-gradient(rgba(180,83,9,0.2) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

      {/* top-right blob hint */}
      <div className="fixed top-0 right-0 w-64 h-64 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle at top right, rgba(245,158,11,0.25) 0%, transparent 70%)' }} />
      {/* bottom-left blob hint */}
      <div className="fixed bottom-0 left-0 w-64 h-64 pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle at bottom left, rgba(251,191,36,0.2) 0%, transparent 70%)' }} />

      {/* floating stars */}
      {STARS.map((s, i) => (
        <motion.div key={i} className="fixed pointer-events-none" style={{ left: s.x, top: s.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: s.opacity, scale: 1, y: [0, -(6 + i * 2), 0] }}
          transition={{
            opacity: { delay: s.delay, duration: 0.5 },
            scale:   { delay: s.delay, duration: 0.5, type: 'spring' },
            y:       { delay: s.delay + 0.5, duration: 3.2 + i * 0.35, repeat: Infinity, ease: 'easeInOut' },
          }}>
          <GoldStar size={s.size} opacity={1} />
        </motion.div>
      ))}

      {/* floating sparkles */}
      {SPARKLES.map((s, i) => (
        <motion.div key={i} className="fixed pointer-events-none" style={{ left: s.x, top: s.y }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.55, rotate: [0, 45, 0] }}
          transition={{ delay: s.delay, duration: 4.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}>
          <Sparkle size={s.size} />
        </motion.div>
      ))}

      {/* ── layout ── */}
      <div className="relative min-h-screen flex flex-col">

        {/* header */}
        <motion.header
          initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4"
          style={{ background: 'rgba(253,250,243,0.90)', borderBottom: '1px solid rgba(180,83,9,0.14)', backdropFilter: 'blur(14px)' }}>

          <motion.button onClick={onClose} whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all"
            style={{ color: '#78716C', fontFamily: 'system-ui', border: '1px solid rgba(180,83,9,0.18)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>

          <div className="flex items-center gap-2" style={{ color: '#B45309' }}>
            <Award className="w-4 h-4" />
            <span style={{ fontFamily: 'system-ui', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Certificate of Achievement
            </span>
          </div>

          <motion.a href={data.image} download target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full"
            style={{ fontFamily: 'system-ui', fontWeight: 600, background: data.gradient, color: '#fff', boxShadow: '0 4px 16px rgba(180,83,9,0.28)' }}>
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </motion.a>
        </motion.header>

        {/* main */}
        <main className="flex-1 flex flex-col items-center px-4 py-10 md:py-14">

          {/* achievement label */}
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-14 sm:w-20" style={{ background: 'linear-gradient(to right, transparent, #F59E0B)' }} />
              <span style={{ color: '#B45309', fontFamily: 'system-ui', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                Achievement Unlocked
              </span>
              <div className="h-px w-14 sm:w-20" style={{ background: 'linear-gradient(to left, transparent, #F59E0B)' }} />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold leading-snug px-2"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1C1917' }}>
              {cert}
            </h1>
            {/* star row */}
            <div className="flex justify-center gap-1.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.08, type: 'spring', stiffness: 380 }}>
                  <GoldStar size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ornate certificate frame */}
          <motion.div className="relative w-full max-w-3xl"
            initial={{ scale: 0.86, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.72, type: 'spring', stiffness: 110, damping: 18 }}>

            {/* outer ambient glow */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ boxShadow: '0 0 70px rgba(245,158,11,0.22), 0 0 140px rgba(245,158,11,0.08)' }} />

            {/* gold gradient border */}
            <div className="relative rounded-2xl p-[3px]"
              style={{ background: 'linear-gradient(135deg,#F59E0B 0%,#D97706 35%,#B45309 65%,#F59E0B 100%)', boxShadow: '0 12px 50px rgba(0,0,0,0.14)' }}>
              {/* white inner mount */}
              <div className="rounded-[14px] bg-white p-3 sm:p-4">
                {/* inner hairline border */}
                <div className="relative rounded-lg overflow-hidden"
                  style={{ outline: '1px solid rgba(245,158,11,0.28)' }}>

                  {/* corner ornaments */}
                  <div className="absolute top-1.5 left-1.5 z-10"><CornerOrnament size={50} /></div>
                  <div className="absolute top-1.5 right-1.5 z-10"><CornerOrnament size={50} flipX /></div>
                  <div className="absolute bottom-1.5 left-1.5 z-10"><CornerOrnament size={50} flipY /></div>
                  <div className="absolute bottom-1.5 right-1.5 z-10"><CornerOrnament size={50} flipX flipY /></div>

                  {/* certificate image */}
                  <img src={data.image} alt={cert} className="w-full h-auto block" style={{ minHeight: 180 }} />
                </div>
              </div>
            </div>

            {/* certified seal — overlaps top-right corner */}
            <motion.div className="absolute -top-6 -right-4 sm:-top-7 sm:-right-6 z-20"
              initial={{ scale: 0, rotate: -35 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.85, type: 'spring', stiffness: 280, damping: 14 }}>
              <CertSeal color={data.color} />
            </motion.div>
          </motion.div>

          {/* details */}
          <motion.div className="mt-10 w-full max-w-2xl text-center space-y-5"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.58 }}>

            {/* top rule */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(180,83,9,0.3))' }} />
              <Sparkle size={13} opacity={0.6} />
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(180,83,9,0.3))' }} />
            </div>

            {/* awarded to */}
            <div>
              <p style={{ fontFamily: 'system-ui', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#A8A29E' }}>
                Awarded to
              </p>
              <p className="text-2xl sm:text-3xl mt-1 font-semibold italic"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1C1917' }}>
                {data.recipient}
              </p>
            </div>

            {/* issuer + date */}
            <p style={{ fontFamily: 'system-ui', fontSize: '0.85rem', color: '#78716C' }}>
              Issued by{' '}
              <span style={{ color: '#B45309', fontWeight: 600 }}>{data.issuer}</span>
              {' · '}{data.date}
            </p>

            {/* skill pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {data.skills.map((skill, i) => (
                <motion.span key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.82 + i * 0.07, type: 'spring' }}
                  style={{
                    fontFamily: 'system-ui', fontSize: '0.78rem', fontWeight: 600,
                    background: '#FEF3C7', color: '#B45309',
                    border: '1px solid rgba(180,83,9,0.22)',
                    borderRadius: 9999, padding: '6px 16px',
                  }}>
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* bottom rule */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(180,83,9,0.2))' }} />
              <GoldStar size={13} opacity={0.45} />
              <GoldStar size={13} opacity={0.70} />
              <GoldStar size={13} opacity={0.45} />
              <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(180,83,9,0.2))' }} />
            </div>

            {/* close button at bottom */}
            <div className="pt-4 pb-8">
              <motion.button onClick={onClose}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full text-sm font-semibold transition-all"
                style={{ fontFamily: 'system-ui', background: data.gradient, color: '#fff', boxShadow: '0 6px 24px rgba(180,83,9,0.28)' }}>
                ← Back to Portfolio
              </motion.button>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}
