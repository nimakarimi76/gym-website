import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = {
    type: "sp",
    duration: 3,
  };
  return (
    <div className="hero">
      <div className="blur hero-blur" />
      <div className="left-side">
        <Header />

        {/* The best add and the slider */}
        <div className="the-best-ad">
          <motion.div
            className="slider"
            initial={{ left: "158px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>The best club in the city</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Idead Body</span>
          </div>
          <span className="hero-description">
            In here we will help you to shape and build you ideal body and live
            your life to fullest
          </span>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+9k</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-side">
        <button className="btn">Join Now</button>

        <img src={hero_image} alt="hero_image" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "22rem" }}
          transition={{ ...transition, type: "tween", duration: 2 }}
          src={hero_image_back}
          alt="hero_image_back"
          className="hero_image_back"
        />

        {/* calories */}
        <div className="calories">
          <img src={calories} alt="hero_image" />
          <span>Easily manage your calories</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
