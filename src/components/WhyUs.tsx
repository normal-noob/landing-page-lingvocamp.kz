import { motion } from 'framer-motion';
import {
  FaLanguage,
  FaMountain,
  FaTheaterMasks,
  FaHorse,
  FaSwimmer,
  FaCampground,
} from 'react-icons/fa';

const reasons = [
  {
    icon: <FaLanguage size={32} />,
    title: 'Английский с носителями языка',
    text: '3 академических часа в день. Singing Club, киновечера на английском и живое общение помогают ребёнку прогрессировать быстро и с удовольствием.',
  },
  {
    icon: <FaMountain size={32} />,
    title: 'Озеро Жукей, Боровое',
    text: 'База «Беркутты» в 30 км от Щучинска — живописная природа, чистый воздух, сосновые леса и озёра. Идеальная среда для отдыха и учёбы.',
  },
  {
    icon: <FaTheaterMasks size={32} />,
    title: 'Насыщенная программа',
    text: 'Бизнес-игры, тренинги на сплочение, кулинарные и творческие мастер-классы, вечерние шоу — ребёнок не захочет сидеть в телефоне.',
  },
  {
    icon: <FaHorse size={32} />,
    title: 'Уникальные активности',
    text: 'Катание на лошадях, фестиваль красок Холи, пенная вечеринка, фестиваль воздушных змеев и завершающий салют смены.',
  },
  {
    icon: <FaSwimmer size={32} />,
    title: 'Спорт и здоровье',
    text: 'Открытый бассейн, спортивный зал, футбольное поле, игровая площадка и спортивные эстафеты на свежем воздухе.',
  },
  {
    icon: <FaCampground size={32} />,
    title: 'Комфорт и безопасность',
    text: 'Ограждённая территория с видеонаблюдением, медработник, ночной дежурный педагог, директор на территории. Фотоотчёты каждый день.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function WhyUs() {
  return (
    <section id="why" className="why">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Почему <span className="highlight">LingvoCamp</span>?
          </h2>
          <p className="section-subtitle">
            Мы не просто занимаем детей на каникулы — мы дарим им опыт и эмоции, которые останутся на годы
          </p>
        </motion.div>

        <motion.div
          className="why__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="why__card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(26, 107, 60, 0.12)',
                borderColor: 'rgba(45, 154, 87, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="why__card-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {r.icon}
              </motion.div>
              <h3 className="why__card-title">{r.title}</h3>
              <p className="why__card-text">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
