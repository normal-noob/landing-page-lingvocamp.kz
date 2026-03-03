import { FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src="/images/logo.png" alt="LingvoCamp" className="footer__logo-img" />
            </a>
            <p className="footer__desc">
              Круглогодичный детский лагерь с 2017 года. Английский с носителями языка,
              активный отдых и развитие личности ребёнка. База «Беркутты», Боровое.
            </p>
            <div className="footer__socials">
              <a
                href="https://www.instagram.com/lingvocamp"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social footer__social--wa"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Навигация</h4>
            <a href="#about">О нас</a>
            <a href="#territory">Территория</a>
            <a href="#programs">Программы</a>
            <a href="#gallery">Галерея</a>
            <a href="#corporate">Для компаний</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Контакты</a>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Программы</h4>
            <a href="#programs">Весенняя смена</a>
            <a href="#programs">Летние смены 2026</a>
            <a href="#corporate">Корпоративное сотрудничество</a>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Контакты</h4>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              WhatsApp: +7 778 439 91 62
            </a>
            <a href="tel:+77784399162">Тел: +7 778 439 91 62</a>
            <span>База «Беркутты», оз. Жукей</span>
            <span>30 км от Щучинска</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} LingvoCamp. Все права защищены.
          </p>
          <p className="footer__made">
            Сделано с <FaHeart size={12} className="footer__heart" /> в Казахстане
          </p>
        </div>
      </div>
    </footer>
  );
}
