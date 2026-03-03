import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Territory from './components/Territory';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Corporate from './components/Corporate';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider section-divider--flip" />
        <Territory />
        <div className="section-divider" />
        <Programs />
        <Gallery />
        <div className="section-divider section-divider--flip" />
        <WhyUs />
        <div className="section-divider" />
        <Corporate />
        <FAQ />
        <div className="section-divider section-divider--flip" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </motion.div>
  );
}
