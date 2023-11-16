import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./ReadMoreLess.module.css";

const ReadMoreLess = ({ text, maxLength }) => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const displayText = isFullTextVisible
    ? text
    : `${text.slice(0, maxLength)}...`;

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={toggleTextVisibility} className={styles.read_btn}>
        {isFullTextVisible ? (
          <>
            Read Less{" "}
            <MdOutlineKeyboardDoubleArrowRight className={styles.icon} />
          </>
        ) : (
          <>
            Read More{" "}
            <MdOutlineKeyboardDoubleArrowRight className={styles.icon} />
          </>
        )}
      </button>
    </div>
  );
};

export default ReadMoreLess;
