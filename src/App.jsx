import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyScalefort from './components/WhyScalefort';
import AdditionalSections from './components/AdditionalSections';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const contactTemplates = {
  sales: {
    role: 'Sales Development & Growth Team',
    message:
      'Hello Scalefort, I am interested in outsourcing sales talent for lead generation, outreach, follow-ups and pipeline growth. Please share the best setup for my company.',
  },
  support: {
    role: 'Customer & Technical Support Team',
    message:
      'Hello Scalefort, I am interested in outsourcing support talent to help with customer questions, tickets, follow-ups and reliable service coverage. Please share the best setup for my company.',
  },
  engineering: {
    role: 'Software Engineering Team',
    message:
      'Hello Scalefort, I am interested in outsourcing engineering talent to help build, maintain or improve our digital products. Please share the best setup for my company.',
  },
  data: {
    role: 'Data & Analytics Team',
    message:
      'Hello Scalefort, I am interested in outsourcing data talent for reporting, dashboards, data cleanup and business insights. Please share the best setup for my company.',
  },
  cloud: {
    role: 'Cloud & DevOps Team',
    message:
      'Hello Scalefort, I am interested in outsourcing cloud and DevOps talent for infrastructure, deployment, automation and reliability support. Please share the best setup for my company.',
  },
  product: {
    role: 'Product, UI/UX & Digital Team',
    message:
      'Hello Scalefort, I am interested in outsourcing product and UI/UX talent to support design, product coordination and digital delivery. Please share the best setup for my company.',
  },
  general: {
    role: 'Outsourced Talent Team',
    message:
      'Hello Scalefort, I am interested in outsourcing talent for my company. Please help me understand the best roles, team structure and next steps.',
  },
  consultation: {
    role: 'Talent Outsourcing Consultation',
    message:
      'Hello Scalefort, I would like to explore the right outsourced talent options for my company. Please help me review the best fit across sales, support, engineering, data, cloud and product.',
  },
};

export default function App() {
  const [contactPrefill, setContactPrefill] = useState({
    requestedRole: '',
    message: '',
  });

  const handleContactPrefill = (templateKey) => {
    const template = contactTemplates[templateKey] || contactTemplates.general;

    setContactPrefill({
      requestedRole: template.role,
      message: template.message,
    });

    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero onContactPrefill={handleContactPrefill} />
        <Services onContactPrefill={handleContactPrefill} />
        <WhyScalefort />
        <AdditionalSections />
        <CallToAction prefill={contactPrefill} onPrefillChange={setContactPrefill} />
      </main>
      <Footer />
    </>
  );
}
