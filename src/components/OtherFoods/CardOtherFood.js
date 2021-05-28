/*  
💥 Title : CardOtherFood
📃 Description : Card of the Other Foods
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import style from "./OtherFood.module.css";
import image from "../../images/product4.png";

const CardOtherFood = () => {
  return (
    <>
      <div className={style.card}>
        <img src={image} />
        <h3>Hafudog</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae </p>
        <button>Order Now</button>
      </div>
    </>
  );
};

export default CardOtherFood;
