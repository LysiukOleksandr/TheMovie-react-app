import React from "react";
import { Navigation } from "./";
import { Link } from "react-router-dom";
import headerLogo from "../assets/img/logo.png";
const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo" to="/">
        <img className="header-logo__image" src={headerLogo} alt="" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
