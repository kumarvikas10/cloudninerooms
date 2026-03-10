import React from "react";
import styles from "../Navbar/Navbar.module.css";
import FormFields from "../form-fields/FormFields";

function ContactFormModal({
  modalId,
  isBanner,
  buttonText = "Book a Visit",
  title = "Book a Visit",
  subtitle = "Flexible, Convenient & Affordable Coliving",
  variant = "default",
}) {
  const buttonClass =
    variant === "overlay"
      ? "overlayBtn"
      : isBanner
        ? `${styles.visitBtnDark} btn`
        : `${styles.visitBtn} btn btn-outline-primary`;

  return (
    <>
      <button
        className={buttonClass}
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        {buttonText}
      </button>

      <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <h2 className="text-center modal_title">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: "#fc4102" }}>
                {title.split(" ").slice(-1)}
              </span>
            </h2>

            <p className="text-center mb-0">{subtitle}</p>

            <div className="modal-body">
              <FormFields isModal={true} />

              <div className="modal_contact_details text-center">
                <a href="tel:9991590000">Call : 9991590000</a>
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

export default ContactFormModal;
