import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";
import threePointsImage from "../../data/Three ways-2.png";
import ConvenienceImg from "../../data/convenienceImg.png";
import ComfortImg from "../../data/comfortImg.png";
import BudgetImg from "../../data/BudgetImg.png";
import privateBedroomImg from "../../data/private-bedrooms.png";
import kitchenImg from "../../data/high-end-kitchen.png";
import livingRoomImg from "../../data/Spacious-living-room.png";
import balconyImg from "../../data/balcony-view.png";
import loctionImg from "../../data/Icons-data/Premium Location.png";
import ChefImg from "../../data/Icons-data/chefImg.png";
import cleaningImg from "../../data/Icons-data/Daily-cleaning.png";
import LaundryImg from "../../data/Icons-data/Laundry.png";
import MaintenanceImg from "../../data/Icons-data/Maintenance.png";
import cctvCameraImg from "../../data/Icons-data/cctv-cameraImg.png";
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
import carouselStyles from "../Carousel/Carousel.module.css";
import { FaLocationDot } from "react-icons/fa6";
import ContactFormModal from "../contact-form-modal/ContactFormModal";
import { NavLink } from "react-router-dom";
import { allPropertiesData } from "../../service/PropertyService";

function Home() {
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
                    <BsFillTelephoneFill className={styles.telephone} />
                    <a href="tel:7678575035">7678575035</a>
                  </button>
                  <ContactFormModal modalId={"exampleModal1"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={styles.mainHeading}>
                <h2>
                  Our <span>Properties</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-12 mob_hide">
            <div className={styles.CarouselBox}>
              <Carousel />
            </div>
          </div>
        </div>
        <div className={`desk_hide row ${styles.property_row}`}>
          {propertiesData?.map((property, i) => {
            return (
              <div
                className={`${carouselStyles.CarouselBox}`}
                style={{
                  width: "250px",
                  marginLeft: "30px",
                  padding: "0",
                }}
                key={i}
              >
                <img
                  src={property?.images[0]?.image}
                  className={`${carouselStyles.CarouselImage} img-fluid`}
                  alt="property"
                />
                <div className={carouselStyles.CarouselText}>
                  <h4>{property?.name}</h4>
                  <p>
                    <FaLocationDot className={carouselStyles.loction} />{" "}
                    {property?.address}
                  </p>
                  <div className={carouselStyles.CarouselBtn}>
                    <NavLink to={`/our-properties/${property?.slug}`}>
                      <button
                        type="button"
                        className={`${carouselStyles.exploreBtn} btn btn-primary`}
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
        </div>
      </section>
      <section className={`${styles.threePoints} mt-100`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9">
              <div className={styles.mainHeading}>
                <h2>
                  Are you a working professional in <span>Gurugram</span>{" "}
                  seeking a <br className="mob_hide" />
                  secure and safe <span>Coliving</span> solution
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 mob_hide">
              <p>
                Our commitment to convenience, Comfort and Budget Friendly sets
                us apart – making us the preferred choice for those seeking a
                unique living experience in Gurugram
              </p>
            </div>
            <div className={`${styles.threeImage} mob_hide `}>
              <img
                src={threePointsImage}
                className="img-fluid"
                alt="three-usp-points"
              />
            </div>
          </div>
          <div className={`${styles.threeMobPoints} desk_hide `}>
            <div className={`${styles.PointOneConvenience} row`}>
              <div className="col-6">
                <div className={styles.convenienceImg}>
                  <img src={ConvenienceImg} alt="convenience" />
                </div>
              </div>
              <div className={`${styles.PointOneText} col-6`}>
                <div>
                  <h3>Convenience</h3>
                  <p>
                    Experience the ultimate convenience in coliving with our
                    thoughtfully designed spaces and hassle-free amenities
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.PointTwoComfort} row`}>
              <div className={`${styles.PointOneText} col-6`}>
                <div>
                  <h3>Comfort</h3>
                  <p>
                    Experience the pinnacle of comfort in our coliving spaces,
                    where convenience meets community.
                  </p>
                </div>
              </div>
              <div className={`${styles.comfortDiv} col-6`}>
                <div className={styles.comfortImg}>
                  <img src={ComfortImg} alt="Comfort" />
                </div>
              </div>
            </div>
            <div className={`${styles.PointThreeBudget} row`}>
              <div className={`${styles.comfortDiv} col-6`}>
                <div className={styles.BudgetImg}>
                  <img src={BudgetImg} alt="Comfort" />
                </div>
              </div>
              <div className={`${styles.PointOneText} col-6`}>
                <div>
                  <h3>Budget Friendly</h3>
                  <p>
                    Affordable coliving without compromising on quality - your
                    budget-friendly solution for a comfortable home away from
                    home
                  </p>
                </div>
              </div>
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
          <div className={`${styles.amenitiesMobDiv} row`}>
            <div className={`${styles.amenitiesMobItem} col-md-3`}>
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
            <div className={`${styles.amenitiesMobItem} col-md-3`}>
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
            <div className={`${styles.amenitiesMobItem} col-md-3`}>
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
            <div className={`${styles.amenitiesMobItem} col-md-3`}>
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
          <div className="row mob_hide">
            <div className={styles.amenitiesContainer}>
              <div className={styles.amenitiesBox}>
                <img src={loctionImg} alt="location" />
                <h4>Premium Location</h4>
              </div>
              <div className={styles.amenitiesBox}>
                <img src={ChefImg} alt="location" />
                <h4>Experience Chef</h4>
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
          <div className="row mob_hide">
            <div className={styles.amenitiesContainer}>
              <div className={styles.amenitiesBox}>
                <img src={cctvCameraImg} alt="location" />
                <h4>CCTV Surveillance</h4>
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
              <p className="mob_hide">
                Explore our visual narrative, showcasing the vibrant heart of
                our coliving spaces. Experience the essence of community living
                in every snapshot
              </p>
            </div>
          </div>
          <div className="row">
            <div className={styles.gallery}>
              <ImageGallery
                image1={propertiesData[0]?.images[0]?.image}
                image2={propertiesData[1]?.images[1]?.image}
                image3={propertiesData[0]?.images[2]?.image}
                image4={propertiesData[1]?.images[4]?.image}
                image5={propertiesData[0]?.images[4]?.image}
                image6={propertiesData[1]?.images[5]?.image}
                image7={propertiesData[0]?.images[5]?.image}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactFormSection}>
        <div className="container">
          <div className={`${styles.contactForm} row`}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
