import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../data/logo.png";
import React, { useState, useEffect, useRef } from "react";
import ContactFormModal from "../contact-form-modal/ContactFormModal";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDocumentClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div className={`${styles.navbarMain} ${isFixed ? styles.fixed : ""}`}>
        <nav
          ref={navbarRef}
          className={` ${styles.navbar} navbar navbar-expand-lg bg-body-tertiary`}
        >
          <div class="container">
            <div>
              <NavLink
                to="/"
                className="nav-link active nav-item"
                aria-current="page"
              >
                <img
                  className={`${styles.logo}`}
                  src={Logo}
                  alt="cloud-nine-logo"
                />
              </NavLink>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul
                class={`${styles.navbarRight} navbar-nav me-auto mb-2 mb-lg-0`}
              >
                <li class="nav-item dropdown">
                  <p
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Properties
                  </p>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/our-properties/sector-45"
                      >
                        Cloud Nine Rooms 679
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/our-properties/sector-47"
                      >
                        Cloud Nine Rooms 56
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/about-us"
                    className={`${styles.navbarItem} nav-link`}
                  >
                    About Us
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/the-idea"
                    className={`${styles.navbarItem} nav-link`}
                  >
                    The Idea
                  </NavLink>
                </li>
                <li class="nav-item mob_hide">
                  <ContactFormModal />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
