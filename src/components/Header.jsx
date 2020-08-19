import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a className="header-logo" href="#">
        <img className="header-logo__image" src="./img/png/logo.png" alt="" />
      </a>
      <div className="header-nav">
        <ul className="header-nav__list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Serials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
