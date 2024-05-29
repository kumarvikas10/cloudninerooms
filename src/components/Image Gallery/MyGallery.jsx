import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import styles from "./MyGallery.module.css";

const MyGallery = ({ images }) => (
  <Gallery>
    <div className={styles.gallery}>
      {images && images.map((item, index) => (
        <div key={index} className={`${styles.galleryDiv} ${styles.w1}`}>
          <div className={styles.galleryItem}>
            <div className={styles.galleryImg}>
              <Item original={item.image || item} thumbnail={item.image || item} width="850" height="500">
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={item.image || item}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Gallery>
);

export default MyGallery;


// import "photoswipe/dist/photoswipe.css";
// import { Gallery, Item } from "react-photoswipe-gallery";
// import styles from "./MyGallery.module.css";

// const MyGallery = ({
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
//   image10,
//   image11,
// }) => (
//   <Gallery>
//     <div className={styles.gallery}>
//       <div className={`${styles.galleryDiv} ${styles.w4} ${styles.rowSpan}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image1} thumbnail={image1} width="1280" height="960">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image1}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w4}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image2} thumbnail={image2} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image2}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w4}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image3} thumbnail={image3} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image3}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w3}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image4} thumbnail={image4} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image4}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w4} ${styles.rowSpan}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image5} thumbnail={image5} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image5}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w2}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image6} thumbnail={image6} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image6}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w3} ${styles.w12}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image7} thumbnail={image7} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image7}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w3}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image8} thumbnail={image8} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image8}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w4} ${styles.rowSpan}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image9} thumbnail={image9} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image9}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w2}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image10} thumbnail={image10} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image10}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.galleryDiv} ${styles.w3} ${styles.w12}`}>
//         <div className={styles.galleryItem}>
//           <div className={styles.galleryImg}>
//             <Item original={image11} thumbnail={image11} width="850" height="500">
//               {({ ref, open }) => (
//                 <img
//                   ref={ref}
//                   onClick={open}
//                   src={image11}
//                   alt="cloud nine rooms"
//                   className="img-fluid"
//                 />
//               )}
//             </Item>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Gallery>
// );

// export default MyGallery;
