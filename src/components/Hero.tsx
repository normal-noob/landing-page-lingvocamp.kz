import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowDown, FaCalendarAlt, FaShieldAlt, FaUtensils } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

const images = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.78, 0.95]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            className="hero__bg-img"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </motion.div>
      <motion.div className="hero__overlay" style={{ opacity: overlayOpacity }} />

      <motion.div
        className="container hero__content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          🏕️ Детский лагерь в Боровое, Казахстан
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Каникулы, которые <br />
          <span className="hero__title-accent">изменят жизнь</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          С 2017 года мы создаём лагеря, где объединяем живое общение, культуру
          и атмосферу поддержки, чтобы каждый ребёнок почувствовал уверенность
          в себе и свою значимость.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Здравствуйте! Хочу забронировать место в LingvoCamp.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn--lg"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaWhatsapp size={22} />
            Забронировать место
          </motion.a>
          <motion.a
            href="#programs"
            className="btn btn-outline btn--lg hero__btn-outline"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Смотреть программы
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { icon: <FaCalendarAlt size={18} />, num: 'с 2017', label: 'года работаем' },
            { icon: <FaShieldAlt size={18} />, num: '24/7', label: 'безопасность' },
            { icon: <FaUtensils size={18} />, num: '5-разовое', label: 'питание' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
            >
              <span className="hero__stat-icon">{stat.icon}</span>
              <div className="hero__stat-text">
                <span className="hero__stat-number">{stat.num}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <FaArrowDown className="hero__scroll-icon" />
      </motion.a>
    </section>
  );
}
