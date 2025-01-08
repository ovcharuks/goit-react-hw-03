import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"


const ContactList = ({contacts, deleteContact})=> {

  return(
    <ul className={styles.contactList}>
       {contacts.map((contact)=> <li key={contact.id}>
        <Contact deleteContact={deleteContact} data={contact}/>
       </li>)}
    </ul>
  )
  
}
export default ContactList;