import React from "react";
import "./style.css";
import logo from "./images/logo2b.png"

function Logo() {
  return (
    <div className="row" id="logocomponent">
      <div className="col-12">
        <img className="logo float-left" id="logo" src={logo} />
      </div>
    </div>
  );
}

export default Logo;