import React from "react";
import Card from "./Card";
import styles from "./CardList.module.scss";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default CardList;
