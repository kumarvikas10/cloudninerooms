import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import styles from "./MyGallery.module.css";

const MyGallery = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) => (
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
