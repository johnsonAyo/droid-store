import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
