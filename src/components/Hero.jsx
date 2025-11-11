import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Animated monochrome grid background */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            `repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0px, rgba(255,255,255,.04) 1px, transparent 1px, transparent 24px),` +
            `repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0px, rgba(255,255,255,.04) 1px, transparent 1px, transparent 24px)`
        }}
        initial={{ backgroundPosition: '0px 0px, 0px 0px', opacity: 0 }}
        animate={{ backgroundPosition: ['0px 0px, 0px 0px', '24px 24px, 24px 24px'], opacity: 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Moving spotlight for depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background:
            'radial-gradient(600px 300px at 20% 20%, rgba(255,255,255,0.08), transparent 60%), ' +
            'radial-gradient(500px 300px at 80% 10%, rgba(255,255,255,0.06), transparent 60%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
    </section>
  )
}
