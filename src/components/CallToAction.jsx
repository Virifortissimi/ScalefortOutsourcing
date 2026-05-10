import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Mail, Phone } from 'lucide-react';

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/forms/outsourcing-contact';

export default function CallToAction({ prefill, onPrefillChange }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;

    const timeout = window.setTimeout(() => {
      setToast(null);
    }, 5200);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      requestedRole: formData.get('requestedRole')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
      companyWebsite: formData.get('companyWebsite')?.toString().trim(),
    };

    setIsSubmitting(true);
    setToast(null);
    form.reset();
    onPrefillChange({
      requestedRole: '',
      message: '',
    });

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your message. Please try again.');
      }

      setToast({
        type: 'success',
        message: result.message || 'Message sent. We will reach out shortly.',
      });
    } catch (error) {
      setToast({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div
          className={`fixed right-4 top-24 z-[80] max-w-[calc(100vw-2rem)] rounded-xl px-4 py-3 text-sm font-semibold shadow-2xl sm:max-w-sm ${
            toast.type === 'success'
              ? 'bg-navy text-white'
              : 'bg-red-50 text-red-700 ring-1 ring-red-100'
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}

      <section
        id="contact"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
      <div className="brand-dot-grid absolute bottom-16 right-10 h-32 w-32 opacity-35" />

      <div className="template-shell relative z-10">
        <div className="mx-auto mb-10 h-16 max-w-4xl rounded-2xl bg-cream">
          <div className="-translate-y-4 translate-x-6 accent-square" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <span className="section-kicker mb-4">Our Services Work</span>
            <h2 className="section-title">
              Ready to{' '}
              <span
                className="inline-block text-yellow"
                style={{
                  fontFamily: 'Georgia, Cambria, serif',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: '1.18em',
                  lineHeight: 0.9,
                  letterSpacing: 0,
                }}
              >
                scale
              </span>{' '}
              your <span className="text-yellow">tech team?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray">
              Tell us the skills, roles or outcomes your Nigerian company needs. We'll help you build the right outsourced tech team.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="https://outsourcing.scalefort.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-navy no-underline"
              >
                <Globe size={19} color="var(--color-yellow)" />
                outsourcing.scalefort.org
              </a>
              <a
                href="mailto:outsourcing@scalefort.org"
                className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-navy no-underline"
              >
                <Mail size={19} color="var(--color-yellow)" />
                outsourcing@scalefort.org
              </a>
            </div>
          </div>

          <motion.form
            className="relative rounded-[22px] bg-navy p-5 shadow-[0_24px_64px_rgba(13,27,62,0.2)] md:p-7 lg:col-span-3"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.12 }}
            whileHover={{ y: -6, boxShadow: '0 30px 78px rgba(13,27,62,0.28)' }}
            onSubmit={handleSubmit}
          >
            <div className="mb-5 flex flex-col gap-3 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">Let's Collaborate <span className="text-yellow">With Us</span></h3>
                <p className="mt-1 text-sm text-white/68">Share what your company needs and we will start the conversation.</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                <Phone size={17} color="var(--color-yellow)" />
                Flexible setup
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input name="name" className="rounded-lg border-0 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-yellow" placeholder="Your Name" required />
              <input name="email" className="rounded-lg border-0 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-yellow" placeholder="Your Email" type="email" required />
              <input
                name="requestedRole"
                className="rounded-lg border-0 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-yellow md:col-span-2"
                placeholder="Role or team you need"
                required
                value={prefill.requestedRole}
                onChange={(event) => onPrefillChange({ ...prefill, requestedRole: event.target.value })}
              />
              <textarea
                name="message"
                className="min-h-32 rounded-lg border-0 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-yellow md:col-span-2"
                placeholder="Message"
                required
                value={prefill.message}
                onChange={(event) => onPrefillChange({ ...prefill, message: event.target.value })}
              />
            </div>

            <button className="brand-button mt-4 w-full bg-white px-6 py-3 text-sm text-navy hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
            </button>
          </motion.form>
        </motion.div>
      </div>
      </section>
    </>
  );
}
