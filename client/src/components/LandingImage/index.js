import React from "react";
import "./style.css";
import image1 from "./images/1.jpg";
import image3 from "./images/3.jpg";
import image5 from "./images/5.jpg";

function LandingImage() {
  return (
      <div className="col-md-6 col-xs-12" id="landingCarousel">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image5} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingImage;