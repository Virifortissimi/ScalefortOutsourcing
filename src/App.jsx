import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyScalefort from './components/WhyScalefort';
import AdditionalSections from './components/AdditionalSections';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyScalefort />
        <AdditionalSections />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
