import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <div>
          <h3>OnlinkneShop</h3>
        </div>
        <div>
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
