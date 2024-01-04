import styles from "./AboutUs.module.css";
import mission1 from "../../data/our-mission.jpg";
import story from "../../data/our-story.jpg";
import story1 from "../../data/story1.jpg";
import story2 from "../../data/story2.jpg";
import story3 from "../../data/story3.jpg";
import story4 from "../../data/story4.jpg";
import ourValues from "../../data/our-values.jpg";
import valueBanner from "../../data/banner.jpg";
import ReadMoreLess from "../read-more-less-btn/ReadMoreLess";
import ContactFormModal from "../contact-form-modal/ContactFormModal";

function AboutUs() {
  const missionText = `At Cloud Nine Rooms, our mission is to create a haven where
  comfort, community, and modern living converge to provide a
  seamless co-living experience. We are dedicated to offering a
  vibrant yet cozy living environment in the heart of Gurugram. Our
  commitment is to facilitate the diverse needs of our residents, be
  it solo travelers exploring new horizons or remote professionals
  seeking a home away from home. We aim to continuously redefine the
  standards of co-living, fostering connections and shared
  experiences that turn a place to live into a place to belong`;

  const storyText = `Founded with a passion for reimagining modern living, Cloud Nine Rooms is
      not just a co-living space; it's a lifestyle. Our journey began with a
      simple yet powerful vision: to provide a home away from home where comfort
      and community seamlessly intertwine.

      Nestled in the heart of Gurugram, our story is woven into the very fabric
      of this vibrant city. We started this venture because we realized the need
      for a place where people from diverse backgrounds and walks of life could
      come together, share experiences, and feel part of a community.`;

  return (
    <>
      <div className={styles.about_bg}>
        <div className="container">
          <h1 className={styles.main_heading}>
            Where Comfort Meets Community in <br className="mob_hide" /> The
            Heart Of Gurugram
          </h1>
        </div>
      </div>
      <div className={`${styles.about_container} container`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className={styles.heading_h2}>Our Mission</h2>
            <p className={styles.mission_p}>
              <ReadMoreLess text={missionText} maxLength={238} />
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles.mission_img}>
              <img src={mission1} alt="mission1-cloud-nine" />
            </div>
          </div>
        </div>
        <div className={`row align-items-center ${styles.mt100}`}>
          <div className="col-md-6 mob_hide">
            <div className={`${styles.mission_img} text-start`}>
              <img src={story} alt="mission1-cloud-nine" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className={styles.heading_h2}>Our Story</h2>
            <p className={styles.mission_p}>
              <ReadMoreLess text={storyText} maxLength={255} />
            </p>
          </div>
          <div className="col-md-6 desk_hide">
            <div className={`${styles.mission_img} text-start`}>
              <img src={story} alt="mission1-cloud-nine" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.our_team_bg}>
        <div className={`${styles.our_team_container} container`}>
          <h2 className={styles.heading_team}>Member Stories</h2>
          <div className={`row ${styles.team_row}`}>
          <div className="col-3 w65">
              <div className={styles.team_card}>
                <img
                  src={story1}
                  class={`card-img-top ${styles.card_img}`}
                  alt="team1"
                />
                <div className={styles.story_text}>
                  <h5>“Discover a sense of family wherever you are with Cloud Nine Rooms”</h5>
                </div>
              </div>
            </div>
            <div className="col-3 w65">
              <div className={styles.team_card}>
                <img
                  src={story2}
                  class={`card-img-top ${styles.card_img}`}
                  alt="team1"
                />
                <div className={styles.story_text}>
                  <h5>“You meet people that you wouldn’t meet in real life”</h5>
                </div>
              </div>
            </div>
            <div className="col-3 w65">
              <div className={styles.team_card}>
                <img
                  src={story3}
                  class={`card-img-top ${styles.card_img}`}
                  alt="team1"
                />
                <div className={styles.story_text}>
                  <h5>"Share enriching experiences with people from diverse backgrounds"</h5>
                </div>
              </div>
            </div>
            <div className="col-3 w65">
              <div className={styles.team_card}>
                <img
                  src={story4}
                  class={`card-img-top ${styles.card_img}`}
                  alt="team1"
                />
                <div className={styles.story_text}>
                  <h5>“Cloud nine rooms truly fosters a feeling of community and family”</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.mt100}`}>
        <h2 className={`text-center mb-0 ${styles.heading_team} mob_hide`}>
          Our <span>Values</span>
        </h2>
        <p className={`mob_hide ${styles.subtitles}`}>
          Embracing Excellence, Building Connections, and Fostering Comfort.
        </p>
        <div className={`row ${styles.our_values_row} mob_hide`}>
          <div className="col-md-6">
            <div className={styles.ourValues_img}>
              <img src={ourValues} alt="our values" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <div className={`card ${styles.values_card}`}>
                  <p className={styles.numbers}>12,000+</p>
                  <p>
                    We're committed to enhancing the quality of life for over
                    12000 residents and still counting.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className={`card ${styles.values_card}`}>
                  <p className={styles.numbers}>600+</p>
                  <p>
                    With over 600 connections made within our community, forming
                    meaningfull relationships, and creating a support network.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-6">
                <div className={`card ${styles.values_card}`}>
                  <p className={styles.numbers}>95%</p>
                  <p>
                    Your comfort is our top priority. We continuously strive to
                    provide an environment where you can truly relax, recharge,
                    and feel at home.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className={`card ${styles.values_card}`}>
                  <p className={styles.numbers}>100%</p>
                  <p>
                    Our commitment to excellence ensures a consistent,
                    high-quality living experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.mt100} ${styles.banner}`} style={{ backgroundImage: `url(${valueBanner})` }}>
          {/* <img src={valueBanner} alt="banner" className= {`${style.banner_image} img-fluid`} /> */}
          <div className={styles.banner_text}>
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

export default AboutUs;
