import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../data/logo.png";
import React, { useState, useEffect, useRef } from "react";
import ContactFormModal from "../contact-form-modal/ContactFormModal";
import axios from "axios";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [propertiesData, setPropertiesData] = useState([]);
  const navbarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/db.json`);
        setPropertiesData(response.data.colivingSpaces);
        console.log(response.data.colivingSpaces);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

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
          <div className="container">
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
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul
                className={`${styles.navbarRight} navbar-nav me-auto mb-2 mb-lg-0`}
              >
                <li className="nav-item dropdown">
                  <p
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Properties
                  </p>
                  <ul className="dropdown-menu">
                    {propertiesData?.map((property, i) => {
                      return (
                        <li key={i}>
                          <NavLink
                            className="dropdown-item"
                            to={`/our-properties/${property?.slug}`}
                          >
                            {property?.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about-us"
                    className={`${styles.navbarItem} nav-link`}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/the-idea"
                    className={`${styles.navbarItem} nav-link`}
                  >
                    The Idea
                  </NavLink>
                </li>
                <li className="nav-item mob_hide">
                  <ContactFormModal modalId={"exampleModal"} />
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
