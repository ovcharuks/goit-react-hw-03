import styles from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

const ContactForm = ({onAdd}) => {
  const handleSubmit = (value, actions) => {
    onAdd(value)
    console.log(value);

    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 20 символів")
      .required("Обов'язково до заповнення"),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Обов'язковий формат xxx-xx-xx")
    .required("Обов'язково до заповнення"),
  });

  return (
    <Formik
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      initialValues={{
        // id: nanoid(),
        name: "",
        number: "",
      }}
    >
      {(values) => (
        <Form className={styles.contactForm}>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" render={msg => <div className={styles.error}>{msg}</div>}   />
          </label>
          <label>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number"  render={msg => <div className={styles.error}>{msg}</div>}/>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
