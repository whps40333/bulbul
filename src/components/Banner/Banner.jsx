import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props) => {
  return (
    <div className={styles.Banner}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Banner;
