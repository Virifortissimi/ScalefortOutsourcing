import { motion } from 'framer-motion';
import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Database,
  Headphones,
  Layers,
  PenTool,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const processSteps = [
  {
    icon: ClipboardCheck,
    title: 'Consultation',
    desc: 'We clarify your Nigerian company\'s goals, workload, team structure and the outcomes you need talent to support.',
  },
  {
    icon: Users,
    title: 'Talent Matching',
    desc: 'We connect you with vetted specialists who fit your tools, pace and communication style.',
  },
  {
    icon: ShieldCheck,
    title: 'Onboarding',
    desc: 'Your outsourced talent joins your workflow with clear expectations and delivery rhythm.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Support',
    desc: 'Increase or adjust capacity as your product, operations and customer needs evolve.',
  },
];

const serviceCards = [
  {
    icon: Code2,
    serviceLabel: 'Engineering',
    title: 'Software Engineering Teams',
    quote: '"Great Code. Faster Delivery. Real Results."',
    description:
      'Extend your team with developers who can build, maintain and modernize reliable digital products.',
    benefits: [
      { icon: Code2, title: 'Frontend & Backend Engineers', desc: 'Skilled developers across modern web, mobile, API and platform technologies.' },
      { icon: Layers, title: 'Full-Stack Delivery', desc: 'Bring in talent that can move across product layers and ship complete features.' },
      { icon: ShieldCheck, title: 'Quality Engineering', desc: 'Clean code, testing discipline and delivery practices that reduce risk.' },
      { icon: TrendingUp, title: 'Scalable Capacity', desc: 'Add engineering capacity quickly as product demand grows.' },
    ],
    badges: ['Frontend', 'Backend', 'Full-Stack', 'Mobile', 'API', 'QA'],
    ctaText: 'Build Your Tech Team',
  },
  {
    icon: PenTool,
    serviceLabel: 'Product & Design',
    title: 'Product, UI/UX & Digital Teams',
    quote: '"Better Products. Clearer Experiences."',
    description:
      'Work with product-minded talent who can turn ideas, requirements and customer needs into usable digital experiences.',
    benefits: [
      { icon: PenTool, title: 'UI/UX Designers', desc: 'Designers who create clear, polished and user-friendly interfaces.' },
      { icon: ClipboardCheck, title: 'Product Support', desc: 'Product coordinators and analysts who keep priorities, scope and delivery aligned.' },
      { icon: Users, title: 'User-Centered Thinking', desc: 'Talent that understands customers, journeys and business outcomes.' },
      { icon: Sparkles, title: 'Launch-Ready Execution', desc: 'Support for prototypes, MVPs, redesigns and product improvements.' },
    ],
    badges: ['UI/UX', 'Product', 'Research', 'Prototypes', 'MVPs', 'Design Systems'],
    ctaText: 'Shape Your Product',
  },
  {
    icon: Cloud,
    serviceLabel: 'Cloud, Data & Ops',
    title: 'Cloud, Data, Support & Tech Ops',
    quote: '"Stronger Systems. Smoother Operations."',
    description:
      'Keep your technology running with cloud, data, QA, support and operations talent that strengthens daily delivery.',
    benefits: [
      { icon: Cloud, title: 'Cloud & DevOps Support', desc: 'Talent for infrastructure, deployment, automation and reliability workflows.' },
      { icon: Database, title: 'Data & Analytics Talent', desc: 'Analysts and data specialists who help teams understand and use their information.' },
      { icon: Headphones, title: 'Technical Support Teams', desc: 'Responsive support talent for customers, internal users and product operations.' },
      { icon: Clock, title: 'Reliable Coverage', desc: 'Flexible support across time zones, workloads and changing business needs.' },
    ],
    badges: ['Cloud', 'DevOps', 'Data', 'QA', 'Tech Support', 'Operations'],
    ctaText: 'Scale Your Operations',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="template-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 overflow-hidden rounded-[26px] bg-navy px-5 py-16 text-center shadow-[0_22px_60px_rgba(13,27,62,0.14)] md:px-10"
        >
          <div className="brand-dot-grid absolute left-5 top-5 h-32 w-32 opacity-25" />
          <div className="brand-dot-grid absolute bottom-8 right-8 h-28 w-28 opacity-25" />
          <span className="section-kicker mb-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
            Our Process
          </span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Our proven process for <span className="text-yellow">Nigerian businesses</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
            From first conversation to daily delivery, Scalefort keeps outsourcing simple, transparent and aligned with how Nigerian teams work.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-2xl bg-white p-6 text-left shadow-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 22px 54px rgba(0,0,0,0.18)' }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cream">
                  <step.icon size={20} color="var(--color-navy)" />
                </div>
                <h3 className="font-display text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="brand-button mt-8 bg-white px-6 py-3 text-sm text-navy hover:bg-cream">
            Contact With Us <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-5"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker mb-4">Talent We Provide</span>
            <h2 className="section-title">
              Flexible Tech Talent for Every Stage of{' '}
              <span style={{ color: 'var(--color-yellow)' }}>Growth.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-gray leading-7">
              Whether you need one specialist or a full delivery team, Scalefort helps Nigerian companies find skilled people who fit their goals, workflow and pace.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="image-zoom relative aspect-[16/10] overflow-hidden rounded-[22px] bg-navy shadow-[0_18px_48px_rgba(13,27,62,0.14)]">
              <img
                src="/services-team.png"
                alt="Technology talent collaborating around a laptop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/8 to-transparent" />
              <div className="brand-dot-grid absolute bottom-6 right-6 h-24 w-24 opacity-35" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4">
                <p className="text-sm font-bold text-navy">People behind the delivery</p>
                <p className="mt-1 text-xs leading-5 text-gray">Real collaboration, flexible roles and practical execution for Nigerian businesses.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
