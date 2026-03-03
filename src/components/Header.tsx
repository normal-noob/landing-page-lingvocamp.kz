import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Территория', href: '#territory' },
  { label: 'Программы', href: '#programs' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Для компаний', href: '#corporate' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

const WHATSAPP_NUMBER = '77784399162';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <img src="/images/logo.png" alt="LingvoCamp" className="header__logo-img" />
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href="https://www.instagram.com/lingvocamp"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Здравствуйте! Хочу узнать подробнее о LingvoCamp.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header__cta"
          >
            <FaWhatsapp size={18} />
            <span>Записаться</span>
          </a>
        </div>

        <button
          className="header__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="header__mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="header__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="header__mobile-actions">
              <a
                href="https://www.instagram.com/lingvocamp"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-social"
              >
                <FaInstagram size={22} /> Instagram
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Здравствуйте! Хочу узнать подробнее о LingvoCamp.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <FaWhatsapp size={20} /> Записаться через WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
