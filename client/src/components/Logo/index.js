import React from "react";
import "./style.css";

function Logo() {
  return (
    <div>
        <img className="logo" src={require ("./images/logo2b.png")} />
    </div>
  );
}

export default Logo;