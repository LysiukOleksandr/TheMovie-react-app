import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="header-nav">
      <ul className="header-nav__list">
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>{/* <NavLink to=''>Serials</NavLink> */}</li>
      </ul>
    </div>
  );
};

export default Navigation;
