/*  
💥 Title : OrderList
📃 Description : Order List will show the orders
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import ListCard from "./ListCard";
import "./Order.css";

const OrderList = () => {
  return (
    <>
      <section className="orderlist-wrapper">
        <div className="orderlist-card">
          <h4>Your Order List</h4>

          <div className="orderlist-lists">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderList;
