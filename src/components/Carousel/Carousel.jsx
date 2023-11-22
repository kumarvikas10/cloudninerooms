import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Carousel.module.css";
import propertyImage from "../../data/property-1.png";
import ContactFormModal from "../contact-form-modal/ContactFormModal";
import { NavLink } from "react-router-dom";
import { allPropertiesData } from "../../service/PropertyService";

function Carousel() {
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

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="carouselSlider">
      <Slider {...settings} className={styles.slider}>
        {propertiesData?.map((property, i) => {
          return (
            <div className={styles.CarouselBox} key={i}>
              <img
                src={propertyImage}
                className={`${styles.CarouselImage} img-fluid`}
                alt="property"
              />
              <div className={styles.CarouselText}>
                <h4>{property?.name}</h4>
                <p>
                  <FaLocationDot className={styles.loction} />{" "}
                  {property?.address}
                </p>
                <div className={styles.CarouselBtn}>
                  <NavLink to={`/our-properties/${property?.slug}`}>
                    <button
                      type="button"
                      className={`${styles.exploreBtn} btn btn-primary`}
                    >
                      Explore Now
                    </button>
                  </NavLink>
                  <ContactFormModal modalId={"exampleModal1"} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
