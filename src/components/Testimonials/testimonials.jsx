import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./testimonials.module.css";
import varunImg from "../../data/varun-testimonial.jpg";
import ritaImg from "../../data/rita-testimonial.jpg";
import nishitaImg from "../../data/nishita-testimonial.jpg";
import sureshImg from "../../data/suresh-testimonial.jpg";

function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
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
              It has been a great pleasure to live here at Cloud Nine Rooms! As
              soon as I settled in, there was a nice and comfortable atmosphere.
              My stay was made pleasant and pleasurable by the beautifully
              furnished, visually stunning, and well-organized rooms. It is
              truly admirable that there is a commitment to safety and that a
              close-knit society is being developed. It was the most rewarding
              coliving experience I could have imagined. More than just a place
              to stay, Cloud Nine Rooms may make you feel as though you're on
              cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <div className={styles.testimonialImg}>
              <img src={varunImg} alt="person-img" />
            </div>
            <h4>Varun Chandra</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living in the embrace of Cloud Nine Rooms has been an absolute
              joy! From the moment I arrived, I felt a sense of warmth and
              belonging. The tastefully furnished, spotless, and thoughtfully
              designed living spaces provided me with both comfort and enjoyment
              throughout my stay. The unwavering commitment to security and the
              cultivation of a strong sense of community are truly noteworthy. I
              couldn't have hoped for a more gratifying coliving experience.
              Cloud Nine Rooms isn't just a residence; it's a place that truly
              feels like home, where the sensation of being on cloud nine is a
              constant companion.
            </p>
          </div>
          <div className={styles.testimonialName}>
            <div className={styles.testimonialImg}>
              <img src={ritaImg} alt="person-img" />
            </div>
            <h4>Rita Bhalla</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Residing at Cloud Nine Rooms has been an absolute joy! Since the
              day I arrived, I've experienced a warm and inviting atmosphere.
              The impeccably furnished, spotless, and aesthetically pleasing
              spaces have provided me with comfort and pleasure throughout my
              stay. The dedication to security and the fostering of a tight-knit
              community are truly praiseworthy. I couldn't have wished for a
              more satisfying coliving experience. Cloud Nine Rooms isn't just a
              residence; it's a genuine home where one can truly experience the
              feeling of being on cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <div className={styles.testimonialImg}>
              <img src={nishitaImg} alt="person-img" />
            </div>
            <h4>Nishita Chhabra</h4>
          </div>
        </div>
        <div className={styles.CarouselBox}>
          <FaQuoteLeft className={styles.testimonialIcon} />
          <div className={styles.testimonialText}>
            <p>
              Living here at Cloud Nine Rooms has been a true delight! There was
              a kind and cozy vibe as soon as I got situated in. The perfectly
              designed, organized, and visually beautiful rooms made sure I had
              a comfortable and enjoyable stay. The commitment to safety and the
              development of a close-knit society are genuinely commendable. I
              had the most fulfilling coliving experience possible. Cloud Nine
              Rooms is more than just a place to stay; it's a place where you
              may actually feel like you're on cloud nine!
            </p>
          </div>
          <div className={styles.testimonialName}>
            <div className={styles.testimonialImg}>
              <img src={sureshImg} alt="person-img" />
            </div>
            <h4>Suresh Prasad</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
