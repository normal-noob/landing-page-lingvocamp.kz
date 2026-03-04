import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    q: 'Для какого возраста подходит лагерь?',
    a: 'LingvoCamp принимает детей от 7 до 16 лет. Мы распределяем детей по группам с учётом возраста и уровня английского, чтобы каждому было комфортно и интересно.',
  },
  {
    q: 'Какой уровень английского нужен для участия?',
    a: 'Подходит любой уровень — от начинающего до продвинутого. Преподаватели адаптируют программу под каждую группу, а разговорная практика помогает прогрессировать даже тем, кто только начинает.',
  },
  {
    q: 'Где находится лагерь?',
    a: 'Лагерь расположен на базе отдыха «Беркутты» возле озера Жукей, в 30 км от города Щучинск. Собственная ограждённая территория с системой видеонаблюдения.',
  },
  {
    q: 'Как осуществляется трансфер?',
    a: 'В стоимость входит трансфер от вокзала г. Щучинск до лагеря и обратно. Сопровождающий вожатый находится с детьми на протяжении всего пути.',
  },
  {
    q: 'Каковы условия проживания?',
    a: 'Дети размещаются по 5–6 человек в комнате. Одноэтажные отапливаемые корпуса (в холодную погоду). В каждой комнате — собственный санузел и душ. В каждом корпусе 6–8 комнат.',
  },
  {
    q: 'Как поддерживать связь с ребёнком?',
    a: 'Каждый день в Telegram-канал отправляются фото- и видеоотчёты — вы всегда в курсе, чем занимается ваш ребёнок.',
  },
  {
    q: 'Как обеспечивается безопасность?',
    a: 'Территория полностью огорожена с системой видеонаблюдения. На территории находятся: обученная команда вожатых, педагог-ментор на каждом отряде, ночной дежурный педагог, директор лагеря и медицинский работник.',
  },
  {
    q: 'Что входит в стоимость путёвки?',
    a: 'Трансфер (вокзал Щучинск – лагерь – вокзал), 5-разовое питание, полная программа лагеря, фирменная кепка LingvoCamp и ежедневный фото- и видеоотчёт в Telegram-канале.',
  },
  {
    q: 'Возможно ли корпоративное сотрудничество?',
    a: 'Да! Мы предлагаем закуп корпоративного блока мест, индивидуальную квоту на смену и персонализированные условия при групповом размещении. Напишите нам для обсуждения.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`faq__item ${open ? 'faq__item--open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button className="faq__question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <motion.span
          className="faq__chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiChevronDown size={24} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Часто задаваемые <span className="highlight">вопросы</span>
          </h2>
          <p className="section-subtitle">
            Ответы на самые популярные вопросы от родителей
          </p>
        </motion.div>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
