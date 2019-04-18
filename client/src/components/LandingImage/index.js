import React from "react";
import "./style.css";
import image3 from "./images/3.jpg";
import image5 from "./images/5.jpg";
import image7 from "./images/7.jpg";

function LandingImage() {
  return (
      <div className="col-md-6 col-xs-12" id="landingCarousel">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image3} alt="girl-writing" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image5} alt="girl-with-teacher" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image7} alt="boy-smiling" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingImage;