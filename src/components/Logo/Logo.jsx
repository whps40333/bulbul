import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.Background}>
      <div className={styles.Border}>
        <div className={styles.Body}>
          <div className={styles.Eyes}></div>
        </div>
      </div>
      <div className={styles.Mouth}></div>
    </div>
  );
};

export default Logo;
