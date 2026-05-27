import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaDownload,
  FaPercent,
  FaUtensils,
  FaBed,
  FaShieldAlt,
  FaBookOpen,
  FaTrain,
  FaUsers,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';
const PDF_URL = '/letnyaya-programma-2026.pdf';

type Session = {
  num: number;
  theme: string;
  dates: string;
  price: string;
  gold?: boolean;
};

const sessions: Session[] = [
  { num: 1, theme: 'Sport & Health', dates: '3 – 12 июня 2026', price: '240 000 ₸' },
  { num: 2, theme: 'Superheroes University', dates: '13 – 22 июня 2026', price: '260 000 ₸' },
  { num: 3, theme: 'Festival of Nations', dates: '23 июня – 2 июля 2026', price: '289 000 ₸' },
  { num: 4, theme: 'Medieval Order', dates: '3 – 12 июля 2026', price: '289 000 ₸' },
  { num: 5, theme: 'Detective Time', dates: '13 – 22 июля 2026', price: '289 000 ₸' },
  { num: 6, theme: "You're Creative", dates: '23 июля – 1 августа 2026', price: '289 000 ₸' },
  { num: 7, theme: 'Media and Blogging', dates: '2 – 11 августа 2026', price: '260 000 ₸' },
  { num: 8, theme: 'Great Personalities', dates: '12 – 21 августа 2026', price: '240 000 ₸', gold: true },
];

const facts = [
  { value: '2016', label: 'Год основания' },
  { value: '9 000+', label: 'Детей у нас побывало' },
  { value: '8–17', label: 'Возраст детей' },
  { value: '3.5 га', label: 'Территория лагеря' },
];

const features = [
  {
    icon: FaBookOpen,
    title: 'Английский с носителями',
    text: '3 урока по 45 минут каждый день: Grammar, Speaking, Vocabulary',
  },
  {
    icon: FaBed,
    title: 'Уютные домики',
    text: 'Отапливаемые комнаты на 4–6 человек с собственным санузлом и душем',
  },
  {
    icon: FaUtensils,
    title: '5-разовое питание',
    text: 'Завтрак «шведский стол», обед, полдник, ужин, поздний ужин',
  },
  {
    icon: FaShieldAlt,
    title: 'Безопасность 24/7',
    text: 'Охрана, видеонаблюдение, медработник, 1 вожатый на 10 детей',
  },
  {
    icon: FaTrain,
    title: 'Трансфер из Астаны',
    text: '30 минут от вокзала Щучинска до лагеря, электропоездом — удобно и безопасно',
  },
  {
    icon: FaUsers,
    title: '8 тематических смен',
    text: 'От Sport & Health до Great Personalities — каждая смена уникальна',
  },
];

const discounts = [
  { value: '10%', text: 'на первую смену' },
  { value: '10%', text: 'если двое детей из одной семьи' },
];

const fadeIn = {
  initial: { opacity: 0, y: 30, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.2 },
};

export default function Programs() {
  const whatsappText = encodeURIComponent(
    'Здравствуйте! Хочу записать ребёнка на летнюю смену LingvoCamp 2026. Расскажите подробнее, пожалуйста!'
  );

  return (
    <section id="programs" className="programs">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.7 }}>
          <h2 className="section-title">
            Наши <span className="highlight">программы</span>
          </h2>
          <p className="section-subtitle">
            Летние смены 2026 в Боровом — 8 тематических смен по 10 дней с английским языком
          </p>
        </motion.div>

        <motion.div
          className="programs__early-bird"
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <FaPercent size={20} />
          <span>
            <strong>Раннее бронирование!</strong> Скидка 15% при оплате до 1 апреля 2026 г.
          </span>
        </motion.div>

        <motion.div
          className="programs__facts"
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              className="program-fact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <span className="program-fact__value">{f.value}</span>
              <span className="program-fact__label">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 className="programs__sub" {...fadeIn} transition={{ duration: 0.6 }}>
          Смены и стоимость
        </motion.h3>
        <div className="program-sessions">
          {sessions.map((s, i) => (
            <motion.div
              key={s.num}
              className={`session-card${s.gold ? ' session-card--gold' : ''}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
            >
              <div className="session-card__head">
                <span className="session-card__num">
                  {s.gold ? 'GOLD SEASON' : `Смена ${s.num}`}
                </span>
                <span className="session-card__theme">{s.theme}</span>
              </div>
              <div className="session-card__body">
                <span className="session-card__dates">{s.dates}</span>
                <span className="session-card__price">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3 className="programs__sub" {...fadeIn} transition={{ duration: 0.6 }}>
          Что входит в программу
        </motion.h3>
        <div className="program-features">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className="program-feature"
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="program-feature__icon">
                  <Icon size={24} />
                </div>
                <h4 className="program-feature__title">{f.title}</h4>
                <p className="program-feature__text">{f.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="programs__discounts" {...fadeIn} transition={{ duration: 0.6 }}>
          <h3 className="programs__sub programs__sub--inline">Дополнительные скидки</h3>
          <div className="discount-row">
            {discounts.map((d, i) => (
              <motion.div
                key={i}
                className="discount-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="discount-card__value">{d.value}</span>
                <span className="discount-card__text">{d.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="programs__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href={PDF_URL}
            download
            className="btn btn-outline programs__download"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaDownload size={18} />
            Скачать презентацию (PDF)
          </motion.a>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaWhatsapp size={20} />
            Записаться на смену
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
