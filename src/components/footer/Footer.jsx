import React, { useState, useEffect } from "react";
import logo from "../../data/logo.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import instagram from "../../data/Instagram.png";
import facebook from "../../data/Facebook.png";
import linkedin from "../../data/Linkedin.png";
import { allPropertiesData } from "../../service/PropertyService";

function Footer() {
  const [propertiesData, setPropertiesData] = useState([]);

  const handleFetchProperties = async () => {
    try {
      await allPropertiesData(setPropertiesData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleFetchProperties();
  }, []);

  return (
    <>
      <div className="container mt100">
        <div className="row">
          <div className="col-md-7">
            <img src={logo} alt="cloud nine logo" className="footer_logo" />
            <p className={`mob_hide ${styles.footer_text}`}>
            Welcome to Cloud Nine Rooms at Gurugram, your premier destination for exceptional co-living and room stays. Nestled in the heart of Gurugram, our thoughtfully designed rooms offer a perfect blend of modern luxury and practicality, providing a comfortable and welcoming haven for a diverse range of residents. Whether you're a solo traveler, a remote professional seeking a home away from home, or someone simply looking for a vibrant yet cozy living experience, our meticulously curated spaces cater to your unique needs. Our prime location ensures convenience, while our commitment to fostering a sense of community ensures that comfort and companionship harmoniously coexist. Join us at Cloud Nine Rooms for an unparalleled living experience where every detail is designed to enhance your stay and create lasting memories
            </p>
          </div>
          <div className="col-md-3 col-8 footer_col">
            <h4 className={styles.footer_heading}>Our properties</h4>
            {propertiesData?.map((property, i) => {
              return (
                <p key={i} className={`p${i}`}>
                  <Link
                    to={`/our-properties/${property?.slug}`}
                    className="footer_link"
                  >
                    {property?.name}
                  </Link>
                </p>
              );
            })}
          </div>
          <div className="col-md-2 col-4">
            <h4 className={styles.footer_heading}>Our Company</h4>
            <p className={styles.first_p}>
              <Link to="/about-us" className={styles.footer_link}>
                About Us
              </Link>
            </p>
            <p>
              <Link to="/the-idea" className={styles.footer_link}>
                The Idea
              </Link>
            </p>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-7">
            <div className={styles.footer_socials}>
              <div>
                <a href="tel:9289900006" className={styles.footer_link}>
                  Call : 9289900006
                </a>
              </div>
              <div>
                <a
                  href="mailto:hello@cloudninerooms.com"
                  className={styles.footer_link}
                >
                  Email : hello@cloudninerooms.com
                </a>
              </div>
              <div>
                <img src={instagram} alt="cloud nine instagram" />
                <a
                  href="https://www.facebook.com/profile.php?id=100086061260397&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="cloud nine facebook" />
                </a>
                <img src={linkedin} alt="cloud nine linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_footer}></div>
    </>
  );
}

export default Footer;
