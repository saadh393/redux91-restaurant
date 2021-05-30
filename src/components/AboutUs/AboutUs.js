/*  
💥 Title : AboutUs
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import style from "./AboutUs.module.css";

const AboutUs = () => {

  return (
    <>
      <section data-testid="AboutUs-1" className={style.aboutWrapper}>
        <div className={style.left}></div>
        <div className={style.right}>
          <h4>WELCOME</h4>
          <h2>About</h2>
          <h2>Redux91 Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
          </p>
          <button>GET DIRECTION</button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
