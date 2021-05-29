import React from "react";
import Card from "./Card";
import styles from "./BestBurger.module.css";
import { products } from "../../util/util";

const BestBurger = () => {
  return (
    <section className={styles.bestBurger}>
      <h2 className={styles.sectionTitle}>Best Burger</h2>

      <div className={styles.wrapper}>
        {products.map((burger) => burger.type === "burger" && <Card data={burger} key={burger.id} />)}
      </div>
    </section>
  );
};

export default BestBurger;
