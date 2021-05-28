import React from 'react';
import Card from './Card';
import styles from './BestBurger.module.css';
import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';


const BestBurger = () => {
    return (
        <div className={styles.wrapper}>
      <Card
        img={product1}
        title="Burger1"
        price="40"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, quasi."
      />

      <Card
        img={product2}
        title="Burger2"
        price="40"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, quasi."
      />

      <Card
        img={product3}
        title="Burger3"
        price="40"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, quasi."
      />
    </div>
    );
};

export default BestBurger;