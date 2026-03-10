import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Carousel.module.css";
import ContactFormModal from "../contact-form-modal/ContactFormModal";
import { NavLink } from "react-router-dom";
import { allPropertiesData } from "../../service/PropertyService";
import Wifi from "../../data/Icons-data/Wifi.svg";
import Bed from "../../data/Icons-data/Bed.svg";
import Food from "../../data/Icons-data/Food.svg";

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
                src={property?.images[0]?.image}
                className={`${styles.CarouselImage} img-fluid`}
                alt="property"
              />
              <div className={styles.CarouselText}>
                <h4>{property?.name}</h4>
                <p>
                  <FaLocationDot className={styles.loction} />{" "}
                  {property?.address}
                </p>
                <div className={styles.cardStat}>
                  <p>
                    <img src={Wifi} />
                    Wifi
                  </p>
                  <p>
                    <img src={Bed} />
                    Bed
                  </p>
                  <p>
                    <img src={Food} />
                    Food
                  </p>
                </div>
                <p className={styles.categoryText}>Private Room • Double Sharing • Triple Sharing</p>
                <div className={styles.CarouselBtn}>
                  <NavLink to={`/our-properties/${property?.slug}`}>
                    <button
                      type="button"
                      className={`${styles.exploreBtn} btn btn-primary`}
                    >
                      ₹{property?.price[0]?.price}
                    </button>
                  </NavLink>
                  <ContactFormModal buttonText="Enquire Now" modalId={"exampleModal1"} />
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
