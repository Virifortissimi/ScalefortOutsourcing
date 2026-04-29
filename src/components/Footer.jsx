const footerLinks = [
  {
    title: 'Services',
    links: [
      ['Engineering Talent', '#services'],
      ['Product & Design Talent', '#services'],
      ['Cloud, Data & Tech Ops', '#services'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Why Scalefort', '#why-us'],
      ['Contact Us', '#contact'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['outsourcing.scalefort.org', 'https://outsourcing.scalefort.org'],
      ['outsourcing@scalefort.org', 'mailto:outsourcing@scalefort.org'],
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-white px-3 pb-3 text-white">
      <div className="template-shell relative overflow-hidden rounded-[22px] bg-navy py-14">
        <div className="brand-dot-grid absolute right-9 top-8 h-32 w-32 opacity-25" />
        <div className="absolute right-5 top-[-18px] accent-square" />
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#hero" className="mb-5 inline-flex max-w-[280px] no-underline" aria-label="Scalefort Outsourcing home">
              <img
                src="https://res.cloudinary.com/virifortissimi/image/upload/e_trim,w_420/v1777460962/scalefortoutsourcing/logo-white.png"
                alt="Scalefort Outsourcing"
                className="block h-16 max-h-[72px] w-auto max-w-full object-contain"
              />
            </a>
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.66)',
                lineHeight: 1.7,
              }}
            >
              Your Goals. Our Expertise.
              <br />
              Stronger Together.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="mb-4"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--color-yellow)',
                  letterSpacing: '0.05em',
                }}
              >
                {group.title}
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="no-underline transition-colors duration-200 hover:text-yellow"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.66)',
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-10 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            &copy; 2025 Scalefort Outsourcing. All rights reserved.
          </p>
          <a
            href="#hero"
            className="no-underline text-sm font-semibold hover:text-yellow transition-colors"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Back to top
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
