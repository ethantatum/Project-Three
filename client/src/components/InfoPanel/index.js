import React from "react";
import "./style.css";

function InfoPanel() {
    return (
    <div className="mainCont">
        <div className="container infoCont">
            <div className="imgCont">
            <img src={require('./images/com.svg')} />
            <p>Allows quick and easy communication between instructors and parents</p>
            </div>
            <div className="imgCont">
            <img src={require('./images/hum.svg')}/>
            <p>Easily track behaviors throughout the day</p>
            </div>
            <div className="imgCont">
            <img src={require('./images/cal.svg')}/>
            <p>Track reinforcerment frequency and effectiveness</p>
            </div>
        </div>
    </div>
    );
}
  
export default InfoPanel;