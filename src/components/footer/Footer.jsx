import React from "react";
import logo from "../../data/logo.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import instagram from "../../data/Instagram.png";
import facebook from "../../data/Facebook.png";
import linkedin from "../../data/Linkedin.png";

function Footer() {
  return (
    <>
      <div className="container mt100">
        <div className="row">
          <div className="col-md-7">
            <img src={logo} alt="cloud nine logo" width="130px" />
            <p className={styles.footer_text}>
              Cloud Nine Rooms at Gurugram is your premier destination for
              co-living and room stays, where comfort and community harmoniously
              coexist. Nestled in the heart of Gurugram, our thoughtfully
              designed rooms offer a perfect blend of modern luxury and
              practicality. From solo travelers to remote professionals seeking
              a home away from home, our meticulously curated spaces provide a
              welcoming haven for those in search of a vibrant yet cozy living
              experience.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className={styles.footer_heading}>Our properties</h4>
            <p className={styles.first_p}>Sector 45, Gurugram</p>
            <p>Sector 43, Gurugram</p>
            <p>Sector 38, Gurugram</p>
          </div>
          <div className="col-md-2">
            <h4 className={styles.footer_heading}>Our Company</h4>
            <p className={styles.first_p}>
              <Link to="/about-us" className={styles.footer_link}>
                About Us
              </Link>
            </p>
            <p>
              <Link to="the-idea" className={styles.footer_link}>
                The Idea
              </Link>
            </p>
            <p>
              <Link className={styles.footer_link}>Privacy Policy</Link>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <div className={styles.footer_socials}>
              <div>
                <a href="tel:9999998992" className={styles.footer_link}>
                  Call : 9999-998-992
                </a>
              </div>
              <div>
                <a
                  href="mailto:support@cloud9rooms.com"
                  className={styles.footer_link}
                >
                  Email : support@cloud9rooms.com
                </a>
              </div>
              <div>
                <img src={instagram} alt="cloud nine instagram" />
                <img src={facebook} alt="cloud nine facebook" />
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
