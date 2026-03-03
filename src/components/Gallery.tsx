import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const photos = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `LingvoCamp — фото ${i + 1}`,
}));

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const goPrev = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  const goNext = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % photos.length : null));

  return (
    <section id="gallery" className="gallery" ref={containerRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Моменты из <span className="highlight">LingvoCamp</span>
          </h2>
          <p className="section-subtitle">
            Яркие эмоции, новые друзья и незабываемые приключения — загляните в нашу жизнь
          </p>
        </motion.div>
      </div>

      <div className="gallery__scroll-wrapper">
        <motion.div
          className="gallery__scroll-track"
          ref={scrollRef}
          style={{ x }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="gallery__scroll-item"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, zIndex: 2 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery__scroll-img"
                loading="lazy"
              />
              <div className="gallery__scroll-overlay" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="gallery__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {photos.slice(0, 8).map((photo, i) => (
            <motion.div
              key={i}
              className="gallery__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__hover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <motion.button
              className="lightbox__close"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <HiX size={32} />
            </motion.button>
            <motion.button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              whileHover={{ scale: 1.15, x: -4 }}
            >
              <HiChevronLeft size={40} />
            </motion.button>
            <motion.img
              key={lightbox}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="lightbox__img"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              whileHover={{ scale: 1.15, x: 4 }}
            >
              <HiChevronRight size={40} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
