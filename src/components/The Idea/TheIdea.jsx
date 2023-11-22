import style from "../About Us/AboutUs.module.css";
import styles from "./TheIdea.module.css";
import theIdea1 from "../../data/the-idea1.png";
import theIdea2 from "../../data/book-a-visit.png";
import theIdea3 from "../../data/welcome-cloud-nine.png";
import valueBanner from "../../data/banner.jpg";
import ContactFormModal from "../contact-form-modal/ContactFormModal";

function TheIdea() {
  return (
    <>
      <div className={styles.idea_bg}>
        <div className="container">
          <h1 className={style.main_heading}>
            Comfortable Communities At <br className="mob_hide" /> Cloud Nine
            Rooms
          </h1>
        </div>
      </div>
      <div className={`container ${style.mt100}`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p style={{ color: "#fc4102", fontWeight: "500" }}>Book a Visit</p>
            <h2 className={styles.heading}>
              Explore Our Available Rooms,
              <br className="mob_hide" />
              Amenities and Pricing
            </h2>
            <p>
              Visit our website at{" "}
              <span style={{ color: "#fc4102", fontWeight: "500" }}>
                CloudNineRooms
              </span>{" "}
              and explore our available rooms, amenities, and pricing. Select
              your desired room type, check for availability on your preferred
              dates, and review the pricing options.
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles.cloudNineRooms}>
              <img src={theIdea1} alt="book cloud nine room" />
            </div>
          </div>
        </div>
        <div className={`row align-items-center ${style.mt100}`}>
          <div className="col-md-6 mob_hide">
            <div className={`text-start ${styles.cloudNineRooms}`}>
              <img src={theIdea2} alt="book cloud nine room" />
            </div>
          </div>
          <div className="col-md-6">
            <p style={{ color: "#fc4102", fontWeight: "500" }}>
              Book your stay
            </p>
            <h2 className={styles.heading}>
              Reserve Your Stay: Once You've,
              <br />
              Found The Perfect Room
            </h2>
            <p>
              Click one the "Book a visit" button. You'll be prompted to enter
              your details, including your name, and contact details. Make sure
              to double-check your reservation details to ensure accuracy.
            </p>
          </div>
          <div className="col-md-6 desk_hide">
            <div className={`text-start ${styles.cloudNineRooms}`}>
              <img src={theIdea2} alt="book cloud nine room" />
            </div>
          </div>
        </div>
        <div className={`row align-items-center ${style.mt100}`}>
          <div className="col-md-6">
            <p style={{ color: "#fc4102", fontWeight: "500" }}>
              Welcome to Cloud Nine Rooms
            </p>
            <h2 className={styles.heading}>
              Confirmation And Welcome: After,
              <br />
              Completing The Booking Process
            </h2>
            <p>
              Our team will be ready to welcome you to Cloud Nine Rooms on your
              scheduled arrival date. You can also reach out to our customer
              support for any special requests or additional information.
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles.cloudNineRooms}>
              <img src={theIdea3} alt="book cloud nine room" />
            </div>
          </div>
        </div>
        <div className={`${style.mt100} ${style.banner}`}>
          <img src={valueBanner} alt="banner" className={style.banner_image} />
          <div className={style.banner_text}>
            <h2 className={styles.heading}>
              Find The Best <span style={{ color: "#FC4102" }}>Rooms</span> For
              Stay
            </h2>
            <p className="mob_hide">
              Where finding the best rooms for your stay is effortless
            </p>
            <ContactFormModal modalId={"exampleModal3"} isBanner={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TheIdea;
