import React from "react";
import "./style.css";

function LandingImage() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={require ("./images/1.jpg")} class="d-block" />
        </div>
        <div class="carousel-item">
          <img src={require ("./images/2.jpg")} class="d-block" />
        </div>
        <div class="carousel-item">
          <img src={require ("./images/4.jpg")} class="d-block" />
        </div>
      </div>
    </div>
  );
}
        
export default LandingImage;