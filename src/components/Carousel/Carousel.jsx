import React from "react";
import Slider from "react-slick";
import {FaLocationDot} from 'react-icons/fa6'
import styles from './Carousel.module.css';
import propertyImage from '../../data/property-1.png';

function Carousel() {
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
        <div className={styles.CarouselBox}>
          <img
            src={propertyImage}
            className={`${styles.CarouselImage} img-fluid`}
            alt="property"
          />
          <div className={styles.CarouselText}>
            <h4>Cloud Nine Rooms Girls PG</h4>
            <p>
              <FaLocationDot className={styles.loction} /> Sector 45, Gurugram
            </p>
            <div className={styles.CarouselBtn}>
              <button
                type="button"
                class={`${styles.exploreBtn} btn btn-primary`}
              >
                Explore Now
              </button>
              <button
                type="button"
                class={`${styles.visitBtn} btn btn-outline-primary`}
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <img
            src={propertyImage}
            className={`${styles.CarouselImage} img-fluid`}
            alt="property"
          />
          <div className={styles.CarouselText}>
            <h4>Cloud Nine Rooms Girls PG</h4>
            <p>
              <FaLocationDot className={styles.loction} /> Sector 45, Gurugram
            </p>
            <div className={styles.CarouselBtn}>
              <button
                type="button"
                class={`${styles.exploreBtn} btn btn-primary`}
              >
                Explore Now
              </button>
              <button
                type="button"
                class={`${styles.visitBtn} btn btn-outline-primary`}
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <img
            src={propertyImage}
            className={`${styles.CarouselImage} img-fluid`}
            alt="property"
          />
          <div className={styles.CarouselText}>
            <h4>Cloud Nine Rooms Girls PG</h4>
            <p>
              <FaLocationDot className={styles.loction} /> Sector 45, Gurugram
            </p>
            <div className={styles.CarouselBtn}>
              <button
                type="button"
                class={`${styles.exploreBtn} btn btn-primary`}
              >
                Explore Now
              </button>
              <button
                type="button"
                class={`${styles.visitBtn} btn btn-outline-primary`}
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <img
            src={propertyImage}
            className={`${styles.CarouselImage} img-fluid`}
            alt="property"
          />
          <div className={styles.CarouselText}>
            <h4>Cloud Nine Rooms Girls PG</h4>
            <p>
              <FaLocationDot className={styles.loction} /> Sector 45, Gurugram
            </p>
            <div className={styles.CarouselBtn}>
              <button
                type="button"
                class={`${styles.exploreBtn} btn btn-primary`}
              >
                Explore Now
              </button>
              <button
                type="button"
                class={`${styles.visitBtn} btn btn-outline-primary`}
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

