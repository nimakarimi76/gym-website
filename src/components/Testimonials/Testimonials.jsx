import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  const reviewCounts = testimonialsData.length;

  const handleLeft = () => {
    selected === 0
      ? setSelected(reviewCounts - 1)
      : setSelected((prev) => prev - 1);
  };
  const handleRight = () => {
    selected === reviewCounts - 1
      ? setSelected(0)
      : setSelected((prev) => prev + 1);
  };

  return (
    <div className="testimonials">
      <div className="left-t">
        <div className="testimonials-header">
          <h1>Testimonials</h1>
          <span className="stroke-text">What they </span>
          <span>say about us</span>
        </div>

        <div className="reviews">
          <p>{testimonialsData[selected].review}</p>
          <span>{testimonialsData[selected].name}</span>
          <span> - {testimonialsData[selected].status}</span>
        </div>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img
          src={testimonialsData[selected].image}
          alt="reviewer profile pic"
        />
        <div className="arrows">
          <img onClick={() => handleLeft()} src={leftArrow} />
          <img onClick={() => handleRight()} src={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
