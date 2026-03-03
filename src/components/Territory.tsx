import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaHome,
  FaRunning,
  FaUtensils,
  FaFire,
  FaMedkit,
  FaGamepad,
  FaFutbol,
  FaSwimmingPool,
  FaShower,
  FaBed,
  FaThermometerHalf,
} from 'react-icons/fa';

const facilities = [
  { icon: <FaHome size={22} />, label: '5 жилых корпусов' },
  { icon: <FaRunning size={22} />, label: 'Спортивный зал' },
  { icon: <FaUtensils size={22} />, label: 'Столовая' },
  { icon: <FaFire size={22} />, label: 'Костровая зона' },
  { icon: <FaMedkit size={22} />, label: 'Медицинский корпус' },
  { icon: <FaGamepad size={22} />, label: 'Игровая площадка' },
  { icon: <FaFutbol size={22} />, label: 'Футбольное поле' },
  { icon: <FaSwimmingPool size={22} />, label: 'Открытый бассейн' },
];

const livingConditions = [
  { icon: <FaThermometerHalf size={20} />, text: 'Одноэтажные отапливаемые здания (в холодную погоду)' },
  { icon: <FaHome size={20} />, text: 'В каждом корпусе 6–8 комнат' },
  { icon: <FaBed size={20} />, text: 'Размещение по 5–6 человек в комнате' },
  { icon: <FaShower size={20} />, text: 'В каждой комнате — собственный санузел и душ' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Territory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="territory" className="territory" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Территория <span className="highlight">лагеря</span>
          </h2>
          <p className="section-subtitle">
            База отдыха «Беркутты» расположена возле озера Жукей,
            в 30 км от г. Щучинск. Собственная ограждённая территория
            с системой видеонаблюдения.
          </p>
        </motion.div>

        <div className="territory__content">
          <motion.div
            className="territory__images"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.img
              src="/images/why-1.jpg"
              alt="Территория лагеря"
              className="territory__img territory__img--main"
              style={{ y: imgY }}
            />
            <div className="territory__img-row">
              <motion.img
                src="/images/why-2.jpg"
                alt="Корпуса лагеря"
                className="territory__img territory__img--small"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.img
                src="/images/why-3.jpg"
                alt="Зона отдыха"
                className="territory__img territory__img--small"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </motion.div>

          <div className="territory__info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="territory__block-title">Инфраструктура</h3>
            </motion.div>

            <motion.div
              className="territory__facilities"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {facilities.map((f, i) => (
                <motion.div
                  key={i}
                  className="territory__facility"
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="territory__facility-icon">{f.icon}</div>
                  <span>{f.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="territory__block-title">Условия проживания</h3>
            </motion.div>

            <motion.div
              className="territory__living"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {livingConditions.map((c, i) => (
                <motion.div
                  key={i}
                  className="territory__living-item"
                  variants={itemVariants}
                  whileHover={{ x: 6, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="territory__living-icon">{c.icon}</div>
                  <span>{c.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
