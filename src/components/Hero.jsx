import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function WizardMagic() {
  const float = {
    animate: {
      y: [0, -6, 0],
      rotate: [0, -1.2, 0.8, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const sparkle = (delay = 0) => ({
    initial: { opacity: 0, y: 12, scale: 0.6 },
    animate: {
      opacity: [0, 1, 0],
      y: [-8, -22, -34],
      scale: [0.6, 1, 0.8],
      transition: { duration: 2.2, repeat: Infinity, delay, ease: 'easeOut' }
    }
  })

  return (
    <div className="pointer-events-none select-none">
      <motion.svg
        variants={float}
        animate="animate"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        className="opacity-70"
      >
        {/* Cloak */}
        <path d="M110 70 C 70 110, 60 170, 110 190 C 160 170, 150 110, 110 70 Z" fill="url(#cloakGrad)" stroke="rgba(255,255,255,0.25)" />
        {/* Hat */}
        <path d="M75 78 C 100 60, 140 60, 155 78 C 130 80, 90 80, 75 78 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
        <path d="M90 78 C 100 45, 130 45, 145 78" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

        {/* Wand */}
        <path d="M135 120 L 175 95" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <circle cx="178" cy="93" r="3" fill="white" />

        {/* Sparkles rising */}
        <motion.circle cx="178" cy="93" r="2" fill="white" variants={sparkle(0)} initial="initial" animate="animate" />
        <motion.circle cx="168" cy="98" r="1.8" fill="white" variants={sparkle(0.4)} initial="initial" animate="animate" />
        <motion.circle cx="186" cy="90" r="1.6" fill="white" variants={sparkle(0.8)} initial="initial" animate="animate" />
        <motion.circle cx="172" cy="88" r="1.4" fill="white" variants={sparkle(1.2)} initial="initial" animate="animate" />

        {/* Subtle face hint */}
        <circle cx="110" cy="92" r="6" fill="rgba(255,255,255,0.08)" />

        <defs>
          <linearGradient id="cloakGrad" x1="110" y1="70" x2="110" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default function Hero() {
  const mx = useMotionValue(50)
  const my = useMotionValue(40)
  const smx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.6 })
  const bgSpot = useTransform([smx, smy], ([x, y]) => `radial-gradient(600px 300px at ${x}% ${y}%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(500px 300px at calc(${x}% + 20%) calc(${y}% - 10%), rgba(255,255,255,0.06), transparent 60%)`)

  useEffect(() => {
    const move = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth) * 100
      const y = (e.clientY / innerHeight) * 100
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Animated monochrome grid background */}
      <div aria-hidden className="absolute inset-0 grid-bg grid-shift opacity-80" />

      {/* Moving spotlight for depth */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: bgSpot }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
            Open to impactful leadership & hands-on building
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Backend Engineering Manager & Senior Software Engineer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            8+ years crafting scalable web and mobile products. I lead backend teams, design robust platforms, and still love shipping code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow hover:bg-white/90 transition"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <span>Web Development</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Mobile Development</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Distributed Systems</span>
          </div>
        </motion.div>
      </div>

      {/* Wizard illustration + sparkles (bottom-right) */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-10">
        <WizardMagic />
      </div>

      {/* Ambient twinkles in the background for extra magic */}
      <div aria-hidden className="absolute inset-0 z-0">
        {[...Array(18)].map((_, i) => {
          const left = Math.random() * 100
          const top = Math.random() * 90
          const delay = (i % 6) * 0.5
          const size = 1 + (i % 3) * 0.5
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/70"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{ duration: 3 + (i % 5), repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          )
        })}
      </div>
    </section>
  )
}
