import React from "react";
import "./style.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";

function LandingImage() {
  return (
    <div className="row" id="landingCarousel">
      <div className="col-6">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image2} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingImage;