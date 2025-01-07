import Contact from "../Contact/Contact"


const ContactList = ({contacts, deleteContact})=> {

  return(
    <ul>
       {contacts.map((contact)=> <li key={contact.id}>
        <Contact deleteContact={deleteContact} data={contact}/>
       </li>)}
    </ul>
  )
  
}
export default ContactList;