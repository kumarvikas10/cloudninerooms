import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import image1 from "../../data/Gallery/1.jpg";
import image2 from "../../data/Gallery/2.jpg";
import image3 from "../../data/Gallery/3.jpg";
import image4 from "../../data/Gallery/4.jpg";
import image5 from "../../data/Gallery/5.jpg";
import image6 from "../../data/Gallery/6.jpg";
import image7 from "../../data/Gallery/7.jpg";
import styles from "./MyGallery.module.css";

const MyGallery = () => (
  <Gallery>
    <div className={styles.gallery}>
      <div className={`${styles.galleryDiv} ${styles.w4} ${styles.rowSpan}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image1} thumbnail={image1} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image1}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w4}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image2} thumbnail={image2} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image2}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w4}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image3} thumbnail={image3} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image3}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w3}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image4} thumbnail={image4} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image4}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w4} ${styles.rowSpan}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image5} thumbnail={image5} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image5}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w2}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image6} thumbnail={image6} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image6}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <div className={`${styles.galleryDiv} ${styles.w3} ${styles.w12}`}>
        <div className={styles.galleryItem}>
          <div className={styles.galleryImg}>
            <Item original={image7} thumbnail={image7} width="850" height="500">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image7}
                  alt="image1"
                  className="img-fluid"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
    </div>
  </Gallery>
);

export default MyGallery;

// const MyGallery = () => (
//   <Gallery className={styles.gallery}>
//     <div className={styles.galleryDiv}>
//       <Item original={image1} thumbnail={image1} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image1} alt="image1" className="img-fluid" />
//         )}
//       </Item>
//       <Item original={image2} thumbnail={image2} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image2} alt="image2" className="img-fluid" />
//         )}
//       </Item>
//       <Item original={image3} thumbnail={image3} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image3} alt="image2" className="img-fluid"  />
//         )}
//       </Item>
//       <Item original={image4} thumbnail={image4} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image4} alt="image1" className="img-fluid" />
//         )}
//       </Item>
//       <Item original={image5} thumbnail={image5} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image5} alt="image2" className="img-fluid" />
//         )}
//       </Item>
//       <Item original={image6} thumbnail={image6} width="1280" height="960">
//         {({ ref, open }) => (
//           <img ref={ref} onClick={open} src={image6} alt="image2" className="img-fluid"  />
//         )}
//       </Item>
//     </div>
//   </Gallery>
// );
