import style from "../About Us/AboutUs.module.css";
import styles from "./TheIdea.module.css";

function TheIdea() {
  return (
    <>
      <div className={styles.idea_bg}>
        <div className="container">
          <h1 className={style.main_heading}>
            Comfortable Communities At <br /> Cloud Nine Rooms
          </h1>
        </div>
      </div>
    </>
  );
}

export default TheIdea;
