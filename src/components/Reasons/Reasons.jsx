import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right">
        <div>
          <span className="stroke-text">Why </span>
          <span>us?</span>
        </div>

        <div className="details">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <div className="partners">
          <span>Our Partners</span>
          <div className="partners-icons">
            <img src={nike} alt="" />
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
