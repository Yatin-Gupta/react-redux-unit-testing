import React from "react";
import logo from "../assets/logo.png";
import "./style.scss";

function Header() {
  return (
    <React.Fragment>
      <header data-test="headerComponent">
        <div className="wrap">
          <div className="logo">
            <img
              src={logo}
              width="50"
              height="50"
              alt="logo"
              data-test="logoImg"
            />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
