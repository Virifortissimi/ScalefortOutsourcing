import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Roles', href: '#roles' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav id="navbar" aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`template-shell rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/94 backdrop-blur-xl shadow-[0_16px_44px_rgba(13,27,62,0.12)]'
            : 'bg-white/90 backdrop-blur-md shadow-[0_10px_34px_rgba(13,27,62,0.08)]'
        }`}
        style={{ height: 66 }}
      >
      <div className="h-full flex items-center justify-between">
        <a href="#" className="flex h-full max-w-[220px] items-center no-underline sm:max-w-[260px]" aria-label="Scalefort Outsourcing home">
          <img
            src="https://res.cloudinary.com/virifortissimi/image/upload/e_trim,w_360/v1777460908/scalefortoutsourcing/logo-colored.png"
            alt="Scalefort Outsourcing"
            className="block h-12 max-h-[54px] w-auto max-w-full object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[0.9rem] font-medium text-navy hover:text-yellow transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:outsourcing@scalefort.org"
            className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-gray no-underline hover:text-navy"
          >
            <Mail size={15} />
            outsourcing@scalefort.org
          </a>
          <a
            href="#services"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-cream"
            aria-label="Explore services"
          >
            <Search size={17} />
          </a>
          <a
            href="#contact"
            className="brand-button brand-button-primary px-5 py-2.5 text-[0.88rem]"
            style={{
              minHeight: 42,
            }}
          >
            Let's Talk <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-navy rounded-full bg-white/70 border border-navy/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[82px] left-3 right-3 rounded-2xl bg-white shadow-xl border border-navy/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-base font-medium text-navy hover:text-yellow transition-colors no-underline py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="brand-button brand-button-primary text-center text-base px-6 py-3"
              >
                Let's Talk <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
