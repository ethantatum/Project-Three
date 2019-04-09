import React from "react";
import "./style.css";

function InfoPanel() {
    return (
    <div className="mainCont">
        <div className="container infoCont">
            <div className="imgCont">
            <img src={require('./images/com.svg')} />
            <p>Allows for easier communication between  instructors and parents.</p>
            </div>
            <div className="imgCont">
            <img src={require('./images/hum.svg')}/>
            <p>Made for teachers and caretakers to easily track behaviors.</p>
            </div>
            <div className="imgCont">
            <img src={require('./images/cal.svg')}/>
            <p>Tracks when a reinforcer is given to a child and at what time they are given.</p>
            </div>
        </div>
    </div>
    );
}
  
export default InfoPanel;