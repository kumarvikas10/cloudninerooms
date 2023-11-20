import React from "react";
import Slider from "react-slick";
import {FaLocationDot} from 'react-icons/fa6'
import styles from './Carousel.module.css';
import propertyImage from '../../data/property-1.png';
import ContactFormModal from "../contact-form-modal/ContactFormModal";

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
              {/* <button
                type="button"
                class={`${styles.visitBtn} btn btn-outline-primary`}
              >
                Book a Visit
              </button> */}
              <ContactFormModal />
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

// import { useState } from "react";
// import ReactSimplyCarousel from "react-simply-carousel";
// import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
// import {FaLocationDot} from 'react-icons/fa6'
// import styles from './Carousel.module.css';
// import propertyImage from '../../data/property-1.png';

// function Carousel() {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   return (
//     <div className={styles.Carousel}>
//       <ReactSimplyCarousel
//         activeSlideIndex={activeSlideIndex}
//         onRequestChange={setActiveSlideIndex}
//         itemsToShow={1}
//         itemsToScroll={1}
//         forwardBtnProps={{
//           //here you can also pass className, or any other button element attributes
//           style: {
//             alignSelf: "center",
//             background: "#FC4102",
//             border: "none",
//             borderRadius: "50%",
//             color: "white",
//             cursor: "pointer",
//             fontSize: "20px",
//             height: 30,
//             lineHeight: 1,
//             textAlign: "center",
//             width: 30,
//           },
//           children: <span><IoIosArrowForward /></span>,
//         }}
//         backwardBtnProps={{
//           //here you can also pass className, or any other button element attributes
//           style: {
//             alignSelf: "center",
//             background: "#FC4102",
//             border: "none",
//             borderRadius: "50%",
//             color: "white",
//             cursor: "pointer",
//             fontSize: "20px",
//             height: 30,
//             lineHeight: 1,
//             textAlign: "center",
//             width: 30,
//           },
//           children: <span><IoIosArrowBack /></span>,
//         }}
//         responsiveProps={[
//           {
//             itemsToShow: 3,
//             itemsToScroll: 1,
//             // minWidth: 768,
//             // maxWidth: 1300,
//           },
//         ]}
//         speed={400}
//         easing="linear"
//       >
//         <div className={styles.CarouselBox}>
//             <img src= {propertyImage} className={`${styles.CarouselImage} img-fluid`}  alt="property"/>
//             <div className={styles.CarouselText}>
//                 <h4>Cloud Nine Rooms Girls PG</h4>
//                 <p><FaLocationDot className={styles.loction}/> Sector 45, Gurugram</p>
//                 <div className={styles.CarouselBtn}>
//                     <button type="button" class={`${styles.exploreBtn} btn btn-primary`}>Explore Now</button>
//                     <button type="button" class={`${styles.visitBtn} btn btn-outline-primary`}>Book a Visit</button>
//                 </div>
//             </div>
//         </div>
//         <div className={styles.CarouselBox}>
//             <img src= {propertyImage} className={`${styles.CarouselImage} img-fluid`} alt="property" />
//             <div className={styles.CarouselText}>
//                 <h4>Cloud Nine Rooms Girls PG</h4>
//                 <p><FaLocationDot className={styles.loction}/> Sector 45, Gurugram</p>
//                 <div className={styles.CarouselBtn}>
//                     <button type="button" class={`${styles.exploreBtn} btn btn-primary`}>Explore Now</button>
//                     <button type="button" class={`${styles.visitBtn} btn btn-outline-primary`}>Book a Visit</button>
//                 </div>
//             </div>
//         </div>
//         <div className={styles.CarouselBox}>
//             <img src= {propertyImage} className={`${styles.CarouselImage} img-fluid`} alt="property" />
//             <div className={styles.CarouselText}>
//                 <h4>Cloud Nine Rooms Girls PG</h4>
//                 <p><FaLocationDot className={styles.loction}/> Sector 45, Gurugram</p>
//                 <div className={styles.CarouselBtn}>
//                     <button type="button" class={`${styles.exploreBtn} btn btn-primary`}>Explore Now</button>
//                     <button type="button" class={`${styles.visitBtn} btn btn-outline-primary`}>Book a Visit</button>
//                 </div>
//             </div>
//         </div>
//         <div className={styles.CarouselBox}>
//             <img src= {propertyImage} className={`${styles.CarouselImage} img-fluid`} alt="property" />
//             <div className={styles.CarouselText}>
//                 <h4>Cloud Nine Rooms Girls PG</h4>
//                 <p><FaLocationDot className={styles.loction}/> Sector 45, Gurugram</p>
//                 <div className={styles.CarouselBtn}>
//                     <button type="button" class={`${styles.exploreBtn} btn btn-primary`}>Explore Now</button>
//                     <button type="button" class={`${styles.visitBtn} btn btn-outline-primary`}>Book a Visit</button>
//                 </div>
//             </div>
//         </div><div className={styles.CarouselBox}>
//             <img src= {propertyImage} className={`${styles.CarouselImage} img-fluid`} alt="property" />
//             <div className={styles.CarouselText}>
//                 <h4>Cloud Nine Rooms Girls PG</h4>
//                 <p><FaLocationDot className={styles.loction}/> Sector 45, Gurugram</p>
//                 <div className={styles.CarouselBtn}>
//                     <button type="button" class={`${styles.exploreBtn} btn btn-primary`}>Explore Now</button>
//                     <button type="button" class={`${styles.visitBtn} btn btn-outline-primary`}>Book a Visit</button>
//                 </div>
//             </div>
//         </div>
//       </ReactSimplyCarousel>
//     </div>
//   );
// }

// export default Carousel;
