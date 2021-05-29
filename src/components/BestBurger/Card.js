import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <img src={props.img} className={styles.image} />
        <div className={styles.titleprice}>
          <h2 className={styles.title}>{props.title}</h2>
          <h2 className={styles.price}>${props.price}</h2>
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
      <button className={styles.btn}>Buy Now</button>
    </div>
  );
};

export default Card;
