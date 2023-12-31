import React from "react";
import styles from "../Navbar/Navbar.module.css";
import FormFields from "../form-fields/FormFields";

function ContactFormModal({ modalId, isBanner }) {
  return (
    <>
      <button
        className={
          isBanner
            ? `${styles.visitBtnDark} btn`
            : `${styles.visitBtn} btn btn-outline-primary`
        }
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Book a Visit
      </button>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div
                className="close_btn"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <h2 className="text-center modal_title">
              Book a <span style={{ color: "#fc4102" }}>Visit</span>
            </h2>
            <p className="text-center mb-0" >Flexible, Convenient & Affordable Coliving</p>
            <div className="modal-body">
              <FormFields isModal={true} />
              <div className="modal_contact_details text-center">
                <a href="tel:9991590000">Call : 9991590000</a>
                <a href="mailto:hello@cloudninerooms.com ">
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

export default ContactFormModal;
