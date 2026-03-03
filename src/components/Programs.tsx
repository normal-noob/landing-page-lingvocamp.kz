import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaPercent } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

const springProgram = {
  title: 'Весенняя смена',
  dates: '21.03 – 29.03.2026',
  duration: '9 дней / 8 ночей',
  image: '/images/program-spring.jpg',
  badge: 'Ближайшая смена',
  badgeColor: '#ef4444',
  activities: [
    '🇬🇧 Английский язык с носителями языка и местными преподавателями',
    '🎤 Singing Club — разговорная практика через песни',
    '🌷 Празднование Наурыза (национальный стол, плов на костре, baursak party)',
    '🇰🇿 Национальные казахские игры',
    '🐏 Сухое валяние из шерсти игрушек и брелков',
    '🐎 Катание на лошадях',
    '🍿 Киновечер на английском языке',
    '🎨 Творческие мастер-классы',
    '🍕 Кулинарный мастер-класс',
    '💃 Тематические вечера и дискотеки',
    '🍡 Маршмеллоу на костре + горячий шоколад',
    '🔥 Песни у костра',
    '🕺 Вожатская программа',
    '🚌 Экскурсия в Боровое',
    '🕵️‍♀️ Квестология — командные игры и квесты',
  ],
  includes: [
    '🚝 Трансфер: вокзал г. Щучинск – лагерь – вокзал',
    '🥘 5-разовое питание',
    '🏘 Проживание',
    '🥗 Завтраки в формате «шведский стол»',
  ],
};

const summerProgram = {
  title: 'Летние смены 2026',
  dates: 'Июнь — Август 2026',
  duration: 'Несколько смен',
  image: '/images/program-summer.jpg',
  badge: 'Скидка 15% до 01.04',
  badgeColor: '#f59e0b',
  activities: [
    '🇬🇧 Английский 3 ак. часа в день с носителями языка',
    '🎭 Ежедневная развлекательная программа от вожатых',
    '🤝 Тренинги на сплочение команды',
    '🎨 Кулинарные и творческие мастер-классы',
    '🎤 Вечерние мероприятия с выступлениями детей',
    '💼 Бизнес-игра',
    '🎥 Киновечер',
    '🚌 Экскурсия в Боровое',
    '🏊‍♂️ Бассейн (по погоде)',
    '🫧 Пенная вечеринка',
    '🎨 Фестиваль красок Холи',
    '🏇 Катание на лошадях',
    '🪁 Фестиваль воздушных змеев',
    '🔥 Вечер у костра с маршмеллоу',
    '🎆 Завершающий салют смены',
  ],
  includes: [
    '🚝 Трансфер: вокзал г. Щучинск – лагерь – вокзал',
    '🍽️ 5-разовое питание',
    '🎯 Полная программа лагеря',
    '🧢 Фирменная кепка LingvoCamp',
    '📸 Ежедневный фото- и видеоотчёт в Telegram-канале',
  ],
};

function ProgramCard({
  program,
  index,
}: {
  program: typeof summerProgram;
  index: number;
}) {
  const whatsappText = encodeURIComponent(
    `Здравствуйте! Хочу записать ребёнка на "${program.title}" (${program.dates}). Расскажите подробнее, пожалуйста!`
  );

  return (
    <motion.div
      className="program-card"
      initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
    >
      <div className="program-card__image-wrap">
        <motion.img
          src={program.image}
          alt={program.title}
          className="program-card__image"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.span
          className="program-card__badge"
          style={{ background: program.badgeColor }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 + index * 0.2 }}
        >
          {program.badge}
        </motion.span>
      </div>

      <div className="program-card__body">
        <h3 className="program-card__title">{program.title}</h3>

        <div className="program-card__meta">
          <span className="program-card__meta-item">
            <FaCalendarAlt size={14} /> {program.dates}
          </span>
          <span className="program-card__meta-item">{program.duration}</span>
        </div>

        <div className="program-card__section">
          <h4 className="program-card__section-title">Программа</h4>
          <ul className="program-card__list">
            {program.activities.map((a, i) => (
              <li key={i} className="program-card__list-item">{a}</li>
            ))}
          </ul>
        </div>

        <div className="program-card__section">
          <h4 className="program-card__section-title">В стоимость входит</h4>
          <ul className="program-card__list program-card__list--includes">
            {program.includes.map((item, i) => (
              <li key={i} className="program-card__list-item">{item}</li>
            ))}
          </ul>
        </div>

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp program-card__cta"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <FaWhatsapp size={20} />
          Записаться
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Наши <span className="highlight">программы</span>
          </h2>
          <p className="section-subtitle">
            Выберите подходящую смену и подарите ребёнку незабываемые каникулы
          </p>
        </motion.div>

        <motion.div
          className="programs__early-bird"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <FaPercent size={20} />
          <span>
            <strong>Раннее бронирование на лето!</strong> Скидка 15% при оплате до 1 апреля 2026 г.
          </span>
        </motion.div>

        <div className="programs__grid">
          <ProgramCard program={springProgram as typeof summerProgram} index={0} />
          <ProgramCard program={summerProgram} index={1} />
        </div>
      </div>
    </section>
  );
}
