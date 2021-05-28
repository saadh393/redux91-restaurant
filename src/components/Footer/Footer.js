/*  
💥 Title : Footer
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import BrandInfo from "./BrandInfo";
import Categories from "./Categories";
import style from "./Footer.module.css";
import StayConnected from "./StayConnected";
import UseFullinks from "./UseFullinks";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footerWraper}>
          <BrandInfo />
          <UseFullinks />
          <Categories />
          <StayConnected />
        </div>
      </footer>
    </>
  );
};

export default Footer;
