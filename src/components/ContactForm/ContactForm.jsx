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
      .min(3, "мінімум 3 символи")
      .max(50, "максимум 20 символів")
      .required("обов'язково до заповнення"),
    number: Yup.string().min(7).max(10).matches().required(),
  });

  return (
    <Formik
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      initialValues={{
        id: nanoid(8),
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
