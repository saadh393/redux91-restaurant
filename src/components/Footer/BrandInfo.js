/*  
💥 Title : BrandInfo
📃 Description : Left SIde Branding
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import style from "./Footer.module.css";
import logo from "../../images/Logo.png";

const BrandInfo = () => {
  return (
    <>
      <div className={style.brandinfo}>
        <img src={logo} />
        <h2>Redux91 Restaurant</h2>

        <p>
          Level-4, 34, Awal Centre, Banani, Dhaka <br />
          Official: web@programming-hero.com <br />
          Helpline : 01309722827 <br />
          (Available : 09:00am to 7:00pm)
        </p>
      </div>
    </>
  );
};

export default BrandInfo;
