import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.OuterCircle}>
        <div className={styles.InnerCircle}></div>
      </div>
      <h2 className={styles.Title}>{props.title}</h2>
      <p className={styles.Content}>{props.content}</p>
    </div>
  );
};

export default Card;
