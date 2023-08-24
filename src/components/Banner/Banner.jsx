import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props) => {
  const { backgroundImage, title, description } = props;

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`, // 使用傳遞的背景圖片URL
    backgroundSize: "200%",
    backgroundPosition: "right 35% bottom 45%",
    zIndex: 0,
    width: "100%",
  };

  return (
    <div className={styles.Banner} style={bannerStyle}>
      <div className={styles.Content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
