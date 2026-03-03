import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

export default function Contact() {
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    program: 'spring',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const programNames: Record<string, string> = {
      spring: 'Весенняя смена (21.03 – 29.03)',
      summer: 'Летние смены 2026',
    };

    const text = [
      `Заявка с сайта lingvocamp.kz`,
      ``,
      `Родитель: ${form.parentName}`,
      `Ребёнок: ${form.childName}, ${form.childAge} лет`,
      `Телефон: ${form.phone}`,
      `Программа: ${programNames[form.program] || form.program}`,
      form.message ? `Сообщение: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Запишите ребёнка <span className="highlight">прямо сейчас</span>
          </h2>
          <p className="section-subtitle">
            Заполните форму и мы свяжемся с вами в WhatsApp для подтверждения бронирования
          </p>
        </motion.div>

        <div className="contact__wrapper">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Контактная информация</h3>

            <div className="contact__info-items">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item"
              >
                <FaWhatsapp size={24} className="contact__info-icon contact__info-icon--wa" />
                <div>
                  <span className="contact__info-label">WhatsApp</span>
                  <span className="contact__info-value">+7 778 439 91 62</span>
                </div>
              </a>

              <a href="tel:+77784399162" className="contact__info-item">
                <FaPhone size={22} className="contact__info-icon" />
                <div>
                  <span className="contact__info-label">Телефон</span>
                  <span className="contact__info-value">+7 778 439 91 62</span>
                </div>
              </a>

              <div className="contact__info-item">
                <FaMapMarkerAlt size={22} className="contact__info-icon" />
                <div>
                  <span className="contact__info-label">Локация лагеря</span>
                  <span className="contact__info-value">База «Беркутты», оз. Жукей, 30 км от Щучинска</span>
                </div>
              </div>
            </div>

            <div className="contact__info-hours">
              <p>Время работы поддержки:</p>
              <p><strong>Пн — Вс, 9:00 — 21:00</strong></p>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="contact__form-success">
                <div className="contact__form-success-icon">✅</div>
                <h3>Заявка отправлена!</h3>
                <p>Переходите в WhatsApp для завершения бронирования. Мы ответим в течение часа.</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__label">Имя родителя</label>
                    <input
                      type="text"
                      className="contact__input"
                      placeholder="Ваше имя"
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label className="contact__label">Имя ребёнка</label>
                    <input
                      type="text"
                      className="contact__input"
                      placeholder="Имя ребёнка"
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__label">Возраст ребёнка</label>
                    <input
                      type="number"
                      className="contact__input"
                      placeholder="Возраст"
                      min="7"
                      max="16"
                      value={form.childAge}
                      onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label className="contact__label">Телефон</label>
                    <input
                      type="tel"
                      className="contact__input"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label className="contact__label">Программа</label>
                  <select
                    className="contact__input contact__select"
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                  >
                    <option value="spring">Весенняя смена (21.03 – 29.03)</option>
                    <option value="summer">Летние смены 2026</option>
                  </select>
                </div>

                <div className="contact__form-group">
                  <label className="contact__label">Сообщение (необязательно)</label>
                  <textarea
                    className="contact__input contact__textarea"
                    placeholder="Дополнительные вопросы или пожелания..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-whatsapp contact__submit">
                  <FaWhatsapp size={22} />
                  Отправить заявку через WhatsApp
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
