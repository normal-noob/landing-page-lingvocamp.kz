import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '77784399162';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Здравствуйте! Хочу узнать подробнее о LingvoCamp.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Написать в WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="wa-float__tooltip">Напишите нам!</span>
    </motion.a>
  );
}
