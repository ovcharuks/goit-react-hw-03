import styles from './ContactForm.module.css'
import { useId } from 'react';
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import { ErrorMessage } from "formik";



const ContactForm = ({ onAdd}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
       onAdd({
            id: nanoid(8),
            name: event.target.name.value,
            number: event.target.number.value,
        });
      
        console.log(event.target.name.value);
        console.log(event.target.number.value);
        event.target.reset();
    }
    return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label >Name
        <input type="text" name="name"  />
        </label>
        <label>Number
        <input type="tel" name="number" />
        </label>
        <button type='submit'>Add contact</button>
    </form>)
}

export default ContactForm;