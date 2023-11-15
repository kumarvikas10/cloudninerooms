import styles from "./Home.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";
import threePointsImage from "../../data/Three ways-2.png";
import privateBedroomImg from "../../data/private-bedrooms.png";
import kitchenImg from "../../data/high-end-kitchen.png";
import livingRoomImg from "../../data/Spacious-living-room.png";
import balconyImg from "../../data/balcony-view.png";
import loctionImg from "../../data/Icons-data/Premium Location.png";
import leaseImg from "../../data/Icons-data/Flexible-lease.png";
import cleaningImg from "../../data/Icons-data/Daily-cleaning.png";
import LaundryImg from "../../data/Icons-data/Laundry.png";
import MaintenanceImg from "../../data/Icons-data/Maintenance.png";
import swimmingImg from "../../data/Icons-data/Swimming Pool.png";
import wifiImg from "../../data/Icons-data/High Speed Wifi.png";
import supportImg from "../../data/Icons-data/247 Support.png";
import communityImg from "../../data/Icons-data/Great Community.png";
import parkingImg from "../../data/Icons-data/Parking.png";
import Testimonials from "../Testimonials/testimonials";
import TestmonialsSvg from "../../data/testimonials-vector.png";
import amenitiesPattern from "../../data/Patterns.png";
import uspPattern from "../../data/pattern-2.png";
import ImageGallery from "../Image Gallery/MyGallery";
import ContactForm from "../Contact-form/contactForm";

function Home() {
  return (
    <div className={styles.homepageMain}>
      <section className={styles.homepageBanner}>
        <div className={styles.homepageImage}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className={styles.bannerSection}>
                <div className={styles.mainHeading}>
                  <ul>
                    <li>Convenience</li>
                    <li>Comfort</li>
                    <li>Budget Friendly</li>
                  </ul>
                  <h1>
                    Stay Above the Rest at <br></br>Cloud Nine Rooms
                  </h1>
                </div>
                <div className={styles.mainBtn}>
                  <button
                    type="button"
                    className={`${styles.numberBtn} btn btn-primary`}
                  >
                    <BsFillTelephoneFill className={styles.telephone} />{" "}
                    99926-31999
                  </button>
                  <button
                    type="button"
                    className={`${styles.visitBtn} btn btn-light`}
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourProperties}>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className={styles.mainHeading}>
              <h2>
                Our <span>Properties</span>
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className={styles.CarouselBox}>
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.threePoints}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9">
              <div className={styles.mainHeading}>
                <h2>
                  Are you a working professional in <span>Gurugram</span>{" "}
                  seeking a<br />
                  secure and safe <span>Coliving</span> solution
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <p>
                Our commitment to convenience, Comfort and Budget Friendly sets
                us apart – making us the preferred choice for those seeking a
                unique living experience in Gurugram
              </p>
            </div>
            <div className={styles.threeImage}>
              <img
                src={threePointsImage}
                className="img-fluid"
                alt="three-usp-points"
              />
            </div>
          </div>
        </div>
        <div className={styles.threePointsPattern}>
          <img src={uspPattern} alt="pattern" />
        </div>
      </section>
      <section className={styles.amenitiesSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={styles.mainHeading}>
                <h2>
                  Every Cloud <span>Nine Rooms</span> comes <br /> with{" "}
                  <span>Premium Amenities</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className={styles.amenitiesItem}>
                <div className={styles.amenitiesImg}>
                  <img
                    src={privateBedroomImg}
                    className="img-fluid"
                    alt="bedroom"
                  />
                </div>
                <div className={styles.amenitiesText}>
                  <h4>
                    Private
                    <br />
                    Bedrooms
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.amenitiesItem}>
                <div className={styles.amenitiesImg}>
                  <img src={kitchenImg} className="img-fluid" alt="kitchen" />
                </div>
                <div className={styles.amenitiesText}>
                  <h4>
                    High
                    <br />
                    End Kitchen
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.amenitiesItem}>
                <div className={styles.amenitiesImg}>
                  <img
                    src={livingRoomImg}
                    className="img-fluid"
                    alt="livingroom"
                  />
                </div>
                <div className={styles.amenitiesText}>
                  <h4>
                    Spacious
                    <br />
                    Living Rooms
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.amenitiesItem}>
                <div className={styles.amenitiesImg}>
                  <img
                    src={balconyImg}
                    className="img-fluid"
                    alt="balcony-view"
                  />
                </div>
                <div className={styles.amenitiesText}>
                  <h4>
                    Balcony
                    <br />
                    with a view
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.amenitiesContainer}>
              <div className={styles.amenitiesBox}>
                <img src={loctionImg} alt="location" />
                <h4>Premium Location</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={leaseImg} alt="location" />
                <h4>Flexible Lease</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={cleaningImg} alt="location" />
                <h4>Daily Cleaning</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={LaundryImg} alt="location" />
                <h4>Laundry</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={MaintenanceImg} alt="location" />
                <h4>Maintenance</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.amenitiesContainer}>
              <div className={styles.amenitiesBox}>
                <img src={swimmingImg} alt="location" />
                <h4>Swimming Pool</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={wifiImg} alt="location" />
                <h4>High Speed Wifi</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={supportImg} alt="location" />
                <h4>24/7 Support</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={communityImg} alt="location" />
                <h4>Great Community</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={parkingImg} alt="location" />
                <h4>Parking</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.amenitiesPattern}>
          <img src={amenitiesPattern} alt="pattern" />
        </div>
      </section>
      <section className={styles.testimonials}>
        <div className="container">
          <div className="row">
            <div className={styles.mainHeading}>
              <h2>
                What They <span>Say</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <Testimonials />
          </div>
          <div className={styles.testimonialsSvg}>
            <img src={TestmonialsSvg} alt="testimonials-vector" />
          </div>
        </div>
      </section>
      <section className={styles.pictureGallery}>
        <div className="container">
          <div className="row">
            <div className={styles.mainHeading}>
              <h2>
                Capturing Coliving's <span>Vibrant</span> Essence
              </h2>
              <p>
                Explore our visual narrative, showcasing the vibrant heart of
                our coliving spaces. Experience the essence of community living
                in every snapshot
              </p>
            </div>
          </div>
          <div className="row">
              <div className={styles.gallery}>
                <ImageGallery />
              </div>
            </div>
        </div>
      </section>
      <section className={styles.contactForm}>
        <div className="container">
          <div className="row">
            <ContactForm  />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
