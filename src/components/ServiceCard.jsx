import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  icon: Icon,
  serviceLabel,
  title,
  quote,
  description,
  benefits,
  badges,
  ctaText,
  ctaHref,
  templateKey,
  onContactPrefill,
}) {
  const handleCtaClick = (event) => {
    if (!onContactPrefill || !templateKey) return;

    event.preventDefault();
    onContactPrefill(templateKey);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="group template-card relative cursor-default overflow-hidden rounded-[22px] p-7 transition-all duration-200 md:p-8"
      style={{
        borderTop: '4px solid var(--color-yellow)',
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 12px 40px rgba(13,27,62,0.14)',
      }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-yellow/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
          style={{
            width: 46,
            height: 46,
            background: 'var(--color-cream)',
          }}
        >
          <Icon size={23} color="var(--color-navy)" />
        </div>
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">{serviceLabel}</span>
      </div>

      <h3
        className="mt-6"
        style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 700,
          fontSize: '1.45rem',
          color: 'var(--color-navy)',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <div
        className="mt-4 inline-block"
        style={{
          background: 'var(--color-navy)',
          color: 'var(--color-white)',
          borderRadius: '14px 14px 14px 0',
          padding: '10px 16px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 500,
          fontSize: '0.84rem',
          maxWidth: 260,
        }}
      >
        {quote}
      </div>

      <p
        className="mt-5 mb-6"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '0.96rem',
          color: 'var(--color-gray)',
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>

      <div className="mb-6 grid grid-cols-1 gap-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-3 items-start">
            <div
              className="flex items-center justify-center rounded-lg flex-shrink-0"
              style={{
                width: 34,
                height: 34,
                background: 'rgba(13,27,62,0.06)',
              }}
            >
              <benefit.icon size={17} color="var(--color-navy)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--color-navy)',
                  marginBottom: 3,
                }}
              >
                {benefit.title}
              </div>
              <div
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.84rem',
                  color: 'var(--color-gray)',
                  lineHeight: 1.55,
                }}
              >
                {benefit.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-7">
        {badges.map((badge) => (
          <span
            key={badge}
            className="inline-flex rounded-md border"
            style={{
              background: 'var(--color-cream)',
              borderColor: 'rgba(13,27,62,0.08)',
              color: 'var(--color-navy)',
              padding: '5px 10px',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.78rem',
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      <a
        href={ctaHref || '#contact'}
        onClick={handleCtaClick}
        className="brand-button brand-button-primary px-6 py-3 text-[0.9rem]"
      >
        {ctaText} <ArrowRight size={17} />
      </a>
    </motion.div>
  );
}
