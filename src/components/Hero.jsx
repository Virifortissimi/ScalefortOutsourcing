import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Headphones,
  PenTool,
  ShieldCheck,
} from 'lucide-react';

const talentNodes = [
  { label: 'Engineering', icon: Code2 },
  { label: 'Product', icon: PenTool },
  { label: 'Cloud', icon: Cloud },
  { label: 'Data', icon: Database },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: 98 }}
    >
      <div className="template-shell relative z-10 pb-14 md:pb-20">
        <motion.div
          className="relative min-h-[620px] overflow-visible rounded-[28px] bg-navy px-5 py-14 text-center shadow-[0_26px_70px_rgba(13,27,62,0.18)] sm:px-8 md:px-12 lg:px-16"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[28px]">
            <img
              src="/team-laptop.png"
              alt="Two technology professionals collaborating on a laptop"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-navy/78" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,27,62,0.82)_0%,rgba(13,27,62,0.62)_46%,rgba(13,27,62,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy/90 to-transparent" />
          </div>
          <div className="brand-dot-grid absolute right-8 top-16 hidden h-36 w-36 opacity-45 md:block" />
          <div className="brand-dot-grid absolute bottom-8 left-8 hidden h-32 w-32 opacity-35 md:block" />
          <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-navy shadow-xl md:flex">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-yellow" />
            Stronger Together for Nigerian companies
          </div>

          <div className="relative mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center pb-24 md:pb-20">
            <div className="rounded-[26px] bg-navy/54 px-4 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-[2px] sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-kicker mb-4">Tech Talent Outsourcing</span>
          </motion.div>

          <motion.h1
            className="text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              lineHeight: 1.05,
              textShadow: '0 4px 24px rgba(0,0,0,0.38)',
            }}
          >
            <span className="block">Build Better.</span>
            <span style={{ color: 'var(--color-yellow)' }} className="block">
              Scale Faster.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 18px rgba(0,0,0,0.5)',
            }}
          >
            We help Nigerian companies outsource the tech talent they need - from
            engineering and product to cloud, data, QA, support and operations -
            so teams can move faster without the hiring overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a href="#contact" className="brand-button bg-white px-8 py-3.5 text-base text-navy shadow-xl hover:bg-cream">
              Let's Build Together <ArrowRight size={18} />
            </a>
            <a href="#services" className="brand-button border-2 border-white/80 px-8 py-3 text-base text-white hover:bg-white hover:text-navy">
              Explore Talent
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 text-sm font-semibold text-white"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              textShadow: '0 2px 12px rgba(0,0,0,0.55)',
            }}
          >
            Built for Nigerian teams that need flexible tech capacity
          </motion.p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-2xl bg-white/96 p-3 text-left shadow-2xl sm:grid-cols-2 lg:left-10 lg:right-10 lg:grid-cols-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.78 }}
          >
            {talentNodes.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-cream/70 px-3 py-3"
                whileHover={{ y: -4, backgroundColor: 'rgba(245,240,232,1)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: index * 0.02 }}
              >
                <Icon size={20} color="var(--color-navy)" />
                <p className="text-sm font-bold text-navy">{label}</p>
              </motion.div>
            ))}
            <motion.div className="flex items-center gap-3 rounded-xl bg-navy px-3 py-3 text-white" whileHover={{ y: -4 }}>
              <Headphones size={20} color="var(--color-yellow)" />
              <p className="text-sm font-bold">Support</p>
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-bold text-navy shadow-xl md:flex">
            <ShieldCheck size={16} color="var(--color-yellow)" />
            Vetted Nigerian tech talent, ready to join your workflow
          </div>
        </motion.div>
      </div>
    </section>
  );
}
