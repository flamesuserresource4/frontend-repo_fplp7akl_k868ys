import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,.2),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,.15),transparent_30%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to impactful leadership & hands-on building
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Backend Engineering Manager & Senior Software Engineer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            8+ years crafting scalable web and mobile products. I lead backend teams, design robust platforms, and still love shipping code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition">See Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/20 transition">Get in Touch</a>
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
    </section>
  )
}
