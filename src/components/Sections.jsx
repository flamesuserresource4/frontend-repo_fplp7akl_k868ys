import { motion } from 'framer-motion'
import { Code2, Smartphone, Server, Boxes, Github, Linkedin, Mail, Globe } from 'lucide-react'

export default function Sections() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
    { icon: <Server size={18} />, label: 'Go / Node.js / Python' },
    { icon: <Boxes size={18} />, label: 'Microservices & Messaging' },
    { icon: <Code2 size={18} />, label: 'TypeScript / React / Next.js' },
    { icon: <Smartphone size={18} />, label: 'React Native / Kotlin' },
    { icon: <Globe size={18} />, label: 'Distributed Systems' },
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
    <div className="relative bg-[#0b0b12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,.15),transparent_50%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20" id="about">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.08 }} className="grid gap-10 md:grid-cols-2">
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              I’m a builder and a leader. I scale teams, systems, and products. My focus: developer experience, reliability, and business impact.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold">Core Focus</h3>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/80">
                {skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-fuchsia-300/90">{s.icon}</span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20" id="experience">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
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
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20" id="projects">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .05 }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur hover:from-white/10">
              <p className="font-semibold text-white group-hover:text-fuchsia-300 transition-colors">{p.title}</p>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, k) => (
                  <span key={k} className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24" id="contact">
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
            <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 hover:bg-white/20">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
