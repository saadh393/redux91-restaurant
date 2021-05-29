import React from "react";
import image from "../../images/1.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <main>
        <div className="content">
          <h2>Redux 91</h2>
          <h1>Restaurent</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <img src={image} alt="" />
      </main>
    </header>
  );
};

export default Header;
