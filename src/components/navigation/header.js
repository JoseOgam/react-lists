import React from "react";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <span className="navBar-toggle">
          <FontAwesomeIcon icon={faChartBar} />
        </span>
        <div>
          <h3>OnlinkneShop</h3>
        </div>
        <div className="main-nav">
          <a href="#home">Home</a>
          <a href="#home">Cart</a>
          <a href="#home">Login/Register</a>
          <a href="#home">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
