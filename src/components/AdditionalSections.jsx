import { motion } from 'framer-motion';
import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Headphones,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const roles = [
  { title: 'Frontend Developers', icon: Code2, desc: 'React, responsive UI, dashboards and customer-facing web apps.' },
  { title: 'Backend Developers', icon: Layers, desc: 'APIs, integrations, databases, services and platform logic.' },
  { title: 'UI/UX Designers', icon: Palette, desc: 'Product flows, prototypes, design systems and polished interfaces.' },
  { title: 'QA Engineers', icon: ShieldCheck, desc: 'Manual and automated testing that keeps releases dependable.' },
  { title: 'Data Analysts', icon: BarChart3, desc: 'Reporting, insights, data cleanup and decision support.' },
  { title: 'Cloud Engineers', icon: Cloud, desc: 'Deployments, infrastructure, DevOps workflows and reliability.' },
  { title: 'Tech Support', icon: Headphones, desc: 'Customer and internal support for products, tools and operations.' },
  { title: 'Product Support', icon: Workflow, desc: 'Coordination, documentation, requirements and delivery alignment.' },
];

const models = [
  {
    title: 'Dedicated Talent',
    desc: 'Add one or more specialists who work as an extension of your internal team.',
    points: ['Best for ongoing capacity', 'Fits your tools and rituals', 'Easy to scale up or down'],
  },
  {
    title: 'Project Team',
    desc: 'Assemble a focused delivery pod for a product build, redesign, migration or launch.',
    points: ['Multi-role support', 'Clear scope and milestones', 'Built for faster execution'],
    featured: true,
  },
  {
    title: 'Managed Support',
    desc: 'Keep product, cloud, data, QA or technical operations running with flexible support coverage.',
    points: ['Reliable operational help', 'Strong communication rhythm', 'Useful for growing teams'],
  },
];

const strengths = [
  'Nigerian professionals who understand local business realities',
  'Shared market context, communication style and working hours',
  'Practical ownership for product, operations and customer needs',
  'Cost-effective scaling without reducing quality expectations',
];

const faqs = [
  {
    question: 'How quickly can we start?',
    answer: 'Once we understand your role requirements, workflow and priorities, we can begin matching suitable Nigerian talent and plan onboarding quickly.',
  },
  {
    question: 'Can we hire one person or a full team?',
    answer: 'Yes. Scalefort can support Nigerian companies with a single specialist, a small pod, or a broader team across engineering, product, design, cloud, data, QA and support.',
  },
  {
    question: 'How do you make sure talent fits our workflow?',
    answer: 'We align around your tools, communication rhythm, delivery expectations, culture and outcomes before recommending a working setup.',
  },
  {
    question: 'Can we scale down if our needs change?',
    answer: 'Yes. Flexible scaling is part of the model, so teams can adjust capacity without carrying unnecessary long-term overhead.',
  },
];

export default function AdditionalSections() {
  return (
    <>
      <section id="roles" className="bg-white py-16 md:py-24">
        <div className="template-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="section-kicker mb-4">Featured Roles</span>
            <h2 className="section-title">
              Specialists for the work your <span className="text-yellow">team needs next.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-gray">
              Bring in the right people across product delivery, engineering, operations and support for your Nigerian company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group template-card rounded-[20px] p-5"
                whileHover={{ y: -7, scale: 1.015 }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cream transition-transform duration-300 group-hover:rotate-3">
                  <role.icon size={20} color="var(--color-navy)" />
                </div>
                <h3 className="font-display text-base font-bold text-navy">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement" className="relative overflow-hidden bg-light py-16 md:py-24">
        <div className="brand-dot-grid absolute left-0 top-16 h-32 w-28 opacity-30" />
        <div className="template-shell relative z-10">
          <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
            <div>
              <span className="section-kicker mb-4">Engagement Models</span>
              <h2 className="section-title">
                Flexible ways to work <span className="text-yellow">with Scalefort.</span>
              </h2>
            </div>
            <p className="text-base leading-7 text-gray">
              Choose the support model that matches your Nigerian company today, then adapt as the team, product or workload changes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: model.featured ? 1.018 : 1.012 }}
                className={`rounded-[24px] p-7 shadow-[0_18px_50px_rgba(13,27,62,0.08)] ${
                  model.featured ? 'bg-navy text-white' : 'bg-white text-navy'
                }`}
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${model.featured ? 'bg-white/10' : 'bg-cream'}`}>
                  <Sparkles size={21} color={model.featured ? 'var(--color-yellow)' : 'var(--color-navy)'} />
                </div>
                <h3 className="font-display text-xl font-bold">{model.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${model.featured ? 'text-white/72' : 'text-gray'}`}>{model.desc}</p>
                <div className="mt-6 space-y-3">
                  {model.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 size={17} color="var(--color-yellow)" />
                      <span className={model.featured ? 'text-white/88' : 'text-navy'}>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="template-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[26px] bg-navy px-5 py-14 shadow-[0_24px_64px_rgba(13,27,62,0.14)] md:px-10"
            whileHover={{ boxShadow: '0 28px 76px rgba(13,27,62,0.22)' }}
          >
            <div className="brand-dot-grid absolute right-8 top-8 h-32 w-32 opacity-25" />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="section-kicker mb-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  For Nigerian Companies
                </span>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Outsource confidently with <span className="text-yellow">Nigerian talent.</span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
                  Scalefort connects Nigerian companies with skilled Nigerian professionals who bring practical execution, flexibility and strong ownership to modern tech work.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:col-span-3 sm:grid-cols-2">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.14)' }}
                  >
                    <Zap className="mb-4" size={20} color="var(--color-yellow)" />
                    <p className="text-sm font-semibold leading-6 text-white/90">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden bg-light py-16 md:py-24">
        <div className="brand-dot-grid absolute bottom-16 right-0 h-32 w-28 opacity-35" />
        <div className="template-shell relative z-10">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="section-kicker mb-4">FAQ</span>
            <h2 className="section-title">
              Frequently asked <span className="text-yellow">questions.</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                className="group rounded-2xl bg-white p-5 shadow-[0_14px_40px_rgba(13,27,62,0.07)]"
                whileHover={{ y: -4, boxShadow: '0 18px 48px rgba(13,27,62,0.11)' }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy">
                  {faq.question}
                  <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={18} />
                </summary>
                <p className="mt-4 text-sm leading-6 text-gray">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
