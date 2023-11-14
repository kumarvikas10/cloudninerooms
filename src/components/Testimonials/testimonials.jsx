import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./testimonials.module.css";
import photoImg from "../../data/photo.png";

function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonialSlider">
      <Slider {...settings} className={styles.slider}>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living at Cloud Nine Rooms has been an absolute delight! From the
              moment I moved in, I felt welcomed and at home. The
              well-furnished, clean, and beautifully designed spaces made my
              stay comfortable and enjoyable. The commitment to security and a
              strong sense of community here is truly commendable. I couldn't
              have asked for a better coliving experience. Cloud Nine Rooms is
              not just a place to live; it's a home where you can truly feel on
              cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <div className={styles.testimonialImg}>
              <img src={photoImg} alt="person-img" />
            </div>
            <h4>Kathrin Beckinsale</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living at Cloud Nine Rooms has been an absolute delight! From the
              moment I moved in, I felt welcomed and at home. The
              well-furnished, clean, and beautifully designed spaces made my
              stay comfortable and enjoyable. The commitment to security and a
              strong sense of community here is truly commendable. I couldn't
              have asked for a better coliving experience. Cloud Nine Rooms is
              not just a place to live; it's a home where you can truly feel on
              cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <img src={photoImg} alt="person-img" />
            <h4>Kathrin Beckinsale</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living at Cloud Nine Rooms has been an absolute delight! From the
              moment I moved in, I felt welcomed and at home. The
              well-furnished, clean, and beautifully designed spaces made my
              stay comfortable and enjoyable. The commitment to security and a
              strong sense of community here is truly commendable. I couldn't
              have asked for a better coliving experience. Cloud Nine Rooms is
              not just a place to live; it's a home where you can truly feel on
              cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <img src={photoImg} alt="person-img" />
            <h4>Kathrin Beckinsale</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living at Cloud Nine Rooms has been an absolute delight! From the
              moment I moved in, I felt welcomed and at home. The
              well-furnished, clean, and beautifully designed spaces made my
              stay comfortable and enjoyable. The commitment to security and a
              strong sense of community here is truly commendable. I couldn't
              have asked for a better coliving experience. Cloud Nine Rooms is
              not just a place to live; it's a home where you can truly feel on
              cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <img src={photoImg} alt="person-img" />
            <h4>Kathrin Beckinsale</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
