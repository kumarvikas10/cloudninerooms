import React from "react";
import styles from "../Contact-form/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

console.log("Script URL:", scriptURL);

function FormFields({ isModal }) {
  const digitsOnly = (value) => /^\d+$/.test(value);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .required("please_enter_mobile")
      .test("Digits only", "digits_only", digitsOnly)
      .min(10, "please_enter_valid_mobile")
      .max(13, "Maximum number limits"),
    typeofspace: Yup.string()
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    city: Yup.string()
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          typeofspace: "",
          city: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData();

          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          fetch(process.env.REACT_APP_GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors",
          })
            .then(() => {
              toast.success("Thanks for submitting the query!");
              resetForm();
            })
            .catch((err) => {
              console.error(err);
              alert("Error submitting form");
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className={`${styles.formDiv} row mt-0`}>
              <div className={isModal ? "col-12 modal_input" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <Field type="text" name="name" placeholder="Name*" />
                  {errors.name && touched.name ? (
                    <div
                      className={
                        isModal ? "error_message" : styles.requiredItem
                      }
                    >{`Please Enter your Name`}</div>
                  ) : null}
                </div>
              </div>
              <div className={isModal ? "col-12 mt40 modal_input" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <Field type="email" name="email" placeholder="Email*" />
                  {errors.email && touched.email ? (
                    <div
                      className={
                        isModal ? "error_message" : styles.requiredItem
                      }
                    >{`Please Enter your Email`}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={isModal ? "row mt40" : `${styles.formDiv} row`}>
              <div className={isModal ? "col-12 modal_input" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <Field type="tel" name="phone" placeholder="Phone*" />
                  <ErrorMessage name="phone">
                    {(msg) => (
                      <div
                        className={
                          isModal ? "error_message" : styles.requiredItem
                        }
                      >{`Please Enter your Phone`}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className={isModal ? "col-12 mt40 modal_input" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <Field
                    as="select"
                    name="typeofspace"
                    className={styles.selectItem}
                  >
                    <option defaultValue="Type of Space">Type of Space</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Double Sharing">Double Sharing</option>
                    <option value="Triple Sharing">Triple Sharing</option>
                  </Field>
                  <ErrorMessage name="typeofspace">
                    {(msg) => (
                      <div
                        className={
                          isModal ? "error_message" : styles.requiredItem
                        }
                      >{`Please Select your Space`}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div className={isModal ? "row mt40" : `${styles.formDiv} row`}>
              <div className={isModal ? "col-12 modal_input" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <Field as="select" name="city" className={styles.selectItem}>
                    <option defaultValue="Select City">Select City</option>
                    <option value="Gurugram">Gurugram</option>
                  </Field>
                  <ErrorMessage name="city">
                    {(msg) => (
                      <div
                        className={
                          isModal ? "error_message" : styles.requiredItem
                        }
                      >{`Please Select your city`}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className={isModal ? "col-12 mt40 modal_btn" : "col-md-6"}>
                <div
                  className={
                    isModal ? `mt-0 ${styles.formItem}` : styles.formItem
                  }
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.numberBtn} btn btn-primary`}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormFields;
