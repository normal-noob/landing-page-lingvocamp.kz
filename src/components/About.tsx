import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaShieldAlt,
  FaUsers,
  FaUserTie,
  FaMedkit,
  FaMoon,
  FaChalkboardTeacher,
} from 'react-icons/fa';

const team = [
  {
    icon: <FaUsers size={26} />,
    title: 'Обученная команда вожатых',
  },
  {
    icon: <FaChalkboardTeacher size={26} />,
    title: 'Педагог-ментор на каждом отряде',
  },
  {
    icon: <FaMoon size={26} />,
    title: 'Ночной дежурный педагог',
  },
  {
    icon: <FaUserTie size={26} />,
    title: 'Директор лагеря на территории',
  },
  {
    icon: <FaMedkit size={26} />,
    title: 'Медицинский работник',
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: 'Безопасность и видеонаблюдение 24/7',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
  show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            О <span className="highlight">LingvoCamp</span>
          </h2>
          <p className="section-subtitle">
            Круглогодичный детский лагерь с выстроенной системой управления,
            безопасностью 24/7 и акцентом на развитие личности ребёнка
          </p>
        </motion.div>

        <div className="about__grid-wrapper">
          <motion.div
            className="about__image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div className="about__image-stack" style={{ y: imgY }}>
              <img src="/images/about-1.jpg" alt="Дети в LingvoCamp" className="about__img about__img--main" />
              <img src="/images/about-2.jpg" alt="Активности в лагере" className="about__img about__img--overlay" />
            </motion.div>
          </motion.div>

          <div className="about__right-col">
            <motion.div
              className="about__text-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="about__description">
                С <strong>2017 года</strong> мы создаём лагеря, где объединяем живое общение,
                культуру и атмосферу поддержки, чтобы каждый ребёнок почувствовал
                уверенность в себе и свою значимость.
              </p>
              <p className="about__description">
                Наша задача — не просто занять детей на каникулы, а подарить им
                опыт и эмоции, которые останутся с ними на годы.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="about__subtitle">Коллектив лагеря</h3>
            </motion.div>

            <motion.div
              className="about__team-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  className="about__team-item"
                  variants={itemVariants}
                  whileHover={{ x: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="about__team-icon">{member.icon}</div>
                  <span className="about__team-title">{member.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
