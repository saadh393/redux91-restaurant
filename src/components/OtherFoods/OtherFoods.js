/*  
💥 Title : OtherFoods
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import CardOtherFood from "./CardOtherFood";
import style from "./OtherFood.module.css";
import { products } from "../../util/util";

const OtherFoods = () => {
  return (
    <>
      <section className={style.otherFoodsWrapper}>
        <h4>Our Other Foods</h4>

        <div className={style.cardWrapper}>
          {products.map((product) => product.type == "others" && <CardOtherFood data={product} key={product.id} />)}
        </div>
      </section>
    </>
  );
};

export default OtherFoods;
