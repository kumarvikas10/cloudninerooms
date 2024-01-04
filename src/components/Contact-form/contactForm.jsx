import styles from "./ContactForm.module.css";
import contactImage from "../../data/contact-Image.jpg";
import React from "react";
import FormFields from "../form-fields/FormFields";

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
          <FormFields isModal={false} />
          <div className={`${styles.contactDetails} row`}>
            <div className="col-md-12">
              <div className={styles.Details}>
                <a href="tel:9991590000">Call : 9991590000</a>
              </div>
              <div className={styles.Details}>
                <a href="mailto:hello@cloudninerooms.com">
                  Email : hello@cloudninerooms.com
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
