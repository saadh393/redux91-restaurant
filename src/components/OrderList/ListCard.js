/*  
💥 Title : ListCard
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { actionCreators } from "../../state";

const ListCard = ({ data }) => {
  const { name, image, id, price, quantity } = data;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { addQuantity, removeQuantity } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div className="listcard-wrapper">
        <div className="imageAndName">
          <img src={require("../../images/" + image + ".png").default} />
          <h4>{name}</h4>
        </div>

        <div className="calculation justifyEnd">
          <button className="blue" onClick={() => addQuantity(id)}>
            +
          </button>
          <input type="number" value={quantity} />
          <button className="red" onClick={() => removeQuantity(id)}>
            -
          </button>
        </div>

        <div className="price">
          <h4>${price * quantity}</h4>
        </div>
      </div>
    </>
  );
};

export default ListCard;
