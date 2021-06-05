/*  
💥 Title : CardOtherFood
📃 Description : Card of the Other Foods
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { isIntoCart } from "../../helper/helper";
import { actionCreators } from "../../state";
import style from "./OtherFood.module.css";

const CardOtherFood = ({ data }) => {
  const { id, name, price, image } = data;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch);

  console.log(cart);
  return (
    <>
      <div className={style.card}>
        <img alt="" src={require("../../images/" + image + ".png").default} />
        <div className={style.priceandtitle}>
          <h3>{name}</h3>
          <h2>${price}</h2>
        </div>
        <p>Lorem ipsum dolor consectetur sit amet consectetur adipisicing elit. Maxime mollitia, molestiae </p>
        {isIntoCart(cart, id) ? (
          <button onClick={() => removeFromCart(id)} style={{ background: "#ff335c" }}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={() => addToCart(data)}>Add To Cart</button>
        )}
      </div>
    </>
  );
};

export default CardOtherFood;
