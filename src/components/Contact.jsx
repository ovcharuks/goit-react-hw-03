import styles from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
const Contact = ({data}) => {
  
  return (
    <div className={styles.contact}>
      <ul className={styles.contactList}>
        <li>
          <p>
            <FaUserAlt /> {data.name}
          </p>
        </li>
        <li>
          <p>
            <FaPhoneFlip /> {data.number}
          </p>
        </li>
      </ul>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
