import React from "react";
import styles from "../Navbar/Navbar.module.css";
import FormFields from "../form-fields/FormFields";

function ContactFormModal({ modalId }) {
  return (
    <>
      <button
        className={`${styles.visitBtn} btn btn-outline-primary`}
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
              <div className="close_btn">
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
            <div className="modal-body">
              <FormFields isModal={true} />
              <div className="modal_contact_details text-center">
                <a href="tel:9992631999">Call : 99926-31999</a>
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

export default ContactFormModal;
