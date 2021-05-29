/*  
💥 Title : ListCard
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useState } from "react";
import image from "../../images/product5.png";

const ListCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="listcard-wrapper">
        <div className="imageAndName">
          <img src={image} />
          <h4>Burger Name</h4>
        </div>

        <div className="calculation justifyEnd">
          <button className="blue" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
          <input type="number" value={quantity} />
          <button className="red" onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
            -
          </button>
        </div>

        <div className="price">
          <h4>$50</h4>
        </div>
      </div>
    </>
  );
};

export default ListCard;
