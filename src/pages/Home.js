/*  
💥 Title : Home
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/

import Footer from "../components/Footer/Footer";
import OtherFoods from "../components/OtherFoods/OtherFoods";
import Header from "../components/Header/Header";
import BestBurger from "../components/BestBurger/BestBurger";

/*  🔥 React Dependencies 🔥 */

const Home = () => {
  return (
    <>
      <Header />
      <BestBurger />
      <OtherFoods />
      <Footer />
    </>
  );
};

export default Home;
