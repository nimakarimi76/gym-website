import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import { motion } from "framer-motion";

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

  const transition = {
    type: "spring",
    duration: 3,
  };

  return (
    <div className="testimonials">
      <div className="left-t">
        <div className="testimonials-header">
          <h1>Testimonials</h1>
          <span className="stroke-text">What they </span>
          <span>say about us</span>
        </div>

        <motion.div
          className="reviews"
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          transition={transition}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <p>{testimonialsData[selected].review}</p>
          <span>{testimonialsData[selected].name}</span>
          <span> - {testimonialsData[selected].status}</span>
        </motion.div>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt="reviewer profile pic"
          key={selected}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          // transition={{ transition }}
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
