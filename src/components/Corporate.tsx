import { motion } from 'framer-motion';
import { FaWhatsapp, FaBuilding, FaUsers, FaHandshake } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

const offers = [
  {
    icon: <FaBuilding size={28} />,
    title: 'Корпоративный блок мест',
    text: 'Закупите блок мест для детей сотрудников компании по выгодным условиям.',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Индивидуальная квота на смену',
    text: 'Зарезервируйте определённое количество мест на конкретную смену.',
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Персонализированные условия',
    text: 'Индивидуальные условия при групповом размещении. Готовы обсудить любые варианты.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Corporate() {
  return (
    <section id="corporate" className="corporate">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Корпоративное <span className="highlight">сотрудничество</span>
          </h2>
          <p className="section-subtitle">
            Мы предлагаем корпоративное сотрудничество для приобретения путёвок
            для детей сотрудников компании
          </p>
        </motion.div>

        <motion.div
          className="corporate__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              className="corporate__card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15)',
                borderColor: 'rgba(167, 139, 250, 0.5)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="corporate__card-icon"
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {offer.icon}
              </motion.div>
              <h3 className="corporate__card-title">{offer.title}</h3>
              <p className="corporate__card-text">{offer.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="corporate__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="corporate__cta-text">
            Готовы обсудить индивидуальные условия сотрудничества
          </p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Здравствуйте! Интересует корпоративное сотрудничество по закупке путёвок в LingvoCamp для детей сотрудников нашей компании.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn--lg"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaWhatsapp size={22} />
            Обсудить сотрудничество
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
