import styles from "./ContactForm.module.css";
import contactImage from "../../data/contact-Image.jpg";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const digitsOnly = (value) => /^\d+$/.test(value);

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("please_enter_mobile")
    .test("Digits only", "digits_only", digitsOnly)
    .min(10, "please_enter_valid_mobile")
    .max(15, "Maximum number limits"),
  typeofspace: Yup.string()
    .min(5, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(5, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
});

function contactForm() {
  return (
    <>
      <div className="col-md-6 mob_hide">
        <div className={styles.contactImg}>
          <img src={contactImage} alt="contact-form" />
        </div>
      </div>
      <div className={`${styles.contactFormContainer} col-md-6`}>
        <div className={styles.contactFormDiv}>
          <div className={styles.mainHeading}>
            <h2>
              Connect with{" "}
              <span style={{ color: "#fc4102" }}>Cloud Nine Rooms</span> expert
            </h2>
            <p className="mob_hide">
              Write down your query to us for quick solution
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              typeofspace: "",
              city: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className={`${styles.formDiv} row`}>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <Field type="text" name="name" placeholder="Name*" />
                      {errors.name && touched.name ? (
                        <div
                          className={styles.requiredItem}
                        >{`Please Enter your Name`}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <Field type="email" name="email" placeholder="Email*" />
                      {errors.email && touched.email ? (
                        <div
                          className={styles.requiredItem}
                        >{`Please Enter your Email`}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={`${styles.formDiv} row`}>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <Field type="tel" name="phone" placeholder="Phone*" />
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <div
                            className={styles.requiredItem}
                          >{`Please Enter your Phone`}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <Field
                        as="select"
                        name="typeofspace"
                        className={styles.selectItem}
                      >
                        <option value="" selected disabled>
                          Type of Space
                        </option>
                        <option value="Private Room">Private Room</option>
                        <option value="Double Sharing">Double Sharing</option>
                        <option value="Triple Sharing">Triple Sharing</option>
                      </Field>
                      <ErrorMessage name="typeofspace">
                        {(msg) => (
                          <div
                            className={styles.requiredItem}
                          >{`Please Select your Space`}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className={`${styles.formDiv} row`}>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <Field
                        as="select"
                        name="city"
                        className={styles.selectItem}
                      >
                        <option value="" selected disabled>
                          Select City
                        </option>
                        <option value="Gurugram">Gurugram</option>
                      </Field>
                      <ErrorMessage name="city">
                        {(msg) => (
                          <div
                            className={styles.requiredItem}
                          >{`Please Select your city`}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formItem}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${styles.numberBtn} btn btn-primary`}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className={`${styles.contactDetails} row`}>
            <div className="col-md-12">
              <div className={styles.Details}>
                <a href="tel:9999998992">Call : 9999-998-992</a>
              </div>
              <div className={styles.Details}>
                <a href="mailto:support@cloud9rooms.com">
                  Email : support@cloud9rooms.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contactForm;
