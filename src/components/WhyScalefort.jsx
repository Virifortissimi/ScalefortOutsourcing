import { motion } from 'framer-motion';
import { ArrowRight, Award, Handshake, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Handshake,
    title: 'We Fit Your Workflow',
    desc: 'We align talent to your culture, tools, communication style and delivery goals.',
  },
  {
    icon: Zap,
    title: 'Flexible & Scalable',
    desc: 'Scale your team up or down without long hiring cycles, fixed overhead or operational drag.',
  },
  {
    icon: Award,
    title: 'Quality First, Always',
    desc: 'Every specialist is vetted, capable and committed to dependable work.',
  },
];

export default function WhyScalefort() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: 'var(--color-light)' }}
    >
      <div className="brand-dot-grid absolute left-0 top-24 h-28 w-24 opacity-35" />
      <div className="brand-dot-grid absolute bottom-20 right-0 h-32 w-28 opacity-35" />

      <div className="template-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="section-kicker mb-4">Why Choose Us</span>
          <h2 className="section-title">
            More Than a Vendor.{' '}
            <span style={{ color: 'var(--color-yellow)' }}>We're Your Team.</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--color-gray)',
              maxWidth: 620,
            }}
          >
            We become an extension of your team - delivering flexible tech talent that helps Nigerian businesses move with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="image-zoom relative mx-auto mb-12 max-w-6xl overflow-hidden rounded-[24px] bg-navy shadow-[0_24px_64px_rgba(13,27,62,0.14)]"
        >
          <img
            src="/why-scalefort-team.png"
            alt="Scalefort team strategy session"
            className="h-[300px] w-full object-cover md:h-[380px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
          <a
            href="#contact"
            className="brand-button absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 text-sm text-navy hover:bg-cream"
          >
            Get Started Today <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-[22px] p-8"
              style={{
                background: 'var(--color-navy)',
                border: '1px solid rgba(13,27,62,0.08)',
                boxShadow: '0 20px 48px rgba(13,27,62,0.12)',
              }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <div
                className="mb-6 flex items-center justify-center rounded-xl"
                style={{
                  width: 56,
                  height: 56,
                  background: 'rgba(245,166,35,0.16)',
                }}
              >
                <pillar.icon size={25} color="var(--color-yellow)" />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.18rem',
                  color: 'var(--color-white)',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.92rem',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.65,
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 rounded-2xl bg-white p-4 shadow-[0_18px_48px_rgba(13,27,62,0.08)] md:grid-cols-3">
          {['Flexible teams', 'Vetted specialists', 'Outcome-focused support'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 rounded-xl bg-cream px-4 py-3 text-sm font-bold text-navy">
              <ShieldCheck size={16} color="var(--color-yellow)" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
