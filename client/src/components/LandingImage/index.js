import React from "react";
import "./style.css";

function LandingImage() {
  return (
    <div>
        <img className="landingimage" src={require('./images/usersthink.jpg')} />
    </div>
  );
}

export default LandingImage;