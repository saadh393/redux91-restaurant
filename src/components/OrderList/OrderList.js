/*  
💥 Title : OrderList
📃 Description : Order List will show the orders
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { totalCost } from "../../helper/helper";
import { actionCreators } from "../../state";
import ListCard from "./ListCard";
import emptyImage from "../../images/empty.svg";
import "./Order.css";

const OrderList = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { checkout } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <section className="orderlist-wrapper">
        <div className="orderlist-card">
          <h4>Your Order List</h4>

          {cart.length ? (
            <div className="orderlist-lists">
              {cart.map((item) => (
                <ListCard data={item} />
              ))}
              <div className="orderlist-total">
                <h4>Total : ${totalCost(cart)}</h4>

                <button onClick={() => checkout()}>Checkout</button>
              </div>
            </div>
          ) : (
            <img src={emptyImage} />
          )}
        </div>
      </section>
    </>
  );
};

export default OrderList;
