import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { Code2, Smartphone, Server, Boxes, Github, Linkedin, Mail, Globe } from 'lucide-react'

export default function Sections() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Global page progress bar for connected feel
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.3 })

  const experiences = [
    {
      role: 'Backend Engineering Manager',
      company: 'Stealth Startup',
      period: '2022 — Present',
      points: [
        'Leading a backend platform team of 8 engineers serving millions of monthly active users',
        'Defined microservices architecture, observability, and reliability practices',
        'Reduced infra cost by 35% while increasing throughput 2.4x',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2019 — 2022',
      points: [
        'Built end-to-end features across web and mobile with TypeScript, React, and Kotlin',
        'Designed event-driven data pipelines and GraphQL APIs',
        'Mentored engineers and drove engineering excellence initiatives',
      ],
    },
  ]

  const skills = [
    { icon: <Server size={18} /> },
    { icon: <Boxes size={18} /> },
    { icon: <Code2 size={18} /> },
    { icon: <Smartphone size={18} /> },
    { icon: <Globe size={18} /> },
  ]

  const projects = [
    {
      title: 'Realtime Collaboration Platform',
      desc: 'Low-latency doc sync with CRDT, WebRTC signaling, and granular ACLs.',
      tags: ['Go', 'TypeScript', 'Redis', 'Postgres', 'WebRTC'],
      link: '#',
    },
    {
      title: 'Mobile Commerce Superapp',
      desc: 'Modular micro-frontend architecture with offline-first mobile client.',
      tags: ['React Native', 'GraphQL', 'Kotlin', 'Nx'],
      link: '#',
    },
    {
      title: 'Data Observability Mesh',
      desc: 'Unified tracing and metrics layer across services with OpenTelemetry.',
      tags: ['Python', 'gRPC', 'OTel', 'ClickHouse'],
      link: '#',
    },
  ]

  return (
    <div className="relative bg-black text-white">
      {/* top progress line that binds sections together */}
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-[2px] origin-left bg-white/40 backdrop-blur z-[60]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1200px 600px at 50% 120%, rgba(255,255,255,0.06), transparent 60%)'
      }} />

      {/* ABOUT */}
      <section className="relative mx-auto max-w-7xl px-6 py-24" id="about">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="grid gap-10 md:grid-cols-2">
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              I’m a builder and a leader. I scale teams, systems, and products. My focus: developer experience, reliability, and business impact.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold">Core Focus</h3>
              <ul className="mt-3 grid grid-cols-5 gap-3 text-sm text-white/80">
                {skills.map((s, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="text-white/90">{s.icon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative mx-auto max-w-7xl px-6 py-24" id="experience">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .5, delay: i * .05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{exp.role}</p>
                  <p className="text-sm text-white/70">{exp.company}</p>
                </div>
                <span className="text-xs text-white/60">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80 text-sm">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24" id="projects">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .5, delay: i * .05 }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur hover:from-white/10">
              <p className="font-semibold text-white group-hover:text-white transition-colors">{p.title}</p>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, k) => (
                  <span key={k} className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28" id="contact">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-white/80 text-sm">Let’s build something meaningful together.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href="mailto:engineer@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 hover:bg-white/20">
              <Mail size={16} /> Email
            </a>
            <a href="https://github.com/" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 hover:bg-white/20">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/imron-reviady" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 hover:bg-white/20">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
