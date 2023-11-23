import { useEffect, useState } from "react";
import style from "../About Us/AboutUs.module.css";
import styles from "./Sector45.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import css from "../Homepage/Home.module.css";
import roomImg from "../../data/room.png";
import breakfast from "../../data/breakfast.png";
import cleaning from "../../data/food-boy.png";
import gaming from "../../data/pool-girl.png";
import ChefImg from "../../data/Icons-data/chefImg.png";
import cctvCameraImg from "../../data/Icons-data/cctv-cameraImg.png";
import loctionImg from "../../data/Icons-data/Premium Location.png";
import cleaningImg from "../../data/Icons-data/Daily-cleaning.png";
import LaundryImg from "../../data/Icons-data/Laundry.png";
import MaintenanceImg from "../../data/Icons-data/Maintenance.png";
import wifiImg from "../../data/Icons-data/High Speed Wifi.png";
import supportImg from "../../data/Icons-data/247 Support.png";
import communityImg from "../../data/Icons-data/Great Community.png";
import parkingImg from "../../data/Icons-data/Parking.png";
import ImageGallery from "../Image Gallery/MyGallery";
import ContactForm from "../Contact-form/contactForm";
import BedTypeImg from "../../data/Icons-data/BedType.png";
import DepositImg from "../../data/Icons-data/deposit.png";
import foodImg from "../../data/Icons-data/Food.png";
import ReadMoreLess from "../read-more-less-btn/ReadMoreLess";
import { useParams } from "react-router-dom";
import ContactFormModal from "../contact-form-modal/ContactFormModal";
import { allPropertiesData } from "../../service/PropertyService";

function Sector45() {
  const [propertiesData, setPropertiesData] = useState([]);
  const [filteredProperty, setFilteredProperty] = useState([]);

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

  const { slug } = useParams();

  const newData = propertiesData?.filter((property) => {
    return property?.slug === slug;
  });

  useEffect(() => {
    if (newData) {
      setFilteredProperty(newData);
    }
  }, [propertiesData, slug]);

  const aboutText = `Welcome to Cloud Nine Rooms Girls PG, your home away from home in the
  heart of Sector 45! We understand that finding a comfortable and
  secure place to live while pursuing your dreams is of utmost
  importance. That's why we have created a unique and welcoming
  co-living experience designed exclusively for young women.
  

  At Cloud Nine Rooms, we offer a range of well-furnished and
  thoughtfully designed rooms to suit your individual preferences.
  Whether you're looking for a private room or a shared one with
  like-minded roommates, we have options that cater to all your needs.
  Our rooms are spacious, stylish, and equipped with all the essential
  amenities to ensure a comfortable stay.`;

  return (
    <>
      <div className={styles.main_bg}>
        <div className="container">
          <h1 className={`${style.main_heading} ${styles.main_heading}`}>
            {filteredProperty[0]?.name}
          </h1>
          <p className={styles.main_subheading}>
            <FaLocationDot className={styles.location_icon} />{" "}
            {filteredProperty[0]?.address}
          </p>
        </div>
      </div>
      <div className={`${styles.mobUspPoints} container desk_hide`}>
        <div className={`${styles.mobUspPointsDiv} row`}>
          <div className="col-6">
            <div className="row">
              <div className={`${styles.mobIcon} col-3`}>
                <img src={BedTypeImg} alt="Property type" />
              </div>
              <div className={`${styles.mobIconText} col-9`}>
                <p>Type</p>
                <h4>Single Sharing</h4>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className={`${styles.mobIcon} col-3`}>
                <img src={DepositImg} alt="Deposit" />
              </div>
              <div className={`${styles.mobIconText} col-9`}>
                <p>Deposit</p>
                <h4>Yes</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.mobUspPointsDiv} row`}>
          <div className="col-6">
            <div className="row">
              <div className={`${styles.mobIcon} col-3`}>
                <img src={foodImg} alt="Property type" />
              </div>
              <div className={`${styles.mobIconText} col-9`}>
                <p>Food & Bevarages</p>
                <h4>Yes</h4>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className={`${styles.mobIcon} col-3`}>
                <img src={cleaningImg} alt="Deposit" />
              </div>
              <div className={`${styles.mobIconText} col-9`}>
                <p>Cleaning</p>
                <h4>Daily Basis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.aboutDiv} container`}>
        <div className="row desk_hide">
          <ReadMoreLess text={aboutText} maxLength={326} />
        </div>
        <p className="mob_hide">{filteredProperty[0]?.descriptions}</p>
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
            {filteredProperty[0]?.price?.map((price, i) => {
              return (
                <div className="col-md-6 mt-3" key={i}>
                  <div className={styles.accomodation_card}>
                    <div className={styles.property_img}>
                      <img
                        src={filteredProperty[0]?.images[i]?.image}
                        alt="cloud nine room"
                      />
                    </div>
                    <div className={styles.accomodation_card_text}>
                      <h4>{price?.type}</h4>
                      <p>
                        <span>₹ {price?.price}/</span> month
                      </p>
                      <p style={{ fontWeight: "400" }} className="mb-0">
                        High-speed Wi-Fi <GoDotFill className={styles.icon} />{" "}
                        24/7 Support
                      </p>
                      <p style={{ fontWeight: "400" }}>
                        Daily cleaning <GoDotFill className={styles.icon} />{" "}
                        Fully-furnished room
                      </p>
                      <ContactFormModal
                        modalId={"modalExample4"}
                        isBanner={true}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
                <p className="mob_hide">Elevate Your Living Experience at Cloud Nine Rooms with Premium Amenities</p>
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
                <img src={ChefImg} alt="location" />
                <h4>Experience Chef</h4>
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
                <img src={cctvCameraImg} alt="location" />
                <h4>CCTV Surveillance</h4>
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
                <img src={ChefImg} alt="Experience Chef" />
              </div>
              <div>
                <p className="mb-0 ms-2">Experience Chef</p>
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
                <img src={cctvCameraImg} alt="CCTV Surveillance" />
              </div>
              <div>
                <p className="mb-0 ms-2">CCTV Surveillance</p>
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
      <section className={css.pictureGallery}>
        <div className="container">
          <div className="row">
            <div className={css.mainHeading}>
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
            <div className={css.gallery}>
              <ImageGallery
                image1={filteredProperty[0]?.images[0]?.image}
                image2={filteredProperty[0]?.images[1]?.image}
                image3={filteredProperty[0]?.images[2]?.image}
                image4={filteredProperty[0]?.images[3]?.image}
                image5={filteredProperty[0]?.images[4]?.image}
                image6={filteredProperty[0]?.images[5]?.image}
                image7={filteredProperty[0]?.images[6]?.image}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={css.contactFormSection}>
        <div className="container">
          <div className={`${css.contactForm} row`}>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="desk_hide">
        <nav className="navbar fixed-bottom bg-body-tertiary">
          <div className="container-fluid">
            <div className={`${styles.fixedBottomDiv} row`}>
              <div className="col-6">
                <div className={styles.numberBtnDiv}>
                  <button
                    type="button"
                    className={`${styles.numberBtn} btn btn-primary`}
                  >
                    <BsFillTelephoneFill className={styles.telephone} />
                    <a href="tel:9999998992">9999-998-992</a>
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.visitBtnDiv}>
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
        </nav>
      </section>
    </>
  );
}

export default Sector45;