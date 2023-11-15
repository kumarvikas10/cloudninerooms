import styles from "./ContactForm.module.css";
import contactImage from "../../data/contact-Image.jpg";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function contactForm() {
  return (
    <>
      <div className="col-md-6">
        <div className={styles.contactImg}>
          <img src={contactImage} alt="contact-form" />
        </div>
      </div>
      <div className="col-md-6">
        <div className={styles.contactFormDiv}>
          <div className={styles.mainHeading}>
            <h2>Connect with Cloud Nine Rooms expert</h2>
            <p>Write down your query to us for quick solution</p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formDiv}>
                      <Field type="text" name="name" placeholder="Name*" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Field type="email" name="email" placeholder="Email*" />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Field type="tel" name="Phone" placeholder="Phone*" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="col-md-6">
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="col-md-6">
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default contactForm;
