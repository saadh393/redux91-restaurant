import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { isIntoCart } from "../../helper/helper";
import { actionCreators } from "../../state";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  const { id, name, price, image } = data;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <img src={require("../../images/" + image + ".png").default} className={styles.image} alt="" />
        <div className={styles.titleprice}>
          <h2 className={styles.title}>{name}</h2>
          <h2 className={styles.price}>${price}</h2>
        </div>
        <p className={styles.description}>
          Lorem sit ipsum dolor sit amet consectetur, door adipisicing amet consectetur amet elit. Molestias, quasi.
          consectetur, adipisicing.
        </p>
      </div>

      {isIntoCart(cart, id) ? (
        <button className={styles.btn} onClick={() => removeFromCart(id)} style={{ background: "#ff335c" }}>
          Remove From Cart
        </button>
      ) : (
        <button className={styles.btn} onClick={() => addToCart(data)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Card;
