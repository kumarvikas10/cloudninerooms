import style from "../About Us/AboutUs.module.css";
import styles from "./Sector45.module.css";
import { FaLocationDot } from "react-icons/fa6";
import property from "../../data/property-1.png";
import { GoDotFill } from "react-icons/go";
import css from "../Homepage/Home.module.css";
import roomImg from "../../data/room.png";
import breakfast from "../../data/breakfast.png";
import cleaning from "../../data/food-boy.png";
import gaming from "../../data/pool-girl.png";
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
import homepageStyles  from '../Homepage/Home.module.css';
import ImageGallery from "../Image Gallery/MyGallery";
import ContactForm from "../Contact-form/contactForm";

function Sector45() {
  return (
    <>
      <div className={styles.main_bg}>
        <div className="container">
          <h1 className={`${style.main_heading} ${styles.main_heading}`}>
            Cloud Nine Rooms Girsl PG
          </h1>
          <p className={styles.main_subheading}>
            <FaLocationDot className={styles.location_icon} /> Sector 45,
            Gurugram
          </p>
        </div>
      </div>
      <div className="container mt100">
        <p>
          Welcome to Cloud Nine Rooms Girls PG, your home away from home in the
          heart of Sector 45! We understand that finding a comfortable and
          secure place to live while pursuing your dreams is of utmost
          importance. That's why we have created a unique and welcoming
          co-living experience designed exclusively for young women. <br />
          <br /> At Cloud Nine Rooms, we offer a range of well-furnished and
          thoughtfully designed rooms to suit your individual preferences.
          Whether you're looking for a private room or a shared one with
          like-minded roommates, we have options that cater to all your needs.
          Our rooms are spacious, stylish, and equipped with all the essential
          amenities to ensure a comfortable stay.
        </p>
      </div>
      <div className={`mt100 ${styles.accomadation_banner}`}>
        <div className={`container ${styles.accomodation_container}`}>
          <h2 className="heading text-center">
            Our <span style={{ color: "#FC4102" }}>Accommodation</span>
          </h2>
          <p className="text-center mob_hide">
            Our rooms are spacious, stylish and equipped with all the essential
            amenities to ensure a comfortable stay.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.accomodation_card}>
                <div className={styles.property_img}>
                  <img src={property} alt="cloud nine room" />
                </div>
                <div className={styles.accomodation_card_text}>
                  <h4>Private Room</h4>
                  <p>
                    <span>₹ 30,000/</span> month
                  </p>
                  <p style={{ fontWeight: "400" }} className="mb-0">
                    High-speed Wi-Fi <GoDotFill className={styles.icon} /> 24/7
                    Support
                  </p>
                  <p style={{ fontWeight: "400" }}>
                    Daily cleaning <GoDotFill className={styles.icon} />{" "}
                    Fully-furnished room
                  </p>
                  <button
                    className={`commonBtn btn btn-primary ${styles.bookVisitbtn}`}
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.accomodation_card}>
                <div className={styles.property_img}>
                  <img src={property} alt="cloud nine room" />
                </div>
                <div className={styles.accomodation_card_text}>
                  <h4>Private Room</h4>
                  <p>
                    <span>₹ 30,000/</span> month
                  </p>
                  <p style={{ fontWeight: "400" }} className="mb-0">
                    High-speed Wi-Fi <GoDotFill className={styles.icon} /> 24/7
                    Support
                  </p>
                  <p style={{ fontWeight: "400" }}>
                    Daily cleaning <GoDotFill className={styles.icon} />{" "}
                    Fully-furnished room
                  </p>
                  <button
                    className={`commonBtn btn btn-primary ${styles.bookVisitbtn}`}
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-4">
            <div className="col-md-6">
              <div className={styles.accomodation_card}>
                <div className={styles.property_img}>
                  <img src={property} alt="cloud nine room" />
                </div>
                <div className={styles.accomodation_card_text}>
                  <h4>Private Room</h4>
                  <p>
                    <span>₹ 30,000/</span> month
                  </p>
                  <p style={{ fontWeight: "400" }} className="mb-0">
                    High-speed Wi-Fi <GoDotFill className={styles.icon} /> 24/7
                    Support
                  </p>
                  <p style={{ fontWeight: "400" }}>
                    Daily cleaning <GoDotFill className={styles.icon} />{" "}
                    Fully-furnished room
                  </p>
                  <button
                    className={`commonBtn btn btn-primary ${styles.bookVisitbtn}`}
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.accomodation_card}>
                <div className={styles.property_img}>
                  <img src={property} alt="cloud nine room" />
                </div>
                <div className={styles.accomodation_card_text}>
                  <h4>Private Room</h4>
                  <p>
                    <span>₹ 30,000/</span> month
                  </p>
                  <p style={{ fontWeight: "400" }} className="mb-0">
                    High-speed Wi-Fi <GoDotFill className={styles.icon} /> 24/7
                    Support
                  </p>
                  <p style={{ fontWeight: "400" }}>
                    Daily cleaning <GoDotFill className={styles.icon} />{" "}
                    Fully-furnished room
                  </p>
                  <button
                    className={`commonBtn btn btn-primary ${styles.bookVisitbtn}`}
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={css.amenitiesSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={css.mainHeading}>
                <h2>
                  Every Cloud <span>Nine Rooms</span> comes{" "}
                  <br className="mob_hide" /> with{" "}
                  <span>Premium Amenities</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mob_hide">
            <div className="col-md-3">
              <div className={css.amenitiesItem}>
                <div className={css.amenitiesImg}>
                  <img src={roomImg} className="img-fluid" alt="bedroom" />
                </div>
                <div className={css.amenitiesText}>
                  <h4>
                    Ready to
                    <br />
                    Move in
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={css.amenitiesItem}>
                <div className={css.amenitiesImg}>
                  <img src={breakfast} className="img-fluid" alt="kitchen" />
                </div>
                <div className={css.amenitiesText}>
                  <h4>
                    Delicious
                    <br />
                    breakfast{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={css.amenitiesItem}>
                <div className={css.amenitiesImg}>
                  <img src={cleaning} className="img-fluid" alt="livingroom" />
                </div>
                <div className={css.amenitiesText}>
                  <h4>
                    daily
                    <br />
                    cleaning
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={css.amenitiesItem}>
                <div className={css.amenitiesImg}>
                  <img src={gaming} className="img-fluid" alt="balcony-view" />
                </div>
                <div className={css.amenitiesText}>
                  <h4>
                    Gaming
                    <br />
                    zone
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row mob_hide">
            <div className={css.amenitiesContainer}>
              <div className={css.amenitiesBox}>
                <img src={loctionImg} alt="location" />
                <h4>Premium Location</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={leaseImg} alt="location" />
                <h4>Flexible Lease</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={cleaningImg} alt="location" />
                <h4>Daily Cleaning</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={LaundryImg} alt="location" />
                <h4>Laundry</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={MaintenanceImg} alt="location" />
                <h4>Maintenance</h4>
              </div>
            </div>
          </div>
          <div className="row mob_hide">
            <div className={css.amenitiesContainer}>
              <div className={css.amenitiesBox}>
                <img src={swimmingImg} alt="location" />
                <h4>Swimming Pool</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={wifiImg} alt="location" />
                <h4>High Speed Wifi</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={supportImg} alt="location" />
                <h4>24/7 Support</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={communityImg} alt="location" />
                <h4>Great Community</h4>
              </div>
              <div className={css.amenitiesBox}>
                <img src={parkingImg} alt="location" />
                <h4>Parking</h4>
              </div>
            </div>
          </div>
          <div className={`desk_hide ${styles.mob_amenities}`}>
            <div className={styles.amenity_box}>
              <div>
                <img src={loctionImg} alt="location" />
              </div>
              <div>
                <p className="mb-0 ms-2">Premium Location</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={leaseImg} alt="lease" />
              </div>
              <div>
                <p className="mb-0 ms-2">Flexible Lease</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={cleaningImg} alt="Daily Cleaning" />
              </div>
              <div>
                <p className="mb-0 ms-2">Daily Cleaning</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={LaundryImg} alt="Laundry" />
              </div>
              <div>
                <p className="mb-0 ms-2">Laundry</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={MaintenanceImg} alt="Maintenance" />
              </div>
              <div>
                <p className="mb-0 ms-2">Maintenance</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={swimmingImg} alt="Swimming Pool" />
              </div>
              <div>
                <p className="mb-0 ms-2">Swimming Pool</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={wifiImg} alt="High Speed Wifi" />
              </div>
              <div>
                <p className="mb-0 ms-2">High Speed Wifi</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={supportImg} alt="24/7 Support" />
              </div>
              <div>
                <p className="mb-0 ms-2">24/7 Support</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={communityImg} alt="Great Community" />
              </div>
              <div>
                <p className="mb-0 ms-2">Great Community</p>
              </div>
            </div>
            <div className={styles.amenity_box}>
              <div>
                <img src={parkingImg} alt="Parking" />
              </div>
              <div>
                <p className="mb-0 ms-2">Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={homepageStyles.pictureGallery}>
        <div className="container">
          <div className="row">
            <div className={homepageStyles.mainHeading}>
              <h2>
                Capturing Coliving's <span>Vibrant</span> Essence
              </h2>
              <p className="mob_hide">
                Explore our visual narrative, showcasing the vibrant heart of
                our coliving spaces. Experience the essence of community living
                in every snapshot
              </p>
            </div>
          </div>
          <div className="row">
            <div className={homepageStyles.gallery}>
              <ImageGallery />
            </div>
          </div>
        </div>
      </section>
      <section className={homepageStyles.contactFormSection}>
        <div className="container">
          <div className={`${homepageStyles.contactForm} row`}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sector45;
