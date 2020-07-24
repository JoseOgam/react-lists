import React from "react";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <span className="navBar-toggle" id="js-toggle">
          <FontAwesomeIcon icon={faChartBar} />
        </span>
        <div>
          <h3>OnlinkneShop</h3>
        </div>
        <div className="main-nav" id="js-main">
          <a href="#home">Home</a>
          <a href="#home">Cart</a>
          <a href="#home">Login/Register</a>
          <a href="#home">Contact</a>
        </div>
      </nav>
    </div>
  );
};
let mainNav = document.getElementById("js-main");
let navToggle = document.getElementById("js-toggle");

mainNav.addEventListener("click", () => {
  navToggle.classList.toggle("active");
});
export default Header;
