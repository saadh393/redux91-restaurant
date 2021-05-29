/*  
💥 Title : Nav
📃 Description : Nav bar
✍ Author : Saad Hasan
⌚ Date : 29/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "./Nav.css";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid" className="header-nav">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
              <a class="nav-link" href="#">
                Cart ({cart.length})
              </a>
              <Link to="/order" class="nav-link order-button" href="#">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
