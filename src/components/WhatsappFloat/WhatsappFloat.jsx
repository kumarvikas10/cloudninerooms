import styles from "./WhatsappFloat.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919991590000"
      className={styles.float}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}