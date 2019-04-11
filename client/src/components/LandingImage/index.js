import React from "react";
import "./style.css";

function LandingImage() {
  return (
    <div className="col-md-6 col-xs-12">
        <img className="landingimage w-100" src={require('./images/usersthink.jpg')} />
    </div>
  );
}

export default LandingImage;